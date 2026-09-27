import { useDispatch, useSelector } from "react-redux";
import { API_OPTION } from "../utils/constant";
import { addTopRatedMovies } from "../utils/movieSlice";
import { useEffect } from "react";

const useTopRatedMovies = () => {
  const dispatch = useDispatch();
  const topMovies = useSelector((store) => store.movies.nowTopRatedMovies);
  const getTopRatedMovieList = async () => {
    const data = await fetch(
      "https://api.themoviedb.org/3/movie/top_rated",
      API_OPTION,
    );
    const json = await data.json();
    dispatch(addTopRatedMovies(json.results));
  };
  useEffect(() => {
    !topMovies && getTopRatedMovieList();
  }, []);
};
export default useTopRatedMovies;
