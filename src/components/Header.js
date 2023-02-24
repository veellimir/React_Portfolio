import React from 'react'
import { AiOutlineMenu } from "react-icons/ai";

export default function Header() {
  return (
    <header>
      {/* кнопки в шапке */}
        <div>
            <span className='logo'>Womagazin</span>
            <AiOutlineMenu id='icon_mobile'/>
            <ul className='nav'>
                <li>Главная</li>
                <li>Магазин</li>
                <li>О бренде</li>
                <li>Контакты</li>
            </ul>
        </div>
        {/* связь */}
        <div>
        <ul className='call_string'>
            <li>+7 (495) 823-54-12</li>
        </ul>
        </div>
    </header>
  )
}
