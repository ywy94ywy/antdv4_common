import React from 'react';
import { Layout } from 'antd';
import { LayoutProps } from 'antd/es/layout';
import { YCard, YCardProps } from '../..';

export interface ManageLayoutFC<T = {}> extends React.FC<T> {
  LeftCard: React.FC<LeftCardProps>;
  RightCard: React.FC<YCardProps>;
}

export interface LeftCardProps extends YCardProps {
  width?: number;
}

const ManageLayout: ManageLayoutFC<LayoutProps> = ({ children, ...props }) => (
  <Layout {...props}>{children}</Layout>
);

const LeftCard: React.FC<LeftCardProps> = ({ children, style, width = 355, ...props }) => (
  <Layout.Sider theme="light" width={width}>
    <YCard style={{ height: '100%', overflow: 'hidden', ...style }} {...props}>
      {children}
    </YCard>
  </Layout.Sider>
);

const RightCard: React.FC<YCardProps> = ({ children, style, ...props }) => (
  <Layout.Content>
    <YCard style={{ height: '100%', overflow: 'hidden', ...style }} marginLeft {...props}>
      {children}
    </YCard>
  </Layout.Content>
);

ManageLayout.LeftCard = LeftCard;
ManageLayout.RightCard = RightCard;

export default ManageLayout;
