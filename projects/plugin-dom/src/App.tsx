import { useState } from 'react'
import logo from './logo.svg'
import './App.css'
declare const acquireVsCodeApi:any;
function App() {
  const [name, setName] = useState('')
  const save = () => {
    const vscode = acquireVsCodeApi();
    vscode.postMessage({
      command: 'save',
      data: {
        name
      }
  })
    console.log(name, '---')
  }
  return (
    <div className="App">
      <input value={name} onChange={(evt) => setName(evt.target.value)}/>
      <button onClick={save}>保存</button>
    </div>
  )
}

export default App
