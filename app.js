'use strict';


let allEmployees= [];

function Employees(EmployeeID,Fullname,Department,Level)
{
this.EmployeeID=EmployeeID;
this.Fullname=Fullname;
this.Department=Department;
this.Level=Level;
this.Salary=0;
this.image=`./images/${this.Fullname}.png`;

allEmployees.push(this);
}

let Ghazi  = new Employees("1000", "Ghazi Samer" , "administration" , "senior" );
let Lana  = new Employees("1001", "Lana Ali" , "finance" , "senior" );
let Tamara  = new Employees("1002", "Tamara Ayoub" , "marketing" , "senior" );
let Safi   =  new Employees("1003", "Safi Walid" , "administration" , "mid-senior" );
let Omar   = new Employees("1004", "Omar Zaid" , "development" , "senior" );
let Rana  = new Employees("1005", "Rana Saleh" , "development" ,"junior"  );
let Hadi  = new Employees("1006", "Hadi Ahmad" , "finance" , "senior" );







function getRndInteger(min, max) {
    return Math.floor(Math.random() * (max - min + 1) ) + min;
  
   }

Employees.prototype.randomSalary = function (min,max){
    this.Salary= getRndInteger(min ,max);


}
Employees.prototype.render = function(){
    
    document.write(`<p> EmployeeID = ${this.EmployeeID}</p>`)
    document.write(`<p> Fullname = ${this.Fullname}</p>`)
    document.write(`<p> Department= ${this.Department}</p>`)
    document.write(`<p> Level = ${this.Level}</p>`)
    document.write(`<p> Salary= ${this.Salary}</p>`)
    document.write(`<p>---------</p>`)
    
}
for(let i=0 ;i<allEmployees.length;i++){
    if (this.level == "senior") {
     allEmployees[i].randomSalary(1500,2000);

      } else if (this.level == "mid-senior")
       {
         allEmployees[i].randomSalary(1000,1500);
      } else {
        allEmployees[i].randomSalary(500,1000);
      }
    
allEmployees[i].render();
}



