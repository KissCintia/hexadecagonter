/*
* File: app.js
* Author: Kiss Cintia
* Copyright: 2024, Kiss Cintia
* Group: Szoft I-2-N
* Date: 2024-04-03
* Github: https://github.com/KissCintia/
* Licenc: GNU GPL
*/

const sideInput = document.querySelector('#side')
const areaInput = document.querySelector('#area')
const calcButton = document.querySelector('#calcButton')


calcButton.addEventListener('click', ()=>{
    startCalc()
});

function startCalc(){
    const side = Number(sideInput.value)
    const area = calcArea(side)
    areaInput.value = area
}

function calcArea(side){
    return 4 * Math.pow(side, 2) * Math.cos(Math.PI/16)/Math.sin(Math.PI/16)
}
