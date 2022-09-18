//object ke andar object 

var user  = {
    id:101,
    email:"abc@gmail.com",
    personalInfo:{  //creating a second object
            
            name:"Ankush",
            
            address: {     //creating a third object
                   street : "gandhi",
                   city   : "Mumbai" ,
                   country : "India",
            }
    }  
};


console.log(user) //user wala  object dikha dega 

console.log(user.personalInfo); //only personal wala dikhayega

console.log(user.personalInfo.address)  //address wala access kar rahe hai 

console.log(user.personalInfo.address.street)






