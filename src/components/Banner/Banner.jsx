import { Link } from "react-router-dom";
import banner from "./../../assets/image.png"
const Banner = () => {
    return (
        <div className="my-9">
            <div className="md:flex gap-4 justify-between items-center bg-[#F3F3F3] p-16 rounded-2xl">
                <div className="">
                    <h2 className="text-6xl font-bold leading-relaxed mb-9">Books to freshen up your bookshelf</h2>
                   <Link to='listed-books'> <button className="bg-[#23BE0A] hover:bg-[#1E5316] duration-300 text-white text-xl px-4 py-2 rounded">View The List</button></Link>
                </div>
                 <div className="">
                        <img src={banner} alt="" />
                 </div>
            </div>
        </div>
    );
};

export default Banner;