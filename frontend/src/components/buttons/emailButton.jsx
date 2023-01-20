import { EnvelopeIcon } from "@heroicons/react/24/solid"
import { emailConnexionEvent } from "../.././events/emailConnexionEvent"

const EmailButton = () => {
    return (
        <button className="bg-darkgreen min-w-full p-2 px-8 rounded-3xl" onClick={emailConnexionEvent}>
            <div className="flex justify-center space-x-2">
                <EnvelopeIcon className="max-h-[1.5rem]" />
                <p>Continue with <span className=" font-bold text-m">Email</span></p>
            </div>
        </button>
    )
}

export default EmailButton