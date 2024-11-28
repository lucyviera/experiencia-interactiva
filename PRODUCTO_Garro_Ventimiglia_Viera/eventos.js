let ventanasApagadas = 0; // Contador de ventanas cerradas en la interfaz

// Configuración de los sonidos
var switchSound = new Audio("audio/sonidoluz.mp3");
switchSound.loop = false;
var glitterSound = new Audio("audio/glitter.m4a");
glitterSound.loop = false;

// Función para iniciar la experiencia
function iniciarExperiencia() {
    document.getElementById("overlay").style.display = "none"; // Ocultar el overlay
    // Reproducir el audio
    trafficSound = document.getElementById("trafficAudio");
    trafficSound.play();
    trafficSound.currentTime = 10;
    trafficSound.loop = true;
}

// Reproduce el sonido de cambio de interruptor
function playAudio() {
    switchSound.currentTime = 0;
    switchSound.play();
}

// Verifica el estado de fondo y realiza los cambios finales cuando todas las ventanas estén apagadas
function verificarFondo() {
    if (ventanasApagadas === 6) { // Requiere 6 ventanas apagadas para el cambio
        const fondoImagen = document.querySelector('.fondo');
        const gato = document.getElementById('gatete');
        // Cambiar el fondo
        fondoImagen.src = "img/noche2.jpg"; // Cambia al fondo 2
        // Cambiar el gato a GIF y añadir animación con keyframes
        gato.src = "img/gato.gif"; // Cambia al GIF del gato
        gato.style.animation = "moverGato 1.5s forwards"; // Aplicar animación
        gato.style.cursor = "pointer"; // Cambiar el cursor a pointer
        // Reproducir sonido glitter
        glitterSound.currentTime = 0;
        glitterSound.play();
        // Pausar el sonido del tráfico
        trafficSound.pause();
        // Crear un objeto de sonido para el clic
        const clickSound = new Audio("audio/miau.mp3");
        // Añadir funcionalidad de recargar al hacer clic
        gato.addEventListener("click", () => {
            // Reproducir el sonido de clic
            clickSound.play();
            setTimeout(() => {
                location.reload();
            }, 900); 
        });
         // Cuando termine la animación del gato, cambia la imagen a una estática
         gato.addEventListener("animationend", () => {
            gato.src = "img/gatofinal.gif"; // Cambia a la imagen estática
        });
    }
}

// Función diferente porque es la única que tiene otra animación, indica una acción sin poner un texto
function activarAnimacion()  { 
    const ventana = document.getElementById("prueba1");
    ventana.style.animation = "none";
    ventana.style.backgroundColor = "#030328";
    ventana.style.boxShadow = "none";
    ventana.style.cursor = "default"
    ventana.removeAttribute("onclick");
    ventanasApagadas++;
    verificarFondo();
    if ( switchSound.paused)
        playAudio();
}

function activarAnimacion2() {
    const ventana = document.getElementById("prueba2");
    ventana.style.WebkitAnimationPlayState = "running";
    ventana.style.animationPlayState = "running";
    ventana.removeAttribute("onclick");
    ventana.style.cursor = "default"
    ventanasApagadas++;
    verificarFondo();
    if ( switchSound.paused)
        playAudio(); 
}

function activarAnimacion3() {
    const ventana = document.getElementById("prueba3");
    ventana.style.WebkitAnimationPlayState = "running";
    ventana.style.animationPlayState = "running";
    ventana.removeAttribute("onclick");
    ventana.style.cursor = "default"
    ventanasApagadas++;
    verificarFondo();
    if ( switchSound.paused)
        playAudio(); 
}

function activarAnimacion4() {
    const ventana = document.getElementById("prueba4");
    ventana.style.WebkitAnimationPlayState = "running";
    ventana.style.animationPlayState = "running";
    ventana.removeAttribute("onclick");
    ventana.style.cursor = "default"
    ventanasApagadas++;
    verificarFondo();
    if ( switchSound.paused)
        playAudio();
}

function activarAnimacion5() {
    const ventana = document.getElementById("prueba5");
    ventana.style.WebkitAnimationPlayState = "running";
    ventana.style.animationPlayState = "running";
    ventana.removeAttribute("onclick");
    ventana.style.cursor = "default"
    ventanasApagadas++;
    verificarFondo();
    if ( switchSound.paused)
        playAudio();
}

function activarAnimacion6() {
    const ventana = document.getElementById("prueba6");
    ventana.style.WebkitAnimationPlayState = "running";
    ventana.style.animationPlayState = "running";
    ventana.removeAttribute("onclick");
    ventana.style.cursor = "default"
    ventanasApagadas++;
    verificarFondo();
    if ( switchSound.paused)
        playAudio();
}

function activarAnimacion7() {
    const ventana = document.getElementById("prueba7");
    ventana.style.WebkitAnimationPlayState = "running";
    ventana.style.animationPlayState = "running";
    ventana.removeAttribute("onclick");
    ventana.style.cursor = "default"
    ventanasApagadas++;
    verificarFondo();
    if ( switchSound.paused)
        playAudio();
}

function activarAnimacion8() {
    const ventana = document.getElementById("prueba8");
    ventana.style.WebkitAnimationPlayState = "running";
    ventana.style.animationPlayState = "running";
    ventana.removeAttribute("onclick");
    ventana.style.cursor = "default"
    ventanasApagadas++;
    verificarFondo();
    if ( switchSound.paused)
        playAudio();
}
