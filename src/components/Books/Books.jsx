// import { data } from "autoprefixer";
import { useEffect, useState } from "react";
import Book from "../Book/Book";
// import { data } from "autoprefixer";

const Books = () => {
    const [books,setBooks] = useState([]);

    useEffect(()=>{
        fetch('books.json')
        .then(res=>res.json())
        .then(data=> setBooks(data))
        // console.log(data);
    },[])
    return (
        <div>
            <h2 className="text-4xl text-[#131313] text-center font-bold mb-9">Books: {books.length}</h2>
            <div className="grid md:grid-cols-3 gap-4">
                {
                   books.map(book=><Book key={book.book} book={book}></Book>)
                }
            </div>
        </div>
    );
};

export default Books;