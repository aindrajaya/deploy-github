// Fetch
// Function untuk membuat http request, bisa ambil, tambah, update, delete

// API KEY OMDB : 1c9d8a9e

const listData = document.getElementById("list-data");
const result = fetch(`https://www.omdbapi.com/?apikey=1c9d8a9e&s=Avengers`);
result
.then(res => res.json())
.then(dataJson => {
	console.log(dataJson);
	dataJson.Search.map(data => listData.append(data.Title))
})
.catch(err => console.log(err));
