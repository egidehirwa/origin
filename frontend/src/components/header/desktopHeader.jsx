import LogInButton from "../Buttons"
// import LogOutButton from "./Buttons"
import { ShoppingCartIcon } from '@heroicons/react/24/solid'

export default function DesktopHeaderLogIn () {
    return (
        <div className="flex flex-row  ">
            <img className="iteams-left" src="./origin_logo_cream.png" alt="origin_logo" />
            <div className="bg-greenish items-center text-lightcream/24">
                <a className="text-lightcream/24" href="#">Home</a>
                <a className="text-lightcream/24" href="#">About Us</a>
                <a className="text-lightcream/24" href="#">Contact Us</a>
            </div>
            <LogInButton />
            <div className="flex iteams-left">
                <ShoppingCartIcon className="h-6 w-6" />
                <p>Shop</p>
            </div>
        </div>
    )
}
