import React from 'react'
import axios from 'axios'
const URL = "http://localhost:9000/api/result"
const slicesofState = {
  message: " ",
  email: " ",
  coordinates: {"x":2, "y":2},
  steps: 0
}
export default class AppClass extends React.Component {
state = slicesofState;

onChange = evt =>{
const {value} = evt.target;
this.setState({...this.state,
email:value})
}
onSubmit = evt =>{
evt.preventDefault()
const payLoadToSend = {
  "x" : this.state.coordinates.x,
  "y": this.state.coordinates.y,
  'steps': this.state.steps,
  'email':this.state.email
  }
axios.post(URL, payLoadToSend)
.then(res =>{
  this.setState({...this.state, message: res.data.message})

})
.catch(err =>{
  console.error(err)
})
}
moveSquareUp = () =>{
  if (this.state.coordinates.y > 1){
    this.setState({...this.state,
    steps: this.state.steps + 1,
  coordinates: {...this.state.coordinates, y:this.state.coordinates.y -1},
message:""})
  }else{
    this.setState({...this.state, message:"You can't go up!"})
  }
}
moveSquareDown = () =>{
  if(this.state.coordinates.y < 3 ) {
    this.setState({...this.state,
    steps: this.state.steps + 1,
    coordinates: {...this.state.coordinates, y:this.state.coordinates.y + 1}, 
    message:''
  })
  } else{
    this.setState({...this.state, message:"You can't go down!"})
  }
}

moveSquareLeft = () =>{
  if(this.state.coordinates.x > 1 ) {
    this.setState({...this.state,
    steps: this.state.steps + 1,
    coordinates: {...this.state.coordinates, x:this.state.coordinates.x - 1}, 
    message:''
  })
  } else{
    this.setState({...this.state, message:"You can't go left!"})
  }
}

moveSquareRight = () =>{
  if(this.state.coordinates.x < 3 ) {
    this.setState({...this.state,
    steps: this.state.steps + 1,
    coordinates: {...this.state.coordinates, x:this.state.coordinates.x + 1}, 
    message:''
  })
  } else{
    this.setState({...this.state, message:"You can't go right!"})
  }
}
resetSquare = () =>{
  this.setState({
    ...this.state,
    coordinates: {"x":2, "y":2},
    steps: 0,
    message: ''
  })
}

  render() {
    const { className } = this.props
    return (
      <div id="wrapper" className={className}>
        <div className="info">
          <h3 id="coordinates">Coordinates {this.state.coordinates.x},{this.state.coordinates.y}</h3>
          <h3 id="steps">You moved {this.state.steps}</h3>
        </div>
        <div id="grid">
          <div className={`${this.state.coordinates.x === 1 && this.state.coordinates.y === 1 ? "square active" : "square"}`}> {this.state.coordinates.x === 1 && this.state.coordinates.y === 1 ? "B" : ""} </div>
          <div className={`${this.state.coordinates.x === 2 && this.state.coordinates.y === 1 ? "square active" : "square"}`}> {this.state.coordinates.x === 2 && this.state.coordinates.y === 1 ? "B" : ""} </div>
          <div className={`${this.state.coordinates.x === 3 && this.state.coordinates.y === 1 ? "square active" : "square"}`}> {this.state.coordinates.x === 3 && this.state.coordinates.y === 1 ? "B" : ""} </div>
          <div className={`${this.state.coordinates.x === 1 && this.state.coordinates.y === 2 ? "square active" : "square"}`}> {this.state.coordinates.x === 1 && this.state.coordinates.y === 2 ? "B" : ""} </div>
          <div className={`${this.state.coordinates.x === 2 && this.state.coordinates.y === 2 ? "square active" : "square"}`}> {this.state.coordinates.x === 2 && this.state.coordinates.y === 2? "B" : ""} </div>
          <div className={`${this.state.coordinates.x === 3 && this.state.coordinates.y === 2 ? "square active" : "square"}`}> {this.state.coordinates.x === 3 && this.state.coordinates.y === 2 ? "B" : ""} </div>
          <div className={`${this.state.coordinates.x === 1 && this.state.coordinates.y === 3 ? "square active" : "square"}`}> {this.state.coordinates.x === 1 && this.state.coordinates.y=== 3 ? "B" : ""} </div>
          <div className={`${this.state.coordinates.x === 2 && this.state.coordinates.y === 3 ? "square active" : "square"}`}> {this.state.coordinates.x === 2 && this.state.coordinates.y === 3 ? "B" : ""} </div>
          <div className={`${this.state.coordinates.x === 3 && this.state.coordinates.y === 3 ? "square active" : "square"}`}> {this.state.coordinates.x === 3 && this.state.coordinates.y === 3 ? "B" : ""} </div>
        </div>
        <div className="info">
          <h3 id="message">{this.state.message}</h3>
        </div>
        <div id="keypad">
          <button onClick = {this.moveSquareLeft}id="left">LEFT</button>
          <button onClick = {this.moveSquareUp} id="up">UP</button>
          <button onClick = {this.moveSquareRight} id="right">RIGHT</button>
          <button onClick = {this.moveSquareDown}id="down">DOWN</button>
          <button onClick = {this.resetSquare}id="reset">reset</button>
        </div>
        <form onSubmit={this.onSubmit}>
          <input onChange= {this.onChange}id="email" type="email" placeholder="type email"></input>
          <input id="submit" type="submit"></input>
        </form>
      </div>
    )
  }
}
