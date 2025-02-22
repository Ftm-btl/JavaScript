// Dizi Metodları

let ogrenciler = ["Çınar", "Aslı", "Eda"]

let sonuc;

sonuc = ogrenciler.length; // 3
sonuc = ogrenciler.toString(); // Çınar,Aslı,Eda
sonuc = ogrenciler.join(" - "); // Çınar - Aslı - Eda

// eleman silme

sonuc = ogrenciler.pop(); // son elemanı siler
sonuc = ogrenciler.shift(); // ilk elemanı siler

// eleman ekleme
sonuc = ogrenciler.push("Emel"); // sona ekler
sonuc = ogrenciler.unshift("Emre"); // başa ekler

// eleman arama
sonuc = ogrenciler.indexOf("Aslı"); // baştan başa doğru arar
sonuc = ogrenciler.lastIndexOf("Aslı"); // sondan başa doğru arar
sonuc = ogrenciler.includes("Aslı"); // var mı yok mu

// silme ekleme
sonuc = ogrenciler.splice(1,1); // 1.indexten itibaren 1 eleman sil 
sonuc = ogrenciler.splice(1,0,"Merve"); // 1.indexten itibaren 0 eleman sil ve yerine Merve ekle

console.log(sonuc);
console.log(ogrenciler);