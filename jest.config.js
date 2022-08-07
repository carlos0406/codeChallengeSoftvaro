module.exports = {
	testPathIgnorePatterns: ['/node_modules/'],
	transform: {
	  '^.+\\.(js|jsx|ts|tsx)$': '<rootDir>/node_modules/babel-jest'
	},
	moduleNameMapper: {
	  '\\.(scss|css|sass)': 'identity-obj-proxy'
	},
	setupFilesAfterEnv: ['<rootDir>/src/tests/setupTests.ts'],
	testEnvironment: 'jsdom',
	collectCoverage: true,
	collectCoverageFrom: [
	  'src/**/*.tsx',
	  '!src/**/*.spec.{tsx}',
	  '!src/**/App.tsx',
	  '!src/**/index.tsx'
	]
	// coverageReporters: ['lcov', 'json']
}
