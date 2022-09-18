// function a(){
//     console.log(b);
// }
// var b = 10 ;
// a();


function a(){
    var b = 10;
    console.log(b);
    function c(){
        console.log(b);
    }
    c();
   
}
a();





