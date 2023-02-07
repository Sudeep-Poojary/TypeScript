class AccessPublic {  
    public employeeID: number;  
    employeeName: string;  
}  
  
let job = new AccessPublic();  
job.employeeID = 202003050;  
job.employeeName = "Sudeep Poojary";  
  
console.log(`Employee ID:  ${job.employeeID} \nEmployee Name: ${job.employeeName}`);  