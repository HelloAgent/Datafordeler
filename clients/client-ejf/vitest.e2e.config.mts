/* eslint-disable import/no-unresolved, import/no-extraneous-dependencies */
import { config } from 'dotenv';
import { defineConfig } from 'vitest/config';

config({ path: '../../.env' });

export default defineConfig({
  test: {
    globals: true,
    include: ['**/*.e2e.spec.ts'],
  },
});
