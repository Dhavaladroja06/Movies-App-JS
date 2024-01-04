import React, { createContext, useContext, useState } from 'react';

const LikeContext = createContext();

export const useLikeContext = () => {
  return useContext(LikeContext);
};

export const LikeProvider = ({ children }) => {
  const [likedMovies, setLikedMovies] = useState([]);

  const addLikedMovie = (title) => {
    setLikedMovies([...likedMovies, title]);
  };

  const removeLikedMovie = (title) => {
    setLikedMovies(likedMovies.filter((movie) => movie !== title));
  };

  const isMovieLiked = (title) => {
    return likedMovies.includes(title);
  };

  const value = {
    likedMovies,
    addLikedMovie,
    removeLikedMovie,
    isMovieLiked,
  };

  return (
    <LikeContext.Provider value={value}>
      {children}
    </LikeContext.Provider>
  );
};
