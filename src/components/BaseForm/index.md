# 配置性表单
## 基础用法
```jsx
import React from 'react';
import Form from 'src/components/Form';
export default function Demo() {
  const config = [
    {
      type: 'input'
    }
  ]
  return <Form config={config}/>
}
```