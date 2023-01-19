import {LogInButton, LogOutButton} from "../buttons"
import { ShoppingCartIcon } from '@heroicons/react/24/solid'
import logo from "../../assets/originCream.png";
import { Link } from "react-router-dom";

const DesktopHeader = ({logedIn}) => {
    return (
        logedIn?
        <DesktopHeaderLogIn />:
        <DesktopHeaderLogOut />
    
    )
}

const DesktopHeaderLogIn = () => {
    return (
        <div className="bg-greenish mx-auto">
        <div className="container mx-auto min-h-[30px] p-8 hidden lg:flex justify-between items-center">
            <img src={logo} alt="Origin Logo" className="max-h-24" />
            <div className="flex flex-row rounded-xl items-center bg-darkgreen space-x-4">
                    <Link to="/pages/about" className="text-lightcream flex">
                    Home
                    </Link>
                    <Link to="/pages/about" className="text-lightcream flex border-l-2 border-lightcream">
                    About us
                    </Link>
                    <Link to="/pages/contact" className="text-lightcream flex border-l-2 border-lightcream">
                    Contact us
                    </Link>
            </div>
            <LogInButton />
            <div className="flex iteams-left">
                <ShoppingCartIcon className="h-6 w-6 text-redcream" />
                <p>Shop</p>
            </div>
        </div>
        </div>
    )
}

const DesktopHeaderLogOut = () => {
    return (
        <div className="flex flex-row  ">
            <img src={logo} alt="Origin Logo" className="max-h-24" />
            <div className="bg-greenish items-center text-lightcream/24">
                    <Link to="/pages/about" className="focus:text-lightcream flex flex-col items-center">
                    About Us
                    </Link>
                    <Link to="/pages/tree" className="focus:text-lightcream flex flex-col items-center">
                    Tree
                    </Link>
                    <Link to="/pages/profile" className="focus:text-lightcream flex flex-col items-center">
                    Profile
                    </Link>
            </div>
            <LogOutButton />
            <div className="flex iteams-left">
                <ShoppingCartIcon className="h-6 w-6" text-redcream />
                <p>Shop</p>
            </div>
        </div>
    )
}

export default DesktopHeader