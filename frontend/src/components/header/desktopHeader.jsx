import { ShoppingCartIcon } from "@heroicons/react/24/solid";
import logo from "../../assets/originCream.png";
import { Link } from "react-router-dom";
import { LogInButton, LogOutButton } from "../buttons/buttons";

const DesktopHeader = ({ logedIn }) => {
  return logedIn ? <DesktopHeaderLogIn /> : <DesktopHeaderLogOut />;
};

const DesktopHeaderLogIn = () => {
  return (
    <div className="hidden lg:flex flex-row">
      <img src={logo} alt="Origin Logo" className="max-h-24" />
      <div className="flex flex-row bg-greenish items-center text-lightcream/24">
        <Link
          to="/pages/about"
          className="focus:text-lightcream flex flex-col items-center"
        >
          Home
        </Link>
        <Link
          to="/pages/about"
          className="focus:text-lightcream flex flex-col items-center"
        >
          About us
        </Link>
        <Link
          to="/pages/contact"
          className="focus:text-lightcream flex flex-col items-center"
        >
          Contact us
        </Link>
      </div>
      <LogInButton />
      <div className="flex iteams-left">
        <ShoppingCartIcon className="h-6 w-6" />
        <p>Shop</p>
      </div>
    </div>
  );
};

const DesktopHeaderLogOut = () => {
  return (
    <div className="hidden lg:flex flex-row  ">
      <img src={logo} alt="Origin Logo" className="max-h-24" />
      <div className="bg-greenish items-center text-lightcream/24">
        <Link
          to="/pages/about"
          className="focus:text-lightcream flex flex-col items-center"
        >
          About Us
        </Link>
        <Link
          to="/pages/tree"
          className="focus:text-lightcream flex flex-col items-center"
        >
          Tree
        </Link>
        <Link
          to="/pages/profile"
          className="focus:text-lightcream flex flex-col items-center"
        >
          Profile
        </Link>
      </div>
      <LogOutButton />
      <div className="flex iteams-left">
        <ShoppingCartIcon className="h-6 w-6" />
        <p>Shop</p>
      </div>
    </div>
  );
};

export default DesktopHeader;
