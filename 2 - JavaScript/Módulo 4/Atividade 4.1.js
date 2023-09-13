function Banco(conta, saldo, tipo, agencia){
    this.conta = conta
    this.saldo = saldo
    this.tipo = tipo
    this.agencia = agencia

    this.buscarsaldo = function () {
        console.log("SALDO DISPONÍVEL: " + this.saldo + " REAIS")
    }

    function Deposito(){
        
    }
}   

let conta1 = new Banco(1023, 200, "Conta Corrente", 51)
console.log(conta1)
conta1.buscarsaldo()



