import { Outlet} from "react-router-dom";

import ListedBookNavbar from "../ListedBookNavbar/ListedBookNavbar";


const ListedBooks = () => {
   
    return (
        <div>
            <div className="bg-[#F3F3F3] py-4 rounded-2xl mt-6">
                <h2 className="text-center text-3xl font-bold">Books</h2>
            </div>
                <ListedBookNavbar className=""></ListedBookNavbar>
                <Outlet></Outlet>
           
        </div>
    );
};

export default ListedBooks;