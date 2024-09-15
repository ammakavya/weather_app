import { Box, Card, CardContent, Typography, Grid } from "@mui/material";
import React from "react";
import { MdCloudySnowing } from "react-icons/md";
import WbSunnyIcon from "@mui/icons-material/WbSunny";
import CloudIcon from "@mui/icons-material/Cloud";

const cities = [
  { name: "hyderabad", temperature: 27, weather: "rainy" },
  { name: "Bangalore", temperature: 29, weather: "sunny" },
  { name: "chennai", temperature: 31, weather: "sunny" },
  { name: "warangal", temperature: 33, weather: "cloudy" },
];
const getWeatherIcon = (weather) => {
  switch (weather) {
    case "sunny":
      return <WbSunnyIcon style={{ fontSize: 40 }} />;
    case "cloudy":
      return <CloudIcon style={{ fontSize: 40 }} />;
    case "rainy":
      return <MdCloudySnowing style={{ fontSize: 40 }} />;
    default:
      return <WbSunnyIcon style={{ fontSize: 40 }} />;
  }
};
const CitiesPage = () => {
  return (
    <Box>
      <Box sx={{ marginLeft: "30px" }}>
      
      </Box>
      <Box sx={{ padding: 3 }}>
        <Grid container direction="column" spacing={2}>
          {cities.map((city) => (
            <Grid item key={city.name} sx={{ display: "flex", padding: "5px" }}>
              <Card
                sx={{
                  width: "700px",
                  height: "75px",
                  padding: 2,
                  backgroundColor: "darkgray",
                  borderRadius: "20px",
                  boxShadow: "1px 1px 1px 1px",
                }}
              >
                <CardContent>
                  <Box sx={{ display: "flex" }}>
                    <Box>{getWeatherIcon(city.weather)}</Box>
                    <Typography sx={{ marginLeft: "20%" }} variant="h6">
                      {city.name}
                    </Typography>
                    <Typography sx={{ marginLeft: "25%" }} variant="h4">
                      {city.temperature}°C
                    </Typography>
                  </Box>
                </CardContent>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Box>
    </Box>
  );
};

export default CitiesPage;
