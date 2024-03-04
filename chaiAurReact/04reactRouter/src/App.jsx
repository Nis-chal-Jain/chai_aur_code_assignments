import { useState } from 'react'
import Header from './components/Header'
import './App.css'
import Home from './components/Home'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <Home/>
      <Header/>
    </>
  )
}

export default App
