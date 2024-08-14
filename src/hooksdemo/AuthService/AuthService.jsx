// AddressAndTotal.js
import React from 'react';
import { useCart, useAddress } from '../../Store/ContextProvider';


const AddressAndTotal = () => {
  const { cart } = useCart();
  const { address, setAddress } = useAddress();

  const totalPrice = cart.desk + cart.chair + cart.lamp;

  return (
    <div>
      <input
        type="text"
        value={address}
        onChange={(e) => setAddress(e.target.value)}
        placeholder="Enter your address"
      />
      <div>Total Price: ${totalPrice}</div>
    </div>
  );
};

export default AddressAndTotal;
