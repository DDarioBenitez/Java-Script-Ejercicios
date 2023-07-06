// 1
function compararNum(num1, num2){
    if(num1>num2){
        console.log(`${num1} es mayor que ${num2}`)
    }
}
compararNum(220,5)

//2 
function compararIgualdad(num1, num2){
    if(num1==num2){
        console.log(`${num1} son iguales ${num2}`)
    } else{
        console.log(`${num1} es diferente de ${num2}`)
    }
}
compararIgualdad(30,50)
compararIgualdad(20,20)

//3 
function mayorOIgual(num1, num2){
    if(num1>num2){
        console.log(`${num1} es mayor`)
    }else if(num2>num1){
        console.log(`${num2} es mayor`);
    }else{
        console.log("son iguales")
    }
}
mayorOIgual(4,4)
mayorOIgual(9,2)
mayorOIgual(2,20)

//4
function cualEsMenor(num1,num2,num3){
    if(num1<num2 && num1<num3){
        console.log(num1)
    }else if( num2<num1 && num2<num3){
        console.log(num2);
    }else if(num3<num2 && num3<num1){
        console.log(num3)
    }
}
cualEsMenor(2,3,4)

//5 
let obj1= {
    nombre: "Dario",
    edad: 25,
    altura: 178,
}

let obj2={
    nombre: "Anahi",
    edad: 20,
    altura: 158,
}

function compararAltura(persona1,persona2){
    let masAlto
    if (persona1.altura > persona2.altura){
        masAlto=persona1.nombre;
    } else if(persona1.altura<persona2.altura){
        masAlto=persona2.nombre;
    }
    return masAlto
}
function compararEdad(persona1, persona2){
    let mayor
    if (persona1.edad>persona2.edad){
        mayor=persona1.nombre
    }else if(persona1.edad<persona2.edad){
        mayor=persona2.nombre
    }
    return mayor
}

function compararPersonas(persona1,persona2){
    console.log(`${compararAltura(persona1, persona2)} es mas alto y ${compararEdad(persona1,persona2)} es mas grande`)
}
compararPersonas(obj1,obj2)

//6

// function capacitadoParaConducir(nombre, edad, altura, vision){
//     nombre = prompt("Ingrese su Nombre")
//     edad = prompt("Ingrese su Edad")
//     altura= prompt("Ingrese su Altura")
//     vision= prompt("Ingrese su Rango de vision (1-10)")
//     if (edad>=18 && altura<150 && vision>=8 || vision<=10){
//         console.log("Puede conducir")
//     }else{
//         console.log("No puede conducir")
//     }
// }
// capacitadoParaConducir()

//7

// function definirVip(nombre, pase, entrada){
//     nombre=prompt("Ingrese su Nombre")
//     pase=prompt("Tipo de Pase? (vip-normal)")
//     entrada=prompt("Posee entrada?")
//     if (nombre==="Dario" || pase==="vip"){
//         console.log("Bienvenido puede pasar")
//     }else if( entrada==="si"){
//         let seguirAvanzando=prompt("Desea utilizarla?")
//         if(seguirAvanzando==="si"){
//             console.log("Bienvenido puede pasar")
//         }
//     }else{
//        let comprar = prompt("Desea Comprar?")
//        if (comprar==="si"){
//         let saldo = prompt("Coloque dinero disponible")
//         if(saldo>=1000){
//             console.log("Compra exitosa, bienvenido puede pasar")
//         }else{
//             console.log("Su saldo es insuficiente")
//         }
//        }else{
//         console.log("Lo siento no puede ingresar")
//        }
//     }
// }
// definirVip()

//8

function adivinanza(numeroIngresado, numeroIncongnita){
    numeroIncongnita=7
    numeroIngresado=prompt("Ingrese un Numero")
    function esMayor(numeroIncongnita,numeroIngresado){
        if(numeroIngresado==numeroIncongnita){
            console.log("Ganaste, has adivinado el Numero")
        }else{
            prompt("El numero ingresado es Mayor, vuelve a intentarlo")
        }
        if(numeroIngresado==numeroIncongnita){
            console.log("Ganaste, has adivinado el Numero")
        }else{
            prompt("El numero ingresado es Mayor, vuelve a intentarlo")
        }
    }
     function esMenor(numeroIncongnita,numeroIngresado){
        if(numeroIngresado==numeroIncongnita){
            console.log("Ganaste, has adivinado el Numero")
        }else{
            prompt("El numero ingresado es Menor, vuelve a intentarlo")
        }
        if(numeroIngresado==numeroIncongnita){
             console.log("Ganaste, has adivinado el Numero")
        }else{
            prompt("El numero ingresado es Menor, vuelve a intentarlo")
        }
            console.log("Lo Siento fallaste")
    }
    if (numeroIncongnita>numeroIngresado){
        esMenor(numeroIncongnita,numeroIngresado)
    }else{
        esMayor(numeroIncongnita,numeroIngresado)
    }
}
adivinanza()