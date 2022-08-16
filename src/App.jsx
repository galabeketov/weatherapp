import { useEffect } from "react";
import fetchWeather from "./requests/request";
import { addWeather } from "./store/actions/weatherActions";
import { Provider } from "react-redux";
import { store } from "./store/store";
import Weather from "./views/Weather";
function App() {
  useEffect(() => {
    fetchWeather("Tashkent")
      .then((res) => addWeather(res))
      .catch((err) => console.log(err));
  }, []);

  return (
    <Provider store={store}>
      <Weather />
    </Provider>
  );
}

export default App;
