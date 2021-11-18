//OBJECT

const a = "string" //primitive -> 
const car = { //type data non-primitive/ objects
  nama : "toyota",
  roda : 2,  
  getName : function getName(){
    return this.nama //this. ini mereferensi object induknya/ object yg membungkus property tersebut
  }
}

//data structure object
function AddCar(name, roda){
  this.name = name,
  this.roda = roda
  this.getInfo = function getInfo(){
    return `Kendaraan ini namanya ${name}, dan memiliki ${roda} roda`
  }
}

let Car1 = new AddCar("toyota", 4)
console.log(Car1.name)
console.log(Car1.getInfo())


// console.log(car.getName())

// const c = 1;
// console.log(typeof(c)) //number
// console.log(typeof(toString(c))) //string
// console.log(typeof(c)) //number
