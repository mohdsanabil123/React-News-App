import React, {useState} from 'react'
import Navbar from './components/Navbar';
import { Outlet } from 'react-router-dom';

const App = () => {

  const [mode, setMode] = useState('light')
  const toggleMode = () => {
    if (mode === 'light') {
      setMode('dark')
      document.body.style.backgroundColor = "black";
      document.body.style.color = "white";
    }
    else{
      setMode('light')
      document.body.style.backgroundColor = "white";
      document.body.style.color = "black";
    }
  }
  return (
    <div>
      <Navbar mode={mode} toggleMode={toggleMode}/>
      <Outlet/>
    </div>
  )
}

export default App