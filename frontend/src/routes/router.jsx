// import Dependencies
import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
// import Pages
import Login from "../pages/auth/Login";

const RouterApp = () => {
    return(
        <Router>
            <Routes>
                <Route path="/" element={<Login />} />
            </Routes>
        </Router>
    )
};

export default RouterApp
