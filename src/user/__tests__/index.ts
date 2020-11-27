import { mock, override } from 'mock'

describe('user', () => {
	mock(__filename)

	it('format name', async () => {
		const { getName } = await import('..')

		expect(await getName()).toEqual('Mr.fake')
	})
	it('format name 2', async () => {
		override('user/api', () => ({
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
