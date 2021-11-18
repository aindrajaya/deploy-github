/*
Di dalam kurung mlenkung function dia ada menyediakan argument, argument ini dia bakal nerima yang namanya parameter
Perbedaan function deklrasi & arrow function yaitu si arrow function gabisa pakek keyword
*/

// Function Deklration
function cetakNama(nama, age){
	console.log(`nama saya ${nama}, umur ${age}`);
}

// cetakNama('Avi', 23);

const biodata1 = {
	nama: 'Mba aini',
	umur: 23
}

// Arrow Function
const cetakJodoh = (biodata) => {
	// console.log(biodata.nama);
	console.log(biodata.umur);
	console.log(`mas zain ternyata berjodoh dengan ${biodata.nama}`);
}

cetakJodoh(biodata1)
