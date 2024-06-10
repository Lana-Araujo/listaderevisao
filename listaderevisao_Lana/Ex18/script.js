// LANA B C DE ARAUJO
function initMap() {
    const mapOptions = {
        center: { lat: -15.77972, lng: -47.92972 }, // Coordenadas para centro do Brasil
        zoom: 5
    };

    const map = new google.maps.Map(document.getElementById('map'), mapOptions);

    // Marcador para São Paulo
    const saoPauloCoords = { lat: -23.55052, lng: -46.633308 };
    const saoPauloMarker = new google.maps.Marker({
        position: saoPauloCoords,
        map: map,
        title: 'São Paulo'
    });

    const saoPauloInfoWindow = new google.maps.InfoWindow({
        content: '<h2>São Paulo</h2><p>A maior cidade do Brasil.</p>'
    });

    saoPauloMarker.addListener('click', () => {
        saoPauloInfoWindow.open(map, saoPauloMarker);
    });

    // Marcador para Maragogi
    const maragogiCoords = { lat: -9.0122, lng: -35.2228 };
    const maragogiMarker = new google.maps.Marker({
        position: maragogiCoords,
        map: map,
        title: 'Maragogi'
    });

    const maragogiInfoWindow = new google.maps.InfoWindow({
        content: '<h2>Maragogi</h2><p>Litoral de Alagoas.</p>'
    });

    maragogiMarker.addListener('click', () => {
        maragogiInfoWindow.open(map, maragogiMarker);
    });
}
