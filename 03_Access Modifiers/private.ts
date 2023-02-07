class AccessPrivate {  

    public employeeID: number;  
    private employeeName: string;  

    constructor(id: number, name: string){  
    this.employeeID = id;  
    this.employeeName = name;  
    }  

    public display() {  
    return (`Employee ID: ${this.employeeID} \nEmployee: ${this.employeeName}`);  
    }  
    }  
      
    let employee: AccessPrivate = new AccessPrivate(202003050, "Sudeep Poojary");  

    console.log(employee.display());  