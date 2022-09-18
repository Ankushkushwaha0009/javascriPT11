// var student1 =  {
//     firstname : 'Ankush' ,
//     lastname : 'Kushwaha' ,
//     age:24,
//     class:5
// };

// var student2 =  {
//     firstname : 'Vishal' ,
//     lastname : 'Kushwaha',
//     age:27,
//     class:3
// };


//object constructor function

function Student (first, last  , age , cla , nationality){
             this.firstname = first;
             this.lastname = last;
             this.age = age;
             this.class = cla;
             this.nationality = nationality ;
            

             this.name = function(){
                return this.firstname +" "+ this.lastname ;
             } 
};


var student1 = new Student("Ankush" , "Kushwaha" , 23 , 19 , "indian" );  //constructor 
//var student2 = new Student("Vishal" , "Kushwaha" , 22 , 20 , "India");

// student1.nationality = "INDIA"   //add some value in student1 object not in object constructor
// Student.na = "india"   add nahi hoga 

//method ko add

// student1.name = function(){
//    return this.firstname+ " " +this.lastname ;
// }



console.log(student1.name())  // calling a method (constructor mai add nahi hua hai)
console.log(student1);

