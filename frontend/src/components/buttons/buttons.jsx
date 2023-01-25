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
            <button className="">
           <Link to="/profile" className="text-lightcream bg-gradient-red">LogIn
            <img src="" alt="" />
            </Link>
            </button>
    )
}
const LogOutButton = () => {
    return (
        <div>
        <Link to="/" className="bg-gradient-red">LogOut</Link>
        <img src="" alt="" />
        </div>
    )
}

export {Buttons, LogInButton, LogOutButton }
