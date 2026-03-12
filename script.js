// Variables globales para guardar el estado
let numeroActual = "0";
let numeroAnterior = "";
let operacionActual = "";
// Función para actualizar la pantalla
function actualizarPantalla() {
const pantalla = document.getElementById("pantalla");
pantalla.textContent = numeroActual;
}
// Función para agregar números
function agregarNumero(numero) {
if (numeroActual === "0") {
numeroActual = numero;
} else {
numeroActual += numero;
}
actualizarPantalla();
}
// Función para manejar operaciones
function operacion(op) {
if (numeroAnterior !== "") {
calcular();
}
operacionActual = op;
numeroAnterior = numeroActual;
numeroActual = "0";
}
// Función para calcular el resultado
function calcular() {
let resultado;
const anterior = parseFloat(numeroAnterior);
const actual = parseFloat(numeroActual);
if (isNaN(anterior) || isNaN(actual)) {
return;
}
switch (operacionActual) {
case "+":
resultado = anterior + actual;
break;
case "-":
resultado = anterior - actual;
break;
case "*":
resultado = anterior * actual;
break;
case "/":
if (actual === 0) {
numeroActual = "Error";
actualizarPantalla();
return;
}
resultado = anterior / actual;
break;
default:
return;
}
numeroActual = resultado.toString();
operacionActual = "";
numeroAnterior = "";
actualizarPantalla();
}
// Función para limpiar
function limpiar() {
numeroActual = "0";
numeroAnterior = "";
operacionActual = "";
actualizarPantalla();
}