import * as glob from 'glob'

import * as dependencyTree from 'dependency-tree'

import * as fs from 'fs'
import { shortPath, toRelativePath } from './mock'

const mockIdx = Object.fromEntries(
	glob.sync('src/**/__mocks__/*.ts*').map(mockPath => {
		return [mockPath.replace('__mocks__/', ''), mockPath]
	}),
)
const filenames = glob.sync('src/**/__tests__/*.ts*')

const cache = {}
const tree = filenames.reduce(
	(acc, filename) => {
		console.time(`${filename}\t`)
		const mockPaths = dependencyTree
			.toList({
				filename,
				directory: 'src',
				filter: path => path.indexOf('node_modules') === -1,
				tsConfig: require('../tsconfig.json'),
				visited: cache,
			})
			.map(toRelativePath)
			.reduce(
				(acc, relativePath) => {
					const mockPath = mockIdx[relativePath]
					if (mockPath) {
						acc.push(mockPath)
					}
					return acc
				},
				[] as string[],
			)
		console.timeEnd(`${filename}\t`)
		acc[shortPath(filename)] = mockPaths.map(shortPath)
		return acc
	},
	{} as Record<string, string[]>,
)

fs.writeFileSync(
	__dirname + '/cache.ts',
	`export const tree: Record<string, string[]> = JSON.parse(
	'${JSON.stringify(tree)}',
)
`,
)
