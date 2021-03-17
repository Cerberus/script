export const shortPath = (path: string) => path.replace('src/', '')
export const toRelativePath = (path: string) =>
	path.replace(/(.+)\/src/g, 'src')

export const mock = (absolutePath: string) => {
	const relativePath = toRelativePath(absolutePath)
	beforeEach(() => {
		jest.resetModules()
		// @ts-ignore for running yarn setup:cache faster
		const mockPaths = (TREE as Record<string, string[]>)[
			shortPath(relativePath)
		]

		mockPaths
			.map(mockPath => {
				const actualPath = mockPath.replace('/__mocks__', '')
				return [mockPath, actualPath]
			})
			.forEach(([mockPath, actualPath]) => {
				jest.mock(actualPath, () => require(mockPath))
			})
	})
}

export const override = (path: string, fn: () => Record<string, any>) => {
	const mockpath = path.replace(/\/(\w+)$/, '/__mocks__/$1')
	jest.mock(path, () => ({
		...require(mockpath),
		...fn(),
	}))
}
