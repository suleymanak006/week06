let hayvanlar = ["inek", "tavuk", "koyun", "domuz", "koyun", "inek", "tavuk"]
let toplam = 0;
let ayaksayisi = 0;
/*Hayvanlar arasindan bacaklari kullanilabilecek olanlar koyunlar ve inekler.*/

for (let index = 0; index < hayvanlar.length; index++) {

    if (hayvanlar[index] === "tavuk") {
        continue;
    }
    else if (hayvanlar[index] === "domuz") {
        continue;
    }
    else if (hayvanlar[index] === "inek") {
        ayaksayisi = 4;
    }
    else if (hayvanlar[index] === "koyun") {
        ayaksayisi = 4;
    }

    toplam = toplam + ayaksayisi;
}

console.log(toplam);

