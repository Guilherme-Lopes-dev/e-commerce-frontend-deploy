import React from 'react'
import { TailSpin } from 'react-loader-spinner';
import './css/Loading.css'

const Loading = () => {
  return (
    <div className='loading-screen'>
      <TailSpin
        height="120"
        width="120"
        radius="13"
        color="blue"
        ariaLabel="loading"
        wrapperStyle
        wrapperClass
      />
    </div>
  )
}

export default Loading