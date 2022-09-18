// var person = {
//     name:'Ankush' , 
//     age:22 ,
    
//     //creating a method 
   
//     // getname :  function() {             
//     //       return this.name.toUpperCase() ;
//     // }

//     // get   getname() {             //getter
//     //       return this.name.toUpperCase() ;
//     // },
    
 
//     set   setname(n){             //setter  //original date mai changes layega 
//         this.name = n.toUpperCase() ;
//      } 


// };
// person.setname = "ankush";
// //method ko call karne ke liye parantheis lagane padega 
// console.log(person);


var p = {
    
    name : 'Ankush' ,
    age  : 22 ,
    
    //Setter origninal date ko modify karega ...
    
    set setname(n){
        this.name = n.toUpperCase();
    }

};

p.setname = "ankush" ;
//console.log(p.name);
console.log(p);


