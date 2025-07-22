const apiKey = "YOUR_API_KEY"; // Replace with your OpenWeatherMap API key
const apiUrl ="c4b173b0052982762f199cff625ed5c9";

const searchBox = document.getElementById("cityInput");
const searchBtn = document.getElementById("searchBtn");

const weatherIcon = document.getElementById("weatherIcon");
const temp = document.getElementById("temp");
const city = document.getElementById("city");
const humidity = document.getElementById("humidity");
const wind = document.getElementById("wind");

async function checkWeather(cityName) {
    const response = await fetch(apiUrl + cityName + `&appid=${apiKey}`);
    if (response.status === 404) {
        alert("City not found!");
        return;
    }

    const data = await response.json();
    city.textContent = data.name;
    temp.textContent = `${Math.round(data.main.temp)}°C`;
    humidity.textContent = `Humidity: ${data.main.humidity}%`;
    wind.textContent = `Wind Speed: ${data.wind.speed} km/hr`;

    const iconCode = data.weather[0].icon;
    weatherIcon.src = `https://openweathermap.org/img/wn/${iconCode}@2x.png`;
}

searchBtn.addEventListener("click", () => {
    checkWeather(searchBox.value);
});
