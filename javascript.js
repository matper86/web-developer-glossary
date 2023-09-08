function buscar() {
    var palabraBuscada = document.getElementById('buscador').value.toLowerCase();
    var definiciones = document.querySelectorAll('.definicion');
    var resultados = document.getElementById('resultados');
    resultados.innerHTML = '';

    definiciones.forEach(function(definicion) {
        var palabra = definicion.getAttribute('data-palabra').toLowerCase();
        var contenido = definicion.innerHTML.toLowerCase();

        if (palabra.includes(palabraBuscada) || contenido.includes(palabraBuscada)) {
            resultados.innerHTML += definicion.innerHTML;
        }
    });

    if (resultados.innerHTML === '') {
        resultados.innerHTML = '<p>No se encontraron definiciones.</p>';
    }
}
// function mostrarElementoOtr() {
//     var elemento4 = document.getElementById("ocultarDat");
//     elemento4.style.display = "none";
//     var elemento4 = document.getElementById("ocultarBie");
//     elemento4.style.display = "none";
//     var elemento4 = document.getElementById("ocultarEdu");
//     elemento4.style.display = "none";
//     var elemento4 = document.getElementById("ocultarExp");
//     elemento4.style.display = "none";
//     var elemento4 = document.getElementById("ocultarObg");
//     elemento4.style.display = "none";
//     var elemento4 = document.getElementById("ocultarOtr");
//     elemento4.style.display = "block";
// }
// var enlaceMostrar = document.getElementById("otr");
// enlaceMostrar.addEventListener("click", function(event) {
//     event.preventDefault();
//     mostrarElementoOtr();
// });