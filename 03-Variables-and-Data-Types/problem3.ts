import prompt from 'prompt-sync';

function convertTemperature(temperature: number, unit: "Celsius" | "Fahrenheit" | "Kelvin"): {
    celsius: number;
    fahrenheit: number;
    kelvin: number;
  } {
    // Check if the input is a valid number.
    if (isNaN(temperature)) {
      throw new Error("Invalid temperature");
    }
  
    // Check if the input unit is valid.
    if (unit !== "Celsius" && unit !== "Fahrenheit" && unit !== "Kelvin") {
      throw new Error("Invalid unit");
    }
  
    // Convert the temperature to the other two units.
    let celsius: number;
    let fahrenheit: number;
    let kelvin: number;
  
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
      celsius,
      fahrenheit,
      kelvin,
    };
  }
  
  // Prompt the user for the input temperature and unit.
  const temperature = Number(prompt("Enter a temperature: "));
  const unit = prompt("Enter the unit (Celsius, Fahrenheit, or Kelvin): ") as unknown as "Celsius" | "Fahrenheit" | "Kelvin";
  
  // Convert the temperature and display the results.
  const convertedTemperatures = convertTemperature(temperature, unit);
  
  console.log(`${temperature} ${unit} is equal to ${convertedTemperatures.fahrenheit} Fahrenheit and ${convertedTemperatures.kelvin} Kelvin.`);
  