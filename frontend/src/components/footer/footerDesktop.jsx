import logo from "../../assets/originCream.png";
import fcbLogo from "../../assets/fcbLogo.png";
import instaLogo from "../../assets/instaLogo.png";
import twitterLogo from "../../assets/twitterLogo.png";
import { Link } from "react-router-dom";

const FooterDesktop = () => {
    return (
        
        <div className="bg-greenish">
        <div className="container mx-auto text-lightcream min-h-[100px] p-8 hidden lg:flex justify-between items-center">
            <img src={logo} alt="Origin Logo" className="max-h-24" />
            <div className="flex flex-col items-center">
                <div className="border-b-2 pb-3 border-lightcream flex space-x-4">
                    <Link to="/legalPolicy" className="focus:text-lightcream flex flex-col items-center">
                    PRIVACY POLICY
                    </Link>
                    <Link to="/legalPolicy" className="focus:text-lightcream flex flex-col items-center">
                    TERMS & CONDITIONS
                    </Link>
                    <Link to="/legalPolicy" className="focus:text-lightcream flex flex-col items-center">
                    COOKIE POLICY
                    </Link>
                    <Link to="/legalPolicy" className="focus:text-lightcream flex flex-col items-center">
                    CONTACT
                    </Link>
                </div>
                <p className="pt-3">©2023 - Origin. All rights reserved.</p>
            </div>
            <div className="flex space-x-4">
                <a href="https://fr-fr.facebook.com/"><img src={fcbLogo} alt="Logo Facebook" className="h-12" /></a>
                <a href="https://www.instagram.com/?hl=fr"><img src={instaLogo} alt="Logo Instagram" className="h-12" /></a>
                <a href="https://twitter.com/"><img src={twitterLogo} alt="Logo Twitter" className="h-12" /></a>
            </div>
        </div>
        </div>
    )
}

export default FooterDesktop;