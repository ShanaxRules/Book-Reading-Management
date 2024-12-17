import { useNavigate } from "react-router-dom";

const WishCard = ({ object }) => {

    const navigator = useNavigate();
    const { bookName, author, image, category, rating, tags, yearOfPublishing , publisher , totalPages } = object;
    const [tag1, tag2] = tags;



    const HandleClicker = ({ object }) => {
        navigator('/details', { state: { object: object } });

    }


    return (
        <div>
            <div className="card lg:card-side bg-base-100 shadow-xl p-5 border-2 border-red-500 gap-x-6 mb-10">

                <div className="mb-6">
                    <img width={'230px'} height={'200px'}
                        src={image}
                        alt="book" />
                </div>

                <div className="flex flex-col gap-y-5">
                    <h2 className="text-black font-semibold lg:text-3xl md:text-3xl text-2xl">{bookName}</h2>
                    <p className="text-lg text-gray-700">By : {author}</p>
                    <div className="flex justify-start items-center gap-x-2 gap-y-2 lg:flex-row md:flex-row flex-col">
                        <div className="flex justify-start items-center gap-x-2">
                            <h1 className="text-black font-bold text-lg">Tag</h1>
                            <h3 className="text-[#23be0a] font-semibold bg-green-50 px-5 py-3 rounded-3xl">#{tag1}</h3>
                            <h3 className="text-[#23be0a] font-semibold bg-green-50 px-5 py-3 rounded-3xl">#{tag2}</h3>
                        </div>

                        <div className="flex items-center gap-x-2 gap-y-2">
                            <div><svg xmlns="http://www.w3.org/2000/svg" width="24" height="25" viewBox="0 0 24 25" fill="none">
                                <path d="M15 11C15 11.7956 14.6839 12.5587 14.1213 13.1213C13.5587 13.6839 12.7956 14 12 14C11.2044 14 10.4413 13.6839 9.87868 13.1213C9.31607 12.5587 9 11.7956 9 11C9 10.2044 9.31607 9.44129 9.87868 8.87868C10.4413 8.31607 11.2044 8 12 8C12.7956 8 13.5587 8.31607 14.1213 8.87868C14.6839 9.44129 15 10.2044 15 11Z" stroke="#424242" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                                <path d="M19.5 11C19.5 18.142 12 22.25 12 22.25C12 22.25 4.5 18.142 4.5 11C4.5 9.01088 5.29018 7.10322 6.6967 5.6967C8.10322 4.29018 10.0109 3.5 12 3.5C13.9891 3.5 15.8968 4.29018 17.3033 5.6967C18.7098 7.10322 19.5 9.01088 19.5 11Z" stroke="#424242" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                            </svg></div>
                            <div>
                                <h1 className="text-black text-base">Year of Publishing: {yearOfPublishing}</h1>
                            </div>

                        </div>

                    </div>
                    <div className="flex gap-x-2 gap-y-2 items-center">
                        <div className="flex gap-x-2 items-center">
                            <div>
                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="25" viewBox="0 0 24 25" fill="none">
                                    <path d="M15 11C15 11.7956 14.6839 12.5587 14.1213 13.1213C13.5587 13.6839 12.7956 14 12 14C11.2044 14 10.4413 13.6839 9.87868 13.1213C9.31607 12.5587 9 11.7956 9 11C9 10.2044 9.31607 9.44129 9.87868 8.87868C10.4413 8.31607 11.2044 8 12 8C12.7956 8 13.5587 8.31607 14.1213 8.87868C14.6839 9.44129 15 10.2044 15 11Z" stroke="#424242" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                                    <path d="M19.5 11C19.5 18.142 12 22.25 12 22.25C12 22.25 4.5 18.142 4.5 11C4.5 9.01088 5.29018 7.10322 6.6967 5.6967C8.10322 4.29018 10.0109 3.5 12 3.5C13.9891 3.5 15.8968 4.29018 17.3033 5.6967C18.7098 7.10322 19.5 9.01088 19.5 11Z" stroke="#424242" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                                </svg>
                            </div>
                            <div>
                                <h1 className="text-gray-500 text-lg">Publisher: {publisher}</h1>
                            </div>
                        </div>
                        <div className="flex gap-x-2 items-center">
                            <div>
                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                                    <path d="M19.5 14.25V11.625C19.5 10.7299 19.1444 9.87145 18.5115 9.23851C17.8786 8.60558 17.0201 8.25 16.125 8.25H14.625C14.3266 8.25 14.0405 8.13147 13.8295 7.9205C13.6185 7.70952 13.5 7.42337 13.5 7.125V5.625C13.5 4.72989 13.1444 3.87145 12.5115 3.23851C11.8785 2.60558 11.0201 2.25 10.125 2.25H8.25M9 16.5V17.25M12 14.25V17.25M15 12V17.25M10.5 2.25H5.625C5.004 2.25 4.5 2.754 4.5 3.375V20.625C4.5 21.246 5.004 21.75 5.625 21.75H18.375C18.996 21.75 19.5 21.246 19.5 20.625V11.25C19.5 8.86305 18.5518 6.57387 16.864 4.88604C15.1761 3.19821 12.8869 2.25 10.5 2.25Z" stroke="#131313" strokeOpacity="0.6" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                                </svg>
                            </div>
                            <div className="text-gray-500 text-lg">
                                <h1>Page : {totalPages}</h1>
                            </div>

                        </div>

                    </div>

                    <hr className="w-full" />
                    <div className="flex gap-x-2 items-center ">
                        <h1 className="text-[#328eff] bg-blue-100 px-5 py-3 rounded-3xl">Category: {category}</h1>
                        <h1 className="text-[#ffac33] bg-yellow-100 px-5 py-3 rounded-3xl">Rating: {rating}</h1>
                        <button className="text-white bg-[#23be0a] px-5 py-3 rounded-3xl" onClick={() => HandleClicker({ object })}>View Details</button>


                    </div>

                </div>
            </div>

        </div>
    );
};

export default WishCard;