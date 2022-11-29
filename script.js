let userName=prompt("Մուտքագրեք ձեր անունը");
let userSurname=prompt("Մուտքագրեք ձեր ազգանունը");
const userAge=prompt("Մուտքագրեք ձեր տարիքը");

let person=(name,surName,age)=>{
 const obj={
name:userName.trim(),
surname:userSurname.trim(),
age:userAge
}
while(userName==""){
    userName=prompt("Անունը մուտքագրելն անպայման է")
}

while(userSurname==""||userSurname==null){
    userSurname=prompt("Ազգանունը մուտքագրելն անպայման է")
} 
if(isNaN(userAge)){
    return("Age դաշտում պետք է մուտքագրեք թիվ");
}

return obj;
}
let data=person(userName,userSurname,userAge);
console.log(data);