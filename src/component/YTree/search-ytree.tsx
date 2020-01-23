/**
 * @module YSearchTree(antd-Tree)
 * @description search the tree with title
 * @author Des.Yang
 * @todo to be refactored
 * @todo number 40 should be replaced with Search's height
 */
import React, { useState, useEffect } from 'react';
import { Input } from 'antd';
import { SearchProps } from 'antd/es/input';
import YTree, { YTreeProps } from './ytree';

const { Search } = Input;

export interface SearchTreeProps extends YTreeProps {
  searchProps?: SearchProps;
}

const SearchTree: React.FC<SearchTreeProps> = ({ height, searchProps, ...props }) => {
  const { treeRawData = [], reName: { keyName = 'id', titleName = 'title' } = {} } = props;

  const [expandedList, setExpandedList] = useState<string[]>([]);
  const [autoExpandParent, setAutoExpandParent] = useState(true);

  useEffect(() => {
    const list: string[] = treeRawData.map((item: any) => '' + item[keyName]);
    setExpandedList(list);
  }, []);

  return (
    <>
      <Search
        style={{ marginBottom: 8 }}
        placeholder="请输入..."
        onSearch={value => {
          const list = treeRawData
            .filter((item: any) => {
              if (item[titleName].includes(value)) {
                return true;
              }
            })
            .map((item: any) => '' + item[keyName]);
          setAutoExpandParent(true);
          setExpandedList(list);
        }}
        {...searchProps}
      />
      <YTree
        height={height && height - 40}
        autoExpandParent={autoExpandParent}
        expandedKeys={expandedList}
        onExpand={(keys: any) => {
          setAutoExpandParent(false);
          setExpandedList(keys);
        }}
        {...props}
      ></YTree>
    </>
  );
};

export default SearchTree;
