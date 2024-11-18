
import PropTypes from 'prop-types';
import { IoLocationOutline } from "react-icons/io5";
import { HiOutlineUsers } from "react-icons/hi2";
import { MdOutlineContactPage } from "react-icons/md";
import { Link } from 'react-router-dom';

const ReadBook = ({readBook}) => {
    const {bookId,bookName,author,image,category,tags,totalPages,publisher,yearOfPublishing,rating}=readBook;
    return (
        <div className='mt-4 border p-4 rounded-2xl'>
            <div className='grid grid-cols-4 gap-4'>
                <div className='bg-[#F3F3F3] flex items-center justify-center rounded-2xl h-[250px]'>
                    <img className='h-[200px] w-[40%]' src={image} alt="" />
                </div>
                <div className='col-span-3 space-y-4'>
                    <h2 className='text-2xl font-bold'>{bookName}</h2>
                    <p className='text-[#424242]'>By:{author}</p>
                   <div className='flex'>
                    <h2 className='mr-4 font-bold'>Tags: </h2>
                   {
                        tags.map((tag,idx)=><div key={idx}>
                            <button className='mr-4 bg-[#E7F8E4] py-1 px-4 text-[#23BE0A] rounded-full'>{tag}</button>
                        </div>)
                    }
                    <p className='flex items-center ml-4'> <IoLocationOutline className='mr-2 text-xl'></IoLocationOutline> year of Publishing: {yearOfPublishing}</p>
                
                   </div>
                   <div className='flex'>
                   <p className='mr-4 flex items-center'> <HiOutlineUsers className='mr-2 text-xl'></HiOutlineUsers> Publisher: {publisher}</p>
                   <p className='flex items-center'> <MdOutlineContactPage className='mr-2 text-xl'></MdOutlineContactPage> Page: {totalPages}</p>
                   </div>
                   <hr className='my-4' />
                   <div className=''>
                        <button className='bg-[#E0EEFF] text-[#328EFF] mr-4 py-2 px-4 rounded-full'>Category: {category}</button>
                        <button className='text-[#FFAC33] bg-[#FFF3E0] mr-4 py-2 px-4 rounded-full'>Rating: {rating}</button>
                        <Link to={`/book/${bookId}`}><button className='bg-[#23BE0A] text-white py-2 px-4 rounded-full'>View Details</button></Link>
                   </div>
                </div>
            </div>
        </div>
    );
};

ReadBook.propTypes={
    readBook:PropTypes.object
}
export default ReadBook;