import React from "react";
import { Navigate, Outlet } from "react-router-dom";
import { isAuth } from "./isAuth";

const ProtectedDoctor = () => {
    return(
        isAuth() && isAuth() === 'doctor' ? <Outlet /> : <Navigate to='/login' />
    )
}

export default ProtectedDoctor