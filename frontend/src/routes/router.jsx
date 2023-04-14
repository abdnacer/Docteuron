// import Dependencies
import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Dashboard from "../components/Layouts/Dashboard";
import NavBar from "../components/Layouts/NavBar";
// import Prtected Routes
import ProtectedAdmin from "../protectedRoutes/protectedAdmin";
import ProtectedDoctor from "../protectedRoutes/protectedDoctor";
// import ProtectedPatient from "../protectedRoutes/protectedPatient";
// import Authentification
import Login from "../pages/auth/Login";
import RegisterDoctor from "../pages/auth/RegisterDoctor";
import RegisterPatient from "../pages/auth/RegisterPatient";
import ForgotPassword from "../pages/auth/ForgotPassword";
import FormForgotPassword from "../pages/auth/FormForgotPassword";
import ResetPassword from "../pages/auth/ResetPassword";

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
// import Pages Patient
import Home from "../pages/user/patient/Home";
import Details from "../pages/user/patient/Details";

import Page404 from "../pages/Page404";

import { Provider} from "react-redux";
import store from "../store/store";

const RouterApp = () => {  
  window.addEventListener("storage", () => {
    localStorage.clear();
    window.location.replace("http://localhost:3000/login");
  });

  return (
    <Provider store={store}>
      <Router>
        <Routes>
          <Route path="/login" element={<Login />} />
          <Route path="/register-patient" element={<RegisterPatient />} />
          <Route path="/register-doctor" element={<RegisterDoctor />} />
          <Route path="/forgot-password" element={<ForgotPassword />} />
          <Route
            path="/form-forgot-password"
            element={<FormForgotPassword />}
          />

          <Route element={<ProtectedAdmin />}>
            <Route path="/dashboard-admin" element={<Dashboard />}>
              <Route path="" element={<DashboardAdmin />} />
              <Route path="doctor" element={<DoctorAdmin />} />
              <Route path="patient" element={<PatientAdmin />} />
              <Route path="rendez-vous-admin" element={<RendezVousAdmin />} />
              <Route path="specialites-admin" element={<SpecialityAdmin />} />
              <Route path="setting-admin" element={<SettingAdmin />} />
            </Route>
          </Route>

          <Route element={<ProtectedDoctor />}>
            <Route path="/dashboard-doctor" element={<Dashboard />}>
              <Route path="" element={<DashboardDoctor />} />
              <Route path="rendez-vous-doctor" element={<RendezVousDoctor />} />
              <Route path="setting-doctor" element={<SettingAdmin />} />
              <Route path="reset-password" element={<ResetPassword />} />
            </Route>
          </Route>

          <Route path="/" element={<NavBar />}>
            <Route path="" element={<Home />} />
            <Route path="/details/:id" element={<Details />} />
          </Route>

          <Route path="*" element={<Page404 />} />
          <Route path="/Page404" element={<Page404 />} />
        </Routes>
      </Router>
    </Provider>
  );
};

export default RouterApp;
