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
