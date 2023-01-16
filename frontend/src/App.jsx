import ProfileHeader from "./components/userProfile/profileHeader";
import ProfileInformation from "./components/userProfile/ProfileInformation";
import FooterMobile from "./components/Footer/navFooter";
import ProfileDetails from "./components/userProfile/profileDetails";


function App() {
    return (
        <div className="app">
            <header className="app-header">
                <ProfileHeader />
                <ProfileInformation />
            </header>
            <main>
                <ProfileDetails />
            </main>
            <footer className="bg-darkgreen rounded-t-[15px] shadow-[0_-5px_10px_2px_rgba(0,0,0,.5)]"><FooterMobile /></footer>
        </div>
    );
}

export default App;
