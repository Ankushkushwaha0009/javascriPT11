// for output
//alert("hello world ");
//document.getElementById("h").innerHTML="Ankush kushwaha ";
//document.write("Ankush11 kushwaha")
//console.log("Ankush kushwaha")

// var a ;
// a 
// = 
// 5;
// alert(a);

// var a1 ; a1 = 4;alert(a1);

//variables  

// const  k  = 5
// console.log(k);

// let x = 8 , y = 9;
// console.log(x);
// console.log(y);




//alert , prompt , confirm(user se interact karne ke liye )

// alert("welcome!");
// let age  = prompt("Enter you age ",78) ;
// if(age != null){
//      document.write("your age is :",age);
// }
// else{
//     document.write("please enter your age");
// }

// let response  = confirm("are you sure you want to delete");
// if(response  == true ){
//     document.write("user satisfied");
// }
// else{
//     document.write("user not  satisfied");
// }


//data type conversion  

//alert(typeof("ANkush kushwaha"));

//let ty = 33.44;
//alert(typeof(ty));

//let t = true;
//alert(typeof(t));

// let t1 = 44;
// alert(typeof(t1));

// let y = 99 + null;
// console.log(y);
// console.log(typeof(y));



// let ty = "223" + null;
// console.log(ty);
// console.log(typeof(ty));




//function of type conversion in javascript 

// let ty1 = 333;
// console.log(ty1);
// console.log(typeof(ty1));


// ty2 = String(ty1);
// console.log(ty2);
// console.log(typeof(ty2))

//in boolean 
// let  k = "true";
// console.log(k);
// console.log(typeof(k));

// l1 = Boolean(k);
// console.log(l1);
// console.log(typeof(l1));

//Number 


//String manipulation ......

// let str = "Ankush \nkumar ";
//let gre = `hi ${str}`;
// console.log(str);

// let str = "Ankush \\ kumar ";

// let str = "Ankush  \" kumar \" ";

// console.log(str);

// let str = "Ankush  kumar  ";
// console.log(str.length);
// console.log(str[2]);
// for(let i=0;i<str.length;i++){
//     // console.log("\t");
//     console.log(str[i]);
// }


// function add(a,b){
//   console.log(a + b);
// }
// let q = 2, m = 4;
// add(q,m);


// for(i=1 ; i<=10 ; i++){
//      document.write(`10 * ${i}  = ${10*i}`);
     
//      document.write("<br>");
     
// }

// function mul(a){
//     for(let i=1; i<=10; i++){
//         document.write(`a * ${i}  = ${a*i}`);
//         document.write("<br>");
//     }
    
// }
// mul(10);
// document.write("<br>");


// mul(20);
// document.write("<br>");
    
// mul(30)
// document.write("<br>");




    // function add(num1 , num2){
    //      document.write(num1 + num2);
    // }
    // add(3 , 5);


// function add(){
//         //console.log(arguments[0]);
//         //console.log(arguments.length);
//         if(arguments.length == 0){
//             console.log("No arguments  passed");
//         }
//         else{
//             let s = 0;
//             for(let i=0 ; i < arguments.length ; i++){
//                   s = s + arguments[i];
//             }
//             console.log("addition is :" , s);
//         }
// }
// // let addition = add;

// // addition(3,45,55); //aise bhin call kar sakte hai

// //aise bhi call kar sakte hain  
// add();
// add(1);
// add(1,2,3,4);
// add(1,2,3,4,5,6);


//return something from a function


// function add(a , b){
//     return (a+b);
// }
// let c = add(10,30);
// console.log(c);


//global variable and local variable 

// let car  = "audi";  //global variable 

// function add(){

//      console.log(car);
//      let res = 33;       //local varibale (function ke andr define rahega to local variable kahenge usko )

// }
// add();
// console.log(res);



//anoynomous function ...  (jiska name hi na ho)


//function expression 

// let show  = function() {
//     console.log("hello world");
// } ;
// show();


//time interval set kar rahe 3s second ke bad aaye 


// setTimeout(functionname , Time)

// let show  = function (){
//     console.log("hello world");
// }
// setTimeout(show, 5000); 
//5 sec ke bad execute hoga 


// function(){
//     console.log("hellow world ");
// }


//Anoynoumous function  (meomory waste na ho )

// setTimeout(function(){
//     console.log("hellow world ");
// } ,  5000 )


//immediately invoked function

// let cal = function(){
//     console.log("hi Ankush is here");
//     alert("hello!");
// };
// cal();



//immediately invoked function  

// let str1 = "Ankush kushwaha";
// (function (){
//     let str  = "hellow world";
//      console.log(str1);
//      console.log(str);
//      alert("hello!");

// } )();

// let msg = "hello myscript";
// function show(){
//     console.log(msg);
// }
// show();














