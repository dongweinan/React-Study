import { Component } from 'react'
import React from 'react'

class Child extends Component {
  state = {
    count: 0,
  }
  clickHandle = () => {
    // this.setState({ count: this.state.count + 1 })
    console.log(this.divRef.current)
  }
  divRef = React.createRef()

  render() {
    console.log(this.divRef)
    return (
      <div ref={this.divRef}>
        <h1>{this.props.name}</h1>
        <div>{this.state.count}</div>
        <button onClick={this.clickHandle}>点我一下 </button>
      </div>
    )
  }
}
export default Child
