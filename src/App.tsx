import "./styles.css";
import WitherApp from "./Components/mainpage";
import axios from "axios";

function showTemperature(response: any) {
  let currentCity = document.querySelector("#city");
  currentCity.innerHTML = response.data.name;
  let currentTemperature = Math.round(response.data.main.temp);
  let temperatureElement = document.querySelector("#temperature");
  temperatureElement.innerHTML = currentTemperature;
}
function showPosition(position: any) {
  let apiKey = "45863935ee9cca4c02ed68203f807c65b";
  let latitude = position.coords.latitude;
  let longitude = position.coords.longitude;
  let units = "metric";
  let apiUrl = `https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&appid=${apiKey}&units=${units}`;

  axios.get(`${apiUrl}&appid=${apiKey}`).then(showTemperature);
}

function getCurrentPosition() {
  navigator.geolocation.getCurrentPosition(showPosition);
}

export default function App() {
  return (
    <div className="App">
      <WitherApp />
    </div>
  );
}
