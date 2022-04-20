import React, { useState } from "react";

import WeatherInfo from "./WeatherInfo";
import WeatherForecast from "./WeatherForecast";

import "./Weather.css";

export default function Weather(props) {
  const [weatherData, setWeatherData] = useState({ ready: false });
}

function handleSubmit(event) {
  event.preventDefault();
}

function handleCity(event) {
  setCity(event.target.value);
}

if (weatherData.ready) {
  <div className="Weather">
    <form onSubmit={handleSubmit}>
      <div className="row">
        <div className="col-9">
          <input
            type="search"
            placeholder="Enter Location"
            className="form-control"
            autoFocus="on"
            onChange={handleCity}
          />
        </div>
        <div className="col-3">
          <input
            type="submit"
            value="Search"
            className="btn btn-primary w-100"
          />
        </div>
      </div>
    </form>
    <WeatherInfo data={weatherData} />
    <WeatherForecast />
  </div>;
}
