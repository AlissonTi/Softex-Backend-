candidato_X = 889
candidato_Y = 847
candidato_Z = 515
branco = 0
quantvotosX = 0
quantvotosY = 0
quantvotosZ = 0
quantvotosB = 0

voto = Number(prompt("Informe o número do candidato que está votando: "))

if(voto == candidato_X){
    quantvotosX++
}else if(voto == candidato_Y){
    quantvotosY++
}else if(voto == candidato_Z){
    quantvotosZ++ 
}else if(voto == branco){
    quantvotosB++  
}else{
    quantvotosB++
}    
    
result = prompt("Deseja finalizar a votação? sim ou nao?  ")

while(result == "nao"){
    voto = Number(prompt("Informe o número do candidato que está votando: "))
    if(voto == candidato_X){
        quantvotosX++
    }else if(voto == candidato_Y){
      quantvotosY++
    }else if(voto == candidato_Z){
        quantvotosZ++ 
    }else if(voto == branco){
        quantvotosB++    
    }else{
        quantvotosB++
    }
    result = prompt("Deseja finalizar a votação? sim ou nao?  ")
}

console.log("Votos do candidade X: " + quantvotosX)
console.log("Votos do candidade Y: " + quantvotosY)
console.log("Votos do candidade Z: " + quantvotosZ)
console.log("Votos em branco: " + quantvotosB)

if(quantvotosX > quantvotosY && quantvotosX > quantvotosZ && quantvotosX > quantvotosB){
    console.log("O primeiro é o candidato X com " + quantvotosX + " votos")
} else if(quantvotosY > quantvotosX && quantvotosY > quantvotosZ && quantvotosY > quantvotosB){
    console.log("O primeiro é o candidato Y com " + quantvotosY + " votos")
}else if(quantvotosZ > quantvotosX && quantvotosZ > quantvotosY && quantvotosZ > quantvotosB){
    console.log("O primeiro é o candidato Z com " + quantvotosZ + " votos")
} else if(quantvotosB > quantvotosX && quantvotosB > quantvotosY && quantvotosB > quantvotosZ){
    console.log("O primeiro é o candidato B com " + quantvotosB + " votos")
}else{
    console.log("Votação inválida")
}
