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
            <button className="text-darkgreen bg-[gradient-red] h-12 rounded-xl">
           <Link to="/profile" className="">LogIn</Link>
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
