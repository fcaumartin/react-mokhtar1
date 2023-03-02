import Produit from "./Produit";

function ListeProduits({liste, nom}) {

  console.log(liste)


  return (
    <div >
      <h2>Liste des produits {nom} </h2>
      {
        liste.map( (ligne) => (
          <Produit key={ligne.id} id={ligne.id} nom={ligne.nom} prix={ligne.prix} />
        ))
      }
    </div>
  );
}

export default ListeProduits;
