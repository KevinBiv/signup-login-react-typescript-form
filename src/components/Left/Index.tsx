import React from 'react'
import Input from './Input/Input'
import './Index.css'

function Left() {
  return (
    <div className='left'>
        <div className='header-text'>
            <h1>Create Account</h1>
            <p>Create a great platform for managing your cases & clients</p>
        </div>
        <form action="" className='form'>
            <div className='input-container'>
                <Input type='text' placeholder='Full Name*' />
                <Input type='text' placeholder='Organization Name*' />
            </div>
            <div className='input-container'>
                <Input type='email' placeholder='Email Address*' />
                <Input type='tel' placeholder='Phone Number*' />
            </div>
            <Input type='password' placeholder='Password*' />
        </form>
        <button className='signup-btn'>SIGN UP</button>
    </div>
  )
}

export default Left