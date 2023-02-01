import { LogInButton, LogOutButton } from "../buttons/logButton";
import logo from "../../assets/originLogos/originCream.png";
import { Link } from "react-router-dom";
import shoppingcart from "../../assets/shoppingcart.png";

const DesktopHeader = ({ logedIn }) => {
  return logedIn ? <DesktopHeaderLogOut /> : <DesktopHeaderLogIn />;
};

const DesktopHeaderLogIn = () => {
  return (
    <div className="bg-lightgreen text-lightcream">

      <div className="container mx-auto min-h-4 hidden lg:flex justify-around items-center z-50">
        <img src={logo} alt="Origin Logo" className="max-h-24" />
        <div className="bg-darkgreen w-2/4 min-h-[50px] rounded-xl flex items-center text-center font-semibold">
          <Link to="/" className="w-1/3">Home</Link>
          <Link to="/about" className="w-1/3">About us</Link>
          <Link to="/contact" className="w-1/3">Contact us</Link>
        </div>
        <div className="flex space-x-2">
          <LogInButton />
          <div className="flex">
            <Link to="/shop"><img className="h-10" src={shoppingcart} alt=""></img></Link>
          </div>
        </div>
      </div>
    </div>
  );
};

const DesktopHeaderLogOut = () => {
  return (
    <div className="bg-lightgreen text-lightcream">
      <div className="container mx-auto min-h-4 hidden lg:flex justify-around items-center z-50">
        <img src={logo} alt="Origin Logo" className="max-h-24" />
        <div className="bg-darkgreen w-2/4 min-h-[50px] rounded-xl flex items-center text-center font-semibold">
          <Link to="/about" className="w-1/3">About us</Link>
          <Link to="/tree" className="w-1/3">Tree</Link>
          <Link to="/profile" className="w-1/3">Profile</Link>
        </div>
        <div className="flex space-x-2">
          <LogOutButton />
          <div className="flex">
            <Link to="/shop"><img src={shoppingcart} alt=""></img></Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DesktopHeader;

