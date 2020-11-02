import { Config } from '@jest/types'

const config: Partial<Config.InitialOptions> = {
	preset: 'ts-jest',
	testEnvironment: 'node',
	globals: {
		'ts-jest': {
			isolatedModules: true,
		},
	},
	moduleDirectories: ['node_modules', 'src'],
}

export default config
