alert("JavaScript cargó");
const pantallaInicio = document.getElementById("pantallaInicio");
const invitacion = document.getElementById("invitacion");
const abrir = document.getElementById("abrir");
const musica = document.getElementById("musica");

abrir.addEventListener("click", () => {

    confetti({
        particleCount: 180,
        spread: 120,
        origin: { y: 0.6 }
    });

    pantallaInicio.style.opacity = "0";

    setTimeout(() => {
         pantallaInicio.style.display = "none";
        invitacion.style.display = "block";
        invitacion.style.animation = "aparecer 1s ease";

        if(musica){
            musica.play().catch(()=>{});
        }

    },600);

});

const fechaCumple = new Date("2026-10-24T12:00:00");

function actualizarContador(){

    const ahora = new Date();
    const diferencia = fechaCumple - ahora;

    if(diferencia <= 0){

        document.getElementById("contador").innerHTML =
        "<h2>🎉 ¡Llegó el gran día! 🎉</h2>";

        return;
    }

    const dias = Math.floor(diferencia / (1000*60*60*24));
    const horas = Math.floor((diferencia % (1000*60*60*24)) / (1000*60*60));
    const minutos = Math.floor((diferencia % (1000*60*60)) / (1000*60));
    const segundos = Math.floor((diferencia % (1000*60)) / 1000);

    document.getElementById("dias").textContent = dias;
    document.getElementById("horas").textContent = String(horas).padStart(2,"0");
    document.getElementById("minutos").textContent = String(minutos).padStart(2,"0");
    document.getElementById("segundos").textContent = String(segundos).padStart(2,"0");
}

setInterval(actualizarContador,1000);

actualizarContador();

document.getElementById("mapa").onclick=function(){

window.open("https://www.google.com/maps/search/?api=1&query=Juan+Cruz+Varela+2550+Jose+C+Paz");

}

document.getElementById("whatsapp").onclick=function(){

window.open("https://wa.me/541134770558?text=Hola%20confirmo%20mi%20asistencia%20al%20cumpleaños%20de%20Ámbar%20🐄🎉");
}

