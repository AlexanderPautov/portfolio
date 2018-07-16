import React, { Component } from 'react';
import Header from './components/Header'
import Main from './components/Main'
import Footer from './components/Footer'
import styles from './css/styles.css'


class App extends Component {
  render() {
    return (
      <main>
        <Header />
        <Main />
        <Footer />
      </main>
    );
  }
}

export default App;
