import { useState, useCallback, useEffect,useRef } from 'react'
import './App.css'

function App() {
  const [password, setPassword] = useState("");
  const [numberAllowed, setNumberAllowed] = useState(false);
  const [charAllowed, setCharAllowed] = useState(false)
  const [length, setLength] = useState(8);
  const [copyOrCopied, setCopyOrCopied] = useState("Copy")
  const [copyColor, setCopycolor] = useState("blue")
  const passRef = useRef(null)

  const passowordGenerator = useCallback(() => {
    let pass = "", str = "ABCDEFGHIJKLMNOPQabcdefghijklmnopq";
    if (charAllowed) str += "~!@#$%^&*()_+{}:?><`-=[];',./"
    if (numberAllowed) str += "1234567890"
    for (let i = 1; i <= length; i++) {
      let rand = Math.floor(Math.random() * str.length + 1);
      pass += str.charAt(rand)
    }
    setPassword(pass)
    setCopyOrCopied("Copy")
    setCopycolor("blue")
  }, [numberAllowed, charAllowed, length])

  const copyPasswordToClipboard = useCallback(() => {
    window.navigator.clipboard.writeText(password);
    passRef.current?.select();
    setCopyOrCopied("Copied")
    setCopycolor("orange")
  }, [password])

  useEffect(() => {
    passowordGenerator()
  }, [numberAllowed, charAllowed, length, passowordGenerator])

  return (
    <div className="w-full max-w-md mx-auto shadow-md rounded-lg px-4 py-3 my-8 bg-gray-800 text-orange-500">
      <h1 className='text-white text-center my-3'>Password generator</h1>
      <div className="flex shadow rounded-lg overflow-hidden mb-4">
        <input
          type="text"
          value={password}
          className="outline-none w-full py-1 px-3"
          placeholder="Password"
          readOnly
          ref={passRef}
        />
        <button
          onClick={copyPasswordToClipboard}
          style={{ backgroundColor: copyColor }}
          className='outline-none text-white px-3 py-0.5 shrink-0'
        >{copyOrCopied}</button>
      </div>
      <div className='flex text-sm gap-x-2'>
        <div className='flex items-center gap-x-1'>
          <input
            type="range"
            min={6}
            max={100}
            value={length}
            className='cursor-pointer'
            onChange={(e) => { setLength(e.target.value) }}
          />
          <label>Length: {length}</label>
        </div>
        <div className="flex items-center gap-x-1">
          <input
            type="checkbox"
            defaultChecked={numberAllowed}
            id="numberInput"
            onChange={() => {
              setNumberAllowed((prev) => !prev);
            }}
          />
          <label htmlFor="numberInput">Numbers</label>
        </div>
        <div className="flex items-center gap-x-1">
          <input
            type="checkbox"
            defaultChecked={charAllowed}
            id="characterInput"
            onChange={() => {
              setCharAllowed((prev) => !prev)
            }}
          />
          <label htmlFor="characterInput">Characters</label>
        </div>
      </div>
    </div>

  )
}

export default App
