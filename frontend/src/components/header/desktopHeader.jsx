import { LogInButton, LogOutButton } from "../buttons/buttons";
import { ShoppingCartIcon } from "@heroicons/react/24/solid";
import logo from "../../assets/originLogos/originCream.png";
import { Link } from "react-router-dom";

const DesktopHeader = ({ logedIn }) => {
  return logedIn ? <DesktopHeaderLogOut /> : <DesktopHeaderLogIn />;
};

const DesktopHeaderLogIn = () => {
  return (
    <div>
      <div className="min-h-4 hidden lg:flex justify-around  items-center">
        <img src={logo} alt="Origin Logo" className="max-h-24" />
        <div className=" bg-darkgreen w-1/3 min-h-[50px] rounded-xl flex justify-evenly items-center">
          <Link
            to="/about"
            className="text-center font-semibold text-lightcream w-1/3"
          >
            Home
          </Link>
          <Link
            to="/about"
            className="text-center font-semibold text-lightcream w-1/3 border-lightcream"
          >
            About us
          </Link>
          <Link
            to="/contact"
            className="text-center font-semibold text-lightcream w-1/3 border-lightcream"
          >
            Contact us
          </Link>
        </div>
        <div className="flex items-left space-x-2">
          <LogInButton />
          <div className="flex">
            <ShoppingCartIcon className="h-6 w-6 text-redcream" />
            <p>Shop</p>
          </div>
        </div>
      </div>
    </div>
  );
};

const DesktopHeaderLogOut = () => {
  return (
    <div className="bg-lightgreen">
      <div className="min-h-4 hidden lg:flex justify-around  items-center">
        <img src={logo} alt="Origin Logo" className="max-h-24" />
        <div className=" bg-darkgreen w-1/3 min-h-[50px] rounded-xl flex justify-evenly items-center">
          <Link
            to="/profile"
            className="text-center font-semibold text-lightcream w-1/3"
          >
            Profile
          </Link>
          <Link
            to="/about"
            className="text-center font-semibold text-lightcream w-1/3 border-lightcream"
          >
            Tree
          </Link>
          <Link
            to="/contact"
            className="text-center font-semibold text-lightcream w-1/3 border-lightcream"
          >
            Contact us
          </Link>
        </div>
        <div className="flex items-left space-x-2">
          <LogOutButton />
          <div className="flex">
            <ShoppingCartIcon className="h-6 w-6 text-redcream" />
            <p>Shop</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DesktopHeader;
