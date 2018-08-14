import React, { Component } from 'react'
import { connect } from 'react-redux'
import * as actions from '../../../store/actions/index';
import Product from './Product/Product';
import Filter from '../Filter/Filter';
import "./Products.css";

const sizes = [
  'XS', 'S', 'M', 'ML', 'L', 'X', 'XL', 'XXL'
]

export class Home extends Component {
  state = {
    filters: []
  }

  componentDidMount() {
    this.props.onInitProducts()
  }

  setFilters = (size) => {
    let { filters } = this.state;
    const index = filters.indexOf(size);

    if (index >= 0) {
      filters = filters.filter(filter => filter !== size)
    } else {
      filters = filters.concat(size)
    }

    this.setState(() => ({ filters }))
  }

  
  render() {
    let {filters} = this.state;
    let productsList = [];
    let {products} = this.props
    if (products) {
        if (filters.length>0) {
          products = products.filter(product => filters.find(filter => product.availableSizes.find(size => size === filter)))
          // console.log(productsList)
        }
        productsList=products.map(product => {
          return <Product
          key={product.id}
          product={product}
        />
        }
       )
    }
    
    return (
      <div className="home">
        <Filter sizes={sizes} setFilters={this.setFilters}/>

        <div className="products-list">
          {productsList}
        </div>   
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    products: state.product.products,
    cart: state.cart.cart
  }
}

const mapDispatchToProps = dispatch => {
  return {
    onInitProducts: (filters) => dispatch(actions.initProducts(filters))
  }
}


export default connect(mapStateToProps, mapDispatchToProps)(Home)