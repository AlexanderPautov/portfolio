import React, { Component } from 'react'

export default class Box extends Component {

  render() {
    return (
      <div className="box">
        <h3>{this.props.name}</h3>
        <p className="description">{this.props.description}</p>
        <a className="button" href={this.props.link} target="_blank" rel="noopener noreferrer">Перейти на сайт</a>
      </div>
    )
  }
}
