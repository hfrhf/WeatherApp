const ApiKey = 'f323a1230cfd485e468093a835603a93';
const ApiUrl = `https://api.openweathermap.org/data/2.5/weather?units=metric&appid=${ApiKey}`;
const Btn = document.getElementById('btn');
const weather = document.getElementById('weather');

async function CheckWeather() {
    let cityInput = document.getElementById('city');
    let cityName = cityInput.value;
    let img = document.querySelector('.weather-icon');

    try {
        let response = await fetch(`${ApiUrl}&q=${cityName}`);

        if (response.status === 404) {
            document.querySelector('.error').style.display = 'block';
            weather.style.display = 'none';
        } else {
            let data = await response.json();
            document.querySelector('.error').style.display = 'none';

            weather.style.display = 'block';
            document.querySelector('.city').innerHTML = data.name;
            document.querySelector('.temp').innerHTML = `${Math.round(data.main.temp)}°C`;
            document.querySelector('.humidity').innerHTML = `${data.main.humidity}%`;
            document.querySelector('.wind').innerHTML = `${data.wind.speed} km/h`;

            switch (data.weather[0].main) {
                case 'Clear':
                    img.src = 'images/clear.png';
                    break;
                case 'Clouds':
                    img.src = 'images/clouds.png';
                    break;
                case 'Drizzle':
                    img.src = 'images/drizzle.png';
                    break;
                case 'Mist':
                    img.src = 'images/mist.png';
                    break;
                case 'Rain':
                    img.src = 'images/rain.png';
                    break;
                default:
                    img.src = '';  
            }
        }
    } catch (error) {
        console.error('حدث خطأ في الطلب:', error);
    }
}

Btn.onclick = () => {
    CheckWeather();
};





