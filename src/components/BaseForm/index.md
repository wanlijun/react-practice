# 配置性表单
## 基础用法
```jsx
import React from 'react';
import BaseForm from 'src/components/BaseForm';
export default function Demo() {
  const config = [
    {
      type: 'input'
    }
  ]
  return <BaseForm config={config}/>
}
```