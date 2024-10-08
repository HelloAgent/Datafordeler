import { config } from 'dotenv';
import { defineConfig } from 'vitest/config';

config({ path: '../../.env' });

export default defineConfig({
  test: {
    globals: true,
    include: ['**/*.e2e.spec.ts'],
  },
});
