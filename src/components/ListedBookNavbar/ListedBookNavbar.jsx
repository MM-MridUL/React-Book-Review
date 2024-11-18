import { NavLink } from "react-router-dom";

const ListedBookNavbar = () => {
    return (
        <div className="my-9">
        <NavLink to="/listed-books" className="p-2"><button className="">Read Books</button></NavLink>


        <NavLink to="/listed-books/wishlist" className="p-2"><button className="">Wishlist Books</button></NavLink>
        <hr className="mt-4" />
    </div>
    );
};

export default ListedBookNavbar;