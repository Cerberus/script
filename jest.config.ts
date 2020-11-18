import { Config } from '@jest/types'

const config: Partial<Config.InitialOptions> = {
	preset: 'ts-jest',
	roots: ['<rootDir>/src'],
	testEnvironment: 'node',
	globals: {
		'ts-jest': {
			isolatedModules: true,
		},
	},
	moduleDirectories: ['node_modules', 'src'],
	setupFilesAfterEnv: ['<rootDir>/src/setupTests.ts'],
}

export default config
