/* ------------------------------ TASK 8 ----------------------------
Parašykite TS kodą, kuris leis vartotojui įvesti ilgį metrais ir pamatyti jo pateikto ilgio konvertavimą į:
1. Centimetrus (cm) | Formulė: cm = m * 100
2. Colius (in) | Formulė: in = m * 39.37
3. Pėdas (ft) | Formulė: ft = m * 3.281
4. Mylias (mi) | Formulė: mi = m / 1609
5. Jardus (yd) | Formulė: yd = m * 1.094

Pastaba: Atvaizdavimas turi būti matomas su kiekviena įvestimi ir pateikiamas <div id="output"></div> viduje, bei turi turėti bent minimalų stilių;
------------------------------------------------------------------- */

const inputField = document.getElementById("meter") as HTMLInputElement;
const meterValue = document.getElementById("meter-value") as HTMLSpanElement;
const cmValue = document.getElementById("cm-value") as HTMLSpanElement;
const inchesValue = document.getElementById("inches-value") as HTMLSpanElement;
const feetValue = document.getElementById("feet-value") as HTMLSpanElement;
const milesValue = document.getElementById("miles-value") as HTMLSpanElement;
const yardsValue = document.getElementById("yards-value") as HTMLSpanElement;
let clearedOnce = false; // Stebi, ar laukelis jau buvo išvalytas

function convertLength(meters: number): void {
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
document.querySelector(".input-container")?.appendChild(clearButton);

clearButton.addEventListener("click", () => {
    inputField.value = "";
    convertLength(0); 
    inputField.focus();
});

