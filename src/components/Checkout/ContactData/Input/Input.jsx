import React from 'react'
import './Input.css'

const Input = (props) => (
    <div className="input">
        <label className="input__label">{props.label}</label>
        <input 
            {...props.elementConfig}
            value={props.value}
            onChange={props.changed}
            className="input__element"
            />
    </div>
)

export default Input