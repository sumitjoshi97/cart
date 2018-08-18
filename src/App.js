import React, {Component} from 'react';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom'
import Home from './components/Home/Home'
import Checkout from './components/Checkout/Checkout'
import Sidebar from './components/SideBar/Sidebar';
import Auth from './components/Auth/Auth'
import Logout from './components/Auth/Logout/Logout'
import Orders from './components/Orders/Orders'
class App extends Component {
  render() {
    const right = {
      marginLeft: '32rem'
    }
    return (
      <Router>
        <div>
          <Sidebar/>
          <div style={right}>
            <Switch>
              <Route path='/auth' component={Auth}/>
              <Route path='/logout' component={Logout}/>
              <Route path='/orders' component={Orders}/>
              <Route path='/checkout' component={Checkout}/>
              <Route path='/' component={Home}/>
            </Switch>
          </div>

        </div>

      </Router>
    );
  }
}

export default App;