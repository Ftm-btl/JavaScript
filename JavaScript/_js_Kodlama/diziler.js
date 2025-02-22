// Diziler

// let urun1="Iphone 15";
// let urun2="Iphone 16";
// let urun3="Iphone 17";

let urunler = ["Iphone 15", "Iphone 16", "Iphone 17"];
let fiyatlar = [ 50000, 60000, 70000];
let renkler = ["gold", "silver", "black"];

let sonuc; 

sonuc = `${urunler[0]} - ${fiyatlar[0]} - ${renkler[0]}`; // Iphone 15
sonuc = `${urunler[1]} - ${fiyatlar[1]} - ${renkler[1]}`; // Iphone 16
sonuc = `${urunler[2]} - ${fiyatlar[2]} - ${renkler[2]}`; // Iphone 17

let urun1 = [
    "Iphone 15", 
    50000, 
    ["gold", "silver", "black"]
];
let urun2 = ["Iphone 16", 60000, "silver"];
let urun3 = ["Iphone 17", 70000, "black"];

sonuc = `${urun1[0]} - ${urun1[1]} - ${urun1[2][0]}`; // Iphone 15
// sonuc = `${urun2[0]} - ${urun2[1]} - ${urun2[2]}`; // Iphone 16
// sonuc = `${urun3[0]} - ${urun3[1]} - ${urun3[2]}`; // Iphone 17

// güncelleme

urun1[0] = "Iphone 15 Pro";

sonuc = `${urun1[0]} - ${urun1[1]} - ${urun1[2][0]}`; // Iphone 15


console.log(sonuc);