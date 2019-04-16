import React, { Component } from 'react'

export default class SimpleComponent extends Component {
  constructor(props) {
    super(props)
    this.state = {
      mood: 'happy'
    }
  }

  onClick = () => {
    this.setState({
      mood: 'sad'
    })
  }


  render() {
    return (
      <div onClick={this.onClick}>{this.state.mood}</div>
    )
  }
}
