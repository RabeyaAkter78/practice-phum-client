import React, { Children, createElement } from 'react';

import { ConfigProvider, Layout, Menu } from 'antd';
import { Outlet } from 'react-router-dom';
const { Header, Content, Footer, Sider } = Layout;
const items = [
    {
        key: 'Home',
        label: 'Home'
    },
    {
        key: 'About',
        label: 'About'
    },
    {
        key: 'Profile',
        label: 'Profile',
        Children: [
            {
                key: 'Create Admin',
                label: 'Create Admin'
            },
            {
                key: 'Create Faculty',
                label: 'Create Faculty'
            },
            {
                key: 'Create Student',
                label: 'Create Student'
            },
        ]
    }
]

const MainLayout = () => {

    return (

        <Layout style={{ height: '100vh' }} >
            <Sider
                breakpoint="lg"
                collapsedWidth="0"
                onBreakpoint={(broken) => {
                    console.log(broken);
                }}
                onCollapse={(collapsed, type) => {
                    console.log(collapsed, type);
                }}

            >
                <div style={{ color: 'white', textAlign: 'center', display: 'flex', alignItems: 'center', height: '4rem', justifyContent: 'center' }} >Ph Uni</div>
                <Menu theme="dark" mode="inline" defaultSelectedKeys={['4']} items={items} />
            </Sider>
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
                <Footer style={{ textAlign: 'center', color: "black" }}>
                    Ant Design ©{new Date().getFullYear()} Created by Ant UED
                </Footer>
            </Layout>
        </Layout>

    );
};

export default MainLayout;


