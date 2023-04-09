import React from "react";
import { Navigate, Outlet } from "react-router-dom";
import { isAuth } from "./isAuth";

const ProtectedAdmin = () => {
    return(
        isAuth() && isAuth() === 'admin' ? <Outlet /> : <Navigate to='Page404' />
    )
}

export default ProtectedAdmin