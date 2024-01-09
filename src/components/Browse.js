import React from "react";
import Header from "./Header";
import useNowPlayingMovies from "../custom-hooks/useNowPlayingMovies";
import MainContainer from "./MainContainer";
import SecondaryContainer from "./SecondaryContainer";
const Browse = () => {
  useNowPlayingMovies();
  return (
    <div>
      <Header />
      <MainContainer />
      <SecondaryContainer />
      {/*
       Main container 
          video background
          Video title
        Secondary Container
          title 
          cards
       */}
    </div>
  );
};

export default Browse;
