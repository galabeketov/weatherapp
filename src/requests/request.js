import axios from "axios";
const URL = "https://api.openweathermap.org/data/2.5/weather";
const API_KEY = "a7b7e802782d4c09326c8d0970ede991";
export default async function fetchWeather(query) {
  const { data } = await axios.get(URL, {
    params: {
      q: query ?? "Tashkent",
      units: "metric",
      APPID: API_KEY,
    },
  });
  return data;
}
