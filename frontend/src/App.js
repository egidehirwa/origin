import EventList from "./components/EventList";
import TreeCard from "./components/TreeCard";
import "./App.css";

//munis (line 10-13) = i check if the fonts & colors are working
function App() {
    return (
        <div className="App">
            <header className="App-header"></header>
            <div>
                <EventList />
                <TreeCard />
            </div>
            <main></main>
            <footer></footer>
        </div>
    );
}

export default App;
