import React from 'react'

export const ShopItem = ({item}) => {
  return (
    <div className='item'>
    <div className='item-img'>
        <img src={item.img} alt={item.img}/>
    </div>
    <div className='card-name'>{item.name}</div>
    <div className='card-color'>{item.color}</div>
    <div className='card-price'>{`$${item.price}`}</div>
    <button className='card-button'>Add to cart</button>
</div>
  )
}
