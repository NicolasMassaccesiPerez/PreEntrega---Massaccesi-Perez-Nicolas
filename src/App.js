import "./App.css";
import { ItemListContainer } from "./components/ItemListContainer/ItemListContainer";
import { Navbar } from "./components/Navbar/Navbar";

function App() {
    let saludo = "Bienvenidos a Urban Outfitters";

    return (
        <div className="App">
            <Navbar />
            <ItemListContainer saludo={saludo} />
        </div>
    );
}

export default App;
