import { Table, TableBody, TableCell, TableContainer, TableRow, Paper, Box, Typography } from '@mui/material';
import React from "react";

const DailyCharts = ({ dailyData }) => {
  // Check if dailyData is an object and contains the required properties
  const isDataAvailable = dailyData && dailyData.main && dailyData.weather && dailyData.sys;

  // Log the structure of dailyData to verify it's correct
  console.log("DailyData structure:", dailyData);

  return (
    <Box>
      <TableContainer
        elevation={3}
        sx={{
          width: '700px',
          height: '150px',
          backgroundColor: 'darkgrey',
          borderRadius: '20px',
          padding: '10px'
        }}
        component={Paper}
      >
        <Table>
          <TableBody>
            {isDataAvailable ? (
              <TableRow  >
                <TableCell >{new Date(dailyData.dt * 1000).toLocaleString()}</TableCell>
                <TableCell >
                  {dailyData.weather[0]?.icon ? (
                    <img
                      src={`http://openweathermap.org/img/wn/${dailyData.weather[0].icon}@2x.png`}
                      alt={dailyData.weather[0].description || "No description"}
                    />
                  ) : (
                    "No icon"
                  )}
                </TableCell>

              
                <TableCell>{dailyData.main.temp} °C</TableCell> 
              </TableRow>
            ) : (
              <TableRow>
                <TableCell colSpan={3} align="center">
                  <Typography>No data available</Typography>
                </TableCell>
              </TableRow>
            )}
          </TableBody>
        </Table>
      </TableContainer>
    </Box>
  );
};

export default DailyCharts;
