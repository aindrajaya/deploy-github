// import { tambah } from "./export-import"

const deretAngka = [1,2,3,4,5,6,7,8]
const [satu, dua, tiga, ...dataakhir] = deretAngka //destructuring dgn ...rest
console.log(satu, dua, tiga)
console.log(dataakhir)


