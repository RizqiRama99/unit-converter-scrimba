let convertBtn = document.getElementById("convert-btn")
let inputEl = document.getElementById("input-el")
let lengthEl = document.getElementById("length-el")
let volumeEl = document.getElementById("volume-el")
let massEl = document.getElementById("mass-el")

const meterToFeet =  3.281
const literToGallon =  0.264
const kiloToPound =  2.204
const feetToMeter = 0.3048 
const gallonToLiter = 3.78541
const poundToKilo = 0.453592


convertBtn.addEventListener("click",function() {
    let baseValue = inputEl.value
    const meterToFeetResult = (baseValue*meterToFeet).toFixed(3)
    const feetToMeterResult = (baseValue*feetToMeter).toFixed(3)
    const literToGallonResult = (baseValue*literToGallon).toFixed(3)
    const gallonToLiterResult = (baseValue*gallonToLiter).toFixed(3)
    const kiloToPoundResult = (baseValue*kiloToPound).toFixed(3)
    const poundToKiloResult = (baseValue*poundToKilo).toFixed(3)


    lengthEl.textContent = `${baseValue} meter = ${meterToFeetResult} feet | ${baseValue} feet = ${feetToMeterResult} meter` 
    volumeEl.textContent = `${baseValue} liter = ${literToGallonResult} gallon | ${baseValue} gallon = ${gallonToLiterResult} liter` 
    massEl.textContent = `${baseValue} kilogram = ${kiloToPoundResult} pound | ${baseValue} pound = ${poundToKiloResult} kilogram` 
})

