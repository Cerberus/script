import { mock, override } from 'mock'

describe('report', () => {
	mock(__filename)

	it('getReport', async () => {
		const { getReport } = await import('..')
		expect(await getReport()).toEqual('Name: Mr.fake')
	})
	it('getReport 2', async () => {
		override('user/api', () => ({
			fetchName: () => Promise.resolve('fake 2'),
		}))
		const { getReport } = await import('..')
		expect(await getReport()).toEqual('Name: Mr.fake 2')
	})
})
