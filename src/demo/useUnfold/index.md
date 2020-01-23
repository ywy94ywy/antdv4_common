---
group: 
  title: hooks
title: 折叠工具
---


```tsx
import React from 'react'
import { useUnfold } from 'lanlinker'

export default ()=>{
  const [unfold, Trigger, style] = useUnfold(40, 180, '展开文字', '收起文字', 0.5)

  return (
    <>
      <div style={style}>
        <p style={{width:200}}>这是 Ant Design 评价设计好坏的内在标准。基于「每个人都追求快乐工作」这一假定，我们在「确定性」和「自然」的基础上，新增「意义感」和「生长性」两个价值观，指引每个设计者做更好地判断和决策</p>
      </div>
      <Trigger/>
    </>
  )
}
```