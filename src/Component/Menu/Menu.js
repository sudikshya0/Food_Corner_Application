import React from 'react'
import './Menu.css'
import Card from '../Menu-card/Card'
import { MenuList } from '../Menu-card/MenuList'

const Menu = () => {
  return (
    <div className='menu-container'>
      <h1>Our Menu</h1>
      <div className='menu-list'>
        {MenuList.map((item) => { return <Card name = {item.name} image = {item.image} price = {item.price} />})}
      </div>
    </div>
  )
}

export default Menu