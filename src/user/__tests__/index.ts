describe('index', () => {
	it('format name', async () => {
		const { getName } = await import('..')

		expect(await getName()).toEqual('Mr.fake')
	})
})
