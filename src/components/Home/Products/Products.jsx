import React, { Component } from 'react'
import { connect } from 'react-redux'
import * as actions from '../../../store/actions/index';
import Product from './Product/Product';
import Spinner from '../../UI/Spinner/Spinner'
import Modal from '../../UI/Modal/Modal'
import withErrorHandler from '../../hoc/withErrorHandler'
import axios from '../../../axios-orders'
import "./Products.css";

export class Products extends Component {
  state = {
    isModalActive: false,
    modalImage: null,
    modalTitle: null
  }

  componentDidMount() {
    this.props.onInitProducts()
  }

  productModalHandle = (image, title) => {
    let { isModalActive, modalImage, modalTitle } = this.state
    isModalActive = !isModalActive
    modalImage = image
    modalTitle = title
    this.setState({ isModalActive, modalImage, modalTitle })
  }

  closeModal = () => {
    let {isModalActive} = this.state
    isModalActive = !isModalActive
    this.setState({ isModalActive })
  }

  render() {
    let productsList = null;
    let { products, filters } = this.props

    if (products) {
      if (filters.length > 0) {
        products = products.filter(product => filters.find(filter => product.availableSizes.find(size => size === filter)))
      }
      productsList = products.map(product => {
        return <Product
          key={product.id}
          product={product}
          clicked={this.productModalHandle}
        />
      })
    }
    if (this.props.loading) {
      productsList = <Spinner />
    }

    return (
      <div className="products">
        {this.state.isModalActive?<Modal image={this.state.modalImage} title={this.state.modalTitle} IsActive={this.state.isModalActive} clicked={this.closeModal}/>:null}
        <div className="products__list">
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

export default connect(mapStateToProps, mapDispatchToProps)(withErrorHandler(Products, axios))