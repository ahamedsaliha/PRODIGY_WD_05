
document.getElementById('fetchWeatherButton').addEventListener('click', () => {
    const location = document.getElementById('locationInput').value;
    if (location) {
        fetchWeatherData(location);
    }
});

const fetchWeatherData = (location) => {
    // Mock data to simulate an API response
    const mockData = {
        name: location,
        sys: { country: 'Country' },
        main: { temp: 25, humidity: 60 },
        weather: [{ description: 'clear sky' }],
        wind: { speed: 3.5 }
    };

    displayWeatherData(mockData);
};

const displayWeatherData = (data) => {
    const location = `${data.name}, ${data.sys.country}`;
    const temperature = `${data.main.temp} °C`;
    const weather = data.weather[0].description;
    const humidity = `Humidity: ${data.main.humidity}%`;
    const wind = `Wind Speed: ${data.wind.speed} m/s`;

    document.getElementById('location').textContent = location;
    document.getElementById('temperature').textContent = `Temperature: ${temperature}`;
    document.getElementById('weather').textContent = `Weather: ${weather}`;
    document.getElementById('humidity').textContent = humidity;
    document.getElementById('wind').textContent = wind;
};
