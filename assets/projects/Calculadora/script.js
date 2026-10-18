const visor = document.getElementById("visor");

function add(valor) {
const ultimo = visor.value.slice(-1);

if (["+", "-", "*", "/"].includes(valor) &&
["+", "-", "*", "/"].includes(ultimo)) {
return;
}

visor.value += valor;
}

function clean() {
visor.value = "";
}

function calculate() {
try {
visor.value = Function('"use strict"; return (' + visor.value + ')')();
} catch {
visor.value = "Erro";
}
}

function toggleTheme() {
document.body.classList.toggle("light");
}
