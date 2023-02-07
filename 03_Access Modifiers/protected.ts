class Student {  

    public studentID: number;  
    protected studentName: string;  

    constructor(id: number, name: string){  
        this.studentID = id;  
        this.studentName = name;  
        }  
}  

class Person extends Student {  
    private department: string;  
  
    constructor(id: number, name: string, dept: string) {  
        super(id, name);  
        this.department = dept;  
    }  

    public getInfo() {  
        return (`Student ID: ${this.studentID} \nStudent Name: ${this.studentName} \nBranch: ${this.department}`);  
    }  
}  

let student: Person = new Person(202003050, "Sudeep Poojary", "Information Technology");  
console.log(student.getInfo());  