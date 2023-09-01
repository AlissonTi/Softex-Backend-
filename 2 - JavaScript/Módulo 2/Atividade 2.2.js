let num1, num2, operador

num1 = Number(prompt("Informe o primeiro número: "))
num2 = Number(prompt("Informe o segundo número: "))

operador = prompt("Informe o operação (+ || - || * || /): ")

switch (operador){
    case "+":
        return(num1 + num2) 
        break
    case "+":
        return(num1 - num2) 
        break  
    case "+":
        return(num1 * num2) 
        break 
    case "+":
        return(num1 / num2) 
        break 
    default:
        console.log("Operador inválido!")    
}