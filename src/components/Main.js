import React, { Component } from 'react'
import Box from './Box'

export default class Main extends Component {
  render() {
    return (
      <section className="portfolio">
      <div className="wrapper">
        <div className="border">
          <h1>Portfolio</h1>
          <div className="box-container">

            <Box
              name="Колачевские чтения"
              description="Сайт конференции 'Колачевские чтения'. Принимаю непосредственное участие в разработке и поддержке сайта."
              link="https://kolachevconf.ru"
            />
            <Box
              name="Лесное озеро"
              description="Проект Лесное озеро. Принимаю непосредственное участие в разработке и поддержке сайта."
              link="http://xn--e1aaafvnccdpo.xn--p1ai/"
            />
            <Box
              name="Labirint Space"
              description="Сайт лофт бара Labirint Space. Принимаю участие в поддержке сайта."
              link="http://labirint.space/"
            />
          </div>
        </div>
      </div>

      </section>
    )
  }
}
