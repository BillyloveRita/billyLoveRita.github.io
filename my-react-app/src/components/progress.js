import React from 'react'
import './header.less'

let Progress = () => ({
  render() {
    return (
      <div className="App-progress">
        {this.props.progress}s
      </div>
    )
  }
})

export default Progress