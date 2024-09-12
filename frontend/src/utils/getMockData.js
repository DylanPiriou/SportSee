// Get the mock data depending of the id
export const getMockData = (id, data) => {
	const userData = data.find((user) => user.id === parseInt(id));
	if (!userData) {
		throw new Error(`No user found with id ${id}`);
	}
	return { data: userData };
};
