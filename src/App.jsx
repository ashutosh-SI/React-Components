import { useState } from 'react';
// import './App.css';
import 'bootstrap/dist/css/bootstrap.css';
// import { BooksContext } from './Store/ContextStore';
// import BooksProvider from './hooksdemo/useContextDemo/booksProject/BooksProvider';
// import BookList from './hooksdemo/useContextDemo/booksProject/BookList';
// import EmojiDisplay from './components/EmojiDisplay';
// import CleanUpWithUseEffect from './hooksdemo/useEffectDemo/CleanupDemo';
// import Counter from './hooksdemo/useReducerDemo/CounterReducer';
// import BalanceReducer from './hooksdemo/useReducerDemo/BalanceReducer';
// import TextBoxFocus from './hooksdemo/useRefDemo/TextBoxFocus';
// import RefWithMouseEvent from './hooksdemo/useRefDemo/RefWithMouseDemo';
// import FormElement from './hooksdemo/customHooks/TextBoxWithCustomHooks';
// import ShippingAddress from './hooksdemo/customHooks/ShippingAddress';
// import DisplayAPI from './hooksdemo/customHooks/Card';
// import Card from './hooksdemo/AuthService/AuthApp';
// import CartProvider from './hooksdemo/AuthService/AuthApp';
// import { useCart } from './hooksdemo/AuthService/AuthApp';

import { ContextProvider } from './Store/ContextProvider';
import ReactDOM from 'react-dom/client';
import Cart from './hooksdemo/AuthService/AuthApp';
import Banner from './hooksdemo/AuthService/Settings';
import AddressDisplay from './hooksdemo/AuthService/Address';
import AddressAndTotal from './hooksdemo/AuthService/AuthService';
import ChildComponent from './hooksdemo/useMemoDemo/ChildComponent';
import MemoizedContainer from './hooksdemo/useMemoDemo/MemoizedContainer';
function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      {/* <BooksProvider>
            <BookList />
        </BooksProvider> */}
        {/* <EmojiDisplay></EmojiDisplay> */}
        {/* <CleanUpWithUseEffect/> */}
        {/* <Counter></Counter> */}
        {/* <Counter></Counter> */}
        {/* <BalanceReducer></BalanceReducer> */}

        {/* <RefWithMouseEvent></RefWithMouseEvent> */}
        {/* <FormElement></FormElement> */}
        {/* <ShippingAddress/> */}
        {/* <DisplayAPI/> */}
        {/* <ContextProvider>
      <Cart />
      <AddressAndTotal />
      <Banner />
      <AddressDisplay />
    </ContextProvider> */}

    {/* <ChildComponent/> */}
    <MemoizedContainer/>
    </>
  );
}


export default App;
