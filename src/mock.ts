import { tree } from './cache'

export const shortPath = (path: string) => path.replace('src/', '')
export const toRelativePath = (path: string) =>
	path.replace(/(.+)\/src/g, 'src')

export const mock = (absolutePath: string) => {
	const relativePath = toRelativePath(absolutePath)
	beforeEach(() => {
		jest.resetModules()

		const mockPaths = tree[shortPath(relativePath)]

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
