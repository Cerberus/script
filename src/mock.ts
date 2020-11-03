import * as glob from 'glob'

const mockPaths = glob.sync('src/**/__mocks__/*.ts*')

export const globalMock = () => {
	jest.resetModules()

	mockPaths
		.map(absoluteMockPath => {
			const mockPath = absoluteMockPath.replace('src/', '')
			const actualPath = mockPath.replace('/__mocks__', '')
			return [mockPath, actualPath]
		})
		.forEach(([mockPath, actualPath]) => {
			jest.mock(actualPath, () => require(mockPath))
		})
}
