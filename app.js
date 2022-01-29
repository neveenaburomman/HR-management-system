'use strict';



Employees.allEmployees = [];

let form=document.getElementById("the form");
let information = document.getElementById("employeeInformation");
let imageDiv2 =document.getElementById("imageDiv");


function Employees(EmployeeID,Fullname,Department,Level,img)
{
this.EmployeeID=EmployeeID;
this.Fullname=Fullname;
this.Department=Department;
this.Level=Level;
this.Salary=0;
this.image= img;

Employees.allEmployees.push(this);
}

let Ghazi  = new Employees("1000", "Ghazi Samer" , "administration" , "senior" ,"./images/1000.png");
let Lana  = new Employees("1001", "Lana Ali" , "finance" , "senior" ,"./images/1001.png");
let Tamara  = new Employees("1002", "Tamara Ayoub" , "marketing" , "senior","./images/1002.png" );
let Safi   =  new Employees("1003", "Safi Walid" , "administration" , "mid-senior","./images/1003.png" );
let Omar   = new Employees("1004", "Omar Zaid" , "development" , "senior","./images/1004.png" );
let Rana  = new Employees("1005", "Rana Saleh" , "development" ,"junior" ,"./images/1005.png" );
let Hadi  = new Employees("1006", "Hadi Ahmad" , "finance" , "senior","./images/1006.png" );


Employees.prototype.render = function(){
  
  let theId = document.createElement('h4');
  theId.textContent = this.EmployeeID;
  information.appendChild(theId);

  let name = document.createElement('h4');
  name.textContent = this.Fullname;
  information.appendChild(name);

  let lev = document.createElement('h4');
  lev.textContent = this.Level;
  information.appendChild(lev);
  
  let dep = document.createElement('h4');
  dep.textContent = this.Department;
  information.appendChild(dep);

  let sal = document.createElement('h4');
  sal.textContent = this.Salary;
  information.appendChild(sal);

  let image = document.createElement('img'); 
  image.setAttribute("src", this.image);
  imageDiv2.appendChild(image);
  image.style.width = "70px"
  image.style.imageRendering;

}

Employees.prototype.randomSalary = function (min,max){

  this.Salary= getRndInteger(min ,max);
  let i = getRndInteger(min ,max);
  this.Salary=calTax(i);
=======
    let i = getRndInteger(min ,max);
    this.Salary=calTax(i);


}



function getRndInteger(min, max) {
    return Math.floor(Math.random() * (max - min + 1) ) + min;
=======

=======

Employees.prototype.render = function(){
  
  
   }

   function calTax(num){ 
    let x=num+(num*((7.5)/100));
    return x ;
  }



   function saveToLocalStorage() {
    let stringifedData = JSON.stringify(Employees.allEmployees)
    localStorage.setItem("employee data", stringifedData);
    console.log(localStorage);
  
  }
  



const val = Math.floor(1000 + Math.random() * 9000);
console.log(val);






function renderAll() {

  for(let i=0 ;i<Employees.allEmployees.length;i++){
    
    if (Employees.allEmployees[i].Level === "senior") {
      Employees.allEmployees[i].randomSalary(1500,2000);
  
      } 
      else if (Employees.allEmployees[i].Level== "mid-senior")
       {
        Employees.allEmployees[i].randomSalary(1000,1500);
      } else {
        Employees.allEmployees[i].randomSalary(500,1000);
      }
  
      
      Employees.allEmployees[i].render();
      console.log(Employees.allEmployees[i]);
      saveToLocalStorage()
}

=======

form.addEventListener("submit",afterSubmit)




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
newEmployee.saveToLocalStorage();

}

}
 
function getData(){

  let data = localStorage.getItem("employee data");
  let parseData = JSON.parse(data);
  if (parseData != null) {
      console.log(parseData);

      for (let i = 0; i < parseData.length; i++) {
          console.log(parseData[i]);
          new Employees(parseData[i].EmployeeID, parseData[i].Fullname, parseData[i].Department, parseData[i].Level, parseData[i].Salary, parseData[i].image)
      }
  }
  renderAll();
}


getData();
=======
=======

