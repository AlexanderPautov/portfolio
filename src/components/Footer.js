import React, { Component } from 'react'

export default class Footer extends Component {
  render() {
    return (
      <footer>
        <div className="wrapper">
          <hr/>
            <div className="social">
              <a href="https://github.com/AlexanderPautov/" target="_blank" rel="noopener noreferrer"><i className="fab fa-github"></i></a>
              <a href="https://www.instagram.com/pautovalex/" target="_blank" rel="noopener noreferrer"><i className="fab fa-instagram"></i></a>
              <a href="mailto:pautovalexander95@gmail.com"><i className="fas fa-envelope"></i></a>
              <a href="https://vk.com/pautovalex" target="_blank" rel="noopener noreferrer"><i className="fab fa-vk"></i></a>
            </div>
            <p>
              <i>Made with <i className="fas fa-heart"></i> by</i> Alexander Pautov.</p>
            <p>©2018</p>
		    </div>
    	</footer>
    )
  }
}
