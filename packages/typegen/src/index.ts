#!/usr/bin/env node
import { existsSync, mkdirSync, writeFileSync } from 'fs';
import * as glob from 'glob';
import { compileFromFile } from 'json-schema-to-typescript';


export interface GenerateTypesOptions {
  sourcePattern: string;
  targetDir: string;
  referencesDir: string;
  bannerComment?: string;
}

export async function generateTypes({
  sourcePattern,
  targetDir,
  referencesDir,
  bannerComment = '',
}: GenerateTypesOptions) {
  if (!existsSync(targetDir)) {
    mkdirSync(targetDir, { recursive: true });
  }

  const sources = glob.sync(sourcePattern);
  console.log(`Generating ${sources.length} types from source schemas:`, {
    sources,
  });

  for (const source of sources) {
    try {
      const types = await compileFromFile(source, {
        cwd: referencesDir,
        additionalProperties: false,
        ignoreMinAndMaxItems: true,
        bannerComment,
      });
      const targetFileName =
        source.split('/').pop()?.replace('.json', '.ts') || '';

      console.log(`Writing types to ${targetDir}/${targetFileName}`);

      writeFileSync(`${targetDir}/${targetFileName}`, types);
    } catch (error) {
      console.error(`Error generating types from ${source}:`, error);

      console.log('Possible solutions', {
        '1': 'Check that the JSON schema is valid',
        '2': 'Check that all references are named and placed correctly',
        '3': 'Check that the JSON schema is not circular',
      });
    }
  }
}

// CLI usage
if (require.main === module) {
  // Simple CLI: node dist/index.js <sourcePattern> <targetDir> <referencesDir> [bannerFile]
  const [, , sourcePattern, targetDir, referencesDir, bannerFile] =
    process.argv;
  let bannerComment = `
/**
 * This file was automatically generated.
 * DO NOT MODIFY IT BY HAND. Instead, modify the source JSONSchema file,
 * and run 'pnpm generate:types' to regenerate this file.
*/
`;
  if (bannerFile) {
    try {
      // eslint-disable-next-line @typescript-eslint/no-require-imports
      bannerComment = require('fs').readFileSync(bannerFile, 'utf8');
    } catch (error) {
      console.error(`Error reading banner file ${bannerFile}:`, error);
      process.exit(1);
    }
  }

  // validate arguments
  if (!sourcePattern || !targetDir || !referencesDir) {
    console.error(
      'Usage: node dist/index.js <sourcePattern> <targetDir> <referencesDir> [bannerFile]',
    );
    process.exit(1);
  }

  generateTypes({ sourcePattern, targetDir, referencesDir, bannerComment });
}