import React, { useState } from "react";
import { Typography, Box, Card } from "@mui/material";
import BeachAccessIcon from "@mui/icons-material/BeachAccess";
import ThunderstormIcon from "@mui/icons-material/Thunderstorm";
import ListIcon from "@mui/icons-material/List";
import AddLocationIcon from "@mui/icons-material/AddLocation";
import SettingsIcon from "@mui/icons-material/Settings";
import { Link } from "react-router-dom";

const sidebarItems = [
  { name: "Weather", icon: <ThunderstormIcon />, route: "/weather" },
  { name: "Cities", icon: <ListIcon />, route: "/cities" },
  { name: "Maps", icon: <AddLocationIcon />, route: "/mappage" },
  { name: "Settings", icon: <SettingsIcon />, route: "/settings" },
];
function Sidebar() {
  return (
    <Box sx={{ width: "120px", margin: "20px", mb: "10px" }}>
      <Card
        sx={{
          height: "90%",
          borderRadius: "20px",
          backgroundColor: "darkgrey",
          boxShadow: "1px 1px",
          padding: "25px",
        }}
      >
        <Link to={"/"}>
          <Box sx={{ color: "skyblue", padding: "10px" }}>
            <BeachAccessIcon fontSize="large" />
          </Box>
        </Link>
        {sidebarItems.map((item, index) => (
          <Link
            to={item.route}
            key={index}
            style={{ textDecoration: "none", color: "inherit" , display: "block",
              padding: "10px",
              transition: "color 0.3s, background-color 0.3s",}}
              className = "sidebar-link"
          > 
            <Typography
              sx={{ padding: "10px", display: "flex", alignItems: "center",borderRadius:'3px', '&:hover': { backgroundColor: '#B0BEC5', color: '#FFFFFF'}, }}
            >
              {item.icon}
            </Typography>
            <Typography
              sx={{ padding: "3px", display: "flex", alignItems: "center" }}
            >
              {item.name}
            </Typography>
          </Link>
        ))}
      </Card>
    </Box>
  );
}

export default Sidebar;
