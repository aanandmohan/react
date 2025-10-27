import { useState,useCallback, useEffect, useRef } from 'react'


function App() {
  const [lenght, setlenght] = useState(8)
  const[numallow, setnumallow]=useState(false)
  const[charallow,setcharallow]=useState(false)
  const[pass, setpass]=useState("")
//use ref hook
const passref= useRef(null)
   const copyToClickboard=useCallback(()=>{
    passref.current?.select();
    passref.current?.setSelectionRange(0,20);
    window.navigator.clipboard.writeText(password)
   },[pass])

   function chnage(){

   }
  const passgen=useCallback(()=>{
    let pass=" "
    let str="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz"
    if (numallow) {
      str+="1234567890"
    }
    if(charallow) str+="!@#$%^&*(){}|~?<>"
   for (let i = 1; i <= lenght; i++) {
     
    let char=Math.floor(Math.random()*str.length +1)
    pass+=str.charAt(char)

    setpass(pass)
    
   }

  },[lenght,numallow,charallow,setpass])

  useEffect(()=>{
    passgen()
  },[lenght,charallow,numallow,passgen])

  return (
    < >
    <div      className="w-full h-screen flex justify-center items-center bg-gray-900">
    <div className='w-full max-w-md mx-auto shadow-md flex-center rounded-lg px-4 my-8 text-orange-500 bg-gray-800'> <h1 className='text-white text-center my-3'>password generator</h1>
    <div className='flex shadow rounded-lg overflow-hidden mb-4'>
     <input type="text" value={pass} className='outline-none w-full py-1 px-3' placeholder='password' readOnly ref={passref} /> 
     <button onClick={copyToClickboard}  className='outline-none bg-blue-700 text-white px-3 py-0.5 shrink-0 '>copy
     </button>
      </div>
      <div className='flex text-sm gap-x-2'><div className='flex items-center gap-x-1'>
        <input type="range" min={6} max={100} value={lenght} className='curser-pointer'
        onChange={(e)=>{setlenght(e.target.value)}} />
        <label htmlFor="">lenght:{lenght}</label></div>
        <div className='flex-items-center gap-x-1'>
          <input type="checkbox" defaultChecked={numallow}  id="numberinput" onChange={()=>{setnumallow((prev)=>!prev)}} />
          <label htmlFor="">nmuber</label>
        </div>
                <div className='flex-items-center gap-x-1'>
          <input type="checkbox" defaultChecked={numallow}  id="numberinpu" onChange={()=>{setcharallow((prev)=>!prev)}} />
          <label htmlFor="">Charector</label>
        </div>
        </div></div>
        </div>
    </>
  )
}

export default App
