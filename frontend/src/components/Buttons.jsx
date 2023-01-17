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
        <Link to="/profile" className="focus:text-lightcream flex flex-col items-center"></Link>
        </div>
    )
}
const LogOutButton = () => {
    return (
        <div>
        <Link to="/" className="focus:text-lightcream flex flex-col items-center"></Link>
        </div>
    )
}

export {Buttons, LogInButton, LogOutButton }