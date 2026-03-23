function calculate(...num){  ////... this is called rest operator   
    return num;
}

//console.log(calculate(200,400,500))

const user = {
    username : "jooli",
    city : "gwalior"
}

function handleObject(obj){
    console.log(`Username is :  ${obj.username} and city is : ${obj.city}`)
}

//handleObject(user)

const myArr = [100,200,300,400];

function returnSecondValue(getArr){
    return getArr[1];
}
//console.log(returnSecondValue(myArr));
console.log(returnSecondValue([200,500,600]));
