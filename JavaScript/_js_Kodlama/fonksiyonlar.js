// Fonksiyonlar


function selamlama(mesaj) //değişken ismi yazılır
{
    console.log(mesaj); 
}

selamlama("merhaba"); // fonksiyon bu şekilde çağırılır
selamlama("selam");

function yasHesaplama(dogumYili)
{
    let simdi = new Date().getFullYear();
    console.log(simdi - dogumYili);
}

yasHesaplama(2001);
yasHesaplama(2000);