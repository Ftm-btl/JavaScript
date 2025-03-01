//If Else Statametns
 const firstName = "Betül";
    const age = 24;
    const isStudent = false;
    const school = "university";

if(firstName === "Betül"){
    console.log("Merhaba Betül");
}

if(age === 24){
    console.log("Yaşınız 24");
}

if(isStudent){
    console.log("Merhaba öğrenci");
}
else{
    console.log("Merhaba işler nasıl?");
}


if((age>=18) || (school==="highschool")){

    if(school === "university"){
        console.log("Ehliyet alabilirsiniz");
    }
    else{
        console.log("Eğitim durumunuz yeterli değil");
    }

    
}
else{
    console.log("Ehliyet alamazsınız");
}

if(age>0 && age<12){
    console.log(`${firstName} is a child`);
}
else if(age>=13 && age<=19){
    console.log(`${firstName} is a teenager`);
}
else{
    console.log(`${firstName} is an adult`);
}

//undefined kontrolü

if(typeof id !== "undefined"){
    console.log("id: "+id);
}
else{
    console.log("no id");
}