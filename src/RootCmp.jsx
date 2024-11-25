import { Navigate, Route, Routes } from "react-router-dom";
import { Auth } from "./pages/auth/Auth";
import { Chat } from "./pages/chat/Chat";
import { Profile } from "./pages/profile/Profile";
import { useSelector } from "react-redux";
import { useState } from "react";


export function RootCmp() {
  const user = useSelector(storeStage => storeStage.userModule.user)
  

  const _privetRoute = ({ children }) => {
    const isAuthenticated = !!user
    return isAuthenticated ? children : <Navigate to='/auth' />
  }
  const _authRoute = ({ children }) => {
    const isAuthenticated = !!user
    return isAuthenticated ? <Navigate to='/chat' /> : children
  }

  return (<>
    <Routes>
      <Route
        path="/auth"
        element={<_authRoute><Auth /></_authRoute>} />
      <Route
        path="/chat"
        element={<_privetRoute><Chat /></_privetRoute>} />
      <Route
        path="/profile"
        element={<_privetRoute><Profile /></_privetRoute>} />
      <Route path="/*" element={<Navigate to="/auth" />} />
    </Routes>

  </>)
}