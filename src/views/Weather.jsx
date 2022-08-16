import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import fetchWeather from "../requests/request";
import { addWeather } from "../store/actions/weatherActions";
import "./Wheather.css";

import LeftSide from "../components/LeftSide";
import RightSide from "../components/RightSide";

function Weather() {
  const [location, setLocation] = useState();
  const [photo, setPhoto] = useState();
  const weather = useSelector((state) => state?.state.weather);

  // Function

  const getFetchData = (url) => {
    return fetch(url)
      .then((res) => {
        return res.json();
      })
      .catch((error) => console.log(error));
  };

  const fetchPhotoData = () => {
    const randomPhotoFetchUrl = `https://api.unsplash.com/search/photos?query=weather is ${weather?.weather[0].main}&client_id=xaLPn7dqjV-hyOhmhH8KYnNV40Kl8OPmbIfO3V7C2qs&orientation=landscape`;
    getFetchData(randomPhotoFetchUrl)
      .then((data) => {
        let number = parseInt(Math.random() * 10);
        setPhoto(data?.results[number].urls.regular);
        // console.log(data?.results[number]?.urls?.small);
      })
      .catch((error) => console.log(error));
  };

  useEffect(() => {
    fetchWeather(location)
      .then((res) => addWeather(res))
      .catch((err) => console.log(err));
    fetchPhotoData();
  }, [location]);
  return (
    <div>
      <>
        <div className="bgItem">
          <div
            className="container "
            style={{
              backgroundImage: `url(
          ${photo}
        )`,
            }}
          >
            <LeftSide weather={weather} />
            <RightSide weather={weather} setLocation={setLocation} />
          </div>
        </div>
      </>
    </div>
  );
}

export default Weather;
