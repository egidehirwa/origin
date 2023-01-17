import LogInButton from "./buttons"
import LogOutButton from "./buttons"
import { ShoppingCartIcon } from '@heroicons/react/24/solid'

const DesktopHeader = () => {
    return (
        <>
        <DesktopHeaderLogIn />
        <DesktopHeaderLogOut />
        </>
    )
}

const DesktopHeaderLogIn = () => {
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

const DesktopHeaderLogOut = () => {
    return (
        <div className="flex flex-row  ">
            <img className="iteams-left" src="./origin_logo_cream.png" alt="origin_logo" />
            <div className="bg-greenish items-center text-lightcream/24">
                <a className="text-lightcream/24" href="#">About Us</a>
                <a className="text-lightcream/24" href="#">Tree</a>
                <a className="text-lightcream/24" href="#">Profile</a>
            </div>
            <LogOutButton />
            <div className="flex iteams-left">
                <ShoppingCartIcon className="h-6 w-6" />
                <p>Shop</p>
            </div>
        </div>
    )
}

export default DesktopHeader;