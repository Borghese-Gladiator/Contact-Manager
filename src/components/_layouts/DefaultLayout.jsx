import Link from 'next/link';
import { Layout, Menu } from 'antd';
const { SubMenu } = Menu;
const { Header, Content, Footer, Sider } = Layout;

import { UserOutlined, CalendarOutlined } from '@ant-design/icons';
import { MdSpaceDashboard } from "react-icons/md";
import { IoIosContacts } from "react-icons/io";

const DefaultLayout = ({ userList = [], setUserList, children }) => (
  <Layout>
    <Sider
      breakpoint="lg"
      collapsedWidth="0"
      onBreakpoint={broken => {
        console.log(broken);
      }}
      onCollapse={(collapsed, type) => {
        console.log(collapsed, type);
      }}
    >
      <div className="logo" />
      <Menu
        theme="dark"
        mode="inline"
        defaultSelectedKeys={[]}
        defaultOpenKeys={[]}
      >
        <Menu.Item key="1" icon={<MdSpaceDashboard />}>
          <Link href={'/'}>Dashboard</Link>
        </Menu.Item>
        <Menu.Item key="2" icon={<IoIosContacts />}>
          <Link href={'/contacts'}>Contacts</Link>
        </Menu.Item>
        <Menu.Item key="3" icon={<CalendarOutlined />}>
          <Link href={'/appointments'}>Appointments</Link>
        </Menu.Item>
        <SubMenu key="sub1" icon={<UserOutlined />} title="Contacts">
          {userList.map(({ name }, idx) => {
            <Menu.Item key={`menu-item-${idx}`}>{name}</Menu.Item>
          })}
        </SubMenu>
      </Menu>
    </Sider>
    <Layout>
      <Header className="site-layout-sub-header-background" style={{ padding: 0 }} />
      <Content style={{ margin: '24px 16px 0' }}>
        <div className="site-layout-background" style={{ padding: 24, minHeight: 360 }}>
          {children}
        </div>
      </Content>
      <Footer style={{ textAlign: 'center' }}>Ant Design ©2018 Created by Ant UED</Footer>
    </Layout>
  </Layout>
);

export const getLayout = page => <DefaultLayout>{page}</DefaultLayout>;

export default DefaultLayout;
