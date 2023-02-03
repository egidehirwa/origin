import { useState } from "react";

// icons
import { XMarkIcon } from "@heroicons/react/24/solid";

// events
import { handleClickClose } from "../../events/handleclickSign";
import { handleSubmitRegister } from "../../events/handleSubmitForm";

const RegisterForm = () => {

    const [firstName, setFirstName] = useState('')
    const [lastName, setLastName] = useState('')
    const [birthday, setBirthday] = useState('')
    const [country, setCountry] = useState('')
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('')


    return (
        <div id="registerPage" className="space-y-5 min-w-1/4 hidden lg:flex flex-col justify-center items-center relative">

            <XMarkIcon className="absolute top-4 right-4 h-10 block lg:hidden" onClick={handleClickClose} />

            <h1 className="border-gradient gradient-red w-full max-w-1/2 p-2 text-center">Register to <span className="font-bold text-xl">Origin</span></h1>

            <form className="space-y-5 flex flex-col items-center w-full max-w-1/2" onSubmit={(e) => handleSubmitRegister(e, email, password)}>
                <div className="w-full border-b-2 flex flex-col">
                    <label htmlFor="firtsName">First Name</label>
                    <input className="bg-inherit" type="text" placeholder="Enter your firts name" value={firstName} id="firtsName" name="firtsName" onChange={(e) => setFirstName(e.target.value)} />
                </div>

                <div className="w-full border-b-2 flex flex-col">
                    <label htmlFor="lastName"> Last Name</label>
                    <input className="bg-inherit" type="text" placeholder="Enter your last name" value={lastName} id="lastName" name="lastName" onChange={(e) => setLastName(e.target.value)} />
                </div>

                <div className="w-full border-b-2 flex flex-col">
                    <label htmlFor="birthday">Date of Birth</label>
                    <input className="bg-inherit" type="date" defaultValue={birthday} placeholder="Enter your date of birth" id="birthday" name="birthday" onChange={(e) => setBirthday(e.target.value)} />
                </div>

                <div className="w-full border-b-2 flex flex-col">
                    <label htmlFor="country">Country of Birth</label>
                    <input className="bg-inherit" type="text" placeholder="Enter your country of birth" value={country} id="country" name="country" onChange={(e) => setCountry(e.target.value)} />
                </div>

                <div className="w-full border-b-2 flex flex-col">
                    <label htmlFor="emailRegister">Email</label>
                    <input className="bg-inherit" type="text" placeholder="Enter your email" value={email} id="emailRegister" name="email" onChange={(e) => setEmail(e.target.value)} />
                </div>

                <div className="w-full border-b-2 flex flex-col">
                    <label htmlFor="passwordRegister">Password</label>
                    <input className="bg-inherit" type="password" placeholder="Enter your password" value={password} id="passwordRegister" name="password" onChange={(e) => setPassword(e.target.value)} />
                </div>
                <input id="register" className="max-w-fit px-8 rounded-full bg-gradient-to-br from-lightcream to-creemish text-darkgreen hover:cursor-pointer" type="submit" value="Register" />
            </form>
        </div>
    )
}

export default RegisterForm;