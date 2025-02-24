// Nesneler (Objects)

// let kullanici = [
//     "Fatma Betül",
//     "Çiftci",
//     24
// ];

// Key - Value (Anahtar - Değer) İlişkisi

let kullanici1 = {
    "ad" : "Fatma Betül",
    "soyad" : "Çiftci",
    "yas" : 24,
    "adres" : {
        "sehir" : "Aksaray",
        "ilce" : "Merkez"
    },
    "hobiler" : ["sinema", "spor"]
};

let kullanici2 = {
    "ad" : "Nebahat",
    "soyad" : "Çiftci",
    "yas" : 55,
    "adres" : {
        "sehir" : "Aksaray",
        "ilce" : "Merkez"
    },
    "hobiler" : ["sinema", "spor"]
};

kullanıcılar = [kullanici1, kullanici2];    // Bu şekilde de kullanılabilir.

let sonuc;

sonuc = kullanici1;
sonuc = kullanici1["ad"];
sonuc = kullanici1.ad;   // Bu şekilde de kullanılabilir.

sonuc = kullanici1["soyad"];
sonuc = kullanici1["adres"]["sehir"];
sonuc = kullanici1.adres.ilce;
sonuc = kullanici1.hobiler[0];

sonuc = kullanıcılar[0].ad;

console.log(sonuc);