import React from 'react';
import { Button, Input, Form, message } from 'antd';
import { YForm } from '../../';
import styles from './style.less';

export default () => {
  const [form] = Form.useForm();

  return (
    <>
      <YForm form={form} configData={data} columns={3} className={styles.table}></YForm>
      <Button.Group>
        <Button
          type="primary"
          onClick={() => {
            form.validateFields().then(res => {
              console.log(res);
            });
          }}
        >
          验证表单
        </Button>
        <Button
          type="primary"
          onClick={() => {
            form.setFieldsValue({
              '1': '测试值',
            });
            console.log(form);
          }}
        >
          动态设置表单值
        </Button>
      </Button.Group>
    </>
  );
};

const data = [
  {
    label: '测试1',
    name: '1',
    component: <Input></Input>,
    rules: [{ required: true, message: '请输入测试1' }],
  },
  {
    label: '测试2',
    name: '2',
    component: <Input></Input>,
  },
  {
    hold: true,
  },
  {
    label: '测试3',
    name: '3',
    component: <Input></Input>,
  },
  {
    label: '测试4',
    name: '4',
    component: <Input></Input>,
  },
  {
    hold: true,
  },
  {
    label: '测试5',
    name: '5',
    component: <Input></Input>,
  },
  {
    label: '测试6',
    name: '6',
    component: <Input></Input>,
  },
  {
    label: '测试测试7',
    name: '7',
    component: <Input.TextArea></Input.TextArea>,
    colSpan: 3,
  },
];
