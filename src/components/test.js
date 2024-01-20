const url = 'https://moviesdatabase.p.rapidapi.com/titles/search/title/%7Banimal%7D?exact=true&titleType=movie';
const options = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': 'b87493f473msh008c90ebafea851p1e978ajsn6cb25bc814d4',
		'X-RapidAPI-Host': 'moviesdatabase.p.rapidapi.com'
	}
};

try {
	const response = await fetch(url, options);
	const result = await response.text();
	console.log(result);
} catch (error) {
	console.error(error);
}