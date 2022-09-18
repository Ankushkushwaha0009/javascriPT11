//object constructor mai add kaise kare 

function Student (first, last  , age , cla ){
    this.firstname = first;
    this.lastname = last;
    this.age = age;
    this.class = cla;
    
   

    // this.name = function(){
    //    return this.firstname +" "+ this.lastname ;
    // } 
};

//prootype mai add hoga 
Student.prototype.nationality = "Indian" ; //dono object mai add ho gaya hoga means we are adding in a constructor only 

var s1 = new Student("Ankush" , "Kushwaha" , 23 , 16  );
var s2 = new Student("Vishal" , "Kushwaha" , 23 , 19  );

console.log(s1.nationality) // s1 mai add hua hai s2 mai bhi hua hoga 
console.log(s1)

console.log(s2)

//adding a method in a constructor

Student.prototype.name = function(){
    return this.firstname+ " " + this.lastname ;
}

console.log(s1.name()) //calling a method
console.log(s2.name())  //calling a method 