// LANA B C DE ARAÚJO 
function makeReservation() {
    const date = document.getElementById('date').value;
    const time = document.getElementById('time').value;

    if (date && time) {
        const reservationStatus = document.getElementById('reservation-status');
        reservationStatus.textContent = `Reserva feita para ${date} às ${time}.`;
    } else {
        alert('Por favor, selecione uma data e hora.');
    }
}
