"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
var readlineSync = require("readline-sync");
var Evento = /** @class */ (function () {
    function Evento() {
        this.observadores = [];
    }
    Evento.prototype.adicionarObservador = function (observador) {
        this.observadores.push(observador);
    };
    Evento.prototype.notificar = function (evento, dados) {
        this.observadores.forEach(function (observador) {
            observador(evento, dados);
        });
    };
    return Evento;
}());
var Editor = /** @class */ (function () {
    function Editor() {
        this.evento = new Evento();
    }
    Editor.prototype.adicionarObservador = function (observador) {
        this.evento.adicionarObservador(observador);
    };
    Editor.prototype.abrir = function () {
        console.log("Editor aberto");
        this.evento.notificar("open", null);
    };
    Editor.prototype.salvar = function () {
        console.log("Conteúdo salvo");
        this.evento.notificar("save", null);
    };
    return Editor;
}());
var TextEditor = /** @class */ (function (_super) {
    __extends(TextEditor, _super);
    function TextEditor() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.linhas = [];
        return _this;
    }
    TextEditor.prototype.insertLine = function (lineNumber, text) {
        this.linhas.splice(lineNumber - 1, 0, text);
    };
    TextEditor.prototype.removeLine = function (lineNumber) {
        this.linhas.splice(lineNumber - 1, 1);
    };
    TextEditor.prototype.getLines = function () {
        return this.linhas;
    };
    return TextEditor;
}(Editor));
var textEditor = new TextEditor();
textEditor.adicionarObservador(function (evento, dados) {
    if (evento === "open") {
        console.log("Editor de texto aberto. Insira as linhas de texto (Digite 'EOF' para encerrar):");
        var lineNumber = 1;
        while (true) {
            var input = readlineSync.question("Linha ".concat(lineNumber, ": "));
            if (input === "EOF") {
                break;
            }
            textEditor.insertLine(lineNumber, input);
            lineNumber++;
        }
        textEditor.salvar();
    }
    else if (evento === "save") {
        console.log("\nConteúdo do arquivo:");
        var lines = textEditor.getLines();
        lines.forEach(function (line, index) {
            console.log("Linha ".concat(index + 1, ": ").concat(line));
        });
    }
});
textEditor.abrir();
