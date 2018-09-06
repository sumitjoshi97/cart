import React, {Component} from 'react';
import { BrowserRouter as Router, Switch, Route, Redirect } from 'react-router-dom'
import { connect } from 'react-redux'
import Sidebar from './components/SideBar/Sidebar'
import Home from './components/Home/Home'
import Logout from './components/Auth/Logout/Logout'
import asyncComponent from './components/hoc/asyncComponent/AsyncComponent'
import * as actions from './store/actions/index'
import './App.css'

// code splitting - loading components on demand
const Checkout = asyncComponent(() => import('./components/Checkout/Checkout'))
const Auth = asyncComponent(() => import('./components/Auth/Auth'))
const Orders = asyncComponent(() => import('./components/Orders/Orders'))

// app component
export class App extends Component {
  componentDidMount() {
    this.props.checkAuth()
  }
  render() {
    let routes = (
      <Switch>
        <Route path='/auth' component={Auth} />
        <Route path='/' component={Home} />
        <Redirect to="/" />
      </Switch>
    )

    if (this.props.isAuth) {
      routes = (
        <Switch>
          <Route path='/auth' component={Auth} />
          <Route path='/logout' component={Logout} />
          <Route path='/orders' component={Orders} />
          <Route path='/checkout' component={Checkout} />
          <Route path='/' component={Home} />
          <Redirect to="/" />
        </Switch>
      )
    }
    return (
      <Router>
        <div className="app">
          <Sidebar />
          <div>
            {routes}
          </div>
        </div>
      </Router>
    )
  }
}

const mapStateToProps = state => {
  return {
    isAuth: state.auth.token !== null
  }
}

const mapDispatchToProp = dispatch => {
  return {
    checkAuth: () => dispatch(actions.authCheckState())
  }
}
export default connect(mapStateToProps, mapDispatchToProp)(App)