import { CalendarDaysIcon, RectangleGroupIcon, ShoppingCartIcon, UserIcon } from '@heroicons/react/24/solid'
import { Link } from 'react-router-dom';


const FooterMobile = () => {
    return (
        <div className=" bg-greenish shadow-[0_-15px_15px_-2px_hsla(157,12%,35%,0.5)] rounded-t-[15px] lg:hidden">
            <nav className="[ text-lightcream/30 ] [ m-auto p-4 ] [ flex justify-center ] [ space-x-5 ">
                <Link to="/about" className="focus:text-lightcream flex flex-col items-center">
                    <RectangleGroupIcon className="h-6 w-6" />
                    About
                </Link>
                <Link to="/events" className="focus:text-lightcream [ flex flex-col items-center ]">
                    <CalendarDaysIcon className="h-6 w-6" />
                    Event   
                </Link>
                <Link to="/tree" className="focus:text-lightcream flex flex-col items-center">
                    <i className="fa-brands fa-pagelines h-6 w-6"></i>
                    Tree
                </Link>
                <Link to="/profile" className="focus:text-lightcream flex flex-col items-center">
                    <UserIcon className="h-6 w-6" />
                    Profile
                </Link>
                <Link to="/shop" className="focus:text-lightcream flex flex-col items-center">
                    <ShoppingCartIcon className="h-6 w-6" />
                    Shop
                </Link>
            </nav>
        </div >
    );
}

export default FooterMobile;