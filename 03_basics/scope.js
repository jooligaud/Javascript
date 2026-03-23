let a =50
if(true){
    ///local variable
    let a = 10
    const b = 20
    var c =30
    //console.log(a);
}

//console.log(a);
//console.log(b);
//console.log(c);///this gives value


function one(){
    const username = "jooli"

    function two(){
        const website = "youtube"
        //console.log(username);
    }

    //console.log(website);

    two()
    
}
one()

//++++++++++++++ interesting +++++++++++//

function addsum(num){
    return num+1
}
addsum(5)

///this is also called Expression//
const addTwo = function(num){
    return num+2
} 

addTwo(10);