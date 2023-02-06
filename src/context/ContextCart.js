import React from 'react'

const ContextCart = React.createContext({
  cartList: [],
  addCartItem: () => {},
  deleteCartItem: () => {},
})

export default ContextCart
