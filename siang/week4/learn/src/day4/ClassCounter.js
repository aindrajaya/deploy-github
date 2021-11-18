import React, { Component } from 'react'

export default class ClassCounterBaru extends Component {
  //1. 
  constructor(){
    super()
    this.state = {
      count : 0
    }
  }

  increment = (param) => {
    this.setState({
      count: this.state.count + param
    })
  }

  decrement = (param) => {
    this.setState({
      count: this.state.count - param
    })
  }

  render() {
    const {count} = this.state
  
    return (
      <div>
        <h1>{count}</h1>
        <button onClick={() => this.increment(2)}>Increment</button>
        <button onClick={() => this.decrement(5)}>decrement</button>
      </div>
    )
  }
}

//Hooks/ function component
function a(){
  return(
    <div></div>
  )
}

//class Component
class b {
  render(){
    return(
      <div></div>
    )
  }
}
