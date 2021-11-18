const name = "rudi";

function Hello(name){
  // console.log('HEllo world')
  for(let i = 1; i<5; i++){
    console.log(`Hello world ${name} ke -`+i)
  }
}

// console.log(Hello(name))
Hello(name)

//Countdown application
function countdown(i) {
  console.log(i);
  if (i <= 0) { //false
     return;
  } else {
     countdown(i -1); //recursive
  }
}
countdown(10); 

function computeFactorial(num) {
  let results = 1;

  for (let i = 2; i <= num; i++) {
    results = results * i;
  }

  return results;
}

console.log(computeFactorial(5)); 

function calculateFactorial(num) {
  if (num === 1) {
     return 1;
  } else {
     return num * calculateFactorial(num - 1);
  }
}
console.log(calculateFactorial(5)); 


let number = 5;
let itemPrice = 50000;
let data;

function removeItem(x){
  return data = number-x
}

function addItem(number){
  return itemPrice*number
}

console.log(addItem(5))
console.log(removeItem(2)) //klik 2 kali remove item
console.log(addItem(data))

