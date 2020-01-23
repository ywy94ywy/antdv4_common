/**
 * @module YTree(antd-Tree)
 * @description custom style & rightClick menu
 * @author Des.Yang
 * @todo how to replace any
 * @todo to be refactored
 * @bug filterTreeNode?
 */
import React, { useState } from 'react';
import { Tree } from 'antd';
import { TreeProps } from 'antd/es/Tree';
import classNames from 'classnames';
import { ContextMenuTrigger, ContextMenu } from 'react-contextmenu'; // 右键菜单插件
import './style.less';

export type TreeList = Array<any>;

export interface YTreeProps extends TreeProps {
  // tree list
  treeRawData?: TreeList;
  // for virtual scroll
  height?: number | undefined;
  // custom fields to generate the tree
  reName?: {
    titleName?: string;
    keyName?: string;
    iconName?: string;
    pIdName?: string;
  };
  // custom title
  titleRender?: (treeNodeData: any) => React.ReactNode;
  rightClickMenuId?: string;
  rightClickMenu?: (treeNodeData: any) => React.ReactNode;
}

const YTree: React.FC<YTreeProps> = ({
  treeRawData = [],
  height,
  reName = {},
  style,
  className,
  titleRender,
  rightClickMenuId,
  rightClickMenu,
  ...props
}) => {
  const [clickData, setClickData] = useState({}); // rightClick menu data
  const treeData = generateTreeData(
    treeRawData,
    reName,
    titleRender,
    rightClickMenuId,
    setClickData,
  );

  return (
    <>
      <Tree
        // @ts-ignore
        height={height}
        style={{ height, ...style }}
        treeData={treeData}
        showLine={true}
        className={classNames('hide-file-icon', className)}
        defaultExpandAll
        {...props}
      />
      {rightClickMenuId && (
        <ContextMenu id={rightClickMenuId}>
          {rightClickMenu && rightClickMenu(clickData)}
        </ContextMenu>
      )}
    </>
  );
};

const generateTreeData = (
  treeList: TreeList = [],
  { titleName = 'title', keyName = 'id', iconName = 'icon', pIdName = 'pId' },
  titleRender?: (treeNodeData: any) => React.ReactNode,
  rightClickMenuId?: string,
  setClickData?: React.Dispatch<React.SetStateAction<{}>>,
) => {
  const tree: TreeList = treeList.map(v => ({ ...v }));

  for (let i = treeList.length - 1; i >= 0; i--) {
    const treeListNode = treeList[i];
    const title = titleRender ? titleRender(treeList[i]) : treeListNode[titleName];

    Object.assign(tree[i], {
      title: (
        <span style={{ whiteSpace: 'nowrap' }}>
          {rightClickMenuId ? (
            <ContextMenuTrigger
              id={rightClickMenuId}
              collect={() => {
                setClickData && setClickData(treeList[i]);
              }}
            >
              {title}
            </ContextMenuTrigger>
          ) : (
            title
          )}
        </span>
      ),
      key: String(treeListNode[keyName]),
      icon: treeListNode[iconName],
    });
    for (let j = i - 1; j >= 0; j--) {
      const treeListParentNode = treeList[j];
      if (treeListNode[pIdName] === treeListParentNode[keyName]) {
        const treeNode = tree[j];
        treeNode.children = treeNode.children || [];
        treeNode.children.unshift(tree.pop());
        break;
      }
    }
  }
  return tree;
};

export default YTree;
