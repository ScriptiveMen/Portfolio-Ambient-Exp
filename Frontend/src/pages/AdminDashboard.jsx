import React from "react";
import { NavLink, Outlet } from "react-router-dom";

const AdminDashboard = () => {
    return (
        <div className="relative z-20 h-[90vh] w-full">
            <div className="w-full py-5 pt-[2rem] flex items-center justify-between">
                <div className="flex items-center gap-2">
                    <h2 className="text-sm md:text-lg">
                        <span className="font-normal">Satya </span>Kumar Ram
                    </h2>

                    <span className=" font-thin block text-[0.70rem] md:text-[0.90rem] py-[0.15rem] px-3 md:px-5 rounded-full bg-[#EF6A93] shadow-[0_6px_20px_4px_rgba(244,114,182,0.25)]">
                        Admin Panel
                    </span>
                </div>
            </div>

            <div className="h-full w-full flex gap-5 justify-center ">
                <div className="left flex flex-col py-10 px-5 gap-2  justify-start w-[20%] border border-white/10  bg-[#131313] rounded-tl-2xl rounded-bl-2xl ">
                    <NavLink
                        className={({ isActive }) =>
                            `text-2xl font-semibold p-3 rounded-lg ${
                                isActive ? "bg-white/3" : ""
                            }`
                        }
                        to={"/admin/projects"}
                    >
                        Projects
                    </NavLink>

                    <NavLink
                        className={({ isActive }) =>
                            `text-2xl font-semibold p-3 rounded-lg ${
                                isActive ? "bg-white/3" : ""
                            }`
                        }
                        to={"/admin/resume"}
                    >
                        Resume
                    </NavLink>
                    <NavLink
                        className={({ isActive }) =>
                            `text-2xl font-semibold p-3 rounded-lg ${
                                isActive ? "bg-white/3" : ""
                            }`
                        }
                        to={"/admin/honors"}
                    >
                        Honors
                    </NavLink>
                    <NavLink
                        className={({ isActive }) =>
                            `text-2xl font-semibold p-3 rounded-lg ${
                                isActive ? "bg-white/3" : ""
                            }`
                        }
                        to={"/admin/skills"}
                    >
                        Skills
                    </NavLink>
                </div>
                <div className="right parent w-[80%] overflow-auto p-5 border border-white/10 bg-[#131313]  rounded-tr-2xl rounded-br-2xl ">
                    <Outlet />
                </div>
            </div>
        </div>
    );
};

export default AdminDashboard;
