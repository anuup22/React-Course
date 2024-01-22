import { useCallback, useEffect, useRef, useState } from 'react'

function App() {
  const [length, setLength] = useState(8)
  const [numAllowed, setNumAllowed] = useState(false)
  const [charAllowed, setCharAllowed] = useState(false)
  const [password, setPassword] = useState("")

  //useRef hook
  const passwordRef = useRef(null)

  const passwordGenerator = useCallback(() => {
    let pass = ""
    let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz"

    if (numAllowed) str += "0123456789"
    if (charAllowed) str += "~!@%^&*|?-'[]"

    for (let i = 0; i < length; i++) {
      let char = Math.floor(Math.random() * str.length + 1)
      pass += str.charAt(char)
    }
    setPassword(pass)

  }, [length, numAllowed, charAllowed, setPassword])
  
  const copyToClipBoard = useCallback(()=>{
    passwordRef.current?.select()
    passwordRef.current?.setSelectionRange(0, 100)
    window.navigator.clipboard.writeText(password)
  }, [password])

  useEffect(() => passwordGenerator(), [length, numAllowed, charAllowed, passwordGenerator])

  return (
    <>
      <div className='w-full max-w-md mx-auto shadow-md rounded-lg px-4 my-8 text-orange-500 bg-gray-800 text-center pb-3'>
        <h1 className='text-white text-center my-3 pt-2.5'>Password Generator</h1>
        <div className='flex shadow rounded-lg overflow-hidden mb-3'>
          <input type="text" value={password} className='rounded-s-lg outline-none w-full py-1 px-3' placeholder='password' readOnly ref={passwordRef}/>
          <button onClick={copyToClipBoard} className='outline-none bg-blue-600 text-white px-3 py-0.5 shrink-0 rounded-e-lg'>
            Copy
          </button>
        </div>
        <div className='flex text-sm gap-x-2'>
          <div className='flex items-center gap-x-1'>
            <input type="range" min={6} max={50} value={length} className='cursor-pointer' onChange={(e) => { setLength(e.target.value) }} />
            <label>Length: {length}</label>
          </div>
          <div className='flex items-center gap-x-1'>
            <input type="checkbox" defaultChecked={numAllowed} onChange={() => setNumAllowed((prev) => !prev)} />
            <label>Numbers{numAllowed}</label>
          </div>
          <div className='flex items-center gap-x-1'>
            <input type="checkbox" defaultChecked={charAllowed} onChange={() => setCharAllowed((prev) => !prev)} />
            <label>Characters{charAllowed}</label>
          </div>
        </div>
      </div>
    </>
  )
}

export default App
