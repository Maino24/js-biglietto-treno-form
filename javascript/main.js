/*console.log(`ciao`)*/

let input1 = document.getElementById(`inputKm`)
let input2 = document.getElementById(`inputAge`)
let input3 = document.getElementById(`inputName`)

function esegui(){

let Km = parseInt(input1.value);
let Age = parseInt(input2.value);
let Name = (input3.value);

console.log(Km)
console.log(Age)

const price = 0.21

if (Age < 18){

    priceInt = price * Km
    scontoMin = (priceInt * 20) / 100
    finalPrice = priceInt - scontoMin
    finalPrice = finalPrice.toFixed(2)
    console.log(finalPrice)

}else if (Age > 65){

    priceInt = price * Km
    scontoMax = (priceInt * 40) / 100
    finalPrice = priceInt - scontoMax
    finalPrice = finalPrice.toFixed(2)
    console.log(finalPrice)
}else {

    priceInt = price * Km
    finalPrice = priceInt
    finalPrice = finalPrice.toFixed(2)
    console.log(finalPrice)
}

document.getElementById(`output`).innerHTML= `${finalPrice}`
document.getElementById(`outputName`).innerHTML= `${Name}`



}



function functionName(){


}


 