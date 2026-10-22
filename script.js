
const input = document.getElementById("celsius");
const boton = document.getElementById("convertir");
const error = document.getElementById("error");
const kelvinTexto = document.getElementById("kelvin");
const fahrenheitTexto = document.getElementById("fahrenheit");


function convertir() {

  error.textContent = "";
  kelvinTexto.textContent = "";
  fahrenheitTexto.textContent = "";

  const entrada = input.value.trim().replace(",", ".");
  const celsius = Number(entrada);

  if (entrada === "" || isNaN(celsius)) {
    error.textContent = "Error: debes ingresar un valor numérico.";
    input.value = "";
    input.focus(); 
    return;
  }

  const kelvin = celsius + 273.15;
  const fahrenheit = (celsius * 9) / 5 + 32;

  const resultadoK = "Grados Kelvin: " + Number(kelvin.toFixed(2));
  const resultadoF = "Grados Fahrenheit: " + Number(fahrenheit.toFixed(2));

  kelvinTexto.textContent = resultadoK;
  fahrenheitTexto.textContent = resultadoF;
  console.log(resultadoK);
  console.log(resultadoF);
}

boton.addEventListener("click", convertir);