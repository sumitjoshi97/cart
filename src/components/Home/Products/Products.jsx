import React, { Component } from 'react'
import { connect } from 'react-redux'
import * as actions from '../../../store/actions/index';
import Product from './Product/Product';
import Spinner from '../../UI/Spinner/Spinner'
import "./Products.css";

export class Home extends Component {
  componentDidMount() {
    this.props.onInitProducts()
  }
  
  render() {
    let productsList = null;
    let {products, filters} = this.props

    if (products) {
      if (filters.length > 0) {
        products = products.filter(product => filters.find(filter => product.availableSizes.find(size => size === filter)))
      }
      productsList = products.map(product => {
        return <Product
          key={product.id}
          product={product}
        />
      })
    }
    if (this.props.loading) {
      productsList = <Spinner />
    }
    
    return (
      <div className="home">
        <div className="products-list">
          {productsList}
        </div>   
      </div>
    )
  }
}

const mapStateToProps = state => {
  return {
    loading: state.product.loading,
    products: state.product.products,
    cart: state.cart.cart,
    filters: state.filter.filters
  }
}

const mapDispatchToProps = dispatch => {
  return {
    onInitProducts: (filters) => dispatch(actions.initProducts(filters))
  }
}


export default connect(mapStateToProps, mapDispatchToProps)(Home)