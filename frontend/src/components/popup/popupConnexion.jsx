import { ArrowLeftIcon, EnvelopeIcon, LockClosedIcon } from "@heroicons/react/24/solid";
import { Link } from "react-router-dom";
import { backHome } from "../../events/emailConnexionEvent"
// import handleSubmit from "../../events/handleSubmit";


const EmailConnexion = () => {
    return (
        <div id="popup" className="bg-darkgreen space-y-10 min-w-full min-h-full top-[-100%] left-0 absolute flex flex-col justify-center items-center">
            <ArrowLeftIcon id="toHome" className="h-[1.5rem] absolute top-5 left-4" onClick={backHome} />

            <h1>Log in to <span className="font-bold text-xl">Origin</span></h1>
            <form className="space-y-4 flex flex-col items-center">
                <div className="space-x-2 py-2 border-b-2 flex">
                    <EnvelopeIcon className="h-[1.5rem]" />
                    <input className="bg-inherit" type="text" placeholder="Enter your email" id="email" name="email" />
                </div>
                <div className="space-x-2 py-2 border-b-2 flex">
                    <LockClosedIcon className="h-[1.5rem]" />
                    <input className="bg-inherit" type="text" placeholder="Enter your password" id="email" name="email" />
                </div>
                <input id="login" className="bg-lightcream text-darkgreen max-w-fit px-8 rounded-full" type="button" value="Log in" />
            </form>
            <p>Don't have an account ?
                <Link to="/signup">
                    <span className="font-bold"> Sign up</span>
                </Link>
            </p>
        </div>
    )
}

export default EmailConnexion;