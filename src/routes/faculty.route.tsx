import AdminDashboard from "../pages/admin/AdminDashboard";
import CreateAdmin from "../pages/admin/CreateAdmin";
import CreateFaculty from "../pages/admin/CreateFaculty";
import CreateStudent from "../pages/admin/CreateStudent";
import React from "react";
import FacultyDashborad from "../pages/faculty/FacultyDashborad";
import OfferedCourse from "../pages/faculty/OfferedCourse";


export const facultyPaths = [
    {
        name: "Dashboard",
        path: "dashboard",
        element: <FacultyDashborad />
    },
    {
        name: 'Offered Courses',
        path: 'offered-courses',
        element: <OfferedCourse/>
    }

]
