import React,{useState} from 'react'
import Userpage from "./Userpage"
import "./User.css"
const UserName = () => {

    const [value, setValue] = useState('');
    const [enter,setEnter] = useState(false)
    const [start,setStart] = useState(false)
 
    const onChange = (e) => setValue(e.target.value);
    const handleenter = () =>{
        setEnter(true)

    }
  return (
    <div>
  
  {!enter ? <div className='user_container'>
  <h2>Guess The Number game</h2>
  <p>User Name</p>
  <input  type="text" className='input_name' placeholder='Enter your Name' onChange={onChange} />
  <button className='btn'  disabled={!value}  onClick={handleenter}>Enter</button>

    </div>:""}

      {enter && <Userpage value={value} setStart={setStart} start={start} /> }

      </div>
  )
}

export default UserName