var Computador = /** @class */ (function () {
    function Computador(ram, hdd, cpu, type) {
        this.ram = ram;
        this.hdd = hdd;
        this.cpu = cpu;
        this.type = type;
    }
    Computador.prototype.toString = function () {
        console.log("Ram: ".concat(this.ram));
        console.log("HDD: ".concat(this.hdd));
        console.log("CPU: ".concat(this.cpu));
        console.log("Type: ".concat(this.type, "\n"));
    };
    return Computador;
}());
var Factory = /** @class */ (function () {
    function Factory() {
    }
    Factory.prototype.factoryProduto = function (type) {
        switch (type) {
            case 'PC':
                return new Computador('8GB', '500GB', '3.90GHz', type);
            case 'SERVER':
                return new Computador('32GB', '750GB', '4.90GHz', type);
            default:
                return null;
        }
    };
    return Factory;
}());
var factory = new Factory();
var computador1 = factory.factoryProduto('PC');
var computador2 = factory.factoryProduto('SERVER');
if (computador1) {
    computador1.toString();
}
else {
    console.log('Tipo inválido!');
}
if (computador2) {
    computador2.toString();
}
else {
    console.log('Tipo inválido!');
}
