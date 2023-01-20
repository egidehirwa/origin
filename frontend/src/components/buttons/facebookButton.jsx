
const FacebookButton = () => {
    return (
        <button className="bg-darkgreen min-w-full p-2 px-8 rounded-3xl">
            <a className="flex justify-center space-x-2" href="/auth/f/facebook">
                <img className="max-h-[1.5rem]" src="https://cdn-icons-png.flaticon.com/512/733/733547.png" alt="facebook logo" />
                <p>Continue with <span className=" font-bold text-l">Facebook</span></p>
            </a>
        </button>
    )
}

export default FacebookButton