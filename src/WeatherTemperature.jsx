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
        <span className="units">
          <sup>C</sup>
        </span>
        <span className="units">
          <sup>|</sup>{" "}
          <a onClick={convertFahrenheit} href="/">
            <sup>F</sup>
          </a>
        </span>
      </span>
    );
  } else {
    fahrenheit();
    return (
      <span className="temperature">
        {Math.round(fahrenheit())}
        <sup>
          <span className="units">
            <a onClick={convertCelcius} href="/">
              <sup>C</sup>
            </a>
            <span className="units">
              <sup>|F</sup>{" "}
            </span>
          </span>
        </sup>
      </span>
    );
  }
}
