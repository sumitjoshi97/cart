import React, { Component } from 'react';
import './App.css';
import Filter from './containers/Filter/Filter';
import Cart from './components/Cart/Cart'
import Home from './containers/Home/Home'
class App extends Component {
  render() {
    return (
      <div className="App">
        {/* <Filter/> */}
        <Home/>
        <Cart/>
      </div>
    );
  }
}

export default App;
