// * Dashboard Components (line 8-12)
import FooterMobile from "./components/Footer/navFooter";
import ProfileDetails from "./components/userProfile/profileDetails";


function App() {
    return (
        <div className="app">
            <header className="app-header"></header>
            <main>
                <ProfileDetails />
            </main>
            <footer className="bg-darkgreen rounded-t-[15px] shadow-[0_-5px_10px_2px_rgba(0,0,0,.5)]"><FooterMobile /></footer>
        </div>
    );
}

export default App;
