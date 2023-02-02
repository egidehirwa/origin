import { EnvelopeIcon, LockClosedIcon, XMarkIcon } from "@heroicons/react/24/solid";
import { Link } from 'react-router-dom';

// Events
import { handleSubmitConnect } from "../../events/handleSubmitForm";
import { handleClickClose, handleClickSignUp } from "../../events/handleclickSign";


const ConnexionForm = () => {
    return (
        <div id="connexionPage" className="min-w-1/4 space-y-10 hidden lg:flex flex-col justify-center items-center">

            <XMarkIcon className="absolute top-4 right-4 h-10 block lg:hidden" onClick={handleClickClose} />

            <h1>Log in to <span className="font-bold text-xl">Origin</span></h1>
            <form className="space-y-4 flex flex-col items-center" onSubmit={handleClickSignUp}>
                <div className="space-x-2 py-2 border-b-2 flex">
                    <EnvelopeIcon className="h-[1.5rem]" />
                    <input className="bg-inherit" type="text" placeholder="Enter your email" id="emailConnexion" name="email" />
                </div>

                <div className="space-x-2 py-2 border-b-2 flex">
                    <LockClosedIcon className="h-[1.5rem]" />
                    <input className="bg-inherit" type="password" placeholder="Enter your password" id="password" name="password" />
                </div>

                <input id="login" className="max-w-fit px-8 rounded-full bg-gradient-to-br from-lightcream to-creemish text-darkgreen hover:cursor-pointer" type="submit" onClick={handleSubmitConnect} value="Log in" />
            </form>

            <div className="flex space-x-4">
            <Link to="/tree" className="focus:text-lightcream border-2 border-red-600 p-3">
                    Tree 
            </Link>

            <Link to="/profile" className="focus:text-lightcream border-2 border-blue-600 p-3">
                    Profile 
            </Link>
            </div>

            <div className="flex space-x-1 lg:hidden" id="noAccount">
                <p>Don't have an account ?</p>
                <button id="signUp" className="font-bold" >Sign up</button>
            </div>
        </div>
    )
}

export default ConnexionForm;