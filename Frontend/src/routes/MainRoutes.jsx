import React from "react";
import { Route, Routes, Navigate } from "react-router-dom";
import { useSelector } from "react-redux";
import AdminDashboard from "../pages/AdminDashboard";
import AllPages from "../pages/AllPages";
import AdminProjects from "../components/admin/AdminProjects";
import AdminResume from "../components/admin/AdminResume";
import AdminHonors from "../components/admin/AdminHonors";
import AdminSkill from "../components/admin/AdminSkill";
import LoginForm from "../pages/LoginForm";
import ProtectedRoute from "../components/admin/ProtectedRoute";

const MainRoutes = () => {
    const user = useSelector((state) => state.auth?.user);
    const isAuthenticated = user && user.role === "admin";

    return (
        <Routes>
            <Route path="/" element={<AllPages />} />

            {/* Redirect to /admin if already logged in */}
            <Route
                path="/admin/login"
                element={
                    isAuthenticated ? (
                        <Navigate to="/admin" replace />
                    ) : (
                        <LoginForm />
                    )
                }
            />

            {/* Protected admin routes */}
            <Route
                path="/admin"
                element={
                    <ProtectedRoute>
                        <AdminDashboard />
                    </ProtectedRoute>
                }
            >
                <Route index element={<AdminProjects />} />
                <Route path="skills" element={<AdminSkill />} />
                <Route path="honors" element={<AdminHonors />} />
                <Route path="resume" element={<AdminResume />} />
            </Route>
        </Routes>
    );
};

export default MainRoutes;
