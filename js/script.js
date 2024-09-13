const refancho=document.querySelector("#inp-frente");
const reflargo=document.querySelector("#inp-largo");
const refoutput=document.querySelector("#output");
function calcularSuperficie(){
    const ancho=parseFloat(refancho.value);
    const largo=parseFloat(reflargo.value);
    if(refancho.value<=0){
        alert("Debe ingresar una medida de terreno de mas de cero");
    }
    else if(reflargo.value<=0){
        alert("Debe ingresar una medida de terreno de mas de cero");
    }
    else{
        const superficie = ancho * largo;
        refoutput.classList.add("respuesta");
        refoutput.innerHTML="La superficie de tu terreno es de " + superficie + "m²";
    }
}