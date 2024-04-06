import React from 'react'
import { ShopItem } from '../ShopItem'

export const ListView = ({items}) => {
  return (
    <div className='list-view'>
        {items.map(el => (
            <ShopItem item={el} key={items.indexOf(el)}/>
        ))}
    </div>
  )
}
