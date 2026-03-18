//object litral  -> the way to declare object

const mySym = Symbol("Key1") 

const jsUser ={
    name : "jooli",
    email : "jooli@gmail.com",
    mob : 45678,
    lastlogin : ['monday','saturday'],
    "my age" : 25,
    [mySym] : "mykey1"
}

// console.log(jsUser.email);
// console.log(jsUser["my age"]);//if name have gap always use like this no other Option.
// console.log(jsUser["email"]);///both way u can get value from the obj

// console.log(jsUser[mySym]);///when u acces symbol not need write with ""

jsUser.email= "jooli@chatgpt.com";
Object.freeze(jsUser);  //after freeze u can not change the value of object key

jsUser['my age'] = 26
//console.log(jsUser);



//part=2

const tinderUser = new Object();///this is singleton object

const tUser ={}

tUser.id = "123abc"
tUser.name="sammy"
tUser.email="sammy@gmail.com"

// console.log(tinderUser);
// console.log(tUser);

const regularuser={
    email : "asdf@.com",
    fullname : {
        firstname :"jooli",
        lastname : "Gaud"
    }
}
//console.log(regularuser.fullname.firstname);

const obj1 = {1:"a" , 2:"b"}
const obj2 = {4:"c" , 3:"d"}
//const obj3 ={obj1,obj2}

//const obj3 = Object.assign(obj1,obj2);//this is one way
//const obj3 = Object.assign({},obj1,obj2);//this is second way 

const obj3 = {...obj1,...obj2}///(...)this is the spread oprator

console.log(Object.values(obj1));
console.log(Object.entries(obj1));
console.log(obj3);//both way result same


////part => 3

const obj123 ={
    course :"JS",
    price : 999,
    instructor : "jooli"
}

console.log(obj123.instructor);

const {instructor : inst} = obj123;//yha pe object ka name hi aayega

console.log(inst);


