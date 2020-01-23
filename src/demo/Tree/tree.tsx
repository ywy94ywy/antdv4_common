import React from 'react';
import { YTree } from '../..';
import { Menu } from 'antd';

export default () => {
  return (
    <YTree
      checkable
      treeRawData={data}
      height={200}
      reName={{ titleName: 'a' }}
      rightClickMenuId="yTree-test"
      rightClickMenu={e => {
        console.log(e);
        // 可以做菜单筛选
        return (
          <Menu>
            <Menu.Item>阿斯蒂芬</Menu.Item>
            <Menu.Item>阿萨德刚</Menu.Item>
            <Menu.Item>大锅饭好</Menu.Item>
          </Menu>
        );
      }}
    />
  );
};

const data = [
  {
    id: 1,
    a: '名字',
    b: '键1',
    c: '图标',
    pId: 0,
  },
  {
    id: 2,
    a: '名字',
    b: '键2',
    c: '图标',
    pId: 0,
  },
  {
    id: 3,
    a: '名字',
    b: '键3',
    c: '图标',
    pId: 1,
  },
  {
    id: 7,
    a: '名字',
    b: '键7',
    c: '图标',
    pId: 1,
  },
  {
    id: 8,
    a: '名字',
    b: '键8',
    c: '图标',
    pId: 1,
  },
  {
    id: 5,
    a: '名字',
    b: '键5',
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
    b: '键6',
    c: '图标',
    pId: 3,
  },
  {
    id: 9,
    a: '名字9',
    b: '键9',
    c: '图标',
    pId: 7,
  },
];
