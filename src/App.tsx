import { useEffect, useState } from 'react'
import logo from './logo.svg'
import interceptors from './utils/interceptors'
import './apis';
import './App.css'

import Login from './containers/login'
interceptors();

function App() {
 
  return (
    <div className="App">
      <Login />
    </div>
  )
}

export default App
