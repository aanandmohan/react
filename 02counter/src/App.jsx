import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  let [count, setCount] = useState(0)
  
  const addval=()=>{
    if (count==20) {
      return;
      
    }
    count=count+1;
    setCount(count);
  }
const remove=()=>{
  if (count<=0) {
    return;
  }
  setCount(count-1)
}
  return (
   <>
   <h1>vishnukant count machine {count}</h1>
   <button onClick={addval}>add count {count}</button>
   <button onClick={remove}>remove count{count}</button>
   </>
  )
}

export default App
