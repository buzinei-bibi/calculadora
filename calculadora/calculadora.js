let botoes = document.querySelectorAll("button");
let display = document.getElementById("display");

const numeros = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9", "."];
const operadores = ["+", "-", "*", "/", "%"];

let primeiroNumero = "";
let segundoNumero = "";
let operador = "";
let novoNumero = false;

botoes.forEach((botao) => {
  botao.addEventListener("click", () => {
    const valor = botao.value;

    if (numeros.includes(valor)) {
      montarDisplay(valor);
    }

    if (valor === "c") {
      limparTudo();
    }

    if (valor === "backspace") {
      backspace();
    }

    if (operadores.includes(valor)) {
      escolherOperador(valor);
    }

    if (valor === "=") {
      mostrarResultado();
    }
  });
});

function montarDisplay(valor) {
  if (novoNumero) {
    display.innerText = "0";
    novoNumero = false;
  }

  if (valor === "." && display.innerText.includes(".")) {
    return;
  }

  if (display.innerText === "0" && valor !== ".") {
    display.innerText = valor;
  } else {
    display.innerText += valor;
  }
}

function escolherOperador(valor) {
  if (operador !== "" && !novoNumero) {
    mostrarResultado();
  }

  primeiroNumero = Number(display.innerText);
  operador = valor;
  novoNumero = true;
}

function mostrarResultado() {
  if (operador === "") return;

  segundoNumero = Number(display.innerText);

  let resultado = calcular(primeiroNumero, segundoNumero, operador);

  display.innerText = resultado;

  primeiroNumero = resultado;
  segundoNumero = "";
  operador = "";
  novoNumero = true;
}

function calcular(n1, n2, op) {
  switch (op) {
    case "+":
      return n1 + n2;

    case "-":
      return n1 - n2;

    case "*":
      return n1 * n2;

    case "/":
      if (n2 === 0) {
        return "divisão por zero";
      }
      return n1 / n2;

    case "%":
      return n1 % n2;
  }
}

function limparDisplay() {
  display.innerText = "0";
}

function limparTudo() {
  display.innerText = "0";
  primeiroNumero = "";
  segundoNumero = "";
  operador = "";
  novoNumero = false;
}

function backspace() {
  if (display.innerText.length > 1) {
    display.innerText = display.innerText.slice(0, -1);
  } else {
    display.innerText = "0";
  }
}