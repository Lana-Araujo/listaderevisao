// LANA B C DE ARAÚJO 
const API_KEY = '02c1b1febfce7d7c483d30921cc302a4';
const weatherInfo = document.getElementById('weather-info');

function getWeather() {
    const city = document.getElementById('city').value;

    if (city) {
        fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&units=metric`)
            .then(response => {
                if (!response.ok) {
                    throw new Error('Não foi possível obter os dados do clima.');
                }
                return response.json();
            })
            .then(data => {
                console.log('Dados do clima:', data);
                const weatherDescription = data.weather[0].description;
                const temperature = data.main.temp;

                weatherInfo.innerHTML = `<p><strong>Clima:</strong> ${weatherDescription}</p>
                                         <p><strong>Temperatura:</strong> ${temperature}°C</p>`;
            })
            .catch(error => {
                console.error('Erro ao obter dados do clima:', error);
                weatherInfo.textContent = 'Erro ao obter dados do clima. Por favor, tente novamente mais tarde.';
            });
    } else {
        alert('Por favor, insira o nome de uma cidade.');
    }
}
