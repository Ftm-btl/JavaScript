/* 
    1-iki öğrencinin aşağıdaki bilgilerini değişkenler içerisinde saklayınız.

      öğrenci 1:
         isim : Fatma Betül
         doğum tarihi : 2001
         matematik notları : 40, 80, 85

      öğrenci 2:
         isim : Nebahat
         doğum tarihi : 2000
         matematik notları : 80, 85, 90 
    2-öğrencilerin yaş bilgilerini değişkende tutunuz.
    3-öğrencilerin ders ortalama notlarını değişkende saklayınız.
    4-öğrencilerin 50 geçme notuna göre başarı durumlarını değişkende saklayınız 
*/    

var ogrenci1_Adi = 'Fatma Betül';
var ogrenci1_DogumTarihi = 2001;
var ogrenci1_yas=2025-2001;
var ogrenci1_MatematikNotlari = [40, 80, 85];
var basarilimi = (ogrenci1_MatematikNotlari[0] + ogrenci1_MatematikNotlari[1] + ogrenci1_MatematikNotlari[2]) / 3 >= 50;
var ortalama= (ogrenci1_MatematikNotlari[0] + ogrenci1_MatematikNotlari[1] + ogrenci1_MatematikNotlari[2]) / 3;

console.log(ogrenci1_Adi + " " + ogrenci1_yas +" "+ortalama+ " "+ basarilimi);

var ogrenci2_Adi = 'Nebahat';
var ogrenci2_DogumTarihi = 2000;
var ogrenci2_yas=2025-2000;
var ogrenci2_MatematikNotlari = [80, 85, 90];
var basarilimi = (ogrenci2_MatematikNotlari[0] + ogrenci2_MatematikNotlari[1] + ogrenci2_MatematikNotlari[2]) / 3 >= 50;
var ortalama= (ogrenci2_MatematikNotlari[0] + ogrenci2_MatematikNotlari[1] + ogrenci2_MatematikNotlari[2]) / 3;

console.log(ogrenci2_Adi + " " + ogrenci2_yas + " " +ortalama+ " " + basarilimi);