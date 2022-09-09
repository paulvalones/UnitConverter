const numInput = document.querySelector("#number_input");
const convertBtn = document.querySelector("#convert_btn");
const lengthValue = document.querySelector("#length_field");
const volumeValue = document.querySelector("#volume_field");
const massValue = document.querySelector("#mass_field");

convertBtn.addEventListener("click", function() {
    const givenNumber = numInput.value;

    lengthValue.textContent = `${getMeterToFeet(givenNumber)} | ${getFeetToMeter(givenNumber)}`;
    volumeValue.textContent = `${getLitersToGallon(givenNumber)} | ${getGallonsToLiter(givenNumber)}`;
    massValue.textContent = `${getKiloToPound(givenNumber)} | ${getPoundToKilo(givenNumber)}`;
})

function getMeterToFeet(number) {
    const feetValue = number * 3.281;

    return`${number} meter(s) = ${feetValue.toFixed(3)} feet`;
}

function getFeetToMeter(number) {
    const meterValue = number / 3.281;

    return `${number} feet = ${meterValue.toFixed(3)} meter(s)`;
}

function getLitersToGallon(number) {
    const gallonsValue = number / 3.78541;

    return `${number} liter(s) = ${gallonsValue.toFixed(3)} gallon(s)`;
}

function getGallonsToLiter(number) {
    const literValue = number * 3.78541;

    return `${number} gallon(s) = ${literValue.toFixed(3)} liter(s)`;
}

function getKiloToPound(number) {
    const poundValue = number * 2.20462;

    return `${number} kilo(s) = ${poundValue.toFixed(3)} pound(s)`
}

function getPoundToKilo(number) {
    const kiloValue = number / 2.20462;

    return `${number} pound(s) = ${kiloValue.toFixed(3)} kilo(s)`
}