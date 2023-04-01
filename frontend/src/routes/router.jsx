// import Dependencies
import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
// import Pages
// import Login from "../pages/auth/Login";
import Dashboard from "../components/Layouts/Dashboard";
import DashboardAdmin from "../pages/user/admin/DashboardAdmin";
// import Login from "../pages/auth/Login";

const RouterApp = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Dashboard />}>
          <Route path="" element={<DashboardAdmin />} />
        </Route>
      </Routes>
    </Router>
  );
};

export default RouterApp;
