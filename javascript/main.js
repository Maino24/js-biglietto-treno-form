
let buttonHtml = document.getElementById(`btnInvio`)
let inputName = document.getElementById(`inputName`)
let inputKm = document.getElementById(`inputKm`)
let inputEta = document.getElementById(`inputEta`)



buttonHtml.addEventListener(`click`, function(){

    const valueName = inputName.value;

    const valueKm = inputKm.value;

    const valueEta = inputEta.value;

    if( valueName == `` && valueKm == `` && valueEta == ``){


    }else{
        
    }



})

/*
let input1 = document.getElementById(`inputKm`)
let input2 = document.getElementById(`inputAge`)
let input3 = document.getElementById(`inputName`)
let numeroCp = document.getElementById(`numeroCp`)
let carrozza = document.getElementById(`carrozza`)

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

 
let numeroCp1 = Math.floor(Math.random() * 100000 ) +1;
let carrozza1 = Math.floor(Math.random() * 100 ) +1;

document.getElementById(`output`).innerHTML= `${finalPrice}`
document.getElementById(`outputName`).innerHTML= `${Name}`
//document.getElementsById(`numberRandomEs`).innerHTML= Math.floor(Math.random()*100000) + 1;

console.log(numeroCp1)
document.getElementById(`numeroCp`).innerHTML = `${numeroCp1}`
console.log(carrozza1)
document.getElementById(`carrozza`).innerHTML = `${carrozza1}`

}

function functionAnnulla(){
    document.getElementsByClassName(`Annulla`).reset();
    document.getElementById(`output`).reset();
    document.getElementById(`outputName`).reset();
}

*/