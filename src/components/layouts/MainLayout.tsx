import React from 'react';

import { Layout, Menu } from 'antd';
import { Outlet } from 'react-router-dom';
import { adminPaths } from '../../routes/admin.route';
import { sidebarItemsGenerator } from '../../utils/sidebarItemsGenerator';
import Sidebar from './sidebar';
const { Header, Content, Footer, Sider } = Layout;

const MainLayout = () => {
    return (
        <Layout style={{ height: '100vh' }} >
            <Sidebar />
            <Layout>
                <Header style={{ padding: 0, }} />
                <Content style={{ margin: '24px 16px 0', }}>
                    <div
                        style={{
                            padding: 24,
                            minHeight: 360,

                        }}
                    >
                        <Outlet />
                    </div>
                </Content>

            </Layout>
        </Layout>

    );
};

export default MainLayout;


