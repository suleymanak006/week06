
/* 1. Bas Harfleri Buyutme*/
let basharf = "halis alpin";
let isim = basharf.substr(0, 5);
let sonhal = isim.slice(1);
isim = isim.charAt(0).toUpperCase() + sonhal;
let soyad = basharf.substr(6);
sonhal = soyad.slice(1);
soyad = soyad[0].toUpperCase() + sonhal;

console.log("Basharf buyutme", isim + "  " + soyad);

/* 2. 0 dan 100 e kadar 10x10 luk bir kare seklinde yazdirma*/

let toplam = " ";
for (let index = 0; index < 101; index++) {
    toplam += index + " , ";
}
console.log(toplam.slice(0, toplam.lenght));


