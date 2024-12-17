import { useLoaderData, useOutletContext } from "react-router-dom";
import ReadCard from "./ReadCard";
import { useEffect, useState } from "react";
import { clearUp, getStoredBookObject } from "./localstorage";
import { sortPages, sortPublishedYear, sortRatings } from "./functions";

const ReadBook = () => {



    const books = useLoaderData();

    const [appliedBooks, setAppliedBooks] = useState([]);
    const { sortType } = useOutletContext();

    console.log("This is the context", sortType);

    useEffect(() => {
        const storedBookID = getStoredBookObject();



        if (books.length > 0) {
            let bookSelected = [];
            for (const id of storedBookID) {
                const book = books.find(book => book.bookId == id);
                if (book) {
                    bookSelected.push(book);
                }
            }
            setAppliedBooks(bookSelected);
            // const answer = sortPages(false , appliedBooks);
            // setAppliedBooks(answer);


            let sortedBooks = [...bookSelected];
            console.log("Entered here");
            if (sortType === "rating") {
                sortedBooks = sortRatings(true, sortedBooks); // Sort by rating
            } else if (sortType === "pages") {
                sortedBooks = sortPages(true, sortedBooks); // Sort by pages
            } else if (sortType === "year") {
                sortedBooks = sortPublishedYear(true, sortedBooks); // Sort by year
            }

            // Update state
            setAppliedBooks(sortedBooks);


        }



    }, [books ,  sortType]);

    // useEffect(() => {
    //     console.log(appliedBooks);
    //     if (sortType && appliedBooks.length > 0) {
    //         let sortedBooks = [...appliedBooks];
    //         console.log("This is the sorted book" , sortedBooks);
    //         if (sortType == "rating") {
    //             sortedBooks = sortRatings(true , sortedBooks); // Sort by rating
    //         } else if (sortType == "pages") {
    //             sortedBooks = sortPages(false, sortedBooks); // Sort by pages
    //         } else if (sortType == "year") {
    //             sortedBooks = sortPublishedYear(false, sortedBooks); // Sort by year
    //         }
    //         setAppliedBooks(sortedBooks);
    //     }
    // }, []);


    return (
        <div>
            <div className="mb-12"><h1 className="text-black text-xl mb-6">To clear the data , click here</h1>
                <button className="btn btn-info" onClick={() => clearUp()}>Clear all</button>
            </div>

            {
                appliedBooks && appliedBooks.map(book => <ReadCard key={book.bookId} object={book}></ReadCard>)
            }

        </div>

    );
};

export default ReadBook;