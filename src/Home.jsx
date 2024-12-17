import { useLoaderData, useNavigate } from "react-router-dom";
import Card from "./Card";

const Home = () => {

    const objects = useLoaderData();
    const navigate = useNavigate();


   


      const handleButtonClick = () =>{
            navigate('/listedbook')
      }

      const handleObjectClick = ({object}) =>{
        navigate('/details', {state : {object : object}});
      }
    

    return (
        <div>

            <section className="mt-24 mb-24">
                <div className=" bg-gray-200 rounded-3xl p-5 flex justify-center items-center gap-7 lg:flex-row md:flex-row flex-col">
                    <div className="flex flex-col items-center lg:items-start md:items-start">
                        <h2 className="text-black lg:text-6xl md:text-3xl text-3xl font-semibold">Books to freshen up</h2>
                        <h2 className="text-black lg:text-6xl md:text-3xl text-3xl font-semibold lg:mt-16 md:mt-12 mt-8">your Bookshelf</h2>
                        <button className="bg-[#23be0A] px-5 py-3 rounded-2xl text-white lg:mt-12 md:mt-10 mt-6" onClick={handleButtonClick} >View the List</button>
                    </div>

                    <div>
                        <img src="pngwing 1.png" alt="Logo of book" />



                    </div>

                </div>
            </section>

            <section className="mb-16">
                <h1 className="text-black lg:text-4xl md:text-3xl text-2xl font-semibold text-center">Books</h1>
            </section>

            <section className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-5 ">
                {
                    objects.map(object=><Card key={object.id} object={object} handleObjectClick={handleObjectClick}></Card>)
                }




            </section>
































        </div>
    );
};

export default Home;