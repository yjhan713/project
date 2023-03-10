import React, { useState } from "react";
import { Layout, Menu } from "antd";
import AccountDelete from "./AccountDelete";
import Announcement from "./Announcement";

const { Header, Footer, Content, Sider } = Layout;

function Admin() {
  const [showDelete, setShowDelete] = useState(false);
  const [showAnnouncement, setShowAnnouncement] = useState(false);

  const handleDeleteToggle = () => {
    setShowDelete(!showDelete);
  };

  const handleAnnouncementToggle = () => {
    setShowAnnouncement(!showAnnouncement);
  };

  const handleMenuItemClick = (event) => {
    const target = event.key;
    if (target === "delete") {
      handleDeleteToggle();
    } else if (target === "announcement") {
      handleAnnouncementToggle();
    }
  };

  return (
    <Layout className="layout">
      <Header>
        <div className="logo" />
        <h1 style={{ color: "#fff" }}>관리자 페이지</h1>
      </Header>
      <Content style={{ padding: "0 50px" }}>
        <Layout
          className="site-layout-background"
          style={{ padding: "24px 0" }}
        >
          <Sider className="site-layout-background" width={200}>
            <Menu
              mode="inline"
              defaultSelectedKeys={[]}
              style={{ height: "100%" }}
              onClick={handleMenuItemClick}
            >
              <Menu.Item key="delete">계정 삭제</Menu.Item>
              <Menu.Item key="announcement">공지사항</Menu.Item>
            </Menu>
          </Sider>
          <Content style={{ padding: "0 24px", minHeight: 280 }}>
            {showDelete && <AccountDelete />}
            {showAnnouncement && <Announcement />}
          </Content>
        </Layout>
      </Content>
      <Footer style={{ textAlign: "center" }}>Footer</Footer>
    </Layout>
  );
}

export default Admin;
