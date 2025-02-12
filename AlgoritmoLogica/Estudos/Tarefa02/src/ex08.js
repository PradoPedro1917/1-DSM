temp = prompt("Entre com a sua temperatura corporal")
temp = parseFloat(temp)
if (temp <= 35){
    console.log("Hipotemia")
}
    if(temp >= 35.1 && temp <= 37.7){
        console.log("Normal")
    }
        if(temp >=37.8 && temp <= 39.5){
            console.log("Febre")
        }
            if(temp >= 39.6 && temp <= 41){
                console.log("Febre alta")
            }
                if(temp >= 41){
                    console.log("Hipertemia")
                }
console.log("Fim")