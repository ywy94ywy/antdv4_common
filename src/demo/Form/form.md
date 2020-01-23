---
group:
  title: 组件
  path: /components
title: Form
---

### 多列表单(任意列数)
****
``` jsx
import React, { useState } from 'react';
import { Input, Button } from 'antd';
import { YForm } from "lanlinker";

export default ()=>{
  const [layout, setLayout] = useState("horizontal");

  return (
    <>
      <YForm configData={data} columns={5} layout={layout}/>
      <Button type="primary" onClick={()=>{
        setLayout(layout==="horizontal"? "vertical" : "horizontal")
       }}>切换布局</Button>
    </>
  )
}

const data = [
  {
    label: '测试',
    name:'测试',
    component: <Input></Input>,
    rules:[{ required:true }]
  },
  {
    label: '测试',
    component: <Input></Input>,
  },
  {
    label: '测试',
    component: <Input></Input>,
  },
  {
    label: '测试',
    component: <Input></Input>,
  },
  {
    label: '测试',
    component: <Input></Input>,
  },
  {
    label: '测试',
    component: <Input></Input>,
  },
  {
    label: '测试',
    component: <Input></Input>,
  },
  {
    label: '测试',
    component: <Input></Input>,
  },
  {
    label: '测试',
    component: <Input></Input>,
  },
]
```

### 多列表单(带间距)
****
``` jsx
import React from "react"
import { Input } from "antd"
import { YForm } from "lanlinker"

export default ()=>{
  return (
    <YForm configData={data} columns={3} gutter={50} />
  )
}

const data = [
  {
    label: '测试',
    component: <Input></Input>,
  },
  {
    label: '测试',
    component: <Input></Input>,
  },
  {
    label: '测试',
    component: <Input></Input>,
  },
]
```

### 占位与跨行
****
``` jsx
import React from "react"
import { Input } from "antd"
import { YForm } from "lanlinker"

export default ()=>{
  return (
    <YForm configData={data} columns={3} layout='vertical' />
  )
}

const data = [
  {
    hold:true
  },
  {
    label: '测试',
    component: <Input></Input>,
  },
  {
    hold:true
  },
  {
    label: '测试',
    component: <Input></Input>,
  },
  {
    hold:true
  },
  {
    label: '测试',
    component: <Input></Input>,
  },  
  {
    label: '测试',
    component: <Input></Input>,
    colSpan:2
  },
  {
    label: '测试',
    component: <Input></Input>,
    colSpan:3
  },
]
```

### 综合应用
****
<code src="./index.tsx" />

```less
.table {
  :global {
    .ant-form-item-label {
      flex: 0 0 100px;
    }
    .ant-form-item-control {
      flex: 1;
    }
  }
}
```