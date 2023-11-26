var SistemaSeguranca = /** @class */ (function () {
    function SistemaSeguranca() {
        this.senhaBaseSecreta = "senhaSuperSecreta";
    }
    SistemaSeguranca.getInstance = function () {
        if (!SistemaSeguranca.instancia) {
            SistemaSeguranca.instancia = new SistemaSeguranca();
        }
        return SistemaSeguranca.instancia;
    };
    SistemaSeguranca.prototype.acessarBaseSecreta = function (senhaInserida) {
        if (senhaInserida === this.senhaBaseSecreta) {
            console.log("Acesso concedido a base secreta");
        }
        else {
            console.log("Acesso negado a base secreta");
        }
    };
    SistemaSeguranca.instancia = null;
    return SistemaSeguranca;
}());
var sistemaSeguranca = SistemaSeguranca.getInstance();
sistemaSeguranca.acessarBaseSecreta("senhaIncorreta");
sistemaSeguranca.acessarBaseSecreta("senhaSuperSecreta");
