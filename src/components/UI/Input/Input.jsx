import React from 'react'
import './Input.css'

const Input = (props) => (
    <input 
        {...props.elementConfig}
        value={props.value}
        onChange={props.changed}
        className="input"
        />
)

export default Input