/* 
Requisitos:

Las "llaves" de encriptación que utilizaremos son las siguientes:

La letra "e" es convertida para "enter"
La letra "i" es convertida para "imes"
La letra "a" es convertida para "ai"
La letra "o" es convertida para "ober"
La letra "u" es convertida para "ufat"

*/

// Declaracion de variables

let textoEntrada = document.querySelector(".textArea__origen");
let textoSalida = document.querySelector(".textArea__destino");
let msgDestinoAdvertencia = document.querySelector(".texto__destino__advertencia");
let botonCopiar = document.querySelector(".btn__copiar");


function btnEncriptar(){
    if(!validarTextoEntradaEnBlanco(textoEntrada.value)){
        alert("No se ha encontrado ningún texto para encriptar !");
    } else {
        if(validarCaracteresPermitidos(textoEntrada.value)){
            let textoEncriptado = encriptarTexto(textoEntrada.value);
            textoSalida.value = textoEncriptado;

            textoEntrada.value = "";
            textoSalida.style.backgroundImage = "none";
            msgDestinoAdvertencia.innerHTML = "";
            botonCopiar.style.display = "initial";
    
        } else {
            alert("Existen caracteres no permitidos en el texto ingresado !!!!");
        }
    }

    return    
}

function btnDesencriptar(){
    if(!validarTextoEntradaEnBlanco(textoEntrada.value)){
        alert("No se ha encontrado ningún texto para desencriptar !");
    } else {
        if(validarCaracteresPermitidos(textoEntrada.value)){
            let textoDesencriptado = desencriptarTexto(textoEntrada.value);
            textoSalida.value = textoDesencriptado;  

            textoEntrada.value = "";
            textoSalida.style.backgroundImage = "none"; 
            msgDestinoAdvertencia.innerHTML = "";
            botonCopiar.style.display = "initial";                 
        } else {
            alert("Existen caracteres no permitidos en el texto ingresado !!!!");
        }
    }

    return
}

function btnCopiar(){
    
    copiarTexto(textoSalida.value);

    return
}


function encriptarTexto(cadTexto){
    let matrizCodigo = [["e","enter"], ["i","imes"], ["a","ai"], ["o","ober"], ["u","ufat"]];

    for(let i = 0; i < matrizCodigo.length; i++){
        if(cadTexto.includes(matrizCodigo[i][0])){
            cadTexto = cadTexto.replaceAll(matrizCodigo[i][0], matrizCodigo[i][1]);
        }
    }
    console.log(`Texto encriptado: ${cadTexto}`);
    return cadTexto;
}

function desencriptarTexto(cadTexto){
    let matrizCodigo = [["e","enter"], ["i","imes"], ["a","ai"], ["o","ober"], ["u","ufat"]];

    for(let i = 0; i < matrizCodigo.length; i++){
        if(cadTexto.includes(matrizCodigo[i][1])){
            cadTexto = cadTexto.replaceAll(matrizCodigo[i][1], matrizCodigo[i][0]);
        }
    }
    console.log(`Texto desencriptado: ${cadTexto}`);
    return cadTexto;

}

function validarCaracteresPermitidos(cadTexto){
    let caracteresPermitidos = /^[a-z\s]*$/; 
    
    /* 
    ¿Como se lee esta expresion regular /^[a-z\s]*$/ ?
    Rpta: Encontrar una cadena de texto que contenga cero, uno o más coincidencias de letras minusculas (desde la 'a' minuscula hasta la 'z' minuscula) o espacios en blanco.
    
    */

    let resultado = caracteresPermitidos.test(cadTexto);

    console.log(`Verificacion de caracteres permitidos: ${resultado}`);    
    return resultado;
    
}

function validarTextoEntradaEnBlanco(cadTexto){
    
    let longitudTextoEntrada = cadTexto.trim().length;
    
    console.log(`Longitud de texto de entrada: ${longitudTextoEntrada}`);

    return (longitudTextoEntrada != 0) ? true : false;

}


function copiarTexto(cadTexto){

    console.log(`Texto copiado al portapapeles: ${cadTexto}`);

    try{
        navigator.clipboard.writeText(cadTexto);
        alert("Texto copiado al portapapeles exitosamente !");
    } catch(error){
        console.log(`Error al copiar en el portapapeles: ${error}`);
    }

    
}