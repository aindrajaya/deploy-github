const data = [1,2,3,4,5]
const dataAwal = [...data, 3,4,5]
const dataLagi = [2,3,4,6]
const gabung = data.concat(dataLagi)
const campur = [dataAwal, dataLagi]
const campuran = [...dataAwal, ...dataLagi]
console.log(campuran)
console.log(dataAwal)
console.log(campur)
console.log(gabung)

const a = {
  ...dataAwal
}

console.log(a)