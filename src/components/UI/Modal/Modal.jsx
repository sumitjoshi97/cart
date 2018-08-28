import React, { Component } from 'react'
import './Modal.css'

export class Modal extends Component {
  render() {
    return (
      <div className="modal">
        <div className="modal__backdrop" onPointerDown={this.props.clicked}></div>
        <div className="modal__info">
            <img src={this.props.image} className="modal__info__img" alt="product"/>
            <div className="modal__info__title">{this.props.title}</div>
        </div>
      </div>
    )
  }
}

export default Modal