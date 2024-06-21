import Avatar from "@mui/material/Avatar";
import IconButton from "@mui/material/IconButton";

function NavBar() {
  return (
    <header>
      <nav
        className="flex justify-between items-center p-4 text-white"
        style={{
          boxShadow:
            "0 10px 25px -5px rgba(0, 0, 0, 0.1), 0 20px 10px -5px rgba(0, 0, 0, 0.04)",
        }}
      >
        <div className="">
          <img src="src/assets/favicon.svg" alt="Logo" width="100px" />
        </div>
        <div className="flex justify-around text-white bg-brown ">
        <a className="" href="/accueil">
          Accueil
        </a>
        <a className="" href="/recette">
          Recette
        </a>
        <a className="" href="/categorie">
          Categorie
        </a>
        <a className="link" href="/conseil">
          Conseil de cuisine{" "}
        </a>
        </div>
        <button style={{ backgroundColor: "red", borderRadius: "100px" , border: "none" }}>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          className="lucide lucide-bell"
        >
          <path d="M6 8a6 6 0 0 1 12 0c0 7 3 9 3 9H3s3-2 3-9" />
          <path d="M10.3 21a1.94 1.94 0 0 0 3.4 0" />
        </svg>
        </button>
        <IconButton>
          <Avatar
            alt="User Avatar"
            src="src/assets/photo-1472099645785-5658abf4ff4e.avif"
          />
        </IconButton>
      </nav>
    </header>
  );
}

export default NavBar;
