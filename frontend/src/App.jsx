import Profile from "./components/Profile";
import EventList from "./components/EventList";
import TreeCard from "./components/TreeCard";

import "./App.css";

//Dashboard Components (line 10-16)
function App() {
    return (
        <div className="app bg-greenish">
            <header className="app-header"></header>
            <div>
                <Profile />
                <TreeCard />
                <EventList />
            </div>
            <main></main>
            <footer></footer>
        </div>
    );
}

export default App;
