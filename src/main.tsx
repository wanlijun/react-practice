import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import { ConfigProvider } from 'antd';
import 'moment/dist/locale/zh-cn'
import zhCN from 'antd/lib/locale/zh_CN';
import App from './App';
ReactDOM.render(
  <React.StrictMode>
     <ConfigProvider locale={zhCN}>
        <App />
     </ConfigProvider>
  </React.StrictMode>,
  document.getElementById('root')
)
