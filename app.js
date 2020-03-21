let puntuacionJugador= 0;
let puntuacionOrdenador = 0;
const puntuacionJugador_span = document.getElementById("puntuacion-jugador") //puntuacionUsuario_span.innerHTML
const puntuacionOrdenador_span = document.getElementById("puntuacion-ordenador");
const puntuacion_div = document.querySelector(".puntuacion")
const resultado_div = document.querySelector(".resultado")
const piedra_div = document.getElementById("r")
const papel_div = document.getElementById("p")
const tijera_div = document.getElementById("t")

piedra_div.addEventListener("click", function() {
    partida("piedra")})

papel_div.addEventListener("click", function(){
    partida("papel")
})

tijera_div.addEventListener("click", function(){
    partida("tijera")
})

function seleccionOrdenador() {
    let choicesArray = ["piedra", "papel", "tijera"]
    return choicesArray[Math.floor(Math.random()*3)]
}

function partida(choice){
    let opcionOrdenador = seleccionOrdenador()
    resultado_div.innerHTML=`${choice.toUpperCase()} vs ${opcionOrdenador.toUpperCase()}`

    if (opcionOrdenador == choice){ empate()}
    else if (resultado_div.innerHTML=="PIEDRA vs TIJERA" ||
    resultado_div.innerHTML=="PAPEL vs PIEDRA" ||
    resultado_div.innerHTML=="TIJERA vs PAPEL"){jugadorGana()}
    else{jugadorPierde()}
}

function empate(){
    console.log("no pasa nada, es un empate")
}

function jugadorGana(){
    resultado_div.innerHTML += ". GANASTE! :)"
    puntuacionJugador++;
    puntuacionJugador_span.innerHTML=puntuacionJugador;
}

function jugadorPierde(){
    resultado_div.innerHTML += ". PERDISTE! :("
    puntuacionOrdenador++
    puntuacionOrdenador_span.innerHTML=puntuacionOrdenador;

}
