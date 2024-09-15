import "./App.css";
import { useState } from "react";
import Landingpage from "./components/Landingpage";
import MapPage from "./components/MapPage";
import CitiesPage from "./components/CitiesPage";
import axios from "axios";
import { createContext,  useEffect } from "react";
import SettingsPage from "./components/SettingsPage";

import Sidebar from "./components/Sidebar";
import { Box } from "@mui/material";
import { Route, Routes, Outlet } from "react-router-dom";
import Searchbar from "./components/Searchbar"; // Add a city search component
export const WeatherContext = createContext();


 export const WeatherProvider = ({ children, selectCity }) => {
  const [weather, setWeather] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [dailyData,setDailyData] =useState (null);

  const API_KEY = "a698e5b2a375927dfac1065f78c418f2";

  useEffect(() => {
    const fetchWeather = async () => {
      setLoading(true);  // Reset loading state
      setError(null);    // Reset error state
      try {
        const response = await axios.get(
          `https://api.openweathermap.org/data/2.5/weather?q=${selectCity}&appid=${API_KEY}&units=metric`
        );
        setWeather(response.data);
        setDailyData(response.data);
        console.log("Weather Data from API:", response.data); // Log fetched data
      } catch (error) {
        setError("Error fetching weather data");
      } finally {
        setLoading(false); // Done loading
      }
    };
    if (selectCity) {  // Only fetch weather if selectCity is defined
      fetchWeather();
    }
  }, [selectCity]);  // Fetch data whenever selectCity changes

  return (
    <WeatherContext.Provider value={{ dailyData,weather, loading, error }}>
      {children}
    </WeatherContext.Provider>
  );
};
function App() {
  const [selectCity, setSelectCity] = useState("Hyderabad");  // Set initial city
  // Handler for updating the selected city
  const handleCitySearch = (city) => {
    setSelectCity(city);
  };
  return (
    <div className="App">
      <WeatherProvider  selectCity={selectCity}>  {/* Pass selected city */}
        <Box sx={{ display: "flex", height: "100vh", backgroundColor: "#71797E" }}>
          <Sidebar />
          <Box sx={{ flexGrow: 1, padding: "10px" }}>
            <Searchbar onSearch={handleCitySearch} />  {/* Add search city input */}
            <Routes>
              <Route path="/MapPage" element={<MapPage />} />
              <Route path="/Weather" element={<Landingpage />} />
              <Route path="/cities" element={<CitiesPage />} />
              <Route path="/settings" element={<SettingsPage />} />
            </Routes>
            <Outlet />
          </Box>
        </Box>
      </WeatherProvider>
    </div>
  );
}

export default App;
