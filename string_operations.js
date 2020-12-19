
/* 1. Bas Harfleri Buyutme*/
let basharf = "halis alpin";
let isim = basharf.substr(0, 5);
let sonhal = isim.slice(1);
isim = isim.charAt(0).toUpperCase() + sonhal;
let soyad = basharf.substr(6);
sonhal = soyad.slice(1);
soyad = soyad[0].toUpperCase() + sonhal;

console.log("Basharf buyutme", isim + "  " + soyad);

/* 2. 0 dan 100 e kadar 10x10 luk bir kare seklinde yazdirma */

let toplam = " ";

for (let index = 0; index < 101; index++) {
    toplam += index + " , ";
}
console.log(toplam.slice(0, toplam.lenght));

/* 3. 100`e kadar olan asal sayilari bulma */
let asalSayilar = " ";
for (let sayi = 2; sayi <= 100; sayi++) {
    if (sayi === 2 || sayi === 3)
        asalSayilar += sayi + " , ";
    else {
        for (let index = 2; index < Math.floor(Math.sqrt(sayi)) + 1; index++) {
            if (sayi % index === 0) {
                break;
            }
            else; {
                if (index === Math.floor(Math.sqrt(sayi)))
                    asalSayilar += sayi + " , ";
            }
        }
    }
}
console.log(asalSayilar);

/* 4. Kucuk, buyuk, ozel karakterler ve sayilardan olusan 8 ile 16 (hane) uzunluklari arasinda guvenli 50 adet sifre */





/* 5. Yildizlardan dik acili ucgen yapma*/
let yildiz = " ";
for (let index = 0; index < 10; index++) {
    yildiz += "*";
    console.log(yildiz);

}