const inputEl = document.getElementById("input-el");
const buttonEl = document.getElementById("button-el");
const meterFeetEl = document.getElementById("meter/feet");
const litersGallonsEl = document.getElementById("liters/gallons");
const kilogramsPoundsEl = document.getElementById("kilograms/pounds");
const value = Number(inputEl.value);

// Click Button
buttonEl.addEventListener("click", function () {
  lengthConverting(value)
  volumeConverting(value)
  massConverting(value)
});
// Meter/Feet Function
function lengthConverting(units) {

}
// Liters/Gallons Function
function volumeConverting(units) {
}
// Kgs/Pounds Function
function massConverting(units) {

}
