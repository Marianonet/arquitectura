// let edad=20
//     edad=15
//     edad=3
// let nombre="mariano"
// let nombres=["mariano", "ale", "pablo", "damian"]
// let= numeros=[12, 15, 25, 45]
// alert(nombres[3])
// let boolean=true
// alert(boolean)
// let perro={
//     Nombre: "Gala",
//     Raza: "Canice",
//     Edad: 1,
//     Velocidad: 10,
//     Dieta: ["Carne", "Producto", "Agua"]
// }
// alert(perro.Dieta)

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
// function area(radio){
//     let pi= 3.14
//     let cuadrado= radio * radio
//     let resultado= pi * cuadrado
//     console.log( "El área de un círculo con radio " + radio + "mm es igual a " + resultado + "mm²")
// }
// area(10)

// function calcularCuadrado(numero){
//     let cuadrado= numero * numero
//     if(cuadrado>100){
//         cuadrado=100
//         alert("el valor alcanzado es el maximo" + cuadrado)
//     }
//     else{
//         alert("el cuadrado es " + cuadrado)
// }
// }
// calcularCuadrado(5)

// function usuario(nombre){
//     if(nombre!="pablo"){
//         alert("usuario correcto")
//     }
//     else(
//         alert("usuario incorrecto")
//     )
// }
// usuario("jose")

// function cuentaRegresiva(){
//     for(let i=10; i>0; i--)
//         console.log("Repeticion N° " + i)
// }
// cuentaRegresiva()

// let iANames=["Jarvis", "Friday", "Edith", "Karen"]
// function iASaulden(){
//     iANames.forEach(ia => {
//         console.log(ia + ": Hola jefe, ¿cómo está?")
//     })
// }
// iASaulden()

// let bandera = true
// function iniciarCarrera(cantVueltas){
//     var vuelta=0
//     while(bandera){
//         vuelta++
//         console.log("va por la vueltan N:" + vuelta)
//         if(vuelta>=cantVueltas){
//             bandera=false
//         }
//     }
// }
// iniciarCarrera(15)

// function iASaluda(horario, iaName){
//     if(horario < 12){
//     return "buenos dias señor, soy " + iaName + " espero que tenga un hermoso dia"
// }
//     else if(horario < 17){
//         return "buenas tardes jefe, espero que haya almorzado algo" 
//     }
//     else if(horario < 24){
//         return"Buenas noches señor" + iaName + "Deseo que tenga un buen dia"
//     }
//     else{
//         return "El horario que ingresó es erróneo y no corresponde al planeta tierra"
//     }
// }
// let saludo = iASaluda(21, "viernes")
// console.log(saludo)

// let refMyText=document.querySelector("#MyText")
// refMyText.innerHTML="texto ingresado en el div"

// function mostrarTexto(){
//     refMyText.innerHTML="texto mostrado en el div"
// }

// const inputName=document.querySelector("#inp-text")
// const outputText=document.querySelector("#salida-saludo")
// function saludar(){
//     if(inputName.value!=""){
//     const saludoCompleto="hola, me llamo Jarvis..un placer conocerte" + inputName.value
//     outputText.innerHTML=saludoCompleto
//     }
//     else{
//         outputText.innerHTML="Por favor ingresa tu nombre"
//     }
// }
// var nombre=prompt("por favor ingresa tu nombre")
// alert("bienvenido..." + nombre)
// let edad=Number(prompt("ingresa tu edad"))
// if(edad>=18){
//     alert("Puedes ingresar a la pagina")
// }
//     else{
//         alert("No puedes ingresar a la pagina")
//     }
//     let aceptar=confirm("acepta nuestros terminos y condiciones")
//     console.log(aceptar)
//     if(aceptar==true){
//         alert("Gracias por aceptar nuestros terminos y condiciones")
//     }
//         else{
//             alert("no puedes ingresar a la pagina")
//         }

// const refTextAnim=document.querySelector("#mytext")
// function cambiarColorEjemplo(){
//     refTextAnim.classList.toggle("bg-color")
// }


//encontrar el numero mayor:

function numeroMayor(numero1, numero2, numero3, numero4){
    if (numero1>numero2 & numero1>numero3 & numero1>numero4)
        return "El número " + numero1 + " es el mayor de los 4 números ingresados"
    else if(numero2>numero1 & numero2>numero3 & numero2>numero4)
        return "El número " + numero2 + " es el mayor de los 4 números ingresados"
    else if(numero3>numero1 & numero3>numero2 & numero3>numero4)
        return "El número " + numero3 + " es el mayor de los 4 números ingresados"
    else(numero4>numero1 & numero4>numero2 & numero4>numero3)
    return"El número " + numero4 + " es el mayor de los 4 números ingresados"
}
let numeros=numeroMayor(33,26,0,75)
    console.log(numeros)

//encontrar el numero menor:

function numeroMenor(numero1, numero2, numero3, numero4){
        if (numero1<numero2 & numero1<numero3 & numero1<numero4)
            return "El número " + numero1 + " es el menor de los 4 números ingresados"
        else if(numero2<numero1 & numero2<numero3 & numero2<numero4)
            return "El número " + numero2 + " es el menor de los 4 números ingresados"
        else if(numero3<numero1 & numero3<numero1 & numero3<numero4)
            return "El número " + numero3 + " es el menor de los 4 números ingresados"
        else(numero4<numero1 & numero4<numero2 & numero4<numero3)
        return"El número " + numero4 + " es el menor de los 4 números ingresados"
    }
    let numero=numeroMenor(33,26,0,75)
        console.log(numero)

//Definir si un numero es par o impar:

        function numParImpar(num){
            if (num % 2 ===0){
                return "El número " + num + " es par"
        }
            else{
                return "El número " + num + " es impar"
            }
        }
        console.log(numParImpar(8))