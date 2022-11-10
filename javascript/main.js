/*
// METODO UNO

let buttonHtml = document.getElementById(`btnInvio`)
let inputName = document.getElementById(`inputName`)
let inputKm = document.getElementById(`inputKm`)
let inputEta = document.getElementById(`inputEta`)
//let numeroCp = document.getElementById(`numeroCp`)
//let carrozza = document.getElementById(`carrozza`)

let costoAziendaKm = 0.21


buttonHtml.addEventListener(`click`, function(){

    const valueName = inputName.value;

    const valueKm = inputKm.value;

    const valueEta = inputEta.value;


    

    if( valueName == `` && valueKm == `` && valueEta == ``){

        console.log(`compila tutto`)

    }else{

        let prezzoBiglietto = valueKm * costoAziendaKm

        let prezzoMaggiorenne = prezzoBiglietto

        let prezzoMinorenne = prezzoBiglietto * 0.80

        let prezzoOver65 = prezzoBiglietto * 0.60

        let numeroCp1 = Math.floor(Math.random() * 100000 ) +1;
        let carrozza1 = Math.floor(Math.random() * 100 ) +1;

        controlloEta( valueEta, prezzoMaggiorenne, prezzoMaggiorenne, prezzoOver65) 
        document.getElementById(`numeroCp`).innerHTML = `${numeroCp1}`
        document.getElementById(`carrozza`).innerHTML = `${carrozza1}`

    }

        document.getElementById(`outputName`).innerHTML = `${valueName}`
    
    
    

        function controlloEta (paramEta, paramMaggiorenne, paramMinorenne, paramOver65){
            if( paramEta == `maggiorenne` ){

                document.getElementById(`prezzo`).innerHTML = `${paramMaggiorenne.toFixed(2)}`

            }else if(paramEta == `minorenne`){

                document.getElementById(`prezzo`).innerHTML = `${paramMinorenne.toFixed(2)}`

            }else if(paramEta == `over65`){

                document.getElementById(`prezzo`).innerHTML = `${paramOver65.toFixed(2)}`


            }
        }

        
})
*/

//METODO DUE


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

