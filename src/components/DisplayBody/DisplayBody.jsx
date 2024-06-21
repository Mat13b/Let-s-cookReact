import { useState, useEffect } from "react";
import SearchBar from "../SearchBar/SearchBar";
import FavoriteButton from "../FavoriteButton/FavoriteButton"


const obtenirEtoilesDifficulte = (difficulte) => {
  return "★".repeat(difficulte);
};

const DisplayBody = () => {
  const [recettes, setRecettes] = useState([]);
  const [termeDeRecherche, setTermeDeRecherche] = useState("");
const handleFavori = (id) => {
  console.log("handleFavori", id);
  setRecettes(recettes.map((recipe) => recipe.id === id ? {...recipe, isFavorite: !recipe.isFavorite} : recipe))
}
  useEffect(() => {
    FetchData();
  }, []);

  const FetchData = async () => {
    try {
      const reponse = await fetch("src/Data/recettes.json");
      const jsonResponse = await reponse.json();
      setRecettes(jsonResponse);
    } catch (erreur) {
      console.error("Erreur lors de la récupération des données:", erreur);
    }
  };

  
  console.log(recettes); // Afficher le tableau JSON des recettes dans la console du navigateur

  return (
    <main className="container mx-auto ">
      <h1>Toutes les recettes</h1>
      <SearchBar setSearch={setRecettes} />
      <main className="grid md:grid-cols-2 lg:grid-cols-3 gap-4" >
        {recettes
          .filter((recipe) =>
            recipe.title.toLowerCase().includes(termeDeRecherche.toLowerCase())
          )
          .map((recipe) => (
            <article key={recipe.id} className="p2 shadow-xl rounded">
              <h2>{recipe.title}</h2>
              <div className="relative">
                <img src={recipe.imageUrl} alt={recipe.title} width="200px" />
                <FavoriteButton recipe={recipe} handleFavori={handleFavori}/>
              </div>
              <div className="p-2">
                <p className="flex gap-2">
                  <span>{obtenirEtoilesDifficulte(recipe.difficulty)}</span>
                  <span></span>
                  <span>{recipe.author}</span>
                  <span></span>
                  <span className="bg-red-500 px-4 py-1 rounded">{recipe.category}</span>
                </p>
                <p>{recipe.description}</p>
              </div>
            </article>
          ))}
      </main>
    </main>
  );
};
export default DisplayBody;
