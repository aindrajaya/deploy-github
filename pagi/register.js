// const nama = prompt("Masukan nama");
// const umur = prompt("Masukan umur");

// console.log(typeof(nama), typeof(umur));

// switch (nama) {
//   case "Raihan":
//     alert("Raihan");
//     break;
//   case "Santoso":
//     alert("Santoso");
//     break;
//   default:
//     alert("Unknown");
// }

// function register(name, age){		
// 	if(name !== "Santoso"){
// 		alert("Oke, name invalid!");
// 	} else if(age !== "30"){
// 		alert("Oke, age invalid!");
// 	} else {
// 		return `Selamat! pendaftaran kamu berhasil ${name}. Data diri kamu : ${name}, ${age}`;
// 	}
// }

// const result = register(nama, umur);
// alert(result);

// console.log(nama)

// const dataKambing = ['Kambing 1', 'Kambing 2', 'Kambing 3', 'Kambing 4', 'Kambing 5'];

// // dataKambing.pop();

// dataKambing.map((data, i, copy) => {
// 	console.log(data);
// 	// copy.push("ok");
// 	// console.log(copy);
// 	// console.log(data);
// })

// console.log(dataKambing);

// function listKambing(data){
// 	for(let i = 1; i >= data.length; i--){
// 		// console.log(i);
// 		console.log(data[i]);
// 	}
// }

// let i = 5;

// while(i >= 0){
// 	console.log(dataKambing[i]);
// 	i--;
// }


// do {
// 	console.log(i);
// 	i++;
// } while(i <= 5)

// listKambing(dataKambing);

// Class,

function Biodata(nama, umur, alamat){
	this.name = nama;
	this.umur = umur;
	this.alamat = alamat;
}

const resultBiodata = new Biodata('Raihan', 30, 'Indonesia');

console.log(resultBiodata.name)