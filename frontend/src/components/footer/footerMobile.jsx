import { CalendarDaysIcon, PhotoIcon, ShoppingCartIcon, UserIcon } from '@heroicons/react/24/solid'


const FooterMobile = () => {
    return (
        <div>
            <nav className="[ text-lightcream/30 ] [ m-auto p-4 ] [ flex justify-center ] [ space-x-5 ">
                <button className="focus:text-lightcream[ flex flex-col items-center ]">
                    <CalendarDaysIcon className="h-6 w-6" />
                    <p>Events</p>
                </button>

                <button className="focus:text-lightcream flex flex-col items-center">
                    <PhotoIcon className="h-6 w-6" />
                    <p>Album</p>
                </button>
                <button className="focus:text-lightcream flex flex-col items-center">
                    <i className="fa-brands fa-pagelines h-6 w-6"></i>
                    <p>Tree</p>
                </button>
                <button className="focus:text-lightcream flex flex-col items-center">
                    <UserIcon className="h-6 w-6" />
                    <p>Profile</p>
                </button>
                <button className="focus:text-lightcream flex flex-col items-center">
                    <ShoppingCartIcon className="h-6 w-6" />
                    <p>Shop</p>
                </button>
            </nav>
        </div >
    );
}

export default FooterMobile;