import { Link, useLoaderData, useParams } from "react-router-dom";
import Tags from "../Tags/Tags";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { getStoredBook, svaeStoredBook } from "../../Utility/localSorage";
import { getStoredWishlist, saveStoredWishlist } from "../../utility/wishList";


const BookDetails = () => {


    const books=useLoaderData()
    const {cardId}=useParams()
    
    const cardDetail=books.find(book=>book.bookId===cardId)
    console.log(cardDetail.bookName);
    
const handlrReadBook=()=>{
    const id=getStoredBook();
    const exist=id.find(id=>id===cardId);
    if(!exist){
        svaeStoredBook(cardId)
        toast('Read Book Successfully');
        return;
    }
    toast('You Have already read');
   
}

const handleWishlistBook=()=>{
    const id=getStoredWishlist();
    const exist= id.find(id=>id===cardId);
    if(!exist){
        saveStoredWishlist(cardId);
        toast('Wishlist Added Successfully');
        return;

    }
    toast('You Have already added');
   
   
}
   

  

    return (
        <div className="md:flex gap-4 my-9">
             <div className=" bg-base-300 border-pink-200 rounded-2xl flex-1 flex items-center">
                <div className="">
                    <img className="w-[60%] mx-auto rounded-2xl"
                    src={cardDetail.image} />
                </div>
            </div>
            <div className="flex-1 md:p-2 p-4">
                <h2 className="text-4xl font-bold text-[#131313] mb-4">{cardDetail.bookName}</h2>
                <p className="text-[#7D7D7D] text-xl font-medium mb-4">{cardDetail.author}</p>
                <hr />
                <p className="text-[#131313] text-xl font-medium my-2">{cardDetail.category}</p>
               
                <hr />
                <p className="text-[#131313] my-4"><span className="text-[#131313] font-bold">Review: </span>{cardDetail.review}</p>
               <div className="flex gap-4 my-4">
                <h2 className="text-[#131313] font-bold">Tag:</h2>
                    {
                            cardDetail.tags.map((tag,idx)=><Tags key={idx} tag={tag}></Tags>)
                    }
               </div>
               <hr />
               <div className="space-y-2 mt-4">
                    <p className="text-gray-400">Number of Pages:<span className="text-black font-bold ml-9">{cardDetail.totalPages}</span></p>
                    <p className="text-gray-400">Publisher:<span className="text-black font-bold ml-20">{cardDetail.publisher}</span></p>
                    <p className="text-gray-400">Year of Publishing:<span className="text-black font-bold ml-6">{cardDetail.yearOfPublishing}</span></p>
                    <p className="text-gray-400">Rating:    <span className="text-black font-bold ml-24">{cardDetail.rating}</span></p>
               </div>
               <div className="mt-9">
                    <Link><button onClick={handlrReadBook} className="text-xl font-semibold px-4 py-2 rounded border border-gray-400 mr-4 hover:bg-[#23BE0A] hover:text-white duration-700">Read</button></Link>
                    <Link><button onClick={handleWishlistBook} className="text-xl font-semibold px-4 py-2 rounded border border-gray-400 bg-[#50B1C9] hover:bg-[#286878] duration-300">Wishlist</button></Link>
               </div>
            </div>
            <ToastContainer></ToastContainer>
        </div>
    );
};

export default BookDetails;