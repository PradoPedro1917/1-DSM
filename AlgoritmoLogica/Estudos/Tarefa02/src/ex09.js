peso = prompt("Entre com o peso (Kg)")
peso = parseFloat(peso)
altura = prompt("Entre com sua altura (M)")
altura = parseFloat(altura)
imc = peso / (altura * altura)
if (imc >= 40){
    console.log("Obesidade morbida")
}
    if(imc >= 35 && imc <= 39.9){
        console.log("Obesidade grau II(severa)")
    }
        if(imc >= 30 && imc <= 34.9){
            console.log("Obesidade grau I")
        }
            if(imc >= 25 && imc <= 29.9){
            console.log("Levemente acima do peso")
            }
                if(imc >= 18.6 && imc <= 24.9){
                    console.log("Peso ideal (parabéns)")
                }
                    if(imc <= 18.5){
                        console.log("Abaixo do peso")
                    }
console.log("Fim")
