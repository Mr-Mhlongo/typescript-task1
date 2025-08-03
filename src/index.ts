 //Creation of a custom type
 type Employee ={fullName:[string, string], age:number, department:string, skills:string[], isActive:boolean};

 //Create Employee objects
 let employee1 : Employee ={fullName:["Siyanda","Mhlongo"], age:25, department:"Software development", skills:["Web development", "Mobile development"],isActive:true}

 let employee2 : Employee ={fullName:["Nicole","Jackson"], age:28, department:"Telecommunications", skills:["Satelite communication", "Data analytics"],isActive:true}

 let employee3 : Employee ={fullName:["Thabang","Mokoena"], age:26, department:"Hardware manufacturing", skills:["Electronics", "Networking", "Hardware engineering"],isActive:false}

 //Function that logs employee details to the console
 function logEmployee(employee:Employee){
    return `
     ---Employee Details---
     Name: ${employee.fullName}
     Age: ${employee.age}
     Department: ${employee.department}
     Skills: ${employee.skills}
     Active: ${employee.isActive}
     ------------------------`;
    
 }

 //Call the display function for the employees
 console.log(logEmployee(employee1));

 console.log(logEmployee(employee2));

 console.log(logEmployee(employee3));
 

