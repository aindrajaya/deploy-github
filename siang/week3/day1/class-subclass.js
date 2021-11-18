// const person = {
//   nama: "Rudi",
//   age: 22,
//   sedangKerja: false
// }

class Person {
  constructor(nm, ag, sdngKrja){
    //property (this), parameter(di dlm constructor)
    this.nama = nm,
    this.age = ag,
    this.sedangKerja = sdngKrja;
  }

  //method
  menyapa(){
    console.log(`Haloo nama saya ${this.nama}`)
  }
}

const Edi = new Person('Edi', 22, false)
console.log(Edi.nama)

//sub class - butuh extends utk mendapatkan property dari parent class
class Programmer extends Person {
  constructor(nma, ag, sdngKrja, bidangKerja, bahasaPemrograman){
    //untuk declare property pada class Programmer
    super(nma, ag, sdngKrja)
    this.bidangKerja = bidangKerja,
    this.bahasaPemrograman = bahasaPemrograman
  }
}

const Linus = new Programmer("Linus Torvards", 55, true, "Linux Founder", "C & Bash")
console.log(Linus.menyapa())



