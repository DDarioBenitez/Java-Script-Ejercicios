// 1
function saludar(nombre){
    console.log(`Hola ${nombre} bienvenido.`) 
};
saludar("Dario");

// 2
function multiplicar(num1, num2){
    console.log(num1*num2)
};
multiplicar(5,25);

// 3
function areTriangulo(num1, num2){
    console.log(num1*num2/2)
}
function perimetroTriangulo(num1, num2, num3){
    console.log(num1+num2+num3)
}
areTriangulo(5,3)
perimetroTriangulo(4,5,6)

// 4
function calcularPrecio(num1, num2){
    let total= num1*num2;
    let descuento10;
    let descuento20;
    if(num2>=20){
        descuento10=10*total/100
      return total = total-descuento10
    }else if(num2>=10){
        descuento20= 20*total/100
        return total= total-descuento20
    }else {
        return total
    }
};

console.log(calcularPrecio(5,5));
console.log(calcularPrecio(5,30));
console.log(calcularPrecio(20,80));
console.log(calcularPrecio(60,30));

// 5
function esMayorDeEdad(num1){
    let edad=(num1>=18) ? "Mayor de Edad" :  "Menor de Edad"
return  "Eres " + edad
}
console.log(esMayorDeEdad(5));
console.log(esMayorDeEdad(36));
console.log(esMayorDeEdad(18));
console.log(esMayorDeEdad(10));

// 6
function calcularImpuesto(num1){
    let impuesto;
    if(num1>20000){
        let imp20;
        imp20=20*num1/100
        return impuesto =imp20
    }else if(num1>10000 && num1<=20000){
        let imp15;
        imp15= 15*num1/100
        return impuesto = imp15
    }else if(num1<=10000){
        let imp10;
        imp10= 10*num1/100
        return impuesto = imp10
    }
    return impuesto
}
console.log(calcularImpuesto(508700));
console.log(calcularImpuesto(50040));
console.log(calcularImpuesto(500));
console.log(calcularImpuesto(50000));
console.log(calcularImpuesto(56030));

// 7
function verificarDia(num1){
    switch(num1){
        case 1: return "Es dia laboral"
        break;
        case 2: return "Es dia laboral"
        break;
        case 3: return "Es dia laboral"
        break;
        case 4: return "Es dia laboral"
        break;
        case 5: return "Es dia laboral"
        break;
        case 6: return "Es fin de semana"
        break;
        case 7: return "Es fin de semana"
        break; 
    }
}
console.log(verificarDia(1));
console.log(verificarDia(2));
console.log(verificarDia(3));
console.log(verificarDia(4));
console.log(verificarDia(5));
console.log(verificarDia(6));
console.log(verificarDia(7));
