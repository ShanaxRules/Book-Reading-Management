import { NavLink, Outlet, useLocation, useNavigate } from "react-router-dom";
import './ListedBook.css'
import { sortPages } from "./functions";
import { useState } from "react";

const ListedBook = () => {
    const [sortType, setSortType] = useState("");
    const navigate = useNavigate();
    const location = useLocation();

    const handleSort = (criteria) => {
        setSortType(criteria);
        navigate(location.pathname, { state: { sort: criteria } }); // Pass sorting via state
    };





    return (
        <div>
            <div className=" bg-gray-200 p-5 mt-24 rounded-2xl">
                <h2 className="text-2xl text-black font-bold text-center">Books</h2>
            </div>
            <div className="mt-6 flex justify-center items-center">
                <ul className="menu bg-base-200 rounded-box w-56">

                    <li>
                        <details>
                            <summary className="text-white bg-[#23be0a]">Sort by</summary>
                            <ul>
                                <li><button onClick={() => handleSort("rating")}>Rating</button></li>
                                <li><button onClick={() => handleSort("pages")}>Number of Pages</button></li>
                                <li><button onClick={() => handleSort("year")}>Published Year</button></li>
                            </ul>
                        </details>
                    </li>

                </ul>


            </div>

            <section className="mt-12">
                <div className="flex justify-start items-center  shan mb-20">
                    <NavLink to={'/listedbook/readbook'}>Read Books</NavLink>
                    <NavLink className={'flex-1'} to={'/listedbook/wishlist'}>WishList Books</NavLink>
                </div>
                <Outlet context={{ sortType }}></Outlet>
            </section>



        </div>
    );
};

export default ListedBook;