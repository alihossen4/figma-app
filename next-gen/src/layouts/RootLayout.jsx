import { Outlet } from "react-router";
import Navbar from "../sections/Navbar";
const RootLayout = () =>{
    return (
        <>
            <Navbar />
            <Outlet />
        </>
    );
};
export default RootLayout;