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