/*
1 meter = 3.281 feet
1 liter = 0.264 gallon
1 kilogram = 2.204 pound
*/
const lengthAnswer = document.getElementById("length-ans")
const volumeAnwer = document.getElementById("volume-ans")
const massAnswer = document.getElementById("mass-ans")
const convertLength = 3.281
const revertConvertLength = 1 / convertLength 
const convertVolume = 0.264
const revertConvertVolume = 1 / convertVolume
const convertMass = 2.204
const revertConvertMass = 1 / convertMass
const inputValue = document.getElementById("input-value")

addEventListener.inputValue("click", convert())
    

function convert(){
    let value = parseFloat(inputValue.value)
    let lengthInFeet = value * convertLength
    let lengthInMeters = value * revertConvertLength
    let volumeInGallons = value * convertVolume
    let volumeInLiters = value * revertConvertVolume
    let massInPounds = value * convertMass
    let massInKilos = value * revertConvertMass
    
    let lengthInFeetRounded = lengthInFeet.toFixed(3)
    let lengthInMetersRounded = lengthInMeters.toFixed(3)
    let volumeInGallonsRounded = volumeInGallons.toFixed(3)
    let volumeInLitersRounded = volumeInLiters.toFixed(3)
    let massInPoundsRounded = massInPounds.toFixed(3)
    let massInKilosRounded = massInKilos.toFixed(3)
    
    lengthAnswer.innerHTML = `${value} meters = ${lengthInFeetRounded} feet | ${value} feet = ${lengthInMetersRounded} meters`
    volumeAnwer.innerHTML = `${value} liters = ${volumeInGallonsRounded} gallons | ${value} gallons = ${volumeInLitersRounded} liters`
    massAnswer.innerHTML = `${value} kilos = ${massInPoundsRounded} pounds | ${value} pounds = ${massInKilosRounded} kilos`
}
