import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Signin from "../pages/Signin/Signin";
import Signup from "../pages/Signup/Signup";
import Home from "../pages/Home/Home";
import PrivateRoute from "./PrivateRoute";
import useAuth from "../hooks/useAuth";

const RoutesApp = ({ Item }) => {
  const { signed } = useAuth();

  return (
    <BrowserRouter>
      <Routes>
        {/* Rota pública */}
        <Route path="/" element={<Signin />} />
        <Route path="/signup" element={<Signup />} />

        {/* Rota protegida */}
        <Route element={<PrivateRoute signed={signed} />}>
          <Route path="/home" element={<Home />} />
        </Route>

        {/* Rota fallback */}
        <Route path="*" element={<Signin />} />
      </Routes>
    </BrowserRouter>
  );
};

export default RoutesApp;
