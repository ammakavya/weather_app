import {
  Box,
  Button,
  Card,
  Divider,
  Grid,
  Switch,
  Typography,
} from "@mui/material";
import React from "react";
import Searchbar from "./Searchbar";
const list = [
  "ad free",
  "health activities overview",
  "severe weather notifications",
];
const listitems = list.map((data) => <li>{data}</li>);
const SettingsPage = () => {
  return (
    <Box>
      <Grid container>
        <Grid md={7}>
          <Typography sx={{ fontWeight: "bold" }} variant="h5">
            Units
          </Typography>
          <Box
            sx={{
              backgroundColor: "darkgrey",
              borderRadius: "5px",
              marginRight: "20px",
              padding: "10px",
            }}
          >
            <Typography sx={{fontWeight:'bold'}}>TEMPERATURE</Typography>
            <Box
              sx={{
                display: "flex",
                padding: "10px",
                backgroundColor: "#71797E",  borderRadius: "5px",
              }}
            >
              <Button
                size="small"
                sx={{
                  marginLeft: "20px",
                  color: "black",
                  "&:hover": { backgroundColor: "#B0BEC5", color: "#FFFFFF" },
                }}
              >
                Celsius
              </Button>
              <hr />
              <Button
                size="small"
                sx={{
                  marginLeft: "20%",
                  color: "black",
                  "&:hover": { backgroundColor: "#B0BEC5", color: "#FFFFFF" },
                }}
              >
                fahrenheit
              </Button>
            </Box>
            <Typography sx={{fontWeight:'bold'}}>WIND SPEED</Typography>
            <Box
              sx={{
                display: "flex",
                padding: "10px",
                backgroundColor: "#71797E",  borderRadius: "5px",
              }}
            >
              <Button
                size="small"
                sx={{
                  marginLeft: "20px",
                  color: "black",
                  "&:hover": { backgroundColor: "#B0BEC5", color: "#FFFFFF" },
                }}
              >
                km/h
              </Button>
              <hr />
              <Button
                size="small"
                sx={{
                  marginLeft: "20%",
                  color: "black",
                  "&:hover": { backgroundColor: "#B0BEC5", color: "#FFFFFF" },
                }}
              >
                m/s
              </Button>
              <hr />
              <Button
                size="small"
                sx={{
                  marginLeft: "20%",
                  color: "black",
                  "&:hover": { backgroundColor: "#B0BEC5", color: "#FFFFFF" },
                }}
              >
                knots
              </Button>
            </Box>
            <Typography sx={{fontWeight:'bold'}}>PRESSURE</Typography>
            <Box
              sx={{
                display: "flex",
                padding: "10px",
                backgroundColor: "#71797E",  borderRadius: "5px",
              }}
            >
              <Button
                size="small"
                sx={{
                  marginLeft: "20px",
                  color: "black",
                  "&:hover": { backgroundColor: "#B0BEC5", color: "#FFFFFF" },
                }}
              >
                hPs
              </Button>
              <hr />
              <Button
                size="small"
                sx={{
                  marginLeft: "20%",
                  color: "black",
                  "&:hover": { backgroundColor: "#B0BEC5", color: "#FFFFFF" },
                }}
              >
                inches
              </Button>
              <hr />
              <Button
                size="small"
                sx={{
                  marginLeft: "20%",
                  color: "black",
                  "&:hover": { backgroundColor: "#B0BEC5", color: "#FFFFFF" },
                }}
              >
                kPs
              </Button>
              <hr />
              <Button
                size="small"
                sx={{
                  marginLeft: "20%",
                  color: "black",
                  "&:hover": { backgroundColor: "#B0BEC5", color: "#FFFFFF" },
                }}
              >
                mm
              </Button>
            </Box>
            <Typography sx={{fontWeight:'bold'}}>Preciptation</Typography>
            <Box
              sx={{
                display: "flex",
                padding: "10px",
                backgroundColor: "#71797E",
                borderRadius: "5px",
              }}
            >
              <Button
                size="small"
                sx={{
                  marginLeft: "20px",
                  color: "black",
                  "&:hover": { backgroundColor: "#B0BEC5", color: "#FFFFFF" },
                }}
              >
                millimeters
              </Button>
              <hr />
              <Button
                size="small"
                sx={{
                  marginLeft: "20%",
                  color: "black",
                  "&:hover": { backgroundColor: "#B0BEC5", color: "#FFFFFF" },
                }}
              >
                inches
              </Button>
            </Box>
            <Typography sx={{fontWeight:'bold'}}>DISTANCE</Typography>
            <Box
              sx={{
                display: "flex",
                padding: "10px",
                backgroundColor: "#71797E",
                borderRadius: "5px",
              }}
            >
              <Button
                size="small"
                sx={{
                  marginLeft: "20%",
                  color: "black",
                  "&:hover": { backgroundColor: "#B0BEC5", color: "#FFFFFF" },
                }}
              >
                kilometers
              </Button>
              <hr />
              <Button
                size="small"
                sx={{
                  marginLeft: "10%",
                  color: "black",
                  "&:hover": { backgroundColor: "#B0BEC5", color: "#FFFFFF" },
                }}
              >
                miles
              </Button>
            </Box>
          </Box>
          <Typography variant="h6" sx={{ padding: "5px", fontWeight: "bold" }}>
            notifications
          </Typography>
          <Box
            sx={{
              marginTop: "10px",
              mr: "20px",
              backgroundColor: "darkgrey",
              borderRadius: "5px",
              padding: "10px",
            }}
          >
            <Typography>
              {" "}
              notifications <Switch />
            </Typography>
            <Typography>be aware of weather</Typography>
          </Box>
          <Typography variant="h6" sx={{ padding: "5px", fontWeight: "bold" }}>
            general
          </Typography>
          <Card
            sx={{
              backgroundColor: "darkgrey",
              borderRadius: "5px",
              boxShadow: "1px 1px 1px 1px",
              marginRight: "20px",
              padding: "10px",
            }}
          >
            <Typography variant="h6" sx={{ fontWeight: "bold" }}>
              12 -hours time
              <Switch />
            </Typography>
            <Divider sx={{ color: "black", fontWeight: "bold" }} />
            <Typography
              variant="h6"
              sx={{ marginLeft: "10px", fontWeight: "bold" }}
            >
              location <Switch />
            </Typography>
            <Typography sx={{ marginLeft: "10px" }}>
              get weather of your location
            </Typography>
          </Card>
        </Grid>
        <Grid md={4}>
          <Card
            sx={{
              backgroundColor: "darkgrey",
              borderRadius: "10px",
              boxShadow: "1px 1px 1px 1px",
              padding: "15px",
            }}
          >
            <Typography
              variant="h4"
              sx={{ fontWeight: "bold", padding: "15px" }}
            >
              Advanced
            </Typography>
            <Divider sx={{ color: "black", fontWeight: "bold" }} />
            <Typography
              variant="h5"
              sx={{ fontWeight: "bold", padding: "10px" }}
            >
              Get new experience{" "}
            </Typography>
            <Box sx={{ padding: "10px" }}>
              <ui>{listitems}</ui>
            </Box>
            <Button
              variant="outlined"
              sx={{
                borderRadius: "30px",
                backgroundColor: "grey",
                color: "black",
                margin: "15px",
                justifyContent: "center",
                width: "300px",
                fontWeight: "bold",
                fontSize: "20px",
              }}
            >
              $5.99/month
            </Button>
          </Card>
          <Box sx={{ marginTop: "30px" }}>
            <Card
              sx={{
                backgroundColor: "darkgrey",
                borderRadius: "10px",
                boxShadow: "1px 1px 1px 1px",
                padding: "20px",
              }}
            >
              <Typography variant="h6" sx={{ fontWeight: "bold" }}>
                never forget your umbrella
              </Typography>
              <Divider sx={{ color: "black", fontWeight: "bold" }} />
              <Typography>
                sign up for our daily weather newsletter personalized for you{" "}
              </Typography>
              <Button
                variant="outlined"
                sx={{
                  borderRadius: "30px",
                  backgroundColor: "lightblue",
                  color: "black",
                  margin: "15px",
                  justifyContent: "center",
                  width: "300px",
                  fontWeight: "bold",
                }}
              >
                sign up
              </Button>
            </Card>
          </Box>
        </Grid>
      </Grid>
    </Box>
  );
};

export default SettingsPage;
