// import Dependencies
import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Dashboard from "../components/Layouts/Dashboard";
// import Pages Admin
import DashboardAdmin from "../pages/user/admin/DashboardAdmin";
import DoctorAdmin from "../pages/user/admin/DoctorAdmin";
import PatientAdmin from "../pages/user/admin/PatientAdmin";
import RendezVousAdmin from "../pages/user/admin/RendezVousAdmin";
import SpecialityAdmin from "../pages/user/admin/SpecialityAdmin";
import SettingAdmin from "../pages/user/admin/SettingAdmin";
// import Pages Doctor
import DashboardDoctor from "../pages/user/doctor/DashboardDoctor";
import RendezVousDoctor from "../pages/user/doctor/RendezVousDoctor";

const RouterApp = () => {
  return (
    <Router>
      <Routes>
        <Route path="/dashboard-admin" element={<Dashboard />}>
          <Route path="" element={<DashboardAdmin />} />
          <Route path="doctor" element={<DoctorAdmin />} />
          <Route path="patient" element={<PatientAdmin />} />
          <Route path="rendez-vous-admin" element={<RendezVousAdmin />} />
          <Route path="specialites-admin" element={<SpecialityAdmin />} />
          <Route path="setting-admin" element={<SettingAdmin />} />
        </Route>

        <Route path="/dashboard-doctor" element={<Dashboard />}>
          <Route path="" element={<DashboardDoctor />} />
          <Route path="rendez-vous-doctor" element={<RendezVousDoctor />} />
          <Route path="setting-doctor" element={<SettingAdmin />} />
        </Route>
      </Routes>
    </Router>
  );
};

export default RouterApp;
