import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import useCurrencyInfo from './hooks/useCurrencyInfo'
import Input from './components/Input'



function App() {
  const [count, setCount] = useState(0)
  useCurrencyInfo('inr')

  return (
    <>
       <h1 className="text-3xl bg-green-400 p-5 font-bold underline">
      Hello world!
    </h1>
    <Input/>
    </>
  )
}

export default App
