import React, { Component } from 'react'
import { connect } from 'react-redux'
import {Redirect} from 'react-router-dom'
import * as actions from '../../store/actions/index'
import Input from '../UI/Input/Input'
import Spinner from "../UI/Spinner/Spinner";
import checkValidity from '../../utility/checkValidity'
import './Auth.css'

export class Auth extends Component {
    state = {
        controls: {
            email: {
                elementType: 'input',
                elementConfig: {
                    type: 'email',
                    placeholder: 'Email'
                },
                value: '',
                validation: {
                    required: true,
                    isEmail: true
                },
                valid: true,
                touched: false
            },
            password: {
                elementType: 'input',
                elementConfig: {
                    type: 'password',
                    placeholder: 'Password'
                },
                value: '',
                validation: {
                    required: true
                },
                valid: true,
                touched: false
                
            }
        },
        isSignup: true
    }

    inputChangeHandler = (event, controlName) => {
        const upadatedControls = {
            ...this.state.controls,
            [controlName]: {
                value: event.target.value,
                valid: checkValidity(event.target.value, this.state.controls[controlName].validation),
                touched: true
            }
        }

        this.setState({ controls: upadatedControls })
    }

    submitHandler = (event) => {
        event.preventDefault()
        this.props.onAuth(this.state.controls.email.value, this.state.controls.password.value, this.state.isSignup)
    }

    switchAuthModeHandler = () => {
        this.setState(prevState => ({
            isSignup: !prevState.isSignup
        }))
    }


    render() {
        const formElementArray = []
        for (let key in this.state.controls) {
            formElementArray.push({ id: key, config: this.state.controls[key] })
        }

        let form = formElementArray.map(formElement => (
            <Input
                key={formElement.id}
                elementConfig={formElement.config.elementConfig}
                value={formElement.config.value}
                invalid={formElement.config.valid}
                shouldVAlidate={formElement.config.validation}
                touched={formElement.config.touched}
                changed={(event) => this.inputChangeHandler(event, formElement.id)} 
            />
        ))
        if (this.props.loading) {
            form = <Spinner />
        }
      
        let errorMessage = null
        if (this.props.error) {
            errorMessage = <p>{this.props.error.message}</p>
        }

        let authRedirect = null
        if (this.props.isAuth) {
            authRedirect = <Redirect to={this.props.authRedirectPath} />
        }
       
    return (
        <div className="auth">
            {authRedirect}
            {errorMessage}
            <form onSubmit={this.submitHandler}>
                {form}
                <button className="auth__btn-submit btn-large">Submit</button>
            </form>
            <button 
                className="auth__btn-switch btn-large"
                onPointerDown={this.switchAuthModeHandler}>
                {this.state.isSignup ? 'Switch to SiGN IN' : 'switch to SiGN UP'}
            </button>
        </div>
    )
  }
}

const mapStateToProps = state => {
    return {
        loading: state.auth.loading,
        error: state.auth.error,
        isAuth: state.auth.token !== null,
        authRedirectPath: state.auth.authRedirectPath
    }
}

const mapDispatchToProps = dispatch => {
    return {
        onAuth: (email, password, isSignup) => dispatch(actions.auth(email, password, isSignup)),
        onSetAuthRedirectPath: () => dispatch(actions.setAuthRedirectPath('/'))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Auth)