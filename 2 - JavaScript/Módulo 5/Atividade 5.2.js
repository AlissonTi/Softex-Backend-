const prompt = require('readline-sync');

let num1 = Number(prompt.question("Digite o primeiro numero: "))
let num2 = Number(prompt.question("Digite o segundonumero: "))
let resultado = (num1 / num2)


try{
    if(num2 == 0){
        throw new ERROR
    }
    console.log("\nResultado da divisao = ", resultado)
}catch(error){
    console.log("\nDivisão por zero não existe, o programa será finalizado...")
}finally{
    console.log("Programa finalizado com sucesso")
}