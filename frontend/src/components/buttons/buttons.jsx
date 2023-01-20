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
        <div>
            <button Link to="/profile" className="text-lightcream bg-gradient-red">LogIn </button>
        </div>
    )
}
const LogOutButton = () => {
    return (
        <div>
        <Link to="/" className="bg-gradient-red">LogOut</Link>
        </div>
    )
}

export {Buttons, LogInButton, LogOutButton }
