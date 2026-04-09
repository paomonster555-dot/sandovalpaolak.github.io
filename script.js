let numButtonClicks = 0;
function buttonClicked() {
    numButtonClicks = numButtonClicks + 1;
    document.getElementById("mainDiv").textContent =
        "Button Clicked times: " + numButtonClicks;
}
let promos = 0;
const slides = document.querySelectorAll(".slide");
function mostrarSlide(i) {
    slides.forEach(slide => slide.classList.remove("activo"));
    slides[i].classList.add("activo");
}
function cambiarSlide(direccion) {
    promos += direccion;

    if (promos < 0) {
        promos = slides.length - 1;
    } else if (promos >= slides.length) {
        promos = 0;
    }

    mostrarSlide(promos);
}
