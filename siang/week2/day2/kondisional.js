/**
 * Logical Opeartor
 * 1. if
 * 2. if-else
 * 3. if-else-if
 * 
 * || OR
 * 
 */
// ||OR
console.log(true || true) //true
console.log(true || false) //true
console.log(false || true) //true
console.log(false || false) //false

// &&AND
console.log(true && true) //true
console.log(true && false) //false
console.log(false && true) //false
console.log(false && false) //false

// !NOT
const a = true
console.log(!a) // false

// IF - Conditionals
let apakahHujan = false;
let apakahLebat = true;
let jalanMacet = true

if(apakahHujan){
  console.log("bawa payung")
}

//IF - ELSE Conditionals
if(apakahHujan){
  console.log("bawa payung")
} else {
  console.log("gausah bawa payung")
}

//IF-ELSE-IF
if(apakahHujan){
  console.log("bawa payung")
} else if(apakahHujan && apakahLebat){
  console.log("ndak jadi keluar")
} else if(!apakahHujan || jalanMacet){
  console.log("keluar jalan kaki")
}



