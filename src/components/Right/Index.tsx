import React from 'react'
import './Index.css'
import img from '../../assets/img.png'

declare module "*.png";

function Right() {
  return (
    <div className='right'>
        <span className='login-text'>Already a member?</span>
        <button className='login-btn'>LOGIN</button>
        <img src={img} alt="" className='img'/>
    </div>
  )
}

export default Right