'use strict';



let allEmployees = [];

let form=document.getElementById("the form");

let information = document.getElementById("card");




function Employees(EmployeeID,Fullname,Department,Level,image)
{
this.EmployeeID=EmployeeID;
this.Fullname=Fullname;
this.Department=Department;
this.Level=Level;
this.Salary=0;
this.image= image;

allEmployees.push(this);
}



let Ghazi  = new Employees("1000", "Ghazi Samer" , "administration" , "senior" ,"./assets/Ghazi.jpg");
let Lana  = new Employees("1001", "Lana Ali" , "finance" , "senior" ,"./assets/Lana.jpg");
let Tamara  = new Employees("1002", "Tamara Ayoub" , "marketing" , "senior","./assets/Tamara.jpg" );
let Safi   =  new Employees("1003", "Safi Walid" , "administration" , "mid-senior","./assets/Safi.jpg" );
let Omar   = new Employees("1004", "Omar Zaid" , "development" , "senior","./assets/Omar.jpg" );
let Rana  = new Employees("1005", "Rana Saleh" , "development" ,"junior" ,"./assets/Rana.jpg" );
let Hadi  = new Employees("1006", "Hadi Ahmad" , "finance" , "senior","./assets/Hadi.jpg" );



//for the salary/////////////////////////////////////// 




Employees.prototype.theSalary = function (){

  if (this.level == "senior") {  
  let i= Math.floor(Math.random() * (2000 - 1500 + 1) ) + 1500;//randomsalary
  let afterTax = i+(i*((7.5)/100));;//tax
  return this.Salary=afterTax;


 }


 else if (this.level == "mid-senior"){
  let i= Math.floor(Math.random() * (1500 - 1000 + 1) ) + 1000;//randomsalary
  let afterTax = i+(i*((7.5)/100));;//tax
  return this.Salary=afterTax;
  
 }

 else {

  let i= Math.floor(Math.random() * (1000 - 500 + 1) ) + 500;//randomsalary
  let afterTax = i+(i*((7.5)/100));;//tax
  return this.Salary=afterTax;
 
}}




////////////////////////////////////////////////////////////



Employees.prototype.render = function(){

let sepEmp =document.createElement("div");
sepEmp.style.background="pink";
sepEmp.style.textAlign="center";
sepEmp.style.margin="20px";
sepEmp.style.width="200px";

 information.appendChild(sepEmp);

  let image = document.createElement('img'); 
    image.setAttribute("src", this.image);
    image.style.width = "70px"
    image.style.imageRendering;
    sepEmp.appendChild(image);


  

    let theId = document.createElement('h4');
    theId.textContent = this.EmployeeID;
    sepEmp.appendChild(theId);
   


    let name = document.createElement('h4');
    name.textContent = this.Fullname;
    sepEmp.appendChild(name);

    let lev = document.createElement('h4');
    lev.textContent = this.Level;
    sepEmp.appendChild(lev);
    
    let dep = document.createElement('h4');
    dep.textContent = this.Department;
    sepEmp.appendChild(dep);

    let sal = document.createElement('h4');
    sal.textContent = this.theSalary();
    sepEmp.appendChild(sal);

    

  
   }





function renderAll(){

for(let i=0; i< allEmployees.length ;i++){

  allEmployees[i].render();
}
}










///////////events

form.addEventListener("submit",afterSubmit)

const val = Math.floor(1000 + Math.random() * 9000);
console.log(val);



function afterSubmit(event){

event.preventDefault();

let name =event.target.fullName.value;
let department =event.target.Department.value;
let level =event.target.Level.value;
let images=event.target.images.value;

let newEmployee =new Employees(val, name , department ,level,images);
console.log(newEmployee);

newEmployee.render();

saveToLocalStorage();

}


function saveToLocalStorage () {
  let stringTheData = JSON.stringify(allEmployees)
  localStorage.setItem("Employees" , stringTheData);

}


function getTheData (){
  let strData = localStorage.getItem("Employees");
  let parsedData= JSON.parse(strData);
  if(parsedData !=null){

    allEmployees = [];

  for (let i=0 ; i<parsedData.length ; i++){
    new Employees(parsedData[i].Fullname, parsedData[i].Department, parsedData[i].Level, parsedData[i].image);

  }
}
renderAll();

}



getTheData();
