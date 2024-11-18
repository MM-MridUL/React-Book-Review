import { useLoaderData } from "react-router-dom";
import { useEffect, useState } from "react";
import { getStoredBook } from "../../Utility/localSorage";
import ReadBook from "../ReadBook/ReadBook";

const ReadBooks = () => {
    const books=useLoaderData();

    const [readBooks,setReadBooks]=useState([])

    useEffect(()=>{
        const storedBookIds = getStoredBook();
        if(books.length>0){
            // const readBooks = books.filter(book=>storedBookIds.includes(book.bookId));
            const readBooks=[];
            for(const id of storedBookIds){
                const book=books.find(book=>book.bookId===id);
                if(book){
                    readBooks.push(book);
                }
            }
            setReadBooks(readBooks);
            //  console.log(books,storedBookIds,readBooks);
        }
    },[books])
    return (
        <div>

            <div>
                {
                    readBooks.map(readBook=><ReadBook key={readBook.bookId} readBook={readBook}></ReadBook>)
                }
            </div>
        </div>
    );
};

export default ReadBooks;