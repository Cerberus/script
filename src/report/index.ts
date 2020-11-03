import { getName } from 'user'

export const getReport = async () => {
	const name = await getName()
	return 'Name: ' + name
}
