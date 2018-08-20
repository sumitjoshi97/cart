import React, { Component } from 'react'
import { connect } from 'react-redux'
import * as actions from '../../../store/actions/index'
import checkValidity from '../../../utility/checkValidity'
import Input from '../../UI/Input/Input'
import './ContactData.css'

export class ContactData extends Component {
  state = {
    orderForm: {
      name: {
        elementType: 'input',
        elementConfig: {
          type: 'text',
          placeholder: 'Name'
        },
        value: '',
        validation: {
          required: true
        },
        valid: false,
        touched: false
      },
      street: {
        elementType: 'input',
        elementConfig: {
          type: 'text',
          placeholder: 'Street'
        },
        value: '',
        validation: {
          required: true
        },
        valid: false,
        touched: false
      },
      zipCode: {
        elementType: 'input',
        elementConfig: {
          type: 'text',
          placeholder: 'Zipcode'
        },
        value: '',
        validation: {
          required: true,
          minLength: 5,
          maxLength: 5,
          Numeric: true
        },
        valid: false,
        touched: false
      },
      country: {
        elementType: 'input',
        elementConfig: {
          type: 'text',
          placeholder: 'Country'
        },
        value: '',
        validation: {
          required: true
        },
        valid: false,
        touched: false
      },
      email: {
        elementType: 'input',
        elementConfig: {
          type: 'text',
          placeholder: 'Email'
        },
        value: '',
        validation: {
          required: true,
          isEmail: true
        },
        valid: false,
        touched: false
      }
    },
    formIsValid: false
  }


  orderHandler = event => {
    event.preventDefault()

    const formData = {}

    for(let formElement in this.state.orderForm) {
      formData[formElement] = this.state.orderForm[formElement].value
    }
    const order = {
      cart: this.props.cart,
      price: this.props.totalPrice,
      orderData: formData,
      userId: this.props.userId
    }
    this.props.onPurchaseOrder(order, this.props.token);
  }

  inputChangeHandler = (event, inputIdentifier) => {
    const updatedOrderForm = { ...this.state.orderForm }
    const updatedFormElement = { ...updatedOrderForm[inputIdentifier] }
    updatedFormElement.value = event.target.value
    updatedFormElement.valid = checkValidity(updatedFormElement.value, updatedFormElement.validation)
    updatedFormElement.touched = true
    updatedOrderForm[inputIdentifier] = updatedFormElement

    let formIsValid = true
    for (let inputIdentifier in updatedOrderForm ) {
      formIsValid = updatedOrderForm[inputIdentifier].valid && formIsValid
    }
    this.setState({orderForm: updatedOrderForm, formIsValid: formIsValid})
  }


  render() {
    const formElementsArray = []
    for (let key in this.state.orderForm) {
      formElementsArray.push({
        id: key,
        config: this.state.orderForm[key]
      })
    }

    let form = (
      <form onSubmit={this.orderHandler}>
        {formElementsArray.map(formElement => (
          <Input
            key={formElement.id}
            elementConfig={formElement.config.elementConfig}
            type={formElement.config.elementType}
            value= {formElement.config.value}
            invalid= {!formElement.config.valid}
            shouldValidate={formElement.config.validation}
            touched={formElement.config.touched}
            changed={(event)=>this.inputChangeHandler(event, formElement.id)} />
        ))}
        <button className="contact-data__submit btn-large" disabled={!this.state.formIsValid}>order</button>
      </form>
    )

    return (
      <div className="contact-data">
        <h2>Enter your contact data</h2>
        {form}
      </div>
    )
  }
}

const mapStateToProps = state => {
  return {
    cart: state.cart.cart,
    totalPrice: state.cart.totalPrice,
    userId: state.auth.userId,
    token: state.auth.token,
    loading: state.order.loading
  }
}

const mapDispatchToProps = dispatch => {
  return {
    onPurchaseOrder: (order, token) => dispatch(actions.purchaseOrder(order, token))
  }
}
export default connect(mapStateToProps, mapDispatchToProps)(ContactData)