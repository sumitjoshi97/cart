  // method to add product to cart
  addQuantity = () => {
    this.setState(prevState => ({
      quantity: prevState.quantity + 1
    }))
    this.props.onAddProductToCart(this.props.product)
  }

  // mthod to 1. subtract and 2. remove product -- `if quantity = 0` -- from cart
  subtractQuantity = () => {
    this.setState(prevState => ({
      quantity: prevState.quantity - 1
    }))
    this.props.onRemoveProductFromCart(this.props.product)
  }

  //buttons render for product 
  renderButtons = () => {
    const { quantity } = this.state
    // return buttons based  on product quantity
    return quantity > 0 ? (
      // if product quantity is > 0 it renders `add` and `subtract` button
      <div className="product__cta">
        <button
          onPointerDown={this.subtractQuantity}
          className="product__cta__subtract cta-btn"
        >
          -
        </button>

        <div className="product__cta__quantity">{quantity}</div>

        <button
          onPointerDown={this.addQuantity}
          className="product__cta__add cta-btn"
        >
          +
        </button>
      </div>
    ) : (
      // if quantity = 0 it renders `add To Cart` button 
      <button className="product__add" onPointerDown={this.addQuantity}>
        {' '}
        Add to Cart
      </button>
    )
  }

const Product = props => {
  return (
    <div className="product">
      <img 
        className="product__image" 
        src={props.product.image_url}
        alt="product"
        onPointerDown={()=>props.clicked(props.product.image_url, props.product.title)}
        />
      <div className="product__info">
        <h3 className="product__info__header">{props.product.title}</h3>
        <p className="product__info__price">{`$${props.product.price}  USD`}</p>
        <p className="product__info__para">{props.product.style}</p>
      </div>

      <button
        className="product__add"
        onPointerDown={() => props.onAddProductToCart(props.product)}>Add to Cart</button>
    </div>
  )
}

const mapDispatchToProps = dispatch => {
  return {
    onAddProductToCart: (product) => dispatch(actions.addProductToCart(product))
  }
}

export default connect(null, mapDispatchToProps)(Product);