module.exports = {
	testPathIgnorePatterns: ['/node_modules/'],
	transform: {
	  '^.+\\.(js|jsx|ts|tsx)$': '<rootDir>/node_modules/babel-jest'

	},
	moduleNameMapper: {
	  '\\.(scss|css|sass)': 'identity-obj-proxy',
	  "\\.(jpg|jpeg|png|gif|eot|otf|webp|svg|ttf|woff|woff2|mp4|webm|wav|mp3|m4a|aac|oga)$": "<rootDir>/fileMock.ts"
	},
	setupFilesAfterEnv: ['<rootDir>/src/tests/setupTests.ts'],
	testEnvironment: 'jsdom',
	collectCoverage: true,
	collectCoverageFrom: [
	  'src/**/*.tsx',
	  '!src/contexts/*.tsx',
	  '!src/**/*.spec.{tsx}',
	  '!src/**/App.tsx',
	  '!src/**/index.tsx'
	]
	// coverageReporters: ['lcov', 'json']
}
