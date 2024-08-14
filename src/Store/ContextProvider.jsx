import React, { createContext, useContext, useState } from 'react';

const CartContext = createContext();
const AddressContext = createContext();

export const useCart = () => useContext(CartContext);
export const useAddress = () => useContext(AddressContext);

export const ContextProvider = ({ children }) => {
  const [cart, setCart] = useState({
    desk: 100,
    chair: 50,
    lamp: 30,
  });

  const [address, setAddress] = useState('');

  const removeFromCart = (item) => {
    setCart((prevCart) => ({ ...prevCart, [item]: 0 }));
  };

  return (
    <CartContext.Provider value={{ cart, removeFromCart }}>
      <AddressContext.Provider value={{ address, setAddress }}>
        {children}
      </AddressContext.Provider>
    </CartContext.Provider>
  );
};

