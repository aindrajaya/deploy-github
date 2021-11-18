// Selection
// 2,7,4,1,5 > original
// 1,2,7,4,5 >p1 (2,7,4,1,5)
// 2,7,4,5 >p2 (2,7,4,5)
// 4,7,5 >p3 (7,4,5)
// 5,7 >p4 (7,5)
// 7 >p5 (7)

const data1 = [7,5,2]

const data = [3,7,2,4,1]

function selectionSort(arr) {
  // let arr = array.slice()
  // Only change code below this line
  for(let i=0; i < arr.length - 1; i++){
    //loop kedua => [7,5]
    let minIndex = i //index[1] = 7
    for(let j=i+1; j<arr.length; j++){
      if(arr[j]<arr[minIndex]){ //selection indexk
        minIndex=j
      }
    }
    [arr[i],arr[minIndex]] = [arr[minIndex], arr[i]] //pengurutan index
  }
  return arr;
  // Only change code above this line
}

console.log(data)
console.log(selectionSort(data))
console.log(data)

