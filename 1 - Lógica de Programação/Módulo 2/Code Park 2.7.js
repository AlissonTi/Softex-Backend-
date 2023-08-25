let erro = false
nome = prompt("Informe o nome completo: ")

while(erro == false){
    ano = Number(prompt("Informe o ano de nascimento: "))
    if(ano >= 1922 && ano <= 2021){
        alert("A idade que "+ nome + " completou/completará é = " + (2022 - ano))
        erro = true
    }
    else{
        alert("Data inválida, digite novamente \n")
        erro = false
    }
}
