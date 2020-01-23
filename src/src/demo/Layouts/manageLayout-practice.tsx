import React from 'react';
import { ManageLayout, SearchTree } from '../..';
import { Tabs } from 'antd';
// import { ZoomInOutlined, StarFill, StarTwoTone } from '@ant-design/icons';

const { LeftCard, RightCard } = ManageLayout;
const { TabPane } = Tabs;

export default () => {
  return (
    <ManageLayout style={{ height: 500 }}>
      <LeftCard title="用户组别管理" bodyStyle={{ padding: 0 }}>
        <Tabs
          tabBarGutter={0}
          onChange={e => {
            console.log(e);
          }}
        >
          <TabPane tab="用户职能分类" key="1" style={{ padding: '0 20px' }}>
            <SearchTree treeRawData={data} height={350} reName={{ titleName: 'a' }} />
          </TabPane>
          <TabPane tab="用户职能分类" key="2" style={{ padding: '0 20px' }}>
            <SearchTree treeRawData={data} height={350} reName={{ titleName: 'a' }} />
          </TabPane>
          <TabPane tab="用户职能分类" key="3" style={{ padding: '0 20px' }}>
            <SearchTree treeRawData={data} height={350} reName={{ titleName: 'a' }} />
          </TabPane>
          <TabPane tab="用户职能分类" key="4" style={{ padding: '0 20px' }}>
            <SearchTree treeRawData={data} height={350} reName={{ titleName: 'a' }} />
          </TabPane>
        </Tabs>
      </LeftCard>
      <RightCard title="用户详细列表">
        {/* //@ts-ignore */}
        {/* <ZoomInOutline /> */}
      </RightCard>
    </ManageLayout>
  );
};

const data = [
  {
    id: 1,
    a: '名字1',
    c: 1,
    pId: 0,
  },
  {
    id: 2,
    a:
      '名字名字名字名字名字名字名字名字名字名字名字名字名字名字名字名字名字名字名字名字名字名字名字名字名字',
    c: '图标',
    pId: 0,
  },
  {
    id: 3,
    a: '名字3',
    c: '图标',
    pId: 1,
  },
  {
    id: 7,
    a: '名字4',
    c: '图标',
    pId: 1,
  },
  {
    id: 8,
    a: '名字',
    c: '图标',
    pId: 1,
  },
  {
    id: 5,
    a: '名字',
    c: '图标',
    pId: 2,
  },
  {
    id: 4,
    a: '名字',
    b: '键4',
    c: '图标',
    pId: 3,
  },
  {
    id: 6,
    a: '名字',
    c: '图标',
    pId: 3,
  },
  {
    id: 10,
    a: '名字10',
    c: '图标',
    pId: 5,
  },
  {
    id: 9,
    a: '名字9',
    c: '图标',
    pId: 7,
  },
  {
    id: 11,
    a: '分公司系统普通管理组（事业部）',
    c: '图标',
    pId: 10,
  },
  {
    id: 12,
    a: '名字12',
    c: '图标',
    pId: 11,
  },
  {
    id: 13,
    a: '名字13',
    c: '图标',
    pId: 12,
  },
];
