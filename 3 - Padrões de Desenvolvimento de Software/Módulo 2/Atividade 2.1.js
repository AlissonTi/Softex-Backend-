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
var SanduicheBase = /** @class */ (function () {
    function SanduicheBase() {
    }
    SanduicheBase.prototype.custo = function () {
        return 4.5;
    };
    SanduicheBase.prototype.descricao = function () {
        return "Sanduíche de Frango Assado";
    };
    return SanduicheBase;
}());
var Decorator = /** @class */ (function () {
    function Decorator(sanduiche) {
        this.sanduiche = sanduiche;
    }
    return Decorator;
}());
var PepperoniDecorator = /** @class */ (function (_super) {
    __extends(PepperoniDecorator, _super);
    function PepperoniDecorator() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    PepperoniDecorator.prototype.custo = function () {
        return this.sanduiche.custo() + 0.99;
    };
    PepperoniDecorator.prototype.descricao = function () {
        return "".concat(this.sanduiche.descricao(), ", Pepperoni");
    };
    return PepperoniDecorator;
}(Decorator));
var QueijoMussarelaRaladoDecorator = /** @class */ (function (_super) {
    __extends(QueijoMussarelaRaladoDecorator, _super);
    function QueijoMussarelaRaladoDecorator() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    QueijoMussarelaRaladoDecorator.prototype.custo = function () {
        return this.sanduiche.custo() + 2.0;
    };
    QueijoMussarelaRaladoDecorator.prototype.descricao = function () {
        return "".concat(this.sanduiche.descricao(), ", Queijo Mussarela Ralado");
    };
    return QueijoMussarelaRaladoDecorator;
}(Decorator));
var sanduiche = new SanduicheBase();
sanduiche = new PepperoniDecorator(sanduiche);
sanduiche = new QueijoMussarelaRaladoDecorator(sanduiche);
console.log("".concat(sanduiche.descricao(), " custa $").concat(sanduiche.custo().toFixed(2)));
