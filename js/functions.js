
let alto = screenY;
let subir = document.getElementById("subir");
let texto = document.getElementsByTagName(".historia")
let historia = document.getElementById("Historia");
let historia1 = document.getElementById("Historia1");
let barra = document.getElementById("barra");
function Mostrartexto(){
    if (historia.style.display == "none"){ 
    
        historia.style.display = "flex";
        historia1.style.display = "flex";
        barra.style.display = "flex";

      } 
      else {
        historia.style.display = "none";
        historia1.style.display = "none";
        barra.style.display = "none";
      }
}
