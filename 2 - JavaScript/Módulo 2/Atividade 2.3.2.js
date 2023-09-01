let num1, num2, notaminima

num1 = Number(prompt("Informe a primeira nota: "))
num2 = Number(prompt("Informe a segunda nota: "))

notaminima = (21 - (num1 + num2))

console.log("Você tem que tirar no mínimo " + notaminima + " na próxima prova")

if(notaminima <= 10){
    console.log("É uma nota válida para a próxima prova, ESTUDE!!!")
}else{
    console.log("Já está reprovado, estude mais na próxima")
}