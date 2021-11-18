//object
const human = {
  nama:"rudi",
  umur: 27,
  fungsiBerkenalan: function Hello(){
    return `hallo nama saya ${this.nama}`
  }
}

//object prototype -> blueprint untuk mencetak object/data object
function UserPembeli(
  nama, 
  email,
  saldo
  ){
  // key dan value => properties
  this.nama = nama, //
  this.email = email,
  this.saldo = saldo
}

//object1
const udsf0safblk3 = new UserPembeli(
  "Mas Diqo", 
  "diqo@mail.com", 
  100000000
  )

//object2
const safa8sdpfaks = new UserPembeli(
  "Mas Reza", 
  "reza@mail.com", 
  150000000
  )

//object3
const safasdf8o0wa = new UserPembeli(
  "Mas Anhar", 
  "anhar@mail.com", 
  500000000
  )


//Array
const daftarPembeli = [
  udsf0safblk3.nama, //index-0
  safa8sdpfaks.nama, //index-1
  safasdf8o0wa.nama  //index-2
]
// document.getElementById("demo").innerHTML = daftarPembeli.sort();

// console.log(daftarPembeli[0].nama+" object pertama") //error, karena object tidak bisa dikonversi ke bentuk string

// console.log(daftarPembeli.length)
//1. Create (C)
const cars = [
  "Saab", 
  "Volvo", 
  "BMW",
  "Toyota",
  "Suzuki",
  "Honda",
  "Ford"
];


//2. Read (R)
console.log(cars)
// document.getElementById("cars").innerHTML = cars

//3. Update (U) -> datanya berubah
//add, change, replace
console.log(cars.reverse())

let simpleArray = ['one', 2, 'three', true, false, undefined, null];
console.log(simpleArray)
//4. Delete (D)
