class Pessoa{
    constructor(nome, idade, filho){
        this.nome = nome
        this.idade = idade
        this.filho = filho
    }
}     
const p1 = new Pessoa("Alisson", 20)
const p2 = new Pessoa("Gabriel", 9, p1)
console.log(p1)
console.log(p2)
