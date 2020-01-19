---
group:
    title: 表单
title: 配置型
---

### 多列表单
``` jsx
import React,{ useState } from "react"
import { Input ,Button} from "antd"
import { YForm } from "lanlinker"

export default ()=>{
  const [layout, setLayout]=useState("horizontal")
  return (
    <>
      <YForm configData={data} columns={3} layout={layout}/>
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
]
```

### 多列表单(带间距)
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



<code src="./index.tsx" />