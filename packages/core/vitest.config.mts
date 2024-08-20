/* eslint-disable import/no-unresolved, import/no-extraneous-dependencies */
import { defineConfig } from 'vitest/config';

export default defineConfig({
  test: {
    globals: true,
    include: ['**/*.spec.ts', '!**/*.e2e.spec.ts'],
  },
});
