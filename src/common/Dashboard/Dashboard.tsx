import React from "react";
import { useNavigate } from "react-router-dom";
import { Grid, Card, CardActionArea, CardContent, Typography, Box } from "@mui/material";
import SettingsInputComponentIcon from "@mui/icons-material/SettingsInputComponent";
import EventIcon from "@mui/icons-material/Event";

import "./Dashboard.scss";

const tiles = [
    { icon: <SettingsInputComponentIcon fontSize="large" />, title: "Default Capacity", description: "Manage default capacity settings", path: "/default-capacity" },
    { icon: <EventIcon fontSize="large" />, title: "Due Date Management", description: "Set and manage due dates for tasks", path: "/due-date-management" },
];

const Dashboard: React.FC = () => {
    const navigate = useNavigate();

    return (
        <Box display="flex" justifyContent="center" gap={4} padding={4}>
            {tiles.map((tile, index) => (
                <Box
                    key={index}
                    className="tile"
                    onClick={() => navigate(tile.path)}
                >
                    {tile.icon}
                    <Typography variant="h6" className="tile-title">{tile.title}</Typography>
                    <Typography variant="body2" className="tile-description">{tile.description}</Typography>
                </Box>
            ))}
        </Box>
    );
};

export default Dashboard;
