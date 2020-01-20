/**
 * @module antd-Tree
 * @description custom style & rightClick menu
 * @author Des.Yang
 * @Date 2020/1/20
 * @updateDate 2020/1/20
 * @todo can only deal with treeData of list
 * @todo to be refactored
 */
import React from 'react';
import { Tree } from 'antd';
import { TreeProps } from 'antd/es/Tree';

type TreeType = Array<any>; // __todo_how to replace any

interface YTreeProps extends TreeProps {
  treeRawData?: TreeType;
  reName?: {
    titleName?: string;
    keyName?: string;
    iconName?: string;
    idName?: string;
    pIdName?: string;
  };
}

const YTree: React.FC<YTreeProps> = ({ treeRawData, reName, ...props }) => {
  const treeData = generateTreeData(treeRawData, reName);
  console.log(treeData)
  return <Tree treeData={treeData} {...props} />;
};

const generateTreeData = (
  treeList: TreeType = [],
  { titleName = 'title', keyName = 'key', iconName = 'icon', idName = 'id', pIdName = 'pId' } = {},
) => {
  const tree: TreeType = [...treeList];

  for (let i = treeList.length - 1; i >= 0; i--) {
    const treeListNode = treeList[i];
    Object.assign(tree[i], {
      title: treeListNode[titleName],
      key: treeListNode[keyName],
      icon: treeListNode[iconName],
    });
    for (let j = i - 1; j >= 0; j--) {
      const treeListParentNode = treeList[j];
      if (treeListNode[pIdName] === treeListParentNode[idName]) {
        const treeNode = tree[j];
        treeNode.children = treeNode.children || [];
        treeNode.children.push(tree.pop());
        break;
      }
    }
  }
  return tree;
};

export default YTree;
