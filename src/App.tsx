import { useEffect, useState } from 'react';
import BaseForm from 'src/components/BaseForm';
import {
  IFormItem,
  FormItemType
} from 'src/components/BaseForm/index.d';
import logo from './logo.svg';
import interceptors from './utils/interceptors';
import './apis';
import './App.css'

import Login from './containers/login'
interceptors();

function App() {
  const config: IFormItem[] = [
    {
      type: FormItemType.INPUT,
      label: '姓名',
      name: 'name',
      rules: [
        {
          required: true,
          message: '请输入姓名',
        }
      ],
      options: []
    },
    // 是否能满足只有SELECT的时候，才能传入options
    {
      type: FormItemType.SELECT,
      label: '用户类型',
      name: 'userType',
      rules: [
        {
          required: true,
          message: '请输入用户类型',
        }
      ],
      options: [
        {
          label: '企业服务经纪人',
          value: 'agent'
        },
        {
          label: '企业服务经纪人',
          value: 'bank'
        }
      ]
    }
  ]
  const gridLayout = {
    number: 2,
    gutter: 100
  }
  return (
    <div className="App">
       <BaseForm
        config={config}
        gridLayout={gridLayout}
      />
    </div>
  )
}

export default App
