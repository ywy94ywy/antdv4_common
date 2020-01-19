import React from 'react';
import { Form, Card, Input, Button } from 'antd';
import YForm from '@/component/YForm';
import YCard from '@/component/YCard';
import styles from './style.less';

export default function() {
  const [form] = Form.useForm();

  return (
    <>
      <Card>
        <YForm form={form} configData={data} columns={3} className={styles.test}></YForm>
        <Button
          onClick={() => {
            form.setFieldsValue({
              '123': 12142,
            });
            console.log(form);
          }}
        >
          test
        </Button>

        <YCard marginTop marginLeft>123</YCard>
        <YCard>125</YCard>
      </Card>
    </>
  );
}

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
