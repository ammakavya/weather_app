import { Box, Paper, Typography } from "@mui/material";
import React from "react";
import ThermostatIcon from "@mui/icons-material/Thermostat";
import AirIcon from "@mui/icons-material/Air";
import OpacityIcon from "@mui/icons-material/Opacity";
import SettingsIcon from "@mui/icons-material/Settings";
const ReportPage = ({dailyData}) => {
  const isDataAvailable = dailyData && dailyData.main && dailyData.weather && dailyData.sys;
  return (
    <div>
      <Paper
        elevation={3}
        sx={{
          padding: "10px",
          backgroundColor: "darkgrey",
          width: "700px",
          height: "200px",
          borderRadius: "20px",
          marginTop: "10px",
          margin: "10px",
        }}
      >
        <Typography variant="subtitle2"> Air Conditions </Typography>
        <Box sx={{ display: "flex" }}>
          <Box sx={{ padding: "5px" }}>
            <ThermostatIcon /> <Typography> Real feel</Typography>
            <Typography variant="h6" sx={{}}>
              {dailyData.main?.temp}
            </Typography>
          </Box>
          <Box sx={{ marginLeft: "50%", padding: "5px" }}>
            <Typography>
              {" "}
              <AirIcon />
              Wind
            </Typography>
            <Typography variant="h6" sx={{}}>
              {dailyData.wind.speed}km/h
            </Typography>
          </Box>
        </Box>
        <Box sx={{ display: "flex" }}>
          <Box sx={{ padding: "5px" }}>
            <Typography>
              {" "}
              <OpacityIcon />
              Chances Of rain
            </Typography>

            <Typography variant="h6">{dailyData.list}%</Typography>
          </Box>

          <Box sx={{ marginLeft: "38%", padding: "3px" }}>
            <Typography>
              {" "}
              <SettingsIcon /> <span> UV index</span>{" "}
            </Typography>
            <Typography variant="h6">3</Typography>
          </Box>
        </Box>
      </Paper>
    </div>
  );
};

export default ReportPage;
