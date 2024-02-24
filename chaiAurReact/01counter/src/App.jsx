import { useState } from 'react'
import './App.css'

function App() {
  
  let [counter, changeValue] = useState(15)

  const addvalue = ()=>{

    if(counter<20){
      changeValue(counter=counter + 1)
      
    }
    else{
      console.log('you cannot exceed 20')
    }
    
  }
  const decvalue = ( )=>{
    if(counter>0){
      changeValue(counter = counter -1)
    }
    else{
      console.log('you can go in negative')
    }
  }
  return (
    <>
      <h1>Chai aur react | Nischal Jain</h1>
      <h2>Count: {counter}</h2>
      <button
        onClick={addvalue}
      >Increase Value</button>
      <br />
      <button
        onClick={decvalue}
      >Decrease Value</button>
    </>
  )
}

export default App
