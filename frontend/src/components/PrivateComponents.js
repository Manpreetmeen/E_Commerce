import React from "react";
import { Navigate, Outlet } from "react-router-dom";

export default function PrivateComponents() {
    const auth = localStorage.getItem("users")
  return auth? <Outlet /> : <Navigate to="/signup" />
}
