import { useContext, useEffect, useState } from "react";
import getBooks from "../../../assets/data/books";
import { BooksContext } from "../../../Store/ContextStore";

const BookList = () => {
    const [books, setBooks] = useContext(BooksContext);
    const [error, setError] = useState(null);

    useEffect(() => {
        getBooks()
            .then(data => setBooks(data))
            .catch(err => setError(err));
    }, [setBooks]);

    if (error) {
        return <p>Error: {error.message}</p>;
    }

   

    return (
        <table>
            <thead>
                <tr>
                    <th>ID</th>
                    <th>Title</th>
                    <th>Author</th>
                    <th>ISBN</th>
                    <th>Rating</th>
                </tr>
            </thead>
            <tbody>
                {books.map(book => (
                    <tr key={book.id}>
                        <td>{book.id}</td>
                        <td>{book.title}</td>
                        <td>{book.author}</td>
                        <td>{book.isbn}</td>
                        <td>{book.rating}</td>
                    </tr>
                ))}
            </tbody>
        </table>
    );
};

export default BookList;
