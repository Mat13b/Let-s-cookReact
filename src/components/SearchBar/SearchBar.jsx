import { useState } from "react";


function SearchBar({ setSearch }) {
  const [search, setSearchTerm] = useState(""); // Terme de recherche saisi par l'utilisateur

  const handleSearch = (e) => {
    const value = e.target.value;
    setSearchTerm(value);
    setSearch(value.trim().toLowerCase()); // Mettre à jour le terme de recherche dans le composant parent avec des lettres en minuscule
  };

  return (
    <div className="relative w-full">
      <label className="relative block">
        <span className="sr-only"></span>
        <span className="absolute inset-y-0 left-0 flex items-center pl-2">
        </span>
        <input
          className="placeholder:italic placeholder:text-slate-400 block bg-white w-full border border-slate-300 rounded-md py-2 pl-9 pr-3 shadow-sm focus:outline-none focus:border-sky-500 focus:ring-sky-500 focus:ring-1 sm:text-sm"
          placeholder="Rechercher une recette"
          type="text"
          name="search"
          value={search}
          onChange={handleSearch}
        />
      </label>
    </div>
  );
}

export default SearchBar;
