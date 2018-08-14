import React from 'react'
import Products from './Products/Products'
import Cart from './Cart/Cart'
import Filter from './Filter/Filter'
import './Home.css';

const Home = () => {
    return (
        <div className="home">
            {/* <Filter/> */}
            <Products/>
            <Cart/>
        </div>
    )
}

export default Home
