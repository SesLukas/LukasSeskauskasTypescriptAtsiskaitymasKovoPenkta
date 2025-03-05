"use strict";
var _a;
const inputField = document.getElementById("meter");
const meterValue = document.getElementById("meter-value");
const cmValue = document.getElementById("cm-value");
const inchesValue = document.getElementById("inches-value");
const feetValue = document.getElementById("feet-value");
const milesValue = document.getElementById("miles-value");
const yardsValue = document.getElementById("yards-value");
let clearedOnce = false;
function convertLength(meters) {
    if (isNaN(meters) || meters < 0) {
        meterValue.textContent = "0";
        cmValue.textContent = "0";
        inchesValue.textContent = "0";
        feetValue.textContent = "0";
        milesValue.textContent = "0";
        yardsValue.textContent = "0";
        return;
    }
    meterValue.textContent = meters.toFixed(2);
    cmValue.textContent = (meters * 100).toFixed(2);
    inchesValue.textContent = (meters * 39.37).toFixed(2);
    feetValue.textContent = (meters * 3.281).toFixed(2);
    milesValue.textContent = (meters / 1609).toFixed(6);
    yardsValue.textContent = (meters * 1.094).toFixed(2);
}
inputField.addEventListener("input", () => {
    const meters = parseFloat(inputField.value);
    convertLength(meters);
});
inputField.addEventListener("focus", () => {
    if (!clearedOnce) {
        inputField.value = "";
        convertLength(0);
        clearedOnce = true;
    }
});
const clearButton = document.createElement("button");
clearButton.textContent = "Clear Input";
clearButton.classList.add("clear-btn");
(_a = document.querySelector(".input-container")) === null || _a === void 0 ? void 0 : _a.appendChild(clearButton);
clearButton.addEventListener("click", () => {
    inputField.value = "";
    convertLength(0);
    inputField.focus();
});
