const GoogleButton = () => {
    return(
        <button className="bg-darkgreen min-w-full p-2 px-8 rounded-3xl">
            <a className="flex justify-center space-x-2" href="/auth/g/google">
                <img className="max-h-[1.5rem]" src="https://raw.githubusercontent.com/devicons/devicon/1119b9f84c0290e0f0b38982099a2bd027a48bf1/icons/google/google-original.svg" alt="facebook logo" />
                <p>Continue with <span className=" font-bold text-l">Google</span></p>
            </a>
        </button>        
    )
}

export default GoogleButton;