// Note: index array mulai dari 0
const nilai1 = 5;
const nilai2 = 10;
const isMarried = true;
const hobby = ["Main Sosmed", "Coding", [1, 2, 3]];
let biodata = {
  nama: "Aini",
  umur: 23,
  isMarried: true,
  hobby: ["Catur", "Nonton Anime", "Futsal"],
  child: {
    nama1: "Iqbal",
    gender: true,
    hobby: {
      nama: "Berenang",
      waktu: "Weekend",
    },
  },
};

console.log(biodata.child.hobby.nama);
