let numeroSecreto = 0;
let intentos = 0;
let listaNumerosSorteados=[];
let numeroMaximo = 10;


console.log(numeroSecreto);
function asignarTextoElemento(elemento, texto){
    let elementoHTML = document.querySelector(elemento);
elementoHTML.innerHTML = texto;
return;
}

function verificarIntento(){
    let numeroDeUsuario = parseInt(document.getElementById('valorUsuario').value);

    console.log(intentos);
    if (numeroDeUsuario===numeroSecreto){
        asignarTextoElemento('p',`Felicidades, has acertado en ${intentos} ${(intentos===1)?'intento' : ' intentos'}!`);
        document.getElementById('reiniciar').removeAttribute('disabled');
    
    }else{
        if (numeroSecreto > numeroDeUsuario){
            asignarTextoElemento('p','Ingresa un numero mayor');
        }else{
            asignarTextoElemento('p','Ingresa un numero menor')
        }

            intentos++;
            limpiarCaja();
    }

    
    return;
}

function limpiarCaja(){
    document.querySelector('#valorUsuario').value='';
    
}

function generarNumeroSecreto() {
    
    let numeroGenerado =  Math.floor(Math.random()*numeroMaximo)+1;

    console.log(numeroGenerado);
    console.log(listaNumerosSorteados);

    //si ya sorteamos todos los numeros

    if(listaNumerosSorteados.length==numeroMaximo){
        asignarTextoElemento('p','Ya se sortearon todos los numeros posibles');

    }else{

    if (listaNumerosSorteados.includes(numeroGenerado)){
        return generarNumeroSecreto();

    }else{
        listaNumerosSorteados.push(numeroGenerado);
        return numeroGenerado;
    }
    
}
}
function condicionesIniciales(){
    asignarTextoElemento('h1', 'Juego del codigo secreto!');
    asignarTextoElemento('p', `Indica un numero del 1 al ${numeroMaximo}`);
    numeroSecreto=generarNumeroSecreto();
    intentos =  1;
}


function reiniciarJuego(){
    //limpiar caja
    limpiarCaja();
    //generar mensaje de intervalos de numeros
    condicionesIniciales();
    document.querySelector('#reiniciar').setAttribute('disabled','true');
}
condicionesIniciales();