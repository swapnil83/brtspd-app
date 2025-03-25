import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Provider } from "react-redux";
import { Button } from "@mui/material";
import "./styles.scss";
import store from "./redux/store";

const Home = () => <h1>🏡 Home Page</h1>;
const About = () => <h1>ℹ️ About Page</h1>;

const App: React.FC = () => (
    <Provider store={store}>
        <BrowserRouter>
            <div>
                <h1>React + TypeScript + Webpack Setup 🎉</h1>
                <Button variant="contained" color="primary">Material UI Button</Button>
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/about" element={<About />} />
                </Routes>
            </div>
        </BrowserRouter>
    </Provider>
);

export default App;
