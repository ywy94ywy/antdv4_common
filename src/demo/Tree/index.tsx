import React from 'react';
import { YTree } from '../../';

export default () => {
  return <YTree checkable treeRawData={data} reName={{ titleName: 'a', keyName: 'b' }} />;
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
    id: 5,
    a: '名字',
    b: '键5',
    c: '图标',
    pId: 2,
  },
];
