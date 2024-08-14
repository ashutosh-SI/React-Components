// Cart.js
import React from 'react';
import { useCart } from '../../Store/ContextProvider';

const Cart = () => {
  const { cart, removeFromCart } = useCart();

  return (
    <div>
      <div>Desk: ${cart.desk}</div>
      <button onClick={() => removeFromCart('desk')}>Remove from Cart</button>
      <div>Chair: ${cart.chair}</div>
      <button onClick={() => removeFromCart('chair')}>Remove from Cart</button>
      <div>Lamp: ${cart.lamp}</div>
      <button onClick={() => removeFromCart('lamp')}>Remove from Cart</button>
    </div>
  );
};

export default Cart;
