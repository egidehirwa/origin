// buttons
import EmailButton from "../components/buttons/emailButton";
import FacebookButton from "../components/buttons/facebookButton";
import GoogleButton from "../components/buttons/googleButton";

// popup
import PopupConnexionMobile from "../components/popup/popupConnexion";

// img
// import treeBG from "../assets/background/treeBG.png"
import exempleOfTree from "../assets/background/exempleOfTree.png"
import originCream from "../assets/originLogos/originCream.png"
import badgeGoogle from "../assets/socialLogos/badgeGoogle.png"
import badgeApple from "../assets/socialLogos/badgeApple.svg"



const HomeMobile = () => {
    return (
        <div className="min-h-screen flex flex-col items-center justify-center mx-auto space-y-4 lg:hidden">
            <PopupConnexionMobile />
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
        <div className="hidden lg:block text-center space-y-24">
            <div className="bg-darkgreen py-12">
                <div className="border-gradient gradient-red container mx-auto p-8 flex justify-between">
                    <div className="max-w-1/2 space-y-8 flex flex-col justify-center items-center">
                        <h2 className="flex">Connect with your family</h2>
                        <p className="max-w-1/2">Learn more about yourself and your heritage through personal experience than any book you read. </p>
                        <br />
                        <p className="max-w-1/2">Discover your ancestors and leave a message for those who come after you.</p>
                    </div>
                    <img src={exempleOfTree} alt="exemple of tree" />
                </div>
            </div>

            <div className="flex flex-col items-center relative">
                <h2 className="max-w-1/2">And watch your </h2>
                <br/>
                <h2>tree grow over time</h2>
                {/* <img className="absolute w-[1000px] left-0 right-0 ml-auto mr-auto bottom-0" src={treeBG} alt="background img" /> */}

            </div>

            <div className="bg-gradient-to-br from-lightgreen to-greenish">
                <div className=" container mx-auto divide-x-2 py-12 divide-lightcream flex">
                    <div className="flex flex-col items-center">
                        <h2>Remember</h2>
                        <p className="max-w-1/2">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Odio ut sem nulla pharetra diam sit.</p>
                    </div>
                    <div className="flex flex-col items-center">
                        <h2>Share</h2>
                        <p className="max-w-1/2">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Odio ut sem nulla pharetra diam sit.</p>
                    </div>
                    <div className="flex flex-col items-center">
                        <h2>Stay tuned</h2>
                        <p className="max-w-1/2">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Odio ut sem nulla pharetra diam sit.</p>
                    </div>
                </div>
            </div>
            <div className=" container mx-auto border-gradient gradient-red py-12 flex justify-center items-center space-x-8">
                <div>
                    <h2>Available on your </h2>
                    <br/> 
                    <h2>Smartphone</h2>
                </div>
                <div className="flex flex-col">
                    <img className="h-[80px]" src={badgeGoogle} alt="redirect to google store download" />
                    <img className="h-[60px]" src={badgeApple} alt="redirect to app store download" />
                </div>
            </div>
            <div>
            <div className="pb-24">
                <div className="flex flex-col items-center pb-12">
                    <h2 className="max-w-1/2">What they say </h2>
                    <br/>
                    <h2>about us</h2>
                </div>
                <div className="bg-gradient-to-br from-lightgreen to-greenish py-12">
                    <div className="container mx-auto divide-x-2 divide-lightcream flex">
                        <div className="flex flex-col items-center justify-end max-w-1/5">
                            <p className="max-w-3/4">"Creating my family tree on this website has been a wonderful experience. So much info!"</p>
                            <h2>Marina</h2>
                        </div>
                        <div className="flex flex-col items-center justify-end max-w-1/5">
                            <p className="max-w-3/4">"The ability to collaborate with family members on our family tree has been invaluable. Love this website."</p>
                            <h2>Gérard</h2>
                        </div>
                        <div className="flex flex-col items-center justify-end max-w-1/5">
                            <p className="max-w-3/4">"Great website for creating and sharing my family tree. Highly recommend!"</p>
                            <h2>Monique</h2>
                        </div>
                        <div className="flex flex-col items-center justify-end max-w-1/5">
                            <p className="max-w-3/4">"Love this site for building my family tree. So user-friendly!"</p>
                            <h2>Julien</h2>
                        </div>
                        <div className="flex flex-col items-center justify-end max-w-1/5">
                            <p className="max-w-3/4">"I've been able to trace my ancestry back generations thanks to this website."</p>
                            <h2>Gaetan</h2>
                        </div>
                    </div>
                </div>
            </div>
            </div>
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