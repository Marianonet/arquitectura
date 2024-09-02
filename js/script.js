// let edad=20
//     edad=15
//     edad=3
// let nombre="mariano"
// let nombres=["mariano", "ale", "pablo", "damian"]
// let= numeros=[12, 15, 25, 45]
// let boolean=true
// alert(boolean)
// let perro={
//     Nombre: "Gala",
//     Raza: "Canice",
//     Edad: 1,
//     Velocidad: 5,
//     Dieta: ["Carne", "Producto", "Agua"]
// }
// alert(perro.Nombre)

// function saludar(nombre){
// console.log("hola " + nombre)
// }
// saludar("mariano")
// saludar("ale")

// function calcularCuadrado(numero){
//     let cuadrado= numero * numero
//     console.log("el cuadrado del n°" + numero + " es " + cuadrado
//     )
// }
// calcularCuadrado(5)
// calcularCuadrado(3)

// function mtsCuadrados(largo,ancho){
//     let mts= largo * ancho
//     console.log(mts + " m2")
// }
// mtsCuadrados(3,5)
// mtsCuadrados(6,1)

// function operatoria(numero1,numero2){
//     let opera= numero1 + numero2
//     let opera2= numero1 - numero2
//     let opera3= numero1 / numero2
//     let opera4= numero1 * numero2
//     console.log("resultado " +   opera +  -opera2 + -opera3 + -opera4)
// }
// operatoria(10,5)
function area(radio){
    let pi= 3.14
    let cuadrado= radio * radio
    let resultado= pi * cuadrado
    console.log( "El área de un círculo con radio " + radio + "mm es igual a " + resultado + "mm²")
}
area(10)