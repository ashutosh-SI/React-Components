// AddressDisplay.js
import React from 'react';
import { useAddress } from '../../Store/ContextProvider';

const AddressDisplay = () => {
  const { address } = useAddress();

  return <div>Current Address: {address}</div>;
};

export default AddressDisplay;
