import React from "react";
import { Navigate, Outlet } from "react-router-dom";

const PrivateRoute = ({ signed }) => {
  return signed ? <Outlet /> : <Navigate to="/" />;
};

export default PrivateRoute;
