import React from 'react';
import { YTable } from '../..';
import { Button } from 'antd';

export default () => {
  return (
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
            <Button type="primary">查询</Button>
            <Button>重置</Button>
          </>
        ),
      }}
      dataSource={d}
    />
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
