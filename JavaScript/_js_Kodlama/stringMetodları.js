// String Metodları

var kursAdi = "Komple Uygulamalı Web Geliştirme Eğitimi";
var sonuc;

sonuc = kursAdi.toLowerCase(); // Küçük harfe çevirir
sonuc = kursAdi.toUpperCase(); // Büyük harfe çevirir
sonuc = kursAdi.length; // Karakter sayısını verir
sonuc = kursAdi[0];
sonuc = kursAdi.slice(0, 5); // 0. karakterden başla 5. karaktere kadar al
sonuc = kursAdi.slice(10); // 10. karakterden başla sonuna kadar al
sonuc = kursAdi.slice(-5); // Son 5 karakteri al
sonuc = kursAdi.slice(-10,-5); // Son 10 karakterden başla son 5 karaktere kadar al

sonuc = kursAdi.substring(0,6); // 0. karakterden başla 6. karaktere kadar al
sonuc = kursAdi.substring(10); // 10. karakterden başla sonuna kadar al

sonuc = kursAdi.replace("Eğitimi", "Kursu"); // Eğitimi kelimesini Kursu ile değiştir

sonuc = kursAdi.trim(); // Başındaki ve sonundaki boşlukları siler
sonuc = kursAdi.trimEnd(); // Sonundaki boşlukları siler
sonuc = kursAdi.trimStart(); // Başındaki boşlukları siler  

sonuc = kursAdi.indexOf("Web"); // Aranan kelimenin başlangıç indexini verir
sonuc = kursAdi.split(" "); // Boşluk ile ayırarak diziye çevirir
sonuc = kursAdi.split(" ")[1]; // Boşluk ile ayırarak 2. elemanı alır

console.log(sonuc);