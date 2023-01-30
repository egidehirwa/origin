import { LogInButton, LogOutButton } from "../buttons/buttons";
import logo from "../../assets/originCream.png";
import { Link } from "react-router-dom";
import shoppingcart from "../../assets/shoppingcart.png";

const DesktopHeader = ({ logedIn }) => {
  return logedIn ? <DesktopHeaderLogOut /> : <DesktopHeaderLogIn />;
};

const DesktopHeaderLogIn = () => {
  return (
    <div className="bg-lightgreen">
      <div className="min-h-4 hidden lg:flex justify-around  items-center">
        <img src={logo} alt="Origin Logo" className="max-h-24" />

        <div className=" bg-greenish w-1/2 min-h-[50px] rounded-xl flex justify-evenly items-center">
          <Link to="/about"
            className="text-center font-semibold text-lightcream w-1/3">Home</Link>

          <Link to="/about"
            className="text-center font-semibold text-lightcream w-1/3">About us</Link>

          <Link to="/contact"
            className="text-center font-semibold text-lightcream w-1/3">Contact us</Link>
        </div>

        <div className="flex space-x-2">
          <LogInButton />
        </div>

        <div className="flex h-16">
           <Link to="/shop"><img src={shoppingcart} alt="" /></Link>
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
    
            <div className=" bg-greenish w-1/2 min-h-[50px] rounded-xl flex justify-evenly items-center">
              <Link to="/about"
                className="text-center font-semibold text-lightcream w-1/3">About us</Link>
    
              <Link to="/tree"
                className="text-center font-semibold text-lightcream w-1/3">Tree</Link>
    
              <Link to="/profile"
                className="text-center font-semibold text-lightcream w-1/3">Profile</Link>
            </div>
    
            <div className="flex space-x-2">
              <LogOutButton />
            </div>
    
            <div className="flex h-16">
               <Link to="/shop"><img src={shoppingcart} alt="" /></Link>
            </div>
            
            </div>
          </div>
      );
};

export default DesktopHeader;
