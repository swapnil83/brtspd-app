import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { NavLink } from "react-router-dom";
import {
    AppBar,
    Toolbar,
    Typography,
    IconButton,
    Drawer,
    List,
    ListItem,
    ListItemText,
    Divider,
    Box,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import SettingsInputComponentIcon from "@mui/icons-material/SettingsInputComponent";
import EventIcon from "@mui/icons-material/Event";
import { useSelector } from "react-redux";

import { RootState } from "../../redux/store";

// Sidebar items configuration
const sidebarItems = [
    {
        icon: <SettingsInputComponentIcon />,
        text: "Default Capacity",
        path: "/default-capacity",
        permissions: ["View_DefCapAdmin", "Mod_DefCapAdmin", "Del_DefCapAdmin"],
    },
    {
        icon: <EventIcon />,
        text: "Due Date Management",
        path: "/due-date-management",
        permissions: ["View_DueDateManagement", "Edit_DueDateManagement"],
    },
];

const Header: React.FC = () => {
    const [drawerOpen, setDrawerOpen] = useState(false);
    const navigate = useNavigate();
    const { username, roles, isAuthenticated } = useSelector((state: RootState) => state.auth);

    // Extract permissions from user roles
    const userPermissions = roles.flatMap((role) => role.permissions);

    // Check if user has any required permissions for a given item
    const hasPermission = (requiredPermissions: string[]) =>
        requiredPermissions.some((permission) => userPermissions.includes(permission));

    // Filter sidebar items based on permissions
    const filteredItems = sidebarItems.filter((item) => hasPermission(item.permissions));

    const toggleDrawer = (open: boolean) => () => setDrawerOpen(open);

    return (
        <AppBar position="static">
            <Toolbar>
                {/* Sidebar Button */}
                <IconButton edge="start" color="inherit" onClick={toggleDrawer(true)}>
                    <MenuIcon />
                </IconButton>

                {/* Sidebar Drawer */}
                <Drawer anchor="left" open={drawerOpen} onClose={toggleDrawer(false)}>
                    <List>
                        {filteredItems.map((item, index) => (
                            <React.Fragment key={index}>
                                <ListItem
                                    component={NavLink}
                                    to={item.path}
                                    style={{ textDecoration: "none", color: "inherit" }}
                                    className="nav-link"
                                    onClick={toggleDrawer(false)}
                                >
                                    {item.icon}
                                    <ListItemText primary={item.text} style={{ marginLeft: 10 }} />
                                </ListItem>
                                {index !== sidebarItems.length - 1 && <Divider />}
                            </React.Fragment>
                        ))}
                    </List>
                </Drawer>

                {/* App Title */}
                <Typography
                    variant="h6"
                    style={{ flexGrow: 1, cursor: "pointer" }}
                    onClick={() => navigate("/")}
                >
                    Space Control Delta
                </Typography>

                {/* User Profile with Role */}
                <Box display="flex" flexDirection="column" alignItems="flex-end" style={{ marginRight: 10 }}>
                    <Typography variant="body1" fontWeight="bold">
                        {username}
                    </Typography>
                    <Typography variant="caption" style={{ letterSpacing: 1 }}>
                        {isAuthenticated ? roles[0].roleName : "Guest"}
                    </Typography>
                </Box>
            </Toolbar>
        </AppBar>
    );
};

export default Header;
