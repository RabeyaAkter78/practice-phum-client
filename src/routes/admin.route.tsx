import AdminDashboard from "../pages/admin/AdminDashboard";
import CreateAdmin from "../pages/admin/CreateAdmin";
import CreateFaculty from "../pages/admin/CreateFaculty";
import CreateStudent from "../pages/admin/CreateStudent";
import React, { Children } from "react";

const adminPaths2 = [
    {
        name: "Dashboard",
        path: "/admin/dashboard",
        Element: <AdminDashboard></AdminDashboard>
    },
    {
        nmae: "User Management",
        Children: [
            {
                name: "Create Admin",
                path: "/admin/create-admin",
                Element: <CreateAdmin></CreateAdmin>
            },
            {
                name: "Create Faculty",
                path: "/admin/craete-faculty",
                Element: <CreateFaculty></CreateFaculty>
            },
            {
                name: "Create Student",
                path: "/admin/craete-student",
                Element: <CreateStudent></CreateStudent>
            },
        ]
    }
]



export const adminPaths = [
    {
        path: 'dashboard',
        element: <AdminDashboard />

    },
    {
        path: 'create-admin',
        element: <CreateAdmin />
    },
    {
        path: 'create-faculty',
        element: <CreateFaculty />
    },
    {
        path: 'create-student',
        element: <CreateStudent />
    }
];
