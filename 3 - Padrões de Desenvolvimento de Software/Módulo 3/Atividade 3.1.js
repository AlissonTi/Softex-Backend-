"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var readlineSync = require("readline-sync");
var Soma = /** @class */ (function () {
    function Soma() {
    }
    Soma.prototype.execute = function (a, b) {
        return a + b;
    };
    return Soma;
}());
var Subtracao = /** @class */ (function () {
    function Subtracao() {
    }
    Subtracao.prototype.execute = function (a, b) {
        return a - b;
    };
    return Subtracao;
}());
var Multiplicacao = /** @class */ (function () {
    function Multiplicacao() {
    }
    Multiplicacao.prototype.execute = function (a, b) {
        return a * b;
    };
    return Multiplicacao;
}());
var Calculadora = /** @class */ (function () {
    function Calculadora() {
        this.operacao = null;
    }
    Calculadora.prototype.setOperacao = function (operacao) {
        this.operacao = operacao;
    };
    Calculadora.prototype.calcular = function (a, b) {
        if (this.operacao) {
            return this.operacao.execute(a, b);
        }
        else {
            throw new Error("Operação não definida. Defina uma operação antes de calcular.");
        }
    };
    return Calculadora;
}());
var calculadora = new Calculadora();
var a = parseInt(readlineSync.question("Digite o primeiro valor: ")) || 0;
var b = parseInt(readlineSync.question("Digite o segundo valor: ")) || 0;
var operacaoSelecionada = readlineSync.question("Digite a operacao (+ para soma, - para subtracao, * para multiplicacao): ");
var operacao;
switch (operacaoSelecionada) {
    case "+":
        operacao = new Soma();
        break;
    case "-":
        operacao = new Subtracao();
        break;
    case "*":
        operacao = new Multiplicacao();
        break;
    default:
        throw new Error("Operação inválida.");
}
calculadora.setOperacao(operacao);
var resultado = calculadora.calcular(a, b);
console.log("Resultado da opera\u00E7\u00E3o: ".concat(resultado));
