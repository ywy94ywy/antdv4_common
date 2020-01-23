import React from 'react';
import { ManageLayout, SearchTree, YForm, YTable, useUnfold } from '../..';
import { Tabs, Button, Input, Checkbox } from 'antd';

const { LeftCard, RightCard } = ManageLayout;
const { TabPane } = Tabs;

export default () => {
  const [unfold, Trigger, foldStyle] = useUnfold(40, 125, '更多选项', '收起');

  return (
    <ManageLayout style={{ height: 700 }}>
      <LeftCard title="卡片名称1" bodyStyle={{ padding: 0 }}>
        <Tabs
          tabBarGutter={0}
          onChange={e => {
            console.log(e);
          }}
        >
          <TabPane tab="标签名称1" key="1" style={{ padding: '0 20px' }}>
            <SearchTree checkable treeRawData={data} height={550} reName={{ titleName: 'a' }} />
          </TabPane>
          <TabPane tab="标签名称2" key="2" style={{ padding: '0 20px' }}>
            <SearchTree treeRawData={data} height={550} reName={{ titleName: 'a' }} />
          </TabPane>
          <TabPane tab="标签名称3" key="3" style={{ padding: '0 20px' }}>
            <SearchTree treeRawData={data} height={550} reName={{ titleName: 'a' }} />
          </TabPane>
          <TabPane tab="标签名称4" key="4" style={{ padding: '0 20px' }}>
            <SearchTree treeRawData={data} height={550} reName={{ titleName: 'a' }} />
          </TabPane>
        </Tabs>
      </LeftCard>
      <RightCard title="卡片名称2">
        <div style={foldStyle}>
          <YForm configData={fd} columns={3} gutterY={12}></YForm>
        </div>
        <YTable
          columns={columns}
          actions={{
            headerLeft: (
              <>
                <Button type="primary">新增</Button>
                <Button type="primary">修改</Button>
                <Button type="primary" danger>
                  删除
                </Button>
              </>
            ),
            headerRight: (
              <>
                <Checkbox>选择</Checkbox>
                <Button type="primary">查询</Button>
                <Button>重置</Button>
                <Trigger />
              </>
            ),
          }}
          dataSource={d}
          scroll={{ y: unfold ? 315 : 400 }}
        />
      </RightCard>
    </ManageLayout>
  );
};

const columns = [
  {
    title: 'Name',
    dataIndex: 'name',
  },
  {
    title: 'Age',
    dataIndex: 'age',
  },
  {
    title: 'Address',
    dataIndex: 'address',
  },
];

const d: any = [];
for (let i = 0; i < 46; i++) {
  d.push({
    key: i,
    name: `Edward King ${i}`,
    age: 32,
    address: `London, Park Lane no. ${i}`,
  });
}

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
    a: '名字奥术大师回家数据是',
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

const fd = [
  {
    label: '测试',
    name: '测试',
    component: <Input></Input>,
  },
  {
    label: '测试',
    component: <Input></Input>,
  },
  {
    label: '测试',
    component: <Input></Input>,
  },
  {
    label: '测试',
    component: <Input></Input>,
  },
  {
    label: '测试',
    component: <Input></Input>,
  },
  {
    label: '测试',
    component: <Input></Input>,
  },
  {
    label: '测试',
    component: <Input></Input>,
  },
  {
    label: '测试',
    component: <Input></Input>,
  },
  {
    label: '测试',
    component: <Input></Input>,
  },
];
