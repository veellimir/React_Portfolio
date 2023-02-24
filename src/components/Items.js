import React, { Component } from 'react'
import Item from './Item'

export class Items extends Component {
  render() {
    return (
      <main>
        {this.props.items.map(el => (
            <Item key={el.id} item={el}/>
        ))}
        <img src='../img/Vector 2.png'id='vect_next_img'/> 
      </main>
    )
  }
}

export default Items