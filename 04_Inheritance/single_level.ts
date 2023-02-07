class Person {   
   Name:string

   constructor(name:string) {   
      this.Name = name  
   }   
}   

class Student extends Person {   

   display():void {   
      console.log("Student Name: "+this.Name)   
   }   
}  

var obj = new Student("Sudeep Poojary");   
obj.display()  