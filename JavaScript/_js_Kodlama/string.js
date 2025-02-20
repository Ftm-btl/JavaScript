// String

var ad = 'Betül';
var soyad = 'Çiftci';
var yas = 24;
var sehir = 'Aksaray';

var mesaj = 'Benim Adım ' + ad + ' ve soyadım ' + soyad + '. ' + sehir + '\'da yaşıyorum.' + ' Emekliliğe ' + (65 - yas) + ' yılım kaldı.';

// Template string
mesaj = `Benim adım ${ad} ve soyadım ${soyad}. ${sehir}'da yaşıyorum. Emekliliğe ${65 - yas} yılım kaldı.`; 

console.log(mesaj);

//console.log(ad[0]); //B