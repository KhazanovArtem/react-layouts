import React from 'react'
import { ShopCard } from '../ShopCard'

export const CardsView = ({cards}) => {
  return (
    <div className='cards-view'>
        {cards.map(el => (
            <ShopCard card={el} key={cards.indexOf(el)}/>
        ))
    }</div>
  )
}
