// Async/await
// Cara lain menghendle proses asyncronus dengan gaya syncronus
// METHOD
// GET = Ambil data, POST = Nambah data, PUT, PATCH = Update Data, DELETE = delete data
const reqData = async () => {
	try {
		const result = await fetch(
			`https://www.omdbapi.com/?apikey=1c9d8ae&s=Avengers&y=`
		);
		const resJson = await result.json();
		console.log(resJson);
	} catch(err){
		console.log(err);
	}
}

// async function addData(){
// 	const result = await fetch(
//     `https://www.omdbapi.com/?apikey=1c9d8a9e&s=Avengers&y=`
//   );
// }

reqData();
