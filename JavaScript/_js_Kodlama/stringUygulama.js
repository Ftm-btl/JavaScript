//String Uygulamaları

let url ="https://www.sadikturan.com";
let kursAdi = "Komple Web Geliştirme Kursu";

// 1- url kaç karakterlidir ?

let sonuc;
sonuc = url.length;

// 2- kursAdi kaç kelimeden oluşmaktadir?

sonuc = kursAdi.split(" ").length;

// 3- url https ile mi başlıyor?

sonuc = url.startsWith("https");

// 4- kursAdi içerisinde 'Eğitimi' kelimesi var mı?

sonuc = kursAdi.indexOf("Eğitimi"); // -1 dönerse yoktur, 0 veya daha büyük bir değer dönerse vardır.

// 5- url ve kursAdi değişkenlerini kullanarak aşağıdaki string bilgiyi oluşturunuz
// "https://www.sadikturan.com/komple-web-gelistirme-kursu" 

kursAdi = kursAdi.toLowerCase();
kursAdi = kursAdi.replaceAll(' ','-');
kursAdi = kursAdi.replace('ş','s');
sonuc = `${url}/${kursAdi}`;



console.log(sonuc);