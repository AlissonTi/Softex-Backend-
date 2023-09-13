function Tradiconal1(){
    console.log("Função tradicional sem parâmentros")
}

function Tradiconal2(num1 = 5, num2 = 10){
    soma = (num1 + num2)
    return `${soma}`
}

const Tradiconal3 = (num3 = 10, num4 = 5)=>{
    subtracao = (num3 - num4)
    return `${subtracao}`
}

Tradiconal1()
Tradiconal2()
Tradiconal3()
