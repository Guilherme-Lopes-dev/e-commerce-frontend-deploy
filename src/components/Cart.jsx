import React, { useEffect } from 'react'
import './css/Cart.css'
import { useSelector, useDispatch } from 'react-redux'
import { Link } from "react-router-dom"
import { addToCart, decreaseCart, removeFromCart, clearCart, getTotals, checkout } from '../features/cartSlice'

const Cart = () => {
  const cart = useSelector((state) => state.cart)
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(getTotals())
  }, [cart])

  const handleRemoveFromCart = (cartItem) => {
    dispatch(removeFromCart(cartItem))
  }
  const handleDecreaseCart = (cartItem) => {
    dispatch(decreaseCart(cartItem))
  }
  const handleIncreaseCart = (cartItem) => {
    dispatch(addToCart(cartItem))
  }
  const handleClearCart = (cartItem) => {
    dispatch(clearCart(cartItem))
  }
  const handleCheckout = (cartItem) => {
    dispatch(checkout(cartItem))
  }
  return (
    <div className='cart-container'>
      <h2>Carrinho de compras</h2>
      {cart.cartItems.length === 0 ? (
        <div className="cart-empty">
          <p>Seu carrinho está vazio</p>
          <div className="start-shopping">
            <Link to="/">
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" className="bi bi-arrow-left" viewBox="0 0 16 16">
                <path fillRule="evenodd" d="M15 8a.5.5 0 0 0-.5-.5H2.707l3.147-3.146a.5.5 0 1 0-.708-.708l-4 4a.5.5 0 0 0 0 .708l4 4a.5.5 0 0 0 .708-.708L2.707 8.5H14.5A.5.5 0 0 0 15 8z" />
              </svg>
              <span>Comece a comprar</span>
            </Link>
          </div>
        </div>
      ) : (<div>
        <div className="titles">
          <h3 className="products-title">Produto</h3>
          <h3 className="price">Preço</h3>
          <h3 className="quantity">Quantidade</h3>
          <h3 className="total">Total</h3>
        </div>
        <div className="cart-items">
          {cart.cartItems.map(cartItem => (
            <div className="cart-item" key={cartItem.id}>
              <div className="cart-product">
                <img src={cartItem.image} alt={cartItem.name} />
                <div>
                  <h3>{cartItem.name}</h3>
                  <p>{cartItem.desc}</p>
                  <button onClick={() => handleRemoveFromCart(cartItem)}>Remover</button>
                </div>
              </div>
              <div className="cart-product-price">${cartItem.price}</div>
              <div className="cart-product-quantity">
                <button onClick={() => handleDecreaseCart(cartItem)}>-</button>
                <div className="count">{cartItem.cartQuantity}</div>
                <button onClick={() => handleIncreaseCart(cartItem)}>+</button>
              </div>
              <div className="cart-product-total-price">
                ${cartItem.price * cartItem.cartQuantity}
              </div>
            </div>
          ))}
        </div>
        <div className="cart-sumary">
          <button className='clear-cart' onClick={() => handleClearCart()}>Limpar carrinho</button>
          <div className="cart-checkout">
            <div className="subtotal">
              <span>Subtotal</span>
              <span className='amount'>${cart.cartTotalAmount}</span>
            </div>
            <p>Frete grátis para todas as compras</p>
            <Link to='/checkout'>
              <button onClick={() => handleCheckout()}>Checkout</button>
            </Link>
            <div className="continue-shopping">
              <Link to="/">
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" className="bi bi-arrow-left" viewBox="0 0 16 16">
                  <path fillRule="evenodd" d="M15 8a.5.5 0 0 0-.5-.5H2.707l3.147-3.146a.5.5 0 1 0-.708-.708l-4 4a.5.5 0 0 0 0 .708l4 4a.5.5 0 0 0 .708-.708L2.707 8.5H14.5A.5.5 0 0 0 15 8z" />
                </svg>
                <span>Continue comprando</span>
              </Link>
            </div>
          </div>
        </div>
      </div>
      )}
    </div>
  )
}

export default Cart