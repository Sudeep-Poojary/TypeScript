class Grandfather {   
    retired():void {   
        console.log("Not Working")   
     }   
}   
class Father extends Grandfather {   
    employee():void {   
      console.log("Working")   
   }   
}  
class Child extends Father{   
    student():void {   
        console.log("Studying")   
     }  
}  
let obj = new Child();   
obj.retired();  
obj.employee();  
obj.student()  