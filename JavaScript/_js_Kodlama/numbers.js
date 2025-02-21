// Numbers

let sonuc;

sonuc = 10;
sonuc ="10";
sonuc = Number("10"); // 10
sonuc = parseInt("10.7"); // 10
sonuc = parseFloat("10.7"); // 10.7
sonuc = parseInt("10a"); // 10
sonuc = parseInt("a10"); // NaN

sonuc = isNaN("a10"); // false - is not a number?
sonuc = Number.isInteger(10.5); // 10 true 10.5 false

let sayi = 10.12345;
sonuc=sayi.toPrecision(5); // 10.123
sonuc = sayi.toFixed(2); // 10.12

sonuc = Math.round(2.4); // 2.5 -> 3
sonuc = Math.ceil(2.1); // 3
sonuc = Math.floor(2.9); // 2
sonuc = Math.sqrt(16); // 4
sonuc = Math.pow(2,4); // 16
sonuc = Math.min(0,150,30,20,-8,-200); // -200
sonuc = Math.max(0,150,30,20,-8,-200); // 150
sonuc = Math.random(); // 0-1 arasında rastgele sayı
sonuc = Math.random() * 20; // 0-20 arasında rastgele sayı
sonuc = Math.random() * 20 + 1; // 1-21 arasında rastgele sayı

sonuc = Math.floor(Math.random() * 20 + 1); // 1-20 arasında rastgele sayı

console.log(typeof sonuc);
console.log(sonuc);