import { existsSync, mkdirSync, writeFileSync } from 'fs';
import * as glob from 'glob';
import { compileFromFile } from 'json-schema-to-typescript';

const BANNER_COMMENT = `
/**
 * This file was automatically generated.
 * DO NOT MODIFY IT BY HAND. Instead, modify the source JSONSchema file,
 * and run 'pnpm generate:types' to regenerate this file.
*/
`;
const SOURCE_PATTERN = './schemas/**/EJF_*.json';
const TARGET_DIR = './src/types/generated';
const REFERENCES_DIR = './schemas/references';

if (!existsSync(TARGET_DIR)) {
  mkdirSync(TARGET_DIR, { recursive: true });
}

const sources = glob.sync(SOURCE_PATTERN);
console.log(`Generating ${sources.length} types from source schemas:`, {
  sources,
});

sources.forEach(async (source) => {
  try {
    const types = await compileFromFile(source, {
      cwd: REFERENCES_DIR,
      additionalProperties: false,
      ignoreMinAndMaxItems: true,
      bannerComment: BANNER_COMMENT,
    });

    const targetFileName =
      source.split('/').pop()?.replace('.json', '.ts') || '';

    console.log(`Writing types to ${TARGET_DIR}/${targetFileName}`);

    writeFileSync(`${TARGET_DIR}/${targetFileName}`, types);
  } catch (error) {
    console.error(`Error generating types from ${source}:`, error);

    console.log('Possible solutions', {
      '1': 'Check that the JSON schema is valid',
      '2': 'Check that all references are named and placed correctly',
      '3': 'Check that the JSON schema is not circular',
    });
  }
});
