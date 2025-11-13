export default {
  testEnvironment: 'jsdom',
  roots: ['<rootDir>/src'],
  // Matches:
  // - Unit tests: src/features/**/__tests__/**/*.test.{ts,tsx}
  // - Integration tests: src/__tests__/integration/**/*.test.{ts,tsx}
  // - E2E tests: src/__tests__/e2e/**/*.test.{ts,tsx}
  testMatch: [
    '**/__tests__/**/*.test.{ts,tsx}',
    '**/?(*.)+(spec|test).{ts,tsx}'
  ],
  transform: {
    '^.+\\.(ts|tsx)$': '<rootDir>/jest-transformer.cjs',
  },
  moduleNameMapper: {
    '^@fullstackplain/shared$': '<rootDir>/../shared/src/index.ts',
    '\\.(css|less|scss|sass)$': 'identity-obj-proxy',
  },
  setupFilesAfterEnv: ['<rootDir>/src/setupTests.ts'],
  collectCoverageFrom: [
    'src/**/*.{ts,tsx}',
    '!src/**/*.d.ts',
    '!src/**/__tests__/**',
    '!src/main.tsx',
    '!src/vite-env.d.ts',
  ],
};
