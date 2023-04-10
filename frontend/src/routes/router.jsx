// import Dependencies
import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Dashboard from "../components/Layouts/Dashboard";
// import Prtected Routes
// import ProtectedAdmin from "../protectedRoutes/protectedAdmin";
// import ProtectedDoctor from "../protectedRoutes/protectedDoctor";
// import ProtectedPatient from "../protectedRoutes/protectedPatient";
// import Authentification
import Login from "../pages/auth/Login";
import RegisterDoctor from "../pages/auth/RegisterDoctor";
import RegisterPatient from "../pages/auth/RegisterPatient";
import ForgotPassword from "../pages/auth/ForgotPassword";
import FormForgotPassword from "../pages/auth/FormForgotPassword";

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
import { Provider } from "react-redux";
import store from "../store/store"

const RouterApp = () => {
  return (
    <Provider store={store}>
      <Router>
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register-patient" element={<RegisterPatient />} />
          <Route path="/register-doctor" element={<RegisterDoctor />} />
          <Route path="/forgot-password" element={<ForgotPassword />} />
          <Route path="/form-forgot-password" element={<FormForgotPassword />} />
          {/* <Route path="/form-forgot-password" element={<FormForgotPassword />} /> */}

          {/* <Route element={<ProtectedAdmin />}> */}
          <Route path="/dashboard-admin" element={<Dashboard />}>
            <Route path="" element={<DashboardAdmin />} />
            <Route path="doctor" element={<DoctorAdmin />} />
            <Route path="patient" element={<PatientAdmin />} />
            <Route path="rendez-vous-admin" element={<RendezVousAdmin />} />
            <Route path="specialites-admin" element={<SpecialityAdmin />} />
            <Route path="setting-admin" element={<SettingAdmin />} />
          </Route>
          {/* </Route> */}

          {/* <Route element={<ProtectedDoctor />}> */}
          <Route path="/dashboard-doctor" element={<Dashboard />}>
            <Route path="" element={<DashboardDoctor />} />
            <Route path="rendez-vous-doctor" element={<RendezVousDoctor />} />
            <Route path="setting-doctor" element={<SettingAdmin />} />
          </Route>
          {/* </Route> */}
        </Routes>
      </Router>
    </Provider>
  );
};

export default RouterApp;
