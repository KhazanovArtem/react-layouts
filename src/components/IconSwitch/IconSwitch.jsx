import React from 'react'

export const IconSwitch = ({icon, onSwitch}) => {
  return (
    <div className='button-container'>    
    <button className={`button-switch ${icon} material-icons`} onClick={() => onSwitch(icon)}></button>
    </div>
  )
}
