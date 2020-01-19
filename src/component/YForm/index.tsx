/**
 * @module antd-Form
 * @description write form with configuration, custom form's columns,gutter & formItem's placeholder,colSpan.
 * @author Des.Yang
 * @Date 2020/1/19
 * @updateDate 2020/1/19
 * @todo configData type
 * @todo to be refactored
 */
import React from 'react';
import { Form, Col, Row } from 'antd';
import { FormProps, FormItemProps } from 'antd/es/form';

interface YFormProps extends FormProps {
  configData: Array<any>; // formItem array ——todo_how to replace any
  columns?: number; // form columns
  gutter?: number; // form gutter
}
const YForm: React.FC<YFormProps> = ({ configData, columns, style, ...props }) => {
  return (
    <Form {...props}>
      <Row style={{ display: 'flex', flexWrap: 'wrap', ...style }} gutter={24}>
        {configData.map(({ component, ...props }, index) => (
          <ItemWrapper columns={columns} {...props} key={index}>
            {component}
          </ItemWrapper>
        ))}
      </Row>
    </Form>
  );
};

interface ItemWrapperProps extends FormItemProps {
  columns?: number; // form columns
  colSpan?: number; // formItem colSpan
  hold?: Boolean; // formitem placeholder
}
const ItemWrapper: React.FC<ItemWrapperProps> = ({
  columns = 1,
  colSpan = 1,
  hold = false,
  children,
  ...props
}) => {
  const visible = hold ? 'hidden' : 'visible';
  colSpan = colSpan > columns ? columns : colSpan;

  return (
    <Col style={{ flex: `0 0 ${(100 / columns) * colSpan}%`, visibility: visible }}>
      <Form.Item {...props}>{children}</Form.Item>
    </Col>
  );
};

export default YForm;
