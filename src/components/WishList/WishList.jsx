import { useEffect, useState } from "react";
import { useLoaderData } from "react-router-dom";
import { getStoredWishlist } from "../../utility/wishList";
import WishlistBook from "../WishlistBook/WishlistBook";


const WishList = () => {

    const books=useLoaderData();
    console.log(books);

    const [wishlistBooks,setWishlistBooks]=useState([]);

    useEffect(()=>{
        const wishlistBooksIds=getStoredWishlist();

        if(books.length>0){
            const wishlistBooks=[]
            for(const id of wishlistBooksIds){
               const book=books.find(book=>book.bookId===id);
               if(book){
                wishlistBooks.push(book)
               }
            }
            setWishlistBooks(wishlistBooks);
        }
    },[books])

    return (
        <div>
            <div>
                {
                    wishlistBooks.map(book=><WishlistBook key={book.bookId} book={book}></WishlistBook>)
                }
            </div>
        </div>
    );
};

export default WishList;