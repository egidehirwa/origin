import { Link } from "react-router-dom";


const Buttons = () => {
    return (
        <>
        <LogInButton/>
        <LogOutButton/>
        </>
    )
}

const LogInButton = () => {
    return (
            <button className="bg-gradient-red lg px-12 min-h-[50px] font-semibold text-darkgreen items-center">
           <Link to="/profile">LogIn</Link>
            </button>
    )
}
const LogOutButton = () => {
    return (
        <button className="bg-gradient-red lg px-12 min-h-[50px] font-semibold text-darkgreen items-center">
        <Link to="/">LogOut</Link>
         </button>
    )
}

export {Buttons, LogInButton, LogOutButton }
