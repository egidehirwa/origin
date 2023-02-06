import { Link } from "react-router-dom";

// Not used : 

// const Buttons = () => {
//     return (
//         <>
//             <LogInButton />
//             <LogOutButton />
//         </>
//     )
// }

const LogInButton = () => {
    return (
        <button className="bg-gradient-red lg px-12 min-h-[50px] text-darkgreen items-center">
            <Link to="/connexion">LogIn</Link>
        </button>
    )
}
const LogOutButton = () => {
    return (
        <button className="bg-gradient-red lg px-12 min-h-[50px] text-darkgreen items-center">
            <Link to="/">LogOut</Link>
        </button>
    )
}

export { LogInButton, LogOutButton }
