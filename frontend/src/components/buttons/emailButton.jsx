import { EnvelopeIcon } from "@heroicons/react/24/solid"

const EmailButton = () => {
    return(
        <button className="bg-darkgreen min-w-full p-2 px-8 rounded-3xl">
            <a className="flex justify-center space-x-2" href="/auth/g/google">
                <EnvelopeIcon className="max-h-[1.5rem]" />
                <p>Continue with <span className=" font-bold text-m">Email</span></p>
            </a>
        </button>        
    )
}

export default EmailButton