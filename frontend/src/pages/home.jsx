import originCream from "../assets/originLogos/originCream.png"

// buttons
import EmailButton from "../components/buttons/emailButton";
import FacebookButton from "../components/buttons/facebookButton";
import GoogleButton from "../components/buttons/googleButton";

// popup
import EmailConnexion from "../components/popup/popupConnexion";


const HomeMobile = () => {
    return (
        <div className="flex flex-col max-w-[90%] items-center item mx-auto gap-8 lg:hidden">
            <EmailConnexion />
            <div>
                <img src={originCream} alt="Origin Logo" />
                <h1 className="text-xxl font-bold italic bg-gradient-to-br from-creemish to-lightcream bg-clip-text text-transparent ">Let's root together</h1>
            </div>

            <div className="space-y-4">
                <FacebookButton />
                <GoogleButton />
                <hr className="center-diamond w-1/2 mx-auto" />
                <EmailButton />
            </div>
        </div>
    )
}

const HomeDesktop = () => {
    return (
        <div className="bg-tree">
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
        </div>
    )
}

const HomePage = () => {
    return (
        <div>
            <HomeMobile />
            <HomeDesktop />
        </div>
    )
}

export default HomePage;