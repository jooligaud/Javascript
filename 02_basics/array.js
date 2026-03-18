myarr = [1,2,3,4,5];

//myarr.pop();
//myarr.push(6);
//myarr.unshift(9);
//myarr.shift();
//console.log(myarr.includes(5));
 
//console.log(myarr);

const newArr = ["mayuri", "sonam", "bhavna"];
const newArr1 = ["bobby", "vishal", "kunal"];

 //newArr.push(newArr1);//this outlet array inside array
const newfinalArr = newArr.concat(newArr1);//this is one array with all th value(here only 2 var)
const newA = [...newArr, ...newArr1];//same result but benefits here u can multiple var here 

const anotherArr = [1,2,3,[4,5,6],7,8,[1,[2,[2],4]],[7,8,9]];

const real_anotherArr = anotherArr.flat(Infinity);

const arr5 = Array.isArray("jooli");//check with is array or not
const arr6 = Array.from("jooli");// convert into array
const arr7 = Array.from({name :"jooli"});//it provide blank array if not convert
console.log(arr7);
