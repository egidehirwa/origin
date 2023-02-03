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
        <button className="border-gradient gradient-red min-w-[80px] max-h-[50px] px-2">
            <Link to="/connexion">
                LogIn
            </Link>
        </button>
    )
}
const LogOutButton = () => {
    return (
        <button className="bg-gradient-red lg px-10 min-h-[50px] font-semibold text-darkgreen items-center">
        <Link to="/">LogOut</Link>
         </button>
    )
}

export { LogInButton, LogOutButton }
