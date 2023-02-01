// events
import { XMarkIcon } from "@heroicons/react/24/solid";
import { handleClickClose } from "../../events/handleclickSign";
import { handleSubmitRegister } from "../../events/handleSubmitForm";

const RegisterForm = () => {
    return (
        <div id="registerPage" className="space-y-5 min-w-1/4 hidden lg:flex flex-col justify-center items-center relative">

            <XMarkIcon className="absolute top-4 right-4 h-10 block lg:hidden" onClick={handleClickClose} />

            <h1 className="border-gradient gradient-red w-full max-w-1/2 p-2 text-center">Register to <span className="font-bold text-xl">Origin</span></h1>

            <form className="space-y-5 flex flex-col items-center w-full max-w-1/2">
                <div className="w-full border-b-2 flex flex-col">
                    <label htmlFor="firtsName">First Name</label>
                    <input className="bg-inherit" type="text" placeholder="Enter your firts name" id="firtsName" name="firtsName" />
                </div>

                <div className="w-full border-b-2 flex flex-col">
                    <label htmlFor="lastName"> Last Name</label>
                    <input className="bg-inherit" type="text" placeholder="Enter your last name" id="lastName" name="lastName" />
                </div>

                <div className="w-full border-b-2 flex flex-col">
                    <label htmlFor="birthday">Date of Birth</label>
                    <input className="bg-inherit" type="date" defaultValue="2000-01-01" placeholder="Enter your date of birth" id="birthday" name="birthday" />
                </div>

                <div className="w-full border-b-2 flex flex-col">
                    <label htmlFor="countryOfBirth">Country of Birth</label>
                    <input className="bg-inherit" type="text" placeholder="Enter your country of birth" id="countryOfBirth" name="countryOfBirth" />
                </div>

                <div className="w-full border-b-2 flex flex-col">
                    <label htmlFor="emailRegister">Email</label>
                    <input className="bg-inherit" type="text" placeholder="Enter your email" id="emailRegister" name="email" />
                </div>

                <div className="w-full border-b-2 flex flex-col">
                    <label htmlFor="passwordRegister">Password</label>
                    <input className="bg-inherit" type="password" placeholder="Enter your password" id="passwordRegister" name="password" />
                </div>
                <input id="register" className="max-w-fit px-8 rounded-full bg-gradient-to-br from-lightcream to-creemish text-darkgreen hover:cursor-pointer" type="submit" onClick={handleSubmitRegister} value="Register" />
            </form>
        </div>
    )
}

export default RegisterForm;