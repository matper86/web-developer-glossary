    function actualizarFechaHora() {
    const elementoFechaHora = document.getElementById("fecha-hora");
    const opcionesFechaHora = {
    weekday: 'long',
    year: 'numeric',
    month: 'long',
    day: 'numeric',
    hour: 'numeric',
    minute: 'numeric',
    second: 'numeric',
    timeZoneName: 'short',
};
    const zonaHoraria = 'America/New_York';
    const fechaHora = new Date().toLocaleString(undefined, opcionesFechaHora);
    elementoFechaHora.textContent = fechaHora;

    elementoFechaHora.setAttribute('datetime', new Date().toLocaleString('en-US', { timeZone: zonaHoraria }));
}
    actualizarFechaHora();

    setInterval(actualizarFechaHora, 1000);

