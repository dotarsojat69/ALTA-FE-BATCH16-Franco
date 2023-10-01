"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var promptSync = require("prompt-sync");
var prompt = promptSync();
function convertTemperature(temperature, unit) {
    // Check if the input is a valid number.
    if (isNaN(temperature)) {
        throw new Error("Invalid temperature");
    }
    // Check if the input unit is valid.
    if (unit !== "Celsius" && unit !== "Fahrenheit" && unit !== "Kelvin") {
        throw new Error("Invalid unit");
    }
    // Convert the temperature to the other two units.
    var celsius;
    var fahrenheit;
    var kelvin;
    switch (unit) {
        case "Celsius":
            celsius = temperature;
            fahrenheit = celsius * 9 / 5 + 32;
            kelvin = celsius + 273.15;
            break;
        case "Fahrenheit":
            fahrenheit = temperature;
            celsius = (fahrenheit - 32) * 5 / 9;
            kelvin = (fahrenheit + 459.67) * 5 / 9;
            break;
        case "Kelvin":
            kelvin = temperature;
            celsius = kelvin - 273.15;
            fahrenheit = kelvin * 9 / 5 - 459.67;
            break;
    }
    // Return the converted temperatures.
    return {
        celsius: celsius,
        fahrenheit: fahrenheit,
        kelvin: kelvin,
    };
}
// Prompt the user for the input temperature and unit.
var temperature = Number(prompt("Enter a temperature: "));
var unit = prompt("Enter the unit (Celsius, Fahrenheit, or Kelvin): ");
// Convert the temperature and display the results.
var convertedTemperatures = convertTemperature(temperature, unit);
console.log("".concat(temperature, " ").concat(unit, " is equal to ").concat(convertedTemperatures.fahrenheit, " Fahrenheit and ").concat(convertedTemperatures.kelvin, " Kelvin."));
