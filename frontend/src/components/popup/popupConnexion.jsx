import { ArrowLeftIcon, EnvelopeIcon, LockClosedIcon } from "@heroicons/react/24/solid";
import { handleHideConnect, handleShowRegisterPopup } from "../../events/handlePopup"
import { handleSubmitConnect } from "../../events/handleSubmitForm";

const PopupConnexionMobile = () => {
    return (
        <div id="showHideConnexionPopup" className="bg-darkgreen space-y-10 min-w-full min-h-full absolute top-[-100%] left-0 transition-[100] flex flex-col justify-center items-center">
            <ArrowLeftIcon id="toHome" className="h-[1.5rem] absolute top-5 left-4" onClick={handleHideConnect} />

            <h1>Log in to <span className="font-bold text-xl">Origin</span></h1>
            <form className="space-y-4 flex flex-col items-center">
                <div className="space-x-2 py-2 border-b-2 flex">
                    <EnvelopeIcon className="h-[1.5rem]" />
                    <input className="bg-inherit" type="text" placeholder="Enter your email" id="email" name="email" />
                </div>

                <div className="space-x-2 py-2 border-b-2 flex">
                    <LockClosedIcon className="h-[1.5rem]" />
                    <input className="bg-inherit" type="password" placeholder="Enter your password" id="password" name="password" />
                </div>

                <input id="login" className="bg-lightcream text-darkgreen max-w-fit px-8 rounded-full" type="submit" onClick={handleSubmitConnect} value="Log in" />
            </form>

            <div className="flex space-x-1">
                <p>Don't have an account ?</p>
                <button className="font-bold" onClick={handleShowRegisterPopup}>Sign up</button>
            </div>
        </div>
    )
}

export default PopupConnexionMobile;