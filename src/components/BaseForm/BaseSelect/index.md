# BaseSelect
BaseInput是基于antd select封装的组件, 在select的基础上新增了options、labelKey、valueKey和renderLabel等属性，其余属性会被原封不动传递给antd select 。
## 基础用法
```jsx
import Rect from 'react';
import BaseSelect from 'src/components/BaseForm/BaseSelect';
function Demo() {
  const options = [
    {
      label: '苹果',
      value: 1
    },
    {
      label: '香蕉',
      value: 2
    },
    {
      label: '梨子',
      value: 3
    },
  ]
  return (
    <BaseSelect
      style={{width: '250px'}}
      options = {options}
    />
  )
}
export default Demo;
  
```
<API></API>