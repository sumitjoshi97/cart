import React, { Component } from 'react';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom'
import Home from './components/Home/Home'
import Checkout from './components/Checkout/Checkout'
import Sidebar from './components/SideBar/Sidebar';

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