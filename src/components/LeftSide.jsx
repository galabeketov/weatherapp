import React from "react";

function LeftSide({ weather }) {
  return (
    <div className="leftSide">
      <p>the.weather</p>
      <div className="flex mainDetails">
        <h1>{weather?.main?.temp}º</h1>
        <div>
          <h1>{weather?.name}</h1>
          {/* <p>{getFormattedTime(weather)}</p> */}
        </div>
        <div>
          <img
            src={`http://openweathermap.org/img/wn/${weather?.weather?.[0]?.icon}.png`}
            alt="icon"
          />
          <p>{weather?.weather[0].main}</p>
        </div>
      </div>
    </div>
  );
}

export default LeftSide;
