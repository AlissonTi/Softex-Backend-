var PatoSelvagem = /** @class */ (function () {
    function PatoSelvagem() {
    }
    PatoSelvagem.prototype.grasnar = function () {
        console.log("Pato selvagem: Quack! Quack!");
    };
    PatoSelvagem.prototype.voar = function () {
        console.log("Pato selvagem: Voando como um pato selvagem");
    };
    return PatoSelvagem;
}());
var AdaptadorPato = /** @class */ (function () {
    function AdaptadorPato(pato) {
        this.pato = pato;
    }
    AdaptadorPato.prototype.cacarejar = function () {
        this.pato.grasnar();
    };
    AdaptadorPato.prototype.voarCurtoDistancia = function () {
        this.pato.voar();
    };
    return AdaptadorPato;
}());
var patoSelvagem = new PatoSelvagem();
var galinhaAdapter = new AdaptadorPato(patoSelvagem);
console.log("Pato Selvagem:");
patoSelvagem.grasnar();
patoSelvagem.voar();
console.log("\nGalinha (usando o Adaptador):");
galinhaAdapter.cacarejar();
galinhaAdapter.voarCurtoDistancia();
