import ProfileHeader from "./components/userProfile/ProfileHeader";
import ProfileInformation from "./components/userProfile/ProfileInformation";

function App() {
    return (
        <div className="w-96 bg-greenish">
            <header>
                <ProfileHeader />
                <ProfileInformation />
            </header>
            <div></div>
            <main></main>
            <footer></footer>
        </div>
    );
}

export default App;
