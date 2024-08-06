import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import WeatherApp from "./components/WeatherApp";

function App() {
  const [count, setCount] = useState(0);
  console.log(process.env.REACT_APP_API_URL);
  return (
    <div className="main-layar">
      <h1>Search For the Weather</h1>
      <WeatherApp />
    </div>
  );
}

export default App;
