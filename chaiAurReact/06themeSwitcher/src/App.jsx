import { useEffect, useState } from 'react'
import { ThemeProvider } from './contexts/ThemeContext'
import './App.css'
import Card from './components/Card'
import ThemeBtn from './components/ThemeBtn'

function App() {
  const [Thememode, setThememode] = useState('light')
  function DarkTheme(){
    setThememode('dark')
  }
  function LightTheme(){
    setThememode('light')
  }
  useEffect(()=>{
    document.querySelector('html').classList.remove('light','dark')
    document.querySelector('html').classList.add(Thememode)
  },[Thememode])

  return (
  <ThemeProvider value={{Thememode,DarkTheme,LightTheme}}>
     <div className="flex flex-wrap min-h-screen items-center">
          <div className="w-full">
              <div className="w-full max-w-sm mx-auto flex justify-end mb-4">
                  <ThemeBtn />
              </div>

              <div className="w-full max-w-sm mx-auto">
                  <Card />
              </div>
          </div>
      </div>
  </ThemeProvider>
  )
}

export default App
