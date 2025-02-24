// Nesneler Uygulama

/* 
    1- Sipariş bilgilerini object içerisinde saklayınınız.
    2- Her siparişin ayrı ayrı kdv dahil toplam ödenen ücretini hesaplayınız. (kdv %20 )
    3- Tüm siparişlerin kdv dahil toplam ödenen ücretini hesaplayınız.

    sipariş id: 101
    sipariş tarihi: 31.12.2025
    ödeme şekli: kredi kartı
    kargo adresi: Yahya kaptan mah. konya meram
    satın alınan ürünler:
        ürün id: 5
        ürün başlığı: Iphone 16 Pro
        ürün url: http://xyx.com/iphone-16-pro
        ürün fiyati: 75000

        ürün id: 6
        ürün başlığı: Samsung S21
        ürün url: http://xyx.com/samsung-s21    
        ürün fiyati: 65000  
    mişteri:
        müşteri id: 12
    
    siparii id: 102
    sipariş Tarihi: 30.11.2025
    ödeme şekli: kredi kartı
    kargo adresi: cengiz topel cad. no:45 izmit
    satın alınan ürünler:
        ürün id: 10
        ürün başlığı: Xiaomi Note 10
        ürün url: http://xyx.com/xiaomi-note-10
        ürün fiyati: 45000

    müşteri:
        müşteri id: 12    
*/

let siparis1 = {
    "id": 101,
    "musteri_id": 12,
    "tarih": "31.12.2025",
    "odeme_sekli": "kredi kartı",
    "kargo_adresi": {
        "mahalle": "Yahya kaptan mah.",
        "sehir": "Konya",
        "ilce": "Meram"
    },
    "urunler": [
        {
            "urun_id": 5,
            "urun_adi": "Iphone 16 Pro",
            "urun_url": "http://xyx.com/iphone-16-pro",
            "urun_fiyati": 75000
        },
        {
            "urun_id": 6,
            "urun_adi": "Samsung S21",
            "urun_url": "http://xyx.com/samsung-s21 ",
            "urun_fiyati": 65000
        }
    ]
}
let siparis2 = {
    "id": 102,
    "musteri_id": 12,
    "tarih": "30.11.2025",
    "odeme_sekli": "kredi kartı",
    "kargo_adresi": {
        "mahalle": "Cengiz Topel",
        "sehir": "Kocaeli",
        "ilce": "İzmit" 
    },
    "urunler": [
        {
            "urn_id": 10,
            "urun_adi": "Xiaomi Note 10",
            "urun_url": "http://xyx.com/xiaomi-note-10",
            "urun_fiyati": 45000
        }        
    ]
}

let siparis1_toplam = (siparis1.urunler[0].urun_fiyati + siparis1.urunler[1].urun_fiyati) * 1.2;
let siparis2_toplam = siparis2.urunler[0].urun_fiyati * 1.2;

console.log(siparis1_toplam);
console.log(siparis2_toplam);

let toplam_siparis = siparis1_toplam + siparis2_toplam;

console.log(toplam_siparis);

let siparisler= [ siparis1, siparis2 ];