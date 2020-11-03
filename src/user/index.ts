import { fetchName } from './api'

export const getName = async () => {
	const name = await fetchName()
	return 'Mr.' + name
}
