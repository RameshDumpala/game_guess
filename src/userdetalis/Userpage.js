import React from 'react'
import { HiArrowDown } from 'react-icons/hi';
import Game from "../gamecomponent/Game"

const Userpage = ({value,setStart,start}) => {

  const handlestart = () =>{
    setStart(true)
  }


  return (
    <div>
    {!start ?
    <div className='user_container' >
        <h3> ! Welcome {value} lets start the game !</h3>
       <h3> <p>Click the start button </p></h3>
       <p><HiArrowDown/></p>
        <button onClick={handlestart}>Start</button>
    </div>
     :""}
      {start ? <Game/> :""}  
    </div>
  )
}

export default Userpage