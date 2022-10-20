console.log(`ciao`)

function esegui(){

let Km = parseInt(document.getElementById(`inputKm`).value);
let Age = parseInt(document.getElementById(`inputAge`).value);

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

document.getElementById(`output`).innerHTML= `il costo del biglietto è : ${finalPrice}`

}