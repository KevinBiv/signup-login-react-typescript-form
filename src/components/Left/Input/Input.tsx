import React from 'react'
import './Input.css';

type InputProps = {
    type: string,
    placeholder: string
}

function Input(props: InputProps) {
  return (
    <input type={props.type} placeholder={props.placeholder} className="input" />
  )
}

export default Input