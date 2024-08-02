import { useState } from 'react'
import './App.css'
import Nabvar from './Components/Nabvar'
import Todoinput from './Components/Todoinput'
import Todolist from './Components/Todolist'

function App() {
  const [listtodo,setlisttodo] = useState([]);// Empty array
  let addlist =(inputtext)=>{
    (inputtext!=="" )? setlisttodo([...listtodo,inputtext]) : "Enter the value plz"
    
  }
  return (
    <div>
      <Nabvar/>
      <div className='bg-cyan-400 rounded-2xl flex w-2/3  h-96 ml-[18%] mt-[6%]'>
        <div className='' >
          <div className='text-center ml-96 justify-center '>Add {"your's"} important task</div>
            <Todoinput addlist ={addlist}/>
          <div>
            <h2>Your added task</h2>
            <hr />
          </div>
          <div>
            <Todolist list = {listtodo}/>
          </div>
        </div>
        </div>
    </div>
  )
}

export default App
