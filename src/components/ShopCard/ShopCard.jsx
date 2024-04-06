import React from 'react'

export const ShopCard = ({card}) => {
  return (
    <div className='card'>
        <div className='card-name'>{card.name}</div>
        <div className='card-color'>{card.color}</div>
        <div className='card-img'>
            <img src={card.img} alt={card.img}/>
        </div>
        <div className='card-footer'>
            <div className='card-price'>{`$${card.price}`}</div>
            <button className='card-button'>Add to cart</button>
        </div>
    </div>
  )
}
