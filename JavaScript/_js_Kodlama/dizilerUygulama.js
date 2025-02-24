// Diziler Uygulama

// 1- "Kiraz, Karpuz, Kavun, Erik" elemanlarına sahip bir dizi oluşturun.

let meyveler=["Kiraz", "Karpuz", "Kavun", "Erik"];


// 2- Dizi kaç elemanlıdır?

let sonuc;
sonuc = meyveler.length;

// 3- Dizinin ilk ve son elemanını yazdırınız.

sonuc = meyveler[0];
sonuc = meyveler[meyveler.length-1];

// 4- Kavun dizinin bir elemanı mıdır?

sonuc = meyveler.includes("Kavun");

// 5- Çilek elemanını dizinin sonuna ekleyiniz.

sonuc = meyveler.push("Çilek");
//meyveler[meyveler.length] = "Çilek";

// 6- Dizinin son iki elemnaını siliniz.

//sonuc = meyveler. pop();
//sonuc = meyveler. pop();

sonuc = meyveler.splice(meyveler.length-2,2);   // 2 eleman siler

console.log(sonuc);

/* 7- Aşağıda ki bilgileri bir dizide saklayınzı ve 
her öğrencinin yaşını ve not ortalamsını hesaplayınız.

öğrenci 1= Yiğit Bilgi 2010 [60,90,80]
öğrenci 2= Ada Bilgi 2012 [70,80,80,]
öğrenci 3= Çınar Turan 2017 [60,50,80]
*/


let ogrenci1=[
    "Yiğit", 
    "Bilgi", 
    2010, 
    [60,90,80]
];

let ogrenci2=[
    "Ada", 
    "Bilgi", 
    2012, 
    [50,80,80]
];

let ogrenci3=[
    "Çınar", 
    "Turan", 
    2017, 
    [60,50,80]
];

let ogreniciler= [ogrenci1, ogrenci2, ogrenci3];

// yaş
console.log(2025- ogrenci1[2]);
console.log(2025- ogrenci2[1][2]); // 2. elemanın 3. elemanı
console.log(2025- ogrenci3[2]); 

// not
let yigit_not=(ogrenci1[3][0]+ogrenci1[3][1]+ogrenci1[3][2])/3;
let ada_not=(ogrenci2[3][0]+ogrenci2[3][1]+ogrenci2[3][2])/3;
let cinar_not=(ogrenci3[3][0]+ogrenci3[3][1]+ogrenci3[3][2])/3;

console.log(yigit_not, ada_not, cinar_not);

