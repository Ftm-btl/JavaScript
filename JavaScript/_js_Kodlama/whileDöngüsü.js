//While Döngüsü

// for(let i=0; i<=10;i++)
// {
//     console.log(i);
// }

let i=1;

while(i<=10)
{
    console.log(i);

    i++;
}

while(i<=10)
{
    if(i %2 == 0)
    {
        console.log(i);
    }
    
    i++;
}

while(i<=10)
{
    i++
    if(i %2 ==1)
    {
        continue;
    }
    console.log(i);
} //tek olan her sayıyı geçer ve çiftleri yazdırır

while(i<=10)
{
    i++

    if(i %2 == 1)
    {
        break;
    }

    console.log(i);
}
console.log("döngü bitti"); //break ile döngü dışına çıkıp bitiririz

do
{
    console.log(i);
    i++;
}
while(i<=10)