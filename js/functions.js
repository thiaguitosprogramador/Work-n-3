let btnReadMore = document.getElementById("read-more");
let subir = document.getElementById("subir");
let texto = document.getElementsByTagName(".historia")
let historia = document.getElementById("Historia");
let historia1 = document.getElementById("Historia1");
let barra = document.getElementById("barra");

btnReadMore.addEventListener("click", function() {
    historia.classList.toggle("show-more-history");
    historia1.classList.toggle("show-more-history");
    barra.classList.toggle("show-more-history");
})
// Mostrar u ocultar el botón de acuerdo con el desplazamiento de la página
window.addEventListener('scroll', function() {
    const button = document.getElementById('scrollToTopBtn');
    if (window.scrollY > 200) { // Muestra el botón si se ha desplazado más de 200px
        button.classList.add('show');
    } else {
        button.classList.remove('show');
    }
});

// Función para desplazar hacia arriba
function scrollToTop() {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
}
