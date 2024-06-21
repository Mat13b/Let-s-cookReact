import { useState } from "react";
import { MagnifyingGlassIcon }from "@heroicons/react/24/outline";
function SearchBar({ setSearchTerm }) {
  const [search, setSearch] = useState(""); // Terme de recherche saisi par l'utilisateur

  const handleSearch = () => {
    setSearchTerm(search.trim()); // Mettre à jour le terme de recherche dans le composant parent
  };

  const handleClick = () => {
    handleSearch(); // Appeler la fonction de recherche lors du clic sur la barre de recherche
  };
  return (
    <div className="relative w-full">
      <label className="relative block">
        <span className="sr-only">Search</span>
        <span className="absolute inset-y-0 left-0 flex items-center pl-2">
     <MagnifyingGlassIcon className="h-5 w-5 text-gray-400" aria-hidden="true" />
        </span>
        <input
          className="placeholder:italic placeholder:text-slate-400 block bg-white w-full border border-slate-300 rounded-md py-2 pl-9 pr-3 shadow-sm focus:outline-none focus:border-sky-500 focus:ring-sky-500 focus:ring-1 sm:text-sm"
          placeholder="Rechercher une recette "
          type="text"
          name="search"
        />
      </label>
    </div>
  );
}
export default SearchBar;
