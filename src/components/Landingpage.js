import { Box, Grid, Typography } from "@mui/material";
import React, { useContext, useEffect } from "react";
import DaysChart from "./DaysChart";
import DailyCharts from "./DailyCharts";
import ReportPage from "./ReportPage";

import { WeatherContext } from "../App";

const Landingpage = () => {const { weather,dailyData, loading, error } = useContext(WeatherContext);

useEffect(() => {
  console.log("Weather Object:", weather); // Log the entire weather object
}, [weather]);
console.log("Daily Data:", dailyData); 
 // This effect will trigger when `weather` changes

if (loading) {
  return <Typography variant="h6">Loading...</Typography>;
}

if (error) {
  return <Typography variant="h6" color="error">{error}</Typography>;
}

return (
  <Box sx={{ margin: "1%", width: "100%", height: "100%", mt: "2%" }}>
    {weather ? (
      <Box>
        <Grid container spacing={2}>
          {/* Left Section */}
          <Grid item xs={12} md={7}>
            <Box sx={{ padding: "10px" }}>
              <Typography variant="h4">{weather.name}</Typography>
              <Typography>Wind Speed: {weather.wind?.speed} m/s</Typography>
              <Typography>Clouds: {weather.clouds?.all}%</Typography>
            </Box>
            <Box sx={{ padding: "10px" }}>
              <DailyCharts dailyData={dailyData} />
            </Box>
            <Box sx={{ padding: "5px" }}>
              <ReportPage  dailyData={dailyData}/>
            </Box>
          </Grid>

          {/* Right Section */}
          <Grid item xs={12} md={3}>
            <DaysChart  dailyData={dailyData}/>
          </Grid>
        </Grid>
      </Box>
    ) : (
      <Typography variant="h6">No weather data available.</Typography>
    )}
  </Box>
);
};

export default Landingpage;
