//primitive datatype
// 7 type : String, Number, Boolean, Null, undefined, Symbol,BigInt

const id =Symbol('123');
const anotherId = Symbol('123');

//console.log(id === anotherId);
//console.log(anotherId);

const bigNum = 36547658758n


//Reference(Non.Primitive)
//Type : Array, Objects, Functions

const arr = ["shaktiman","junior ji","doga"];
let myobj = {
    name :"jooli",
    age  : 25,
}
const myfunc = function(){
    console.log("Hello world");
}

console.log(typeof myfunc);