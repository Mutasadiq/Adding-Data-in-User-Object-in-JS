let user={};
let option;
user.name=prompt("Enter the User Name");
let dobstring=prompt("Enter the Date of Birth in this format YYYY/MM/DD");
user.dob=calculate_year(dobstring,null);
do{
user.email=prompt("Enter the email address");
if(user.email.includes("@")){
    break;
}
else if(user.email.includes(".com")){
    break;
}
else{
    confirm("Enter the correct email");
}
}while(true);
// Education Array 


user.education=[];
do{
let degree=prompt("Enter the Degree");
let institute=prompt("Enter the Institue");
let cGPA=prompt("Enter cGPA");
user.education.push({degree,institute,cGPA});
option=prompt("Do you want to add the new Education If Yes press Y || y Else No press N || n")
}while(option=='Y'|| option=='y');
user.experience=[];
do{
    let company=prompt("Enter the Company Name");
    let designation=prompt("Enter the Desgination");
    let jod=prompt("Enter the Joining Date in this format YYYY/MM/DD");
    let lod=prompt("Enter the Leaving Date in this format YYYY/MM/DD");
    let experienceYear=calculate_year(jod,lod);
    user.experience.push({company,designation,jod,lod,experienceYear});

    option=prompt("Do you want to add the new Experience If Yes press Y || y Else No press N || n")
}while(option=='Y'|| option=='y');

console.log(user);
//console.log(user.name);

// funtion Year Convert 
function calculate_year(setStrDate,newStrDate){
   let strDate;
   let newDate;
    strDate=new Date(setStrDate);
    if(newStrDate==null || newStrDate==""){
      newDate=new Date();
    }
    else{
        newDate=new Date(newStrDate);
    }
    return (newDate.getFullYear()-strDate.getFullYear());
}
