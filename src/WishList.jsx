import { useLoaderData, useNavigate, useOutletContext } from "react-router-dom";
import WishCard from "./WishCard";
import { useEffect, useState } from "react";
import { getStoredWishObject } from "./localstorageWish";
import { sortPages, sortPublishedYear, sortRatings } from "./functions";

const WishList = () => {

    const wishes = useLoaderData();

    const [appliedWishes, setAppliedWishes] = useState([]);
    const { sortType } = useOutletContext();
    const navigate = useNavigate();


    const clearUp = () =>{
        localStorage.clear();
        navigate('/');
    }



    useEffect(() => {
        const storedWishObject = getStoredWishObject();
        if (wishes.length > 0) {
            let wishSelected = [];
            for (const id of storedWishObject) {
                const wish = wishes.find(wish => wish.bookId == id);
                if (wish) {
                    wishSelected.push(wish);
                }
            }
            setAppliedWishes(wishSelected);

            let sortedBooks = [...wishSelected];
            console.log("Entered here");
            if (sortType === "rating") {
                sortedBooks = sortRatings(true, sortedBooks); // Sort by rating
            } else if (sortType === "pages") {
                sortedBooks = sortPages(true, sortedBooks); // Sort by pages
            } else if (sortType === "year") {
                sortedBooks = sortPublishedYear(true, sortedBooks); // Sort by year
            }

            setAppliedWishes(sortedBooks);


        }
    }, [wishes , sortType]);



    return (



        <div>
            <div className="mb-12"><h1 className="text-black text-xl mb-6">To clear the data , click here</h1>
                <button className="btn btn-info" onClick={() => clearUp()}>Clear all</button>
            </div>
            {
                appliedWishes.map(wish => <WishCard key={wish.bookId} object={wish}></WishCard>)
            }

        </div>
    );
};

export default WishList;