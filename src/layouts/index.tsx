import React from 'react';
import { Layout } from 'antd';
const { Header, Sider, Content } = Layout;

const BasicLayout: React.FC = props => {
  return (
    <Layout style={{ height: '100%' }}>
      <Header>头部</Header>
      <Layout>
        <Sider width={230}>侧边</Sider>
        <Content>{props.children}</Content>
      </Layout>
    </Layout>
  );
};

export default BasicLayout;
