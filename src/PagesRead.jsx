import { useLoaderData } from "react-router-dom";
import { getStoredBookObject } from "./localstorage";
import { useEffect, useState } from "react";
import { Bar, BarChart, CartesianGrid, Legend, ResponsiveContainer, Tooltip, XAxis, YAxis } from "recharts";

const PagesRead = () => {

    const books = useLoaderData();



    const storedBooks = getStoredBookObject();
    const [appliedStoredBooks, setAppliedStoredBooks] = useState([]);

    useEffect(() => {
        if (books.length > 0) {
            let bookSelected = [];
            for (const id of storedBooks) {
                const book = books.find(book => book.bookId == id);
                if (book) {
                    bookSelected.push(book);
                }
            }
            setAppliedStoredBooks(bookSelected);
        }
    }, []);

    console.log(appliedStoredBooks);

    const getPath = (x, y, width, height) => (
        `M${x},${y + height}
         C${x + width / 3},${y + height} ${x + width / 2},${y + height / 3} ${x + width / 2}, ${y}
         C${x + width / 2},${y + height / 3} ${x + 2 * width / 3},${y + height} ${x + width}, ${y + height}
         Z`
    );

    const TriangleBar = (props) => {
        const {
            fill, x, y, width, height,
        } = props;

        return <path d={getPath(x, y, width, height)} stroke="none" fill={fill} />;
    };




    return (
        <div className="mb-10">
            <div className="flex justify-center items-center mt-20"><h1 className="text-2xl text-black font-bold">Check the pages for your read list</h1></div>
            <div className="flex justify-center items-center mt-20">
                <div className="w-full h-[600px] flex justify-center items-center mt-20">
                    <ResponsiveContainer width="100%" height={600} >
                        <BarChart data={appliedStoredBooks}>
                            
                            <XAxis dataKey="bookName"
                                interval={0} 
                                tick={{ fontSize: 12 }} 
                                angle={-25}
                                textAnchor="end" 

                            />
                            <YAxis />

                           
                            <CartesianGrid strokeDasharray="3 3" stroke="#ccc" />

                            
                            <Tooltip />
                            <Legend />

                           
                            <Bar
                                dataKey="totalPages"
                                fill="hsl(200, 70%, 50%)" 
                                shape={<TriangleBar />}
                            />
                        </BarChart>


                    </ResponsiveContainer>



                </div>



            </div>

        </div>

    );
};

export default PagesRead;