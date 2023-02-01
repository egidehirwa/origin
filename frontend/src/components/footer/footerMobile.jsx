import { RectangleGroupIcon, ShoppingCartIcon, UserIcon } from '@heroicons/react/24/solid'
import { Link } from 'react-router-dom';


const FooterMobile = () => {
    return (
        <div className=" bg-darkgreen pb-2 pt-4 shadow-[0_-15px_15px_-2px_hsla(157,12%,35%,0.5)] rounded-t-[15px] lg:hidden fixed bottom-0 w-full">
            <nav className="text-lightcream/30 flex justify-center space-x-8 ">
                <Link to="/about" className="focus:text-lightcream flex flex-col items-center">
                    <RectangleGroupIcon className="h-5 w-5" />
                    About
                </Link>
                {/* <Link to="/events" className="focus:text-lightcream flex flex-col items-center">
                    <CalendarDaysIcon className="h-5 w-5" />
                    Event   
                </Link> */}
                <Link to="/tree" className="focus:text-lightcream flex flex-col items-center">
                    <i className="fa-brands fa-pagelines h-5 w-5"></i>
                    Tree
                </Link>
                <Link to="/profile" className="focus:text-lightcream flex flex-col items-center">
                    <UserIcon className="h-5 w-5" />
                    Profile
                </Link>
                <Link to="/shop" className="focus:text-lightcream flex flex-col items-center">
                    <ShoppingCartIcon className="h-5 w-5" />
                    Shop
                </Link>
            </nav>
        </div >
    );
}

export default FooterMobile;