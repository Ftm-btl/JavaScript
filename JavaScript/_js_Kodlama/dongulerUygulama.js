// Döngüler Uygulama

let sayilar = [3,5,7,8,12,23,45,66];

// 1- sayilar dizisindeki her bir sayının karesini yazdırınız:

for(let i=0; i< sayilar.length; i++)
{
    console.log(sayilar[i] *sayilar[i]);
}

// 2- sayiilar listesindeki hangi sayılar 5'in katıdır?

for(let i=0; i<sayilar.length;i++)
{
    if(sayilar[i] %5 == 0)
    {
        console.log(i);
    }
}

let i=0;
while(i < sayilar.length)
{
    i++
    if(sayilar[i] %5 == 0)
    {
        console.log(sayilar[i]);
    }
}

// 3- 50-100 arasındaki sayıları azalan şekilde yazdırınız.

for (let i=100; i>=50; i--){
    console.log(i);
}

//

let urunler = ["iphone 16", "samsung s25", "iphone 17", "samsung s26"];

// 4- urunler listesindeki tüm ürünlerin büyük harfe çeviriniz.

for(let i=0; i < urunler.length; i++)
{
    console.log(urunler[i].toUpperCase());
}

// 5- urunler listesinde içinde samsung kelimesi kaç yerde geçiyor.

let adet=0;
for(let i=0;i<urunler.length;i++)
{
    if(urunler[i].includes("samsung"))
    {
        adet++;
        // console.log(urunler[i]) //ürünlerin ismini yazdırır
    }
}
console.log(adet + " tane kelime bulundu"); //adetini yazdırır

//

let ogrenciler = [
    { "ad": "Yiğit", "soyad": "Bilgi", "notlar": [60,70,80]},
    {"ad": "Ada", "soyad": "Bilge", "notlar": [80,50,75]},
    {"ad": "Çınar", "soyad": "Turan", "notlar": [70,70,80]}
]

// 6- ogrenciler listesindeki her öğrencinin not ortalaması ve başarı durumunu yazdırınız.

let toplam_sinif  = 0; // 7. soru için eklendi
for( let i=0; i< ogrenciler.length; i++)
{
    let not_toplam=0;
    let adet=0;
    let ort=0;
    let basari="";

    for(let j=0; j< ogrenciler[i].notlar.length; j++)
    {
       not_toplam+= ogrenciler[i].notlar[j];
       adet++;
    }

    ort=not_toplam/adet;

    toplam_sinif += ort; //7. soru için eklendi

    if(ort>=50)
    {
        basari= "Başarılı";
    }
    else
    {
        basari= "Başarısız"
    }

    console.log(`${basari}: ${ogrenciler[i].ad} ${ogrenciler[i].soyad} isimli öğrencinin not ortalması ${ort}.`);

}

// 7- Tüm öğrencilerin not ortalaması nedir?

console.log("sınıf ortalaması: " + (toplam_sinif / ogrenciler.length));