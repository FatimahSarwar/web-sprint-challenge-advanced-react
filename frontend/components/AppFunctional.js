import React , {useState, useEffect} from 'react'
import axios from 'axios'
const URL = "http://localhost:9000/api/result"

export default function AppFunctional(props) {
const [message,setMessage] = useState("")
const [email, setEmail] = useState("")
const [coordinates, setCoordinates] = useState({"x":2, "y":2})
const [steps, setSteps] = useState(0)

const onChange = evt =>{
  const {value} = evt.target
  setEmail(value);
}
const onSubmit = evt =>{
  evt.preventDefault()
  const payLoadToSend = {
    "x": coordinates.x,
    "y": coordinates.y,
    'steps': steps,
    'email': email
   } 
  axios.post(URL, payLoadToSend)
  .then(res =>{
    setMessage(res.data.message)
  })
  .catch(err =>{
    console.error(err)
  })
}
const moveSquareUp = () =>{
  if(coordinates.y > 1){
    setSteps(steps +1),
    setCoordinates({...coordinates, y:coordinates.y-1})
    setMessage("")
  } else{
    setMessage("You can't go up!")
  }
}
const moveSquareDown = () =>{
  if(coordinates.y < 3){
    setSteps(steps +1),
    setCoordinates({...coordinates, y:coordinates.y+1})
    setMessage("")
  } else{
    setMessage("You can't go down!")
  }
}
const moveSquareLeft = () =>{
  if(coordinates.x > 1){
    setSteps(steps +1),
    setCoordinates({...coordinates, x:coordinates.x-1})
    setMessage("")
  } else{
    setMessage("You can't go left!")
  }
}
const moveSquareRight = () =>{
  if(coordinates.x < 3){
    setSteps(steps +1),
    setCoordinates({...coordinates, x:coordinates.x+1})
    setMessage("")
  } else{
    setMessage("You can't go right!")
  }
}
const resetSquare = () =>{
 setSteps(0),
 setMessage(""),
 setCoordinates({"x":2, "y":2})
}
  return (
    <div id="wrapper" className={props.className}>
      <div className="info">
        <h3 id="coordinates">Coordinates {coordinates.x}, {coordinates.y}</h3>
        <h3 id="steps">You moved {steps}times</h3>
      </div>
      <div id="grid">
        <div className={`${coordinates.x=== 1 && coordinates.y ===1 ?"square active": "square"}`}>{coordinates.x === 1 && coordinates.y === 1 ? 'B' : ""}</div>
        <div className={`${coordinates.x=== 2 && coordinates.y ===1 ?"square active": "square"}`}>{coordinates.x === 2 && coordinates.y === 1 ? 'B' : ""}</div>
       <div className={`${coordinates.x=== 3&& coordinates.y ===1 ?"square active": "square"}`}>{coordinates.x === 3 && coordinates.y === 1 ? 'B' : ""}</div>
        <div className={`${coordinates.x=== 1 && coordinates.y ===2 ?"square active": "square"}`}>{coordinates.x === 1 && coordinates.y === 2 ? 'B' : ""}</div>
        <div className={`${coordinates.x=== 2 && coordinates.y ===2 ?"square active": "square"}`}>{coordinates.x === 2 && coordinates.y === 2 ? 'B' : ""}</div>
        <div className={`${coordinates.x=== 3 && coordinates.y ===2 ?"square active": "square"}`}>{coordinates.x === 3 && coordinates.y === 2 ? 'B' : ""}</div>
        <div className={`${coordinates.x=== 1 && coordinates.y ===3 ?"square active": "square"}`}>{coordinates.x === 1 && coordinates.y === 3 ? 'B' : ""}</div>
        <div className={`${coordinates.x=== 2 && coordinates.y ===3 ?"square active": "square"}`}>{coordinates.x === 2 && coordinates.y === 3 ? 'B' : ""}</div>
        <div className={`${coordinates.x=== 3 && coordinates.y ===3 ?"square active": "square"}`}>{coordinates.x === 3 && coordinates.y === 3 ? 'B' : ""}</div>
      </div>
      <div className="info">
        <h3 id="message">{message}</h3>
      </div>
      <div id="keypad">
        <button onClick ={moveSquareLeft} id="left">LEFT</button>
        <button onClick ={moveSquareUp} id="up">UP</button>
        <button onClick ={moveSquareRight} id="right">RIGHT</button>
        <button onClick=  {moveSquareDown}
        id="down">DOWN</button>
        <button onClick = {resetSquare} id="reset">reset</button>
      </div>
      <form onSubmit = {onSubmit}>
        <input onChange = {onChange} id="email" type="email" placeholder="type email"></input>
        <input id="submit" type="submit"></input>
      </form>
    </div>
  )
}
