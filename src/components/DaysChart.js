
import { Table, TableBody, TableCell, TableContainer, TableRow, Paper,Typography } from '@mui/material';
import WbSunnyIcon from '@mui/icons-material/WbSunny';
import CloudIcon from '@mui/icons-material/Cloud';
import ThunderstormIcon from '@mui/icons-material/Thunderstorm';

const daysdata=[
  { "id": "sun",  "icon": <WbSunnyIcon/>, "report": 28 },
  { "id": "mon", "icon":<WbSunnyIcon/> , "report": 34 },
  { "id": "tues", "icon": <CloudIcon/>, "report": 45 },
  { "id": "wed", "icon": <WbSunnyIcon/>, "report": 34 },
  { "id": "thurs", "icon": <ThunderstormIcon/>, "report": 45 },
  { "id": "fri", "icon": <CloudIcon/>, "report": 34 },
  { "id": "sat", "icon": <WbSunnyIcon/>, "report": 45 }
]
const DaysChart = ({dailyData}) => {
  const isDataAvailable = dailyData && dailyData.main && dailyData.weather && dailyData.sys;
  return (
    <TableContainer  elevation={3} sx={{width:'400px', height:'500px',backgroundColor:'darkgrey',borderRadius:'20px',marginLeft:'20px',marginTop:'10px'}} component={Paper}>
      <Table>-
        <TableBody>
        {isDataAvailable ? (
            <TableRow >
              <TableCell>{dailyData.day}</TableCell>
              <TableCell  > {dailyData.weather[0]?.icon ? (
                    <img
                      src={`http://openweathermap.org/img/wn/${dailyData.weather[0].icon}@2x.png`}
                      alt={dailyData.weather[0].description || "No description"}
                    />
                  ) : (
                    "No icon"
                  )}</TableCell>
              <TableCell>{dailyData.main.temp}°C</TableCell>
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
  );
};

export default DaysChart;
