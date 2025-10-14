import React from "react";
import { Route, Routes } from "react-router-dom";
import AdminDashboard from "../pages/AdminDashboard";
import AllPages from "../pages/AllPages";
import AdminProjects from "../components/admin/AdminProjects";
import AdminResume from "../components/admin/AdminResume";
import AdminHonors from "../components/admin/AdminHonors";
import AdminSkill from "../components/admin/AdminSkill";
import LoginForm from "../pages/LoginForm";

const MainRoutes = () => {
    return (
        <Routes>
            <Route path="/" element={<AllPages />} />

            <Route path="/admin/login" element={<LoginForm />} />
            <Route path="/admin" element={<AdminDashboard />}>
                <Route path="projects" element={<AdminProjects />} />
                <Route path="skills" element={<AdminSkill />} />
                <Route path="honors" element={<AdminHonors />} />
                <Route path="resume" element={<AdminResume />} />
            </Route>
        </Routes>
    );
};

export default MainRoutes;
