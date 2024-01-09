import { addTrailerVideo } from "../utils/movieSlice";
import { API_OPTIONS } from "../utils/constants";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
const useMovieTrailer = () => {
  const dispatch = useDispatch();
  //fetch trailer video and updating thestore with trailer video
  const getMovieVideos = async () => {
    const data = await fetch(
      "https://api.themoviedb.org/3/movie/1029575/videos?language=en-US",
      API_OPTIONS
    );
    const json = await data.json();
    const filterData = json.results.filter((video) => video.type === "Trailer");
    const trailer = filterData.length ? filterData[0] : json.results[0];

    dispatch(addTrailerVideo(trailer));
  };
  useEffect(() => {
    getMovieVideos();
  }, []);
};

export default useMovieTrailer;
