import React from 'react'
import Products from './Products/Products'
import Cart from './Cart/Cart'

import './Home.css';

const Home = () => {
    return (
        <div className="home">
            <Products/>
            <Cart/>
        </div>
    )
}

export default Home