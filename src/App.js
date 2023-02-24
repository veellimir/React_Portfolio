import React from "react"
import Header from "./components/Header"
import Footer from "./components/Footer"
import Content from "./components/Content"
import Items from "./components/Items"



class App extends React.Component {
  // товары 
  constructor(props) {
    super(props)
    this.state = {
      items: [
        {
          id: 1,
          title: 'Футболка USA',
          img: 'shirt_usa.png',
          category: 't-shirt',
          price: '1100 ₽',
        },
        {
          id: 2,
          title: 'Купальник Glow',
          img: 'swim.png',
          category: 'swimsuit',
          price: '900 ₽',
        },
        {
          id: 3,
          title: 'Свитшот Sweet Shot',
          img: 'owerlay.png',
          category: 'swimsuit',
          price: '1800 ₽',
        },
        {
          id: 4,
          title: 'Футболка USA',
          img: 'shirt_usa.png',
          category: 'swimsuit',
          price: '1800 ₽',
        },
        {
          id: 5,
          title: 'Свитшот Sweet Shot',
          img: 'owerlay.png',
          category: 'swimsuit',
          price: '1800 ₽',
        },
        {
          id: 6,
          title: 'Купальник Glow',
          img: 'swim.png',
          category: 'swimsuit',
          price: '900 ₽',
        },
      ]
    }
  }
  render () {
  return (
    <div className="wrapper">
      <Header />
      <Content />
      <Items items={this.state.items} />
      {/* <Footer /> */}
      
    </div>
  )
  
}
}
export default App;