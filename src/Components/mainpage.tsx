import * as React from "react";
const Search = () => {
  return (
    <form className="search-form" id="search-form">
      <div
        className="container"
        style={{ display: "flex", justifyContent: "center" }}
      >
        <div className="row">
          <div className="col-9">
            <input
              type="search"
              placeholder="Type a city.."
              id="city-input"
              autoFocus={true}
              autoComplete="off"
              className="form-control shadow-sm"
            />
          </div>

          <div className="col-3">
            <button
              type="submit"
              className="form-control btn btn-primary shadow-sm"
            >
              Search
            </button>
          </div>
          <div className="col-3">
            <button
              className="btn btn-success w-100"
              id="current-location-button"
            >
              Current
            </button>
          </div>
        </div>
      </div>
    </form>
  );
};

const Info = () => {
  return (
    <div className="col-6">
      <div className="clearfix">
        <div className="float-left">
          <span className="temperature" id="temperature">
            19
          </span>
          <span className="units">
            <span id="celsius">°C</span>{" "}
          </span>
        </div>
      </div>
    </div>
  );
};

const Hum = () => {
  return (
    <div className="col-6">
      <ul>
        <li>Precipitation: 0%</li>
        <li>Humidity: 77%</li>
        <li>Wind: 8 km/h</li>
      </ul>
    </div>
  );
};

const City = () => {
  return (
    <div className="weather-app">
      <h1 id="city">Lviv, Ukraine</h1>
      <ul>
        <li className="today" id="date"></li>
        <li>Partly Cloudy</li>
      </ul>
    </div>
  );
};
const WitherApp = (data: any) => {
  return (
    <div className="container">
      <div className="weather-app">
        <video id="background-video" autoPlay loop muted poster="">
          <source
            src={require("./Lightning Bolt At Night.mp4")}
            type="video/mp4"
          />
        </video>
        <City />
        <div className="row">
          <Search />
          <Info />
          <Hum />
        </div>
      </div>
    </div>
  );
};
export default WitherApp;
