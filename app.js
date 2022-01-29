'use strict';


let allEmployees= [];

let form=document.getElementById("the form");

function Employees(EmployeeID,Fullname,Department,Level,img)
{
this.EmployeeID=EmployeeID;
this.Fullname=Fullname;
this.Department=Department;
this.Level=Level;
this.Salary=0;
this.image= img;

allEmployees.push(this);
}


let Ghazi  = new Employees("1000", "Ghazi Samer" , "administration" , "senior" ,"./images/1000.png");
let Lana  = new Employees("1001", "Lana Ali" , "finance" , "senior" ,"./images/1001.png");
let Tamara  = new Employees("1002", "Tamara Ayoub" , "marketing" , "senior","./images/1002.png" );
let Safi   =  new Employees("1003", "Safi Walid" , "administration" , "mid-senior","./images/1003.png" );
let Omar   = new Employees("1004", "Omar Zaid" , "development" , "senior","./images/1004.png" );
let Rana  = new Employees("1005", "Rana Saleh" , "development" ,"junior" ,"./images/1005.png" );
let Hadi  = new Employees("1006", "Hadi Ahmad" , "finance" , "senior","./images/1006.png" );


function getRndInteger(min, max) {
    return Math.floor(Math.random() * (max - min + 1) ) + min;
  
   }

Employees.prototype.randomSalary = function (min,max){
  this.Salary= getRndInteger(min ,max);
  let i = getRndInteger(min ,max);
  this.Salary=calTax(i);


}

function calTax(num){ 
  let x=num+(num*((7.5)/100));
  return x ;
}
document.write("<h3> Employees information</h3>")

Employees.prototype.render = function(){
    
    document.write(`<p> EmployeeID = ${this.EmployeeID} ,Employee Name= ${this.Fullname},Employee Level = ${this.Level} ,Employee Salary = ${this.Salary}  ${this.image
    }</p>`)

    let image = document.createElement('img'); 
    image.setAttribute("src", this.image);
    imageDiv.appendChild(image);
}

const val = Math.floor(1000 + Math.random() * 9000);
console.log(val);



for(let i=0 ;i<allEmployees.length;i++){
    if (this.level == "senior") {
     allEmployees[i].randomSalary(1500,2000);

      } else if (this.level == "mid-senior")
       {
         allEmployees[i].randomSalary(1000,1500);
      } else {
        allEmployees[i].randomSalary(500,1000);
      }

      document.write(`<h4> Employee number  ${i+1}</h4>`)
allEmployees[i].render();

}
form.addEventListener("submit",afterSubmit)



function afterSubmit(event){
  event.preventDefault();

let name =event.target.fullName.value;
let department =event.target.Department.value;
let level =event.target.Level.value;
let EmployeeImage=event.target.images;
console.log(name);
console.log(department);

let newEmployee =new Employees(val, name , department , level,EmployeeImage );
console.log(newEmployee);
newEmployee.render();
}
