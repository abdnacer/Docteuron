import React from "react";
import { Navigate, Outlet } from "react-router-dom";
import { isAuth } from "./isAuth";

const ProtectedPatient = () => {
     return(
        isAuth() && isAuth() === 'Patient' ? <Outlet /> : <Navigate to='/login' /> 
     )
}

export default ProtectedPatient