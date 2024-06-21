// import{ useState } from "react";

// const HandleFavorite = ({ favoriteImages, setFavoriteImages }) => {
//   const toggleFavorite = (imageUrl) => {
//     const isFavorite = favoriteImages.includes(imageUrl);
//     const updatedFavorites = isFavorite 
//       ? favoriteImages.filter(img => img !== imageUrl)
//       : [...favoriteImages, imageUrl];
//     setFavoriteImages(updatedFavorites);
//   };

//   const handleFavori = (id) => {
//     setFavoriteImages(
//       favoriteImages.map((image) =>
//         image.id === id ? { ...image, fav: !image.fav } : image
//       )
//     );
//   };

//   return { toggleFavorite, handleFavori };
// };

// export default HandleFavorite;
