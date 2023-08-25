let animais = [
    ["Tobias", "Cachorro", 3],
    ["Luiz ", "Gato", 2],
    ["Loro", "Pássaro", 1]
]

for(let i = 0; i < animais.length; i++){
    let animal = animais[i]
    console.log( (i+1) + "° Animal: ")
    console.log("Nome: " + animal[0]
    ,"\nEspécie: " + animal[1] + "\nIdade: " + animal[2] + " ano/anos\n\n")
}
