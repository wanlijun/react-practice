import { useEffect, useState } from 'react';
import { Form, Input } from 'antd';
import GridLayout from 'src/components/GridLayout'
import logo from './logo.svg';
import interceptors from './utils/interceptors';
import './apis';
import './App.css'

import Login from './containers/login'
interceptors();

function App() {
 
  return (
    <div className="App">
       <Form>
        <GridLayout
          number={2}
          gutter={100}
        >
          <Form.Item name="note" label="Note" rules={[{ required: true }]}>
            <Input />
          </Form.Item>
          <Form.Item name="note" label="Note" rules={[{ required: true }]}>
            <Input />
          </Form.Item>
          <Form.Item name="note" label="Note" rules={[{ required: true }]}>
            <Input />
          </Form.Item>
          <Form.Item name="note" label="Note" rules={[{ required: true }]}>
            <Input />
          </Form.Item>
          <Form.Item name="note" label="Note" rules={[{ required: true }]}>
            <Input />
          </Form.Item>
        </GridLayout>
      </Form>
    </div>
  )
}

export default App
