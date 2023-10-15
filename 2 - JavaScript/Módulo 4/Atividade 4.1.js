function Banco(conta, saldo, tipo, agencia){
    this.conta = conta
    this.saldo = saldo
    this.tipo = tipo
    this.agencia = agencia

    this.Buscarsaldo = function(){
        console.log("SALDO DISPONÍVEL: " + saldo + " REAIS")
    }
    this.Deposito = function(valor = 50){
        this.saldo = this.saldo + valor
        console.log("SALDO DEPOIS DO DEPOSITO: " + this.saldo + " REAIS")
    }
    this.Saque = function(valor = 50){
        this.saldo = this.saldo - valor
        console.log("SALDO DEPOIS DO SAQUE: " + this.saldo + " REAIS")
    }
    this.Numconta = function(){
        console.log("CONTA NÚMERO: " + this.conta)
    } 
} 
let conta1 = new Banco(1023, 200, "Conta Corrente", 51)
conta1.Buscarsaldo()
conta1.Deposito()
conta1.Saque()
conta1.Numconta()
