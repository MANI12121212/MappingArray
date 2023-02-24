import React from 'react'

const Number = ({color,i}) => {
  return (
    <div className='hello' style={{backgroundColor:color}}>
      {i}
    </div>
  )
}

export default Number
