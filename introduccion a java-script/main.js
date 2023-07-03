// 1
let miNombre= "Dario";

// 2
let miApellido= "Benitez";

// 3
let miEdad= 25;

// 4
let miMascota= "Nami";

// 5 
let edadMascota= 8;

// 6
console.log(miNombre);
console.log(miApellido);
console.log(miEdad);
console.log(miMascota);
console.log(edadMascota);

// 7
let nombreCompleto= miNombre+ " "+ miApellido;
console.log(nombreCompleto)

// 8
let textoPresentacion= `Hola soy ${miNombre} ${miApellido} tengo ${miEdad}, y soy dueño de ${miMascota} que tiene ${edadMascota}`;
console.log(textoPresentacion)
// 9
let sumaEdades= miEdad+edadMascota;
let restaEdades= miEdad-edadMascota;
let productoEdades= miEdad*edadMascota;
let divisionEdades= miEdad/edadMascota;
console.log(sumaEdades);
console.log(restaEdades);
console.log(productoEdades);
console.log(divisionEdades);

// 10
let alumno={
    nombre: "Dario",
    apellido: "Benitez",
    edad: 25,
    altura: 178,
    provincua: "Formosa"
};

console.table(alumno)
console.log(alumno.nombre)
console.log(alumno.apellido)
console.log(alumno.edad)
console.log(alumno.altura)
console.log(alumno.provincua)

// 11
let mascota= {
    nombre: "Nami",
    edad: 8,
    raza: "Meztiza",
    color: "Negro",
    tamaño: "Pequeño"
};
console.table(mascota);
console.log(mascota.nombre);
console.log(mascota.edad);
console.log(mascota.raza);
console.log(mascota.color);
console.log(mascota.tamaño);

// 12
let array= ["Manzana","Pera","Anana","Naranja","Uva"];
console.log(array);
console.log(array[0]);
console.log(array[1]);
console.log(array[2]);
console.log(array[3]);
console.log(array[4]);


// 14
let arrayNum= [1,2,3,4,5];
console.log(arrayNum);
console.log(arrayNum[0]);
console.log(arrayNum[1]);
console.log(arrayNum[2]);
console.log(arrayNum[3]);
console.log(arrayNum[4]);

// 15
let arrayFamilia= ["Papa","Mama","Hermano","Hermana","Abuela"];
console.log(arrayFamilia);
console.log(arrayFamilia[0]);
console.log(arrayFamilia[1]);
console.log(arrayFamilia[2]);
console.log(arrayFamilia[3]);
console.log(arrayFamilia[4]);

// 13
let textoAleatorio = `Cuantas ${array[1]} trae la bolsa? Trae ${arrayNum[3]} para ${arrayFamilia[4]}`;
console.log(textoAleatorio);

// 16
let edadPrompt=  prompt("Ingrese su edad");
 
let soyMayorDeEdad= edadPrompt==18

console.log(`Soy mayor de edad ${soyMayorDeEdad}`)

// 17
let miEdadP=prompt("Ingrese su Edad");
let compañeroEdad= prompt("Ingrese su Edad");
let edadesiguales= miEdadP==compañeroEdad;
let soyMayor= miEdadP>compañeroEdad;
let soyMenor= miEdadP<compañeroEdad;
console.log(`Mi edad es igual a la de mi compañero: ${edadesiguales}`);
console.log(`Mi edad es mayor a la de mi compañero: ${soyMayor}`);
console.log(`Mi edad es menor a la de mi compañero: ${soyMenor}`);

// 18
let edadUsuario= prompt("Ingrese su edad")>6;
let alturaUsuario= prompt("Ingrese su altura")>120;
let puedeSubir= edadUsuario==alturaUsuario;
console.log(`Puede subir a la atraccion ${puedeSubir}`);

// 19
let pase=prompt("Introducir valor del Pase")=="Vip";
let saldo= prompt("Ingrese saldo disponible")>1000;
let puedePasar= `La25 persona puede pasa ${pase || saldo}`;
console.log(puedePasar)