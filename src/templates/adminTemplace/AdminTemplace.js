import {
  PieChartOutlined,
  UserOutlined,
  DesktopOutlined,
  TeamOutlined,
  FileOutlined,
} from "@ant-design/icons";
import { Layout, Menu } from "antd";
import React from "react";
import { Link, Outlet } from "react-router-dom";
import "./adminTemplate.css";

const { Header, Content, Sider } = Layout;
function getItem(label, key, icon, children) {
  return { key, icon, children, label };
}

const items = [
  getItem("Option 1", "1", <PieChartOutlined />),
  getItem("Option 2", "2", <DesktopOutlined />),
  getItem("User", "sub1", <UserOutlined />, [
    getItem(<Link to="/admin/adduser">Add User</Link>, "3"),
    getItem(<Link to="/admin/listuser">List User</Link>, "4"),
  ]),
  getItem("Team", "sub2", <TeamOutlined />, [getItem("Team 1", "6"), getItem("Team 2", "8")]),
  getItem("Files", "9", <FileOutlined />),
];

const AdminTemplace = () => (
  <Layout>
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
      <Link to="/" className="logo">
        <img width={200} src="/img/logo-main.png" alt="Logo" />
      </Link>
      <Menu theme="dark" mode="inline" defaultSelectedKeys={["4"]} items={items} />
    </Sider>
    <Layout>
      <Header className="site-layout-sub-header-background bg-dark mb-3" style={{ padding: 0 }}>
        <h3 className="text-success text-right">day la header</h3>
      </Header>
      <Content>
        <div className="site-layout-background px-3" style={{ padding: 0, minHeight: 360 }}>
          <Outlet />
        </div>
      </Content>
    </Layout>
  </Layout>
);

export default AdminTemplace;
