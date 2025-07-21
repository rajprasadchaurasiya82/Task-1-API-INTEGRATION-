alert("WELCOME TO WEATHER CASTING")
async function getWeather() {
  const city = document.getElementById("cityInput").value;
  const apiKey = "YOUR_API_KEY"; // Replace with your OpenWeatherMap API key
  const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;

  try {
    const response = await fetch(url);
    const data = await response.json();

    if (data.cod === 200) {
      document.getElementById("weatherResult").innerHTML = `
        <h2>${data.name}</h2>
        <p>🌡 Temp: ${data.main.temp} °C</p>
        <p>⛅ Weather: ${data.weather[0].main}</p>
        <p>💧 Humidity: ${data.main.humidity}%</p>
      `;
    } else {
      document.getElementById("weatherResult").innerText = "City not found!";
    }
  } catch (error) {
    console.error(error);
    document.getElementById("weatherResult").innerText = "Error fetching data.";
  }
}
