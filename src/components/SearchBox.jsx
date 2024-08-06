import { react, useState } from "react";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import Alert from "@mui/material/Alert";

export default function SearchBox({ updateInfo }) {
  const [error, setError] = useState(false);
  const [city, setCity] = useState("");

  const API_URL = process.env.REACT_APP_API_URL;
  const API_KEY = process.env.REACT_APP_API_KEY;

  const getWeatherInfo = async () => {
    try {
      let response = await fetch(
        `${API_URL}?q=${city}&appid=${API_KEY}&units=metric`
      );
      let jsonResponse = await response.json();
      console.log(jsonResponse);
      let result = {
        temp: jsonResponse.main.temp,
        tempMin: jsonResponse.main.temp_min,
        tempMax: jsonResponse.main.temp_max,
        contry: jsonResponse.sys.country,
        humidity: jsonResponse.main.humidity,
        feelsLike: jsonResponse.main.feels_like,
        weather: jsonResponse.weather[0].description,
        name: jsonResponse.name,
        deg: jsonResponse.wind.deg,
        gust: jsonResponse.wind.gust,
        speed: jsonResponse.wind.speed,
      };
      console.log(result);
      setError(false);
      return result;
    } catch (err) {
      throw err;
    }
  };

  const handleChange = (event) => {
    setCity(event.target.value);
  };

  const handleSubmit = async (event) => {
    try {
      event.preventDefault();
      console.log(city);
      setCity("");
      let newInfo = await getWeatherInfo();
      updateInfo(newInfo);
      setError(false);
    } catch (err) {
      setError(true);
    }
  };

  return (
    <Box
      component="form"
      sx={{
        "& > :not(style)": { m: 1, width: "25ch" },
      }}
      noValidate
      autoComplete="off"
    >
      <TextField
        id="city"
        label="City"
        variant="outlined"
        required
        value={city}
        onChange={handleChange}
      />
      <br />
      <Button variant="contained" type="submit" onClick={handleSubmit}>
        Check
      </Button>

      {error && (
        <p>
          <Alert severity="error">No Such Place Exists...!!!</Alert>
        </p>
      )}
    </Box>
  );
}

// import { react, useState } from "react";
// import Box from "@mui/material/Box";
// import TextField from "@mui/material/TextField";
// import Button from "@mui/material/Button";
// import Alert from "@mui/material/Alert";
// // https://api.openweathermar.org/data/2.5/weather?lat={127.0.0.1}&lon={168.0.0.1}&appid={e09acb74e513e3d734217ae53de9d40c}

// export default function SearchBox({ updateInfo }) {
//   const [error, setError] = useState(false);
//   const [city, setCity] = useState("");
//   // const API_URL = "http://api.openweathermap.org/data/2.5/weather";
//   // const API_KEY = "e09acb74e513e3d734217ae53de9d40c";

//   const API_URL = process.env.REACT_APP_API_URL;
//   const API_KEY = process.env.REACT_APP_API_KEY;

//   let getWeatherInfo = async () => {
//     try {
//       let response = await fetch(
//         `${API_URL}?q=${city}&appid=${API_KEY}&units=metric`
//       );
//       let jsonResponse = await response.json();
//       console.log(jsonResponse);
//       let result = {
//         temp: jsonResponse.main.temp,
//         tempMin: jsonResponse.main.temp_min,
//         tempMax: jsonResponse.main.temp_max,
//         contry: jsonResponse.sys.country,
//         humidity: jsonResponse.main.humidity,
//         feelsLike: jsonResponse.main.feels_like,
//         weather: jsonResponse.weather[0].description,
//         name: jsonResponse.name,
//         deg: jsonResponse.wind.deg,
//         gust: jsonResponse.wind.gust,
//         speed: jsonResponse.wind.speed,
//       };
//       console.log(result);
//       setError(false);
//       return result;
//     } catch (err) {
//       throw err;
//     }
//   };

//   let handleChange = (event) => {
//     setCity(event.target.value);
//   };

//   let handleSubmit = async (event) => {
//     try {
//       event.preventDefault();
//       console.log(city);
//       setCity("");
//       let newInfo = await getWeatherInfo();
//       updateInfo(newInfo);
//       setError(false);
//     } catch (err) {
//       setError(true);
//     }
//   };

//   return (
//     <Box
//       component="form"
//       sx={{
//         "& > :not(style)": { m: 1, width: "25ch" },
//       }}
//       noValidate
//       autoComplete="off"
//     >
//       <TextField
//         id="city"
//         label="City"
//         variant="outlined"
//         required
//         value={city}
//         onChange={handleChange}
//       />
//       <br />
//       <Button variant="contained" type="submit" onClick={handleSubmit}>
//         Check
//       </Button>

//       {error && (
//         <p>
//           <Alert severity="error">No Such Place Exists...!!!</Alert>
//         </p>
//       )}
//     </Box>
//   );
// }
