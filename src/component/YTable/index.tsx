/**
 * @module YTable(antd-Table)
 * @description Table with header
 * @author Des.Yang
 */
import React from 'react';
import { Table } from 'antd';
import classNames from 'classnames';
import { TableProps, ColumnsType } from 'antd/es/table';
import styles from './style.less';

export interface YTableProps<RecordType> extends TableProps<RecordType> {
  actions?: {
    headerLeft?: React.ReactNode;
    headerRight?: React.ReactNode;
  };
}

const YTable: React.FC<YTableProps<ColumnsType>> = ({ actions = {}, className, ...props }) => {
  const { headerLeft, headerRight } = actions;
  const withActions = Object.keys(actions).length > 0;

  return (
    <>
      {withActions && (
        <div className={styles.yTableHeader}>
          {headerLeft && <div className={styles.yTableLeft}>{headerLeft}</div>}
          {headerRight && <div className={styles.yTableRight}>{headerRight}</div>}
        </div>
      )}
      <Table bordered className={classNames(styles.yTable, className)} {...props} />
    </>
  );
};

export default YTable;
