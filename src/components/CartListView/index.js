import CartItem from '../CartItem'

import './index.css'
import ContextCart from '../../context/ContextCart'

const CartListView = () => (
  <ContextCart.Consumer>
    {value => {
      const {cartList} = value
      return (
        <ul className="cart-list">
          {cartList.map(eachCartItem => (
            <CartItem key={eachCartItem.id} cartItemDetails={eachCartItem} />
          ))}
        </ul>
      )
    }}
  </ContextCart.Consumer>
)

export default CartListView
