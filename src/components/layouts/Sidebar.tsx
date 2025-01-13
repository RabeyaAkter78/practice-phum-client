import React from 'react';
import { Layout, Menu } from 'antd';
import { sidebarItemsGenerator } from '../../utils/sidebarItemsGenerator';
import { adminPaths } from '../../routes/admin.route';
import { facultyPaths } from '../../routes/faculty.route';
import { studentPaths } from '../../routes/students.route';
const { Sider } = Layout;
const Sidebar = () => {
    const UserRole = {
        ADMIN: "admin",
        FACULTY: "faculty",
        STUDENT: "student"
    }



    // const role = "admin"
    const role = "faculty"
    let SidebarItems;

    switch (role) {
        case UserRole.ADMIN:
            SidebarItems = sidebarItemsGenerator(adminPaths, UserRole.ADMIN)
            break;
        case UserRole.FACULTY:
            SidebarItems = sidebarItemsGenerator(facultyPaths, UserRole.FACULTY)
            break;
        case UserRole.STUDENT:
            SidebarItems = sidebarItemsGenerator(studentPaths, UserRole.STUDENT)
            break;

        default:
            break;
    }

    return (
        <div>
            <Sider
                breakpoint="lg"
                collapsedWidth="0"


            >
                <div
                    style={{
                        color: 'white',
                        textAlign: 'center',
                        display: 'flex',
                        alignItems: 'center',
                        height: '4rem',
                        justifyContent: 'center'
                    }} >
                    Ph Uni
                </div>
                <Menu
                    theme="dark"
                    mode="inline"
                    defaultSelectedKeys={['Dashboard']}
                    items={sidebarItemsGenerator(adminPaths, "admin")} />
            </Sider>
        </div>
    );
};

export default Sidebar;