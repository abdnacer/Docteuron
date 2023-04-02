// import Dependencies
import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
// import Pages
import Dashboard from "../components/Layouts/Dashboard";
import DashboardAdmin from "../pages/user/admin/DashboardAdmin";
import DoctorAdmin from "../pages/user/admin/DoctorAdmin";
import PatientAdmin from "../pages/user/admin/PatientAdmin";
import RendezVousAdmin from "../pages/user/admin/RendezVousAdmin";
import SpecialityAdmin from "../pages/user/admin/SpecialityAdmin";

const RouterApp = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Dashboard />}>
          <Route path="" element={<DashboardAdmin />} />
          <Route path="/docotor" element={<DoctorAdmin />} />
          <Route path="/patient" element={<PatientAdmin />} />
          <Route path="/rendez-vous-admin" element={<RendezVousAdmin />} />
          <Route path="/specialites-admin" element={<SpecialityAdmin />} />
        </Route>
      </Routes>
    </Router>
  );
};

export default RouterApp;
