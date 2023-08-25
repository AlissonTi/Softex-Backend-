//FILA

var fila = []
fila.push(3)
fila.push(7)
fila.push(9)
fila.push(1)
fila.push(0)

console.log(fila)

fila.shift()
console.log(fila)

fila.shift()
console.log(fila)

fila.shift()
console.log(fila)

fila.shift()
console.log(fila)

fila.shift()
console.log(fila)

//PILHA

var pilha = []
pilha.push(3)
pilha.push(7)
pilha.push(9)
pilha.push(1)
pilha.push(0)

console.log(pilha)

pilha.pop()
console.log(pilha)

pilha.pop()
console.log(pilha)

pilha.pop()
console.log(pilha)

pilha.pop()
console.log(pilha)

pilha.pop()
console.log(pilha)

//LISTA

let elementos = [3, 7, 9, 1, 0]
console.log(elementos)

function removerElementos(){
  if (elementos.length > 0){
    const elementoRemovido = elementos.shift()
    console.log(elementos)
  }else{
    console.log("A lista está vazia")
  }
}
removerElementos()
removerElementos()
removerElementos()
removerElementos()
removerElementos()
removerElementos()


