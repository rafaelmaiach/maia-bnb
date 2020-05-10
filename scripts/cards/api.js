const API_URL = 'https://api.sheety.co/30b6e400-9023-4a15-8e6c-16aa4e3b1e72';

function housesService(api) {
	return fetch(api);
};

async function fetchData() {
	try {
		const response = await housesService(API_URL);
		const result = await response.json();
		return result;
	} catch (error) {
		console.log(error);
	}
}

export default fetchData;
