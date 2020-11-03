import { globalMock } from 'mock'

describe('index', () => {
	afterEach(() => {
		globalMock()
	})
	it('format name', async () => {
		const { getName } = await import('..')

		expect(await getName()).toEqual('Mr.fake')
	})
	it('format custom name', async () => {
		jest.mock('../api', () => ({
			fetchName: jest.fn().mockResolvedValue('fake 2'),
		}))

		const { getName } = await import('..')

		expect(await getName()).toEqual('Mr.fake 2')
	})
	it('format name again', async () => {
		const { getName } = await import('..')

		expect(await getName()).toEqual('Mr.fake')
	})
})
