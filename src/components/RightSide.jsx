import React from "react";
import { uzbCities } from "../store/const";
import SearchIcon from "@mui/icons-material/Search";

function RightSide({ weather, setLocation }) {
  return (
    <div className="rightSide">
      <form className="border-b">
        <input
          type="text"
          id="input"
          //   value={location}
          onChange={(e) => {
            console.log(e);
            setLocation(e.target.value);
          }}
          placeholder="Another location"
        />
        <button>
          <SearchIcon />
        </button>
      </form>
      <ul className="lastLocation border-b">
        {uzbCities.map((city) => (
          <li key={city.value} onClick={() => setLocation(city.name)}>
            {city.name}
          </li>
        ))}
      </ul>

      <p style={{ color: "white" }}>Weather details</p>
      <table className="details border-b">
        <tr>
          <td>Cloudy</td>
          <td>{weather?.clouds.all}%</td>
        </tr>
        <tr>
          <td>Humidity</td>
          <td>{weather?.main.humidity}%</td>
        </tr>
        <tr>
          <td>Wind</td>
          <td>{weather?.wind.speed}km/h</td>
        </tr>
        <tr>
          <td>Rain</td>
          <td>{(weather?.rain && weather?.rain["1h"]) || 0}mm</td>
        </tr>
      </table>
    </div>
  );
}

export default RightSide;
