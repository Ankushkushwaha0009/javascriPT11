let person = {
    firstName :'Ankush' , 
    lastName : 'Kushwaha' ,

    sayHello : function(){
        console.log("Hello ! i have a " + car.brand + " car" ); //outside the class 

        console.log("Hello my name is " + this.firstName +   " " + this.lastName + " "  ); //in the same class
    }
};


let car = {
    brand : 'Tata'  ,
    model : 'safari' ,
}

person.sayHello();
