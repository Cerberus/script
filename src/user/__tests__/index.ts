import { mock } from 'mock'

describe('index', () => {
	mock(__filename)

	it('format name', async () => {
		const { getName } = await import('..')

		expect(await getName()).toEqual('Mr.fake')
	})
	it('format name 2', async () => {
		jest.mock('../api', () => ({
			fetchName: () => Promise.resolve('fake 2'),
		}))
		const { getName } = await import('..')
		expect(await getName()).toEqual('Mr.fake 2')
	})
	it('format name again', async () => {
		const { getName } = await import('..')

		expect(await getName()).toEqual('Mr.fake')
	})
})
