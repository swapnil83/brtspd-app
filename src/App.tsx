import React, { useEffect } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { useDispatch } from "react-redux";

import "./styles.scss";
import Header from "./common/Header/Header";
import axiosInstance from "./https/axiosInstance";
import { AppDispatch } from "./redux/store";
import { setUser } from "./redux/slices/authSlice";
import Dashboard from "./common/Dashboard/Dashboard";

const App: React.FC = () => {
    const dispatch = useDispatch<AppDispatch>();

    useEffect(() => {
        async function fetchUserDetails() {
            try {
                const response = await axiosInstance.get("/user-details");
                const { username, email, roles } = response.data.data;

                dispatch(setUser({ username, email, roles, isAuthenticated: true }));
            } catch (error) {
                console.error("Failed to fetch user details:", error);
            }
        };

        fetchUserDetails();
    }, []);

    return (
        <BrowserRouter>
            <div>
                <Header />

                <Routes>
                    <Route path="/" element={<Dashboard />} />
                    <Route path="/default-capacity" element={<h1>⚙️ Default Capacity</h1>} />
                    <Route path="/due-date-management" element={<h1>📅 Due Date Management</h1>} />
                </Routes>
            </div>
        </BrowserRouter>
    )
};

export default App;
