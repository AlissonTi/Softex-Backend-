terrestre = prompt("É terrestre? ")
if(terrestre == "sim"){
    capacete = prompt("Usa capacete? " )
    if(capacete == "sim"){
        console.log("MOTO")
    }else{
        if(capacete == "nao"){
            cabe = prompt("Cabe apenas uma pessoa? ")
            if(cabe == "sim"){
               pesado = prompt("É pesado? ")
                if(pesado == "sim"){
                   console.log("TRATOR")
                }else{
                    if(pesado == "nao"){
                        pedal = prompt("Tem pedal? ")
                        if(pedal == "sim"){
                            console.log("BICICLETA")
                        }else{
                            if(pedal == "nao"){
                                console.log("Transporte inválido")
                            }
                        }    
                    }
                }
            }else{
                if(cabe == "nao"){
                console.log("Transporte inválido")
                }
            }   
        }
    }    
}else{
    if(terreste = "nao"){
    console.log("Transporte inválido")
    }
}
