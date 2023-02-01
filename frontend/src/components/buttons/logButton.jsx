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
        <div>
            <Link to="/" className="border-gradient gradient-red px-4">LogOut</Link>
            {/* need to add a logic to actually disconnect the person from the plateform */}
            <img src="" alt="" />
        </div>
    )
}

export { LogInButton, LogOutButton }
