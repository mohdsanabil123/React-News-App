import React from 'react'
import spinner from './spinner.gif'

const Spinner = () => {
  return (
    <div className='text-center'>
      <img src={spinner} width={'120px'} alt="Loding..." />
    </div>
  )
}

export default Spinner
