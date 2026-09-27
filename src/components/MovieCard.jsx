import { IMG_CDN_URL } from "../utils/constant";

const MovieCard = ({ movieList }) => {
  //   console.log(movieList);
  if (!movieList) return null;
  return (
    <div className="w-36 md:w-56 pr-4">
      <img src={IMG_CDN_URL + movieList.poster_path} alt="Name" className="" />
    </div>
  );
};

export default MovieCard;
