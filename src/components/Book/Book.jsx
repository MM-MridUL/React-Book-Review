
import PropTypes from 'prop-types';
import { MdOutlineStarBorderPurple500 } from "react-icons/md";
import { useNavigate, useParams } from 'react-router-dom';
const Book = ({book}) => {
    const {bookId,bookName,author,image,category,rating}=book;

    const navigate =useNavigate()
    const cardId=useParams();
    console.log(cardId);

    const handleCard=(id)=>{
        console.log(id);
    navigate(`/book/${id}`)
}

    return (
        <div onClick={()=>handleCard(bookId)} className='border rounded-2xl p-4'>
            <div className=" card  h-[100%] ">
                <figure className='bg-base-200 md:h-[300px] h-[370px] rounded-2xl'>
                    <img className='w-[40%] mx-auto rounded-2xl '
                    src={image}
                    alt="Shoes" />
                </figure>
                <div className="py-4">
                    <div className='text-[#23BE0A]'>
                        <button className='mr-4 bg-[#F4FCF3] px-4 py-2 rounded-2xl'>Young Adult</button>
                        <button className='bg-[#F4FCF3] px-4 py-2 rounded-2xl'>Identity</button>
                    </div>
                    <h2 className="card-title my-4 text-2xl font-bold text-[#131313]">{bookName}</h2>
                    <p className='text-[#898989]'>By:{author}</p>
                    <hr className="border-t-2 border-dashed border-gray-200 my-4" />
                    <div className='flex justify-between'>
                        <h2>{category}</h2>
                        <div>
                            <h2 className='flex gap-2 items-center text-xl'> {rating}<MdOutlineStarBorderPurple500 className=''></MdOutlineStarBorderPurple500></h2>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};
Book.propTypes={
    book: PropTypes.object
}
export default Book;