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
        <Link to="/profile" className="">LogIn</Link>
        </div>
    )
}
const LogOutButton = () => {
    return (
        <div>
        <Link to="/" className="bg-redcream">LogOut</Link>
        </div>
    )
}

export {Buttons, LogInButton, LogOutButton }
