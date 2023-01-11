import TreeCard from "./components/TreeCard";

import "./App.css";

// * Dashboard Components (line 8-12)
function App() {
    return (
        <div className="app bg-gradient-to-tr from-cyan-900 to-stone-400">
            <header className="app-header"></header>
            <div>
                <TreeCard />
            </div>
            <main></main>
            <footer></footer>
        </div>
    );
}

export default App;
