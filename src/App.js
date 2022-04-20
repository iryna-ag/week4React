import React from "react";
import Weather from "./Weather";
import "./App.css";

function App() {
  return (
    <div className="App">
      <div className="container">
        <Weather defaultCity="Simferopol" />
        <footer>
          <small>
            <a
              href="https://github.com/iryna-ag/ReactWeather"
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
export default App;
