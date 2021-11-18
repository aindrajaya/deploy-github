// // Promise
// // Object yang merepresentasikan keberhasilan / kegagalan sebuah event yang asyncronus di masa yang akan datang
// // Janji (terpenuhi / ingkar)
// // States (fullfield / rejected / pending)
// // Callback (resolve / reject / finally)
// // Aksi (then / catch)

// let ditepati = true;
// // Contoh 1

// const janji1 = new Promise((resolve, reject) => {
// 	if(ditepati){
// 		resolve("Janji di tepati")
// 	} else {
// 		reject("Janji di ingkari")
// 	}
// });

// janji1.then(res => console.log(res)).catch((err) => console.error(err));

// // Contoh 2

// const janji2 = new Promise((resolve, reject) => {
// 	if(ditepati){
// 		setTimeout(() => {
// 			resolve("Janji di tepati");
// 		}, 3000);
// 	} else {
// 		setTimeout(() => {
//       reject("Janji di ingkari");
//     }, 3000);
// 	}
// })

// console.log("Mulai");
// console.log(janji2.then(res => console.log(res)).catch((err) => console.error(err)));
// console.log("Selesai")

// Promise.all([janji1, janji2]).then(res => console.log(res)).catch((err) => console.log(err));


// console.log("Mulai");
// setTimeout(() => {
// 	console.log("Hi");
// }, 2000)
// console.log("selesai");

// Contoh 1

let ditepati = false;

// const janji1 = new Promise((resolve, reject) => {
// 	if(ditepati) {
// 		resolve("Janji di tepati");
// 	} else {
// 		reject("Janji di ingkari");
// 	}
// });

// janji1
// 	.finally(console.log("Janji telah selesai"))
// 	.then(res => console.log(res))
// 	.catch(res => console.log(res));

// Contoh 2
const janji2 = new Promise((resolve, reject) => {
	if(ditepati) {
		setTimeout(() => {
			resolve("Janji di tepati");
		}, 2000)
	} else {
		setTimeout(() => {
      reject("Janji di ingkari");
    }, 2000);
	}
});

console.log("Mulai");
janji2
	.then((res) => console.log(res))
  .catch((res) => console.log(res))
	.finally(console.log("Janji telah selesai"))
console.log("selesai")
