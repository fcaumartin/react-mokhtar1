import ListeProduits from "./ListeProduits";
import data from "../data";

function App() {

  

  return (
    <div className="App">
      <h1>APP</h1>
      <ListeProduits liste={data} nom="Catalogue"/>
    </div>
  );
}

export default App;
