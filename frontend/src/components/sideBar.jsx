import { Layout, Menu } from 'antd';
import React from 'react';
import {
  UnorderedListOutlined,
  PlusOutlined,
} from '@ant-design/icons';

const { Sider } = Layout;

const Sidebar = () => {
  return (
    <Sider width={200} style={{ background: '#fff' }}>
      <Menu mode="inline" defaultSelectedKeys={['1']} style={{ height: '100%', borderRight: 0 }}>
        <Menu.Item
            key="1" 
            icon={<UnorderedListOutlined />}
            >
          <a href='/Products'>Show All Products</a>
        </Menu.Item>
        <Menu.Item key="2" icon={<PlusOutlined />}>
          <a href='/addProduct'>Create a Product</a>
        </Menu.Item>
      </Menu>
    </Sider>
  );
};

export default Sidebar;
