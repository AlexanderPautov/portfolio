import React, { Component } from 'react'

export default class Header extends Component {
  render() {
    return (
      <header>
        <div className="wrapper">
          <div className="intro">
            <h1>Hey! I'm Alexander Pautov.</h1>
          </div>
          <p>Junior Frontend Developer | Code Enthusiast | Coffee Lover</p>
          <p>Moscow, Russia</p>
          <div className="bottom">
            <p>Scroll Down</p>
            <i className="fas fa-caret-down"></i>
          </div>


        </div>
      </header>
    )
  }
}
