import React from 'react';
import { Button, Input, Form } from 'antd';
import { YForm } from '../../';
import styles from './style.less';

export const a = 1;
export default () => {
  const [form] = Form.useForm();
  return (
    <>
      <YForm form={form} configData={data} columns={3} className={styles.test}></YForm>
      <Button
        onClick={() => {
          form.validateFields().then(res => {
            console.log(res);
          });
        }}
      >
        验证表单
      </Button>
      <Button
        onClick={() => {
          form.setFieldsValue({
            '123': 12142,
          });
          console.log(form);
        }}
      >
        动态设置表单值
      </Button>
    </>
  );
};

const data = [
  {
    label: '1234',
    name: '123',
    component: <Input></Input>,
    rules: [{ required: true }],
  },
  {
    label: '1234',
    name: '234',
    component: <Input></Input>,
  },
  {
    hold: true,
  },
  {
    label: '12345',
    name: '2344',
    component: <Input></Input>,
  },
  {
    label: '安抚',
    name: '1',
    component: <Input></Input>,
  },
  {
    hold: true,
  },
  {
    label: '阿萨德刚',
    name: '2',
    component: <Input></Input>,
  },
  {
    label: '好',
    name: '3',
    component: <Input></Input>,
  },
  {
    label: '单方事故',
    name: '4',
    component: <Input.TextArea></Input.TextArea>,
    colSpan: 3,
  },
];
