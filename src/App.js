import "./App.css";
import ItemListConteiner from "./components/itemListConteiner/ItemListConteiner";
import NavBar from "./components/navBar/NavBar";

function App() {
  return (
    <div className="App">
      <NavBar />
      <ItemListConteiner />
    </div>
  );
}

export default App;
