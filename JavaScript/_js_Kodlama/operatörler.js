// Operatörler

let sonuc;
let a=10, b=10, c=20;

// 1- Aritmetik Operatörler
sonuc = (a + b); // toplama
sonuc = (a - b); // çıkarma
sonuc = (a * b); // çarpma
sonuc = (a / b); // bölme
sonuc = (a % b); // mod alma
sonuc = a++; // a'nın değerini 1 arttır önce işlem yap sonra arttır
sonuc = ++a; // a'nın değerini 1 arttır önce arttır sonra işlem yap
sonuc = a--; // a'nın değerini 1 azalt


// 2- Atama Operatörleri
sonuc = a;
sonuc = a + b;
sonuc = a + sonuc; // a = a + sonuc
sonuc += a; // sonuc = sonuc + a  
sonuc -= a; // sonuc = sonuc - a
sonuc *= a; // sonuc = sonuc * a
sonuc /= a; // sonuc = sonuc / a
sonuc %= a; // sonuc = sonuc % a

// 3- Karşılaştırma Operatörleri
sonuc = (a == b); // eşit mi, true
sonuc = (a == c); // false
somuc = (a != b); // eşit değil mi, false
sonuc= (2==2); // true
sonuc = (2 == "2"); // true
sonuc = (2 === "2"); // değer ve tip eşit mi, false
sonuc = (a > b); // büyük mü, false
sonuc = (a <= b); // küçük mü, true


console.log(sonuc); 