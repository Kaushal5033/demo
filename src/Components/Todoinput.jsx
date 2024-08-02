import { useState } from "react"

const Todoinput = (props) => {
    const [inputtext,setinputtext] = useState('');
    const handleInputChange = (e) => {
        setinputtext(e.target.value);
      };
      const  add = ()=>{
        props.addlist(inputtext);
        setinputtext('');
      }
  return (

    <div className=" ml-96 mt-12 ">
        <input onChange={handleInputChange} type="text" value={inputtext} placeholder="Add your task" />
        <button onClick={add}>Add</button>
        
    </div>

  )
}

export default Todoinput