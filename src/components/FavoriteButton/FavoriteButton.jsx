import { HeartIcon as HeartRegular } from "@heroicons/react/24/outline";
import { HeartIcon as HeartSolid } from "@heroicons/react/24/solid";
const FavoriteButton = ({ recipe, handleFavori }) => {
  const handleClick = () => {
    handleFavori(recipe.id);
  };
  return (
    <>
    <span className="absolute top-2.5 right-2.5" onClick={handleClick}>
      {recipe.isFavorite ? (
        <HeartSolid className="w-6 h-6 text-red-500" />
      ) : (
        <HeartRegular className="w-6 h-6 text-white" />
      )}
    </span>
    </>
  );
};

export default FavoriteButton;
