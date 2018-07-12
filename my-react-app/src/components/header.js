import React from 'react'
import logo from './../logo.svg';
import './header.less'

let Header = () => ({
  render() {
    return (
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <h1 className="App-title">Welcome to React-Music</h1>
      </header>
    )
  }
})

export default Header