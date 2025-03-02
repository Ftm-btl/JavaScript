// If/Else Uygulamaları

// 1- Bir sayının 50-100 arasında olup olmadığını kontrol ediniz.

let sayi = 75;

if (sayi >= 50 && sayi <= 100){
    console.log("Sayı 50-100 arasında");
}
else
{
    console.log("sayı 50-100 arasında değildir");
}

// 2- Bir sayını pozitif çift sayı olup olmadığını kontrol ediniz.

let sayi1=74;

if(sayi1%2 == 0 && sayi1 > 0){
    console.log("sayi pozitif çift sayıdır.");
}
else
{
    console.log("sayı pozitif çift sayı değildir");
}

// 3- x,y,z sayılarının büyüklük karşılaştırmasını yapınız. (else if kullanınız)

let x=10, y=50, z=30;

if (x > y && x > z){
    console.log("x en büyük");
}
else if (y > x && y > z){
    console.log("y en büyük");
}
else{
    console.log("z en büyük");
}


// 4- 2 vize (%40) ve 1 final (%60) notuna göre ortalama hesaplayınız.

  let vize1 = 30;
  let vize2 = 20;
  let final = 70;
  
  // a- Eğer ortalma 50 ve üstündeyse geçti değilse kaldı yazdırın.
 
  let ort=((((vize1+vize2) / 2) * 0.4) + (final * 0.6));

  console.log(ort);

  if(ort >= 50){
    console.log("geçti");
  }
  else{
    console.log("kaldı");
  }

  // b- Geçmek için ortalama 50 bile olsa final notu en az 50 olmalıdır.
  if(ort >= 50 && final >= 50){
    console.log("geçti");
  }
  else{
    console.log("kaldı");
  }

  // c- Finalden 70 alındığında ortalama 50 altında olsa bile geçti sayılsın.
  if(ort >= 50 || final >= 70){
    console.log("geçti");
  }
  else{
    console.log("kaldı");
  }