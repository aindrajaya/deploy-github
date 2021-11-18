const data = [4,2,8,5,3]; //25 eksekusi
// data[0] = 4 // -> 1
// data[1] = 2 // -> 2
// data[2] = 8 // -> 4
// data[3] = 5 // -> 5
// data[4] = 1 // -> 8

// 4,8,2,5,1
// p1 = 2,4,8,5,1 = 1
// p2 = 2,4,5,8,1 = 2
// p3 = 2,4,5,1,8 = 4
// p4 = 2,4,1,5,8 = 3
// p5 = 2,1,4,5,8 = 2
// p6 = 1,2,4,5,8 = 1

function sortData(arr){
 let n = arr.length // 3
 //dia menentukan berapa kali proses pengurutan array
 for(let i = 0; i<arr.length; i++){
   //untuk menjalankan perbandingan secara looping di dalam array
   for(let j =0; j<n; j++){
     //untuk membandingkan mana yang lebih besar
     if(arr[j]>arr[j+1]){ //<- main logic dari bubble sort
      //di swap posisi indexnya
      [arr[j],arr[j+1]] = [arr[j+1], arr[j]]
     }
   }
   //untuk mengakhiri proses perulangan untuk perbandingan
   n--;
 }
 return arr
}

console.log(sortData(data))

