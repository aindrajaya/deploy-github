//Map
const arr = [1,2,3,4,5,6,7,8,9]
const tambah = arr.map(a => a*2+` data sudah ditambah string dan ini array ke- ${a}`)
/**
 * Melakukan 5x proses (jika data array ada 5)
 * a => 1*2
 * a => 2*2
 * a => 3*2
 * a => 4*2
 * ...
 * ...
 */
console.log(tambah)

//Filter
const filterLebihDari10 = tambah.filter(a => a>10)
console.log(filterLebihDari10)

//Find
const cariAngka16 = filterLebihDari10.find(a => a >9);
console.log(cariAngka16)

const b = [3, 3, 4 ,5,6]
const cariAngka3 = b.filter(b => b>3)
const findLebih3 = b.find(b=> b>3)
console.log(cariAngka3, findLebih3)