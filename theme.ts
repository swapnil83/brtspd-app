// src/theme.ts
import { createTheme } from "@mui/material/styles";

const theme = createTheme({
    palette: {
        primary: {
            main: "#000000",
        },
        secondary: {
            main: "#dc004e",
        },
        background: {
            default: "#F4F4F4",
        },
    },
    components: {
        MuiDrawer: {
            styleOverrides: {
                paper: {
                    width: 350,
                },
            },
        },
    },
});

export default theme;
