import { useState } from 'react';
// import './App.css';
import 'bootstrap/dist/css/bootstrap.css';
import { BooksContext } from './Store/ContextStore';
import BooksProvider from './hooksdemo/useContextDemo/booksProject/BooksProvider';
import BookList from './hooksdemo/useContextDemo/booksProject/BookList';


function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <BooksProvider>
            <BookList />
        </BooksProvider>
    </>
  );
}

export default App;
