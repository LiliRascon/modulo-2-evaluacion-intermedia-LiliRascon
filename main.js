'use strict';

const numberIntupElem = document.querySelector('.numberInput');
const btnElem = document.querySelector('.btn');
const container1Elem = document.querySelector('.container1');
const container2Elemn = document.querySelector('.container2');


const randomNumber = getRandomNumber(100);
console.log (randomNumber);
function getRandomNumber(max) {
    return Math.ceil(Math.random() * max);
 
    }
    let cont = 0;
     
    
    function toShowNumber () {
        numberIntupElem.innerHTML = numberIntupElem.value;
        console.log (numberIntupElem.value);

        cont = cont + 1;
        container2Elemn.innerHTML = `NUMERO DE INTENTOS: ${cont}`;

        if (randomNumber > numberIntupElem.value){
            container1Elem.innerHTML = "DEMASIADO PEQUEÑO";
            
        }else if(randomNumber == numberIntupElem.value){
            container1Elem.innerHTML = "HAS GANADO CAMPEONA";
        }else if (numberIntupElem.value < 1 || numberIntupElem.value > 100 ){
            container1Elem.innerHTML = "NUMERO ENTRE 1 Y 100";
        }
        else{
            container1Elem.innerHTML = "DEMASIADO ALTO";
        }
    }
    
    
    let numberComparation = numberIntupElem.value;        

    btnElem.addEventListener('click', toShowNumber);
