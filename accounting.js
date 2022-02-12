'use strict';


let strData = localStorage.getItem("Employees");
let parsedData= JSON.parse(strData);
console.log(parsedData);
let parent = document.getElementById("parent");
let table = document.createElement("table");

parent.appendChild(table);

let num =numberOfEmployees();
let Sal=totalSalaryForEachDep ();

console.log(num);

//first row:the header
let firstRow = document.createElement("tr");
table.appendChild(firstRow);

let th1 = document.createElement("th");
th1.textContent = "Department"
firstRow.appendChild(th1);

let th2 = document.createElement("th");
th2.textContent = "Number Of Employees"

firstRow.appendChild(th2);

let th3 = document.createElement("th");
th3.textContent = "Total salary"
firstRow.appendChild(th3);

let th4 = document.createElement("th");
th4.textContent = "Average"
firstRow.appendChild(th4);

//second row :Administration

let secondRow = document.createElement("tr");
table.appendChild(secondRow);

let td11 = document.createElement("td");
td11.textContent = "Administration";
secondRow.appendChild(td11);

let td12 = document.createElement("td");
td12.textContent = num[0];
secondRow.appendChild(td12);

let td13 = document.createElement("td");
td13.textContent = Sal[0];
secondRow.appendChild(td13);

let td14 = document.createElement("td");
td14.textContent = Sal[0]/num[0];
secondRow.appendChild(td14);

//second row :Marketing

let thirdRow = document.createElement("tr");
table.appendChild(thirdRow);

let td21 = document.createElement("td");
td21.textContent = "Marketing";
thirdRow.appendChild(td21);

let td22 = document.createElement("td");
td22.textContent = num[1];
thirdRow.appendChild(td22);

let td23 = document.createElement("td");
td23.textContent = Sal[1];
thirdRow.appendChild(td23);

let td24 = document.createElement("td");
td24.textContent = Sal[1]/num[1];
thirdRow.appendChild(td24);

//fourth row :Development

let fourthRow = document.createElement("tr");
table.appendChild(fourthRow);

let td31 = document.createElement("td");
td31.textContent = "Development";
fourthRow.appendChild(td31);

let td32 = document.createElement("td");
td32.textContent = num[2];
fourthRow.appendChild(td32);

let td33 = document.createElement("td");
td33.textContent = Sal[2];
fourthRow.appendChild(td33);

let td34 = document.createElement("td");
td34.textContent = Sal[2]/num[2];
fourthRow.appendChild(td34);


//fifth row :Finance

let fifthRow = document.createElement("tr");
table.appendChild(fifthRow);

let td41 = document.createElement("td");
td41.textContent = "Finance";
fifthRow.appendChild(td41);

let td42 = document.createElement("td");
td42.textContent = num[3];
fifthRow.appendChild(td42);

let td43 = document.createElement("td");
td43.textContent = Sal[3];
fifthRow.appendChild(td43);

let td44 = document.createElement("td");
td44.textContent = Sal[3]/num[3];
fifthRow.appendChild(td44);


//sixth row :total

let sixthRow = document.createElement("tr");
table.appendChild(sixthRow);

let td51 = document.createElement("td");
td51.textContent = "Total";
sixthRow.appendChild(td51);

let td52 = document.createElement("td");
td52.textContent = totalNumberOfEmployees();
sixthRow.appendChild(td52);

let td53 = document.createElement("td");
td53.textContent = totalSalaryForAll();
sixthRow.appendChild(td53);

let td54 = document.createElement("td");
td54.textContent = totalSalaryForAll()/totalNumberOfEmployees();
sixthRow.appendChild(td54);






function numberOfEmployees (){
  
    let admin=0
    let mark=0;
    let devel=0;
    let fin=0;
    
    let departments = [admin,mark,devel,fin];

 for(let i=0;i<parsedData.length;i++){
     
    if (parsedData[i].Department == "administration") {

        departments[0]+=1
        console.log(departments[0]);
        
    } else if (parsedData[i].Department == "marketing") 
    {
        departments[1]+= 1
    } 
    else if (parsedData[i].Department == "development") 
    {
        departments[2]+= 1
    }
     else if (parsedData[i].Department == "finance")
      {
        departments[3]+= 1
    }


}
    
console.log(departments);

return departments;


 }
 
 

 function totalSalaryForEachDep (){
  
    let admin=0
    let mark=0;
    let devel=0;
    let fin=0;
    
    let departments = [admin,mark,devel,fin];

 for(let i=0;i<parsedData.length;i++){
     
    if (parsedData[i].Department == "administration") {

        departments[0]+=parsedData[i].Salary;

        console.log(departments[0]);
        
    } else if (parsedData[i].Department == "marketing") 
    {
        departments[1]+=parsedData[i].Salary;
    } 
    else if (parsedData[i].Department == "development") 
    {
        departments[2]+=parsedData[i].Salary;
    }
     else if (parsedData[i].Department == "finance")
      {
        departments[3]+=parsedData[i].Salary;
    }

}
    
console.log(departments);

return departments;

 }

 function totalSalaryForAll(){
    let total=0;
    for(let i=0;i<Sal.length;i++)
    total+=Sal[i]
return total

}

function totalNumberOfEmployees(){

    let t = parsedData.length ; 
    return t 
}


    

    