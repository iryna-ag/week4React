import React from "react";
import "./WeatherForecast.css";

export default function WeatherForecast() {
  return (
    <div className="WeatherForecast">
      <div className="row">
        <div className="col">
          <div className="WeatherForecastDay">Friday</div>
          <div className="WeatherForecastTemps">
            <span className="WeatherForecast-temp-max">60</span>
            <span className="WeatherForecast-temp-min">45°</span>
          </div>
        </div>
      </div>
    </div>
  );
}
