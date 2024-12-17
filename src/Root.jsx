import { Outlet } from "react-router-dom";
import Header from "./Header";

const Root = () => {
    return (
        <div className="mx-2">
            <Header></Header>
            <Outlet></Outlet>
            
        </div>
    );
};

export default Root;