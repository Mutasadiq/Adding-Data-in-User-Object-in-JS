// Function Student 
function User(uName,dob,email,education,experience){
this.name=uName;
this.dob=dob;
this.email=email;
this.education=education;
this.experience=experience;
}

let option;
let uName=prompt("Enter the User Name");
let dobstring=prompt("Enter the Date of Birth in this format YYYY/MM/DD");
let dob=calculate_year(dobstring,null);
let uEmail;
// Email Checking 
do{
uEmail=prompt("Enter the email address");
if(uEmail.includes("@")){
    break;
}
else if(uEmail.includes(".com")){
    break;
}
else{
    confirm("Enter the correct email");
}
}while(true);

// Education Array 


let education=[];
do{
let degree=prompt("Enter the Degree");
let institute=prompt("Enter the Institue");
let cGPA=prompt("Enter cGPA");
education.push({degree,institute,cGPA});
option=prompt("Do you want to add the new Education If Yes press Y || y Else No press N || n")
}while(option=='Y'|| option=='y');

// Experience Array 
experience=[];
do{
    let company=prompt("Enter the Company Name");
    let designation=prompt("Enter the Desgination");
    let jod=prompt("Enter the Joining Date in this format YYYY/MM/DD");
    let lod=prompt("Enter the Leaving Date in this format YYYY/MM/DD");
    let experienceYear=calculate_year(jod,lod);
    experience.push({company,designation,jod,lod,experienceYear});
    option=prompt("Do you want to add the new Experience If Yes press Y || y Else No press N || n")
}while(option=='Y'|| option=='y');

let user=new User(uName,dob,uEmail,education,experience);
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