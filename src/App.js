import React from "react";
import Weather from "./Weather";
import "./App.css";

export default function App() {
  return (
    <div className="App">
      <div className="container">
        Weather App
        <Weather defaultCity="Simferopol" />
        <footer>
          <small>
            <a
              href="https://github.com/iryna-ag/week4React"
              target="_blank"
              rel="noreferrer"
            >
              Open-source code
            </a>
            , by Iryna Agafonov
          </small>
        </footer>
      </div>
    </div>
  );
}
