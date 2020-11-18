describe('index', () => {
	it('format name', async () => {
		jest.mock('../api')
		const { getName } = await import('..')

		expect(await getName()).toEqual('Mr.fake')
	})
})
