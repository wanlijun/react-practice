import { useEffect, useState } from 'react'
import logo from './logo.svg'
import './App.css'
import './api';

function App() {
  useEffect(() => {
    const { data } = API.user.loginByCode.useRequest({}, { code: '11111', phone: '17338383817' })
    console.log(data, '----')
  }, [])
  
  return (
    <div className="App">
      <div>登录</div>
    </div>
  )
}

export default App
