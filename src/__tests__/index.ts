describe('index', () => {
	it('add', () => {
		const { add } = jest.requireActual<typeof import('..')>('..')
		add(1, 2) /*?*/
	})
})
