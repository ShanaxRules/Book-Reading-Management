import { useLocation, useNavigate } from "react-router-dom";
import { getStoredBookObject, saveBookObject } from "./localstorage";
import { getStoredWishObject, saveWishObject } from "./localstorageWish";
import { toast, ToastContainer } from "react-toastify";

const Details = () => {

    const navigate = useNavigate();

    const location = useLocation();

    const { object } = location.state || {};

    const { bookName, author, image, review, tags, totalPages, rating, yearOfPublishing, publisher, category } = object;
    const [tag1, tag2] = tags;

    const function1 = () => {
        const storedID = getStoredBookObject();
        let signal = false;
        for (const id of storedID) {
            if (id == object.bookId) {
                signal = true;
                break;
            }
        }

        if (signal) {
            toast("The book is already added to the Read List");
        }
        else {
            saveBookObject(parseInt(object.bookId))
        }


    }

    const function2 = () => {

        const storedID = getStoredWishObject();
        let signal = false;
        for (const id of storedID) {
            if (id == object.bookId) {
                signal = true;
                break;
            }
        }

        if (signal) {
            toast("The book is already added to the Wish List");
        }
        else {
            saveWishObject(parseInt(object.bookId))
        }
        

    }





    return (
        <div>

            <button className="btn btn-accent" onClick={() => navigate(-1)}>Go back</button>
            <div className="card lg:card-side bg-base-100 shadow-xl p-5 gap-x-5 ">

                <div className="mb-6 flex-1 rounded-2xl">
                    <img className="w-full lg:h-[700px] md:h-[600px] h-[400px] rounded-2xl"
                        src={image}
                        alt="Album" />
                </div>

                <div className="flex flex-col gap-y-6 flex-1">
                    <h2 className="lg:text-5xl text-black md:text-3xl text-2xl font-semibold">{bookName}</h2>
                    <p className="lg:text-xl md:text-xl text-lg text-gray-800">By : {author}</p>
                    <hr />
                    <p className="lg:text-xl md:text-xl text-lg text-gray-800">{category}</p>
                    <hr />
                    <p><span className="font-bold">Review </span>: {review}</p>
                    <div className="flex gap-x-3 items-center">
                        <h1 className="font-bold text-black">Tag</h1>
                        <div className="flex gap-x-2">
                            <h3 className="text-[#23be0a] font-semibold bg-green-50 px-5 py-3 rounded-3xl">#{tag1}</h3>
                            <h3 className="text-[#23be0a] font-semibold bg-green-50 px-5 py-3 rounded-3xl">#{tag2}</h3>
                        </div>
                    </div>

                    <hr />

                    <div className="flex  gap-x-8 items-center">
                        <div className="flex flex-col gap-y-6">
                            <h1 className="text-gray-600">Number of Pages:</h1>
                            <h1 className="text-gray-600">Publisher:</h1>
                            <h1 className="text-gray-600">Year of Publishing:</h1>
                            <h1 className="text-gray-600">Rating:</h1>
                        </div>
                        <div className="flex flex-col gap-y-6">
                            <h1 className="text-black font-bold">{totalPages}</h1>
                            <h1 className="text-black font-bold">{publisher}</h1>
                            <h1 className="text-black font-bold">{yearOfPublishing}</h1>
                            <h1 className="text-black font-bold">{rating}</h1>

                        </div>



                    </div>

                    <div className="flex flex-row items-center gap-x-3 lg:justify-start md:justify-start justify-center">
                        <div><button className="btn px-6" onClick={function1}>Read</button></div>
                        <ToastContainer></ToastContainer>
                        <div><button className="btn bg-[#50b1c9] text-white" onClick={function2}>WishList</button></div>
                    </div>







                </div>


            </div>

        </div>
    );
};

export default Details;