import React, { useState } from "react";

export default function WeatherTemperature(props) {
  const [unit, setUnit] = useState("celcius");

  function convertFahrenheit(event) {
    event.preventDefault();
    setUnit("fahrenheit");
  }
  function convertCelcius(event) {
    event.preventDefault();
    setUnit("celcius");
  }
  function fahrenheit() {
    let fahrenheit = (props.celcius * 9) / 5 + 32;
    return fahrenheit;
  }
  if (unit === "celcius") {
    return (
      <span className="temperature">
        {Math.round(props.celcius)}
        <sup>
          <span className="units fw-bold">C</span>
          <span className="units fw-bold">|</span>
          <span className="units fw-bold">
            <a onClick={convertFahrenheit} href="/">
              F
            </a>
          </span>
        </sup>
      </span>
    );
  } else {
    fahrenheit();
    return (
      <span className="temperature">
        {Math.round(fahrenheit())}
        <sup>
          <span className="units fw-bold">
            <a onClick={convertCelcius} href="/">
              C
            </a>
          </span>
          <span className="units fw-bold">|</span>
          <span className="units fw-bold">F</span>
        </sup>
      </span>
    );
  }
}
