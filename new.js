// var person = {
//     name:'Ankush' , 
//     age:25,
// };


// var p = new Object(); //creating a object 


// //properties

// person.name = 'Ankush kushwaha';
// person.age = 22;
// // console.log(p.name)
// //print in the properties 

// console.log(person.name);
// console.log(person.age);
//------------------------------------
//SYNTAX.....

// let func = new Function ([arg1, arg2, ...argN], functionBody);


// function MyFunction() {
//     this.val = 100;
//     this.val11 = 233 ;
//     this.name  = "Ankush kushwaha 1111";

//   }
//   let obj = new MyFunction();
//   console.log(obj.val);
//   console.log(obj.val11)
//   console.log(obj.name)
//   console.lof(obj.my(10));

//-----------------------
// (function func(){
//   let a = 5, b = 3;
//   return new Function( ` console.log( ${a} + ${b} ) ` )
// }
// ())()

// function func(){
//   let a = 5, b = 3;
//   return new Function( `alert(${a} + ${b})` )
// }
// func()()
//--------------

// let func = new Function ([arg1, arg2, ...argN], functionBody);

// let sum = new Function('a', 'b', 'return a + b');

// console.log( sum(1, 2) );


// let sum1 = new Function( console.log("hellow world") );
// sum1();



 // closure


//  function getFunc() {
//   let value = "test";

//   let func = new Function(alert(value));

//   return func;
// }

// getFunc()();

// let count1 = 2; 
// function makeCounter() {
    
//     let count  = 0 ;
//     return function() {
//         return count+1;
        
//     };
    
//     // function k(){
//     //   let count = 0;
//     //   return count+1;
//     // }
  
// }

// let c = makeCounter();
// console.log(c);

firstName = "Ankush";
lastName = "kushwaha";
function sayHiBye(firstName, lastName) {

  // helper nested function to use below
  function getFullName() {
    return firstName + " " + lastName;
  }

  console.log( "Hello, " + getFullName() );
  console.log( "Bye, " + getFullName() );

}
sayHiBye()

