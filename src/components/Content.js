import React, { Component } from 'react'


export class content extends Component {
  render() {
    return (
      <div className='content'>
        <div className='content_right'>
          <img src='./img/dmitriy-7.png' id='girl_img'/>
          <img src='./img/girl_1.png' id='girl_img2_end'/>
          <img src='./img/girl_2.png' id='girl_img3'/>
        </div>
        {/* контент слева */}
          <div className='content_left'>
              <h1>Новые поступления <br/> в этом сезоне</h1>
              <p>Утонченные сочетания и бархатные оттенки - вот то, что вы искали в этом сезоне. Время исследовать.</p>
              <div>
                <img src='./img/Frame 9.png' />
                <button>Открыть магазин</button>
              </div>
          </div>
          <span id='new-collection_it'>Новая коллекция</span>
      </div>
    )
  }
};
export default content