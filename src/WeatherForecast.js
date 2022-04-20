import React from "react";
import "./WeatherForecast.css";

export default function WeatherForecast() {
  return (
    <div className="WeatherForecast">
      <div className="row">
        <div className="col">
          <div className="WeatherForecastDay"></div>
          <div className="WeatherForecastTemps">
            <span className="WeatherForecast-temp-max"></span>
            <span className="WeatherForecast-temp-min"></span>
          </div>
        </div>
      </div>
    </div>
  );
}
