import ListeProduits from "./ListeProduits";
import data from "../data";
import Search from "./Search";
import { useState } from "react";

function App() {

  const [recherche, setRecherche] = useState("")

  function handleModification(v) {
    console.log("Dans le composant App " + v)
    setRecherche(v)
  }

  const dataFiltered = data.filter( (p) => p.nom.search(recherche)>=0 )

  return (
    <div className="App">
      <h1>APP</h1>
      <Search onModification={handleModification}/>
      <ListeProduits liste={dataFiltered} nom="Catalogue"/>
    </div>
  );
}

export default App;
