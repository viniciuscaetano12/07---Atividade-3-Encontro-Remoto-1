//Sistema para um radar de velocidade 


//Variaveis
let velocidade;

//Entrada
//velocidade = 102
velocidade =  Number(prompt("Digite a velocidade!!!!"))


//Processamento/saída
if (velocidade > 110) {
    //console.log("Você foi multado!!!!!")
    alert("Você foi multado!!!!!")
}

else {
    if (velocidade > 100 && velocidade < 110) {
        //console.log("Você esta sendo notificado por velocidade acima do limite")
        alert("Você esta sendo notificado por velocidade acima do limite")
    }

    else {
        //console.log("Você esta dentro do limite de velocidade")
        alert("Você esta dentro do limite de velocidade")
    }
}  
