let nomes = ["Alisson", "Beca", "Cirilo", "Dinane", "Emanuel", "Fabio", "Gabriel", "Heitor", "Italo", "João"]
let idades = [10, 18, 17, 11, 15, 13, 21, 20, 20, 19, ]
let cores = ["Azul", "Branco", "Cinza", "Roxo", "Azul", "Vermelho", "Vermelho", "Vermelho", "Vermelho", "Rosa"]

console.log("LISTAS\nNOMES:")
console.log(nomes)
console.log("\nIDADES:")
console.log(idades)
console.log("CORES FAVORITAS:")
console.log(cores + "\n")

idades.pop()
cores.shift()
idades.push(23)
cores.unshift("Amarelo")

console.log("LISTAS ALTERADAS\nNOMES:")
console.log(nomes)
console.log("\nIDADES:")
console.log(idades)
console.log("CORES FAVORITAS:")
console.log(cores)
