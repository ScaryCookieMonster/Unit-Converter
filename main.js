const inputEl = document.getElementById("input-el");
const buttonEl = document.getElementById("button-el");
const meterFeetEl = document.getElementById("lengthResults");
const litersGallonsEl = document.getElementById("volumeResults");
const kilogramsPoundsEl = document.getElementById("massResults");

// Click Button
buttonEl.addEventListener("click", function () {
  let value = Number(inputEl.value);
  const feet = (value * 3.28084).toFixed(3);
  const meter = (value * 0.3048).toFixed(3);
  const gallons = (value * 0.264172).toFixed(3);
  const liters = (value * 3.78541).toFixed(3);
  const pounds = (value * 2.20462).toFixed(3);
  const kilograms = (value * 0.453592).toFixed(3);
  lengthConverting(value, meter, feet);
  volumeConverting(value, liters, gallons);
  massConverting(value, kilograms, pounds);
});
// Meter/Feet Function
function lengthConverting(units, meter, feet) {
  meterFeetEl.innerHTML = `<p>${units} meters = ${feet} feet | ${units} feet = ${meter} meters</p>`;
}
// Liters/Gallons Function
function volumeConverting(units, liters, gallons) {
     litersGallonsEl.innerHTML = `<p>${units} liters = ${gallons} gallons | ${units} gallons = ${liters} liters</p>`;
}
// Kgs/Pounds Function
function massConverting(units, kilograms, pounds) {
     kilogramsPoundsEl.innerHTML = `<p>${units} kilos = ${pounds} pounds | ${units} pounds = ${kilograms} kilos</p>`;
}
