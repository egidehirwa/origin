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
            <button className="border-gradient gradient-red px-4">
           <Link to="/profile" className="">LogIn</Link>
            </button>
    )
}
const LogOutButton = () => {
    return (
        <div>
        <Link to="/" className="border-gradient gradient-red px-4">LogOut</Link>
        <img src="" alt="" />
        </div>
    )
}

export {Buttons, LogInButton, LogOutButton }
