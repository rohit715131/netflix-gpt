import { BANNER_URL } from "../utils/constant";
import GptMovieSuggestion from "./GptMovieSuggestion";
import GptSearchBar from "./GptSearchBar";

const GptSearch = () => {
  return (
    <div className="">
      <div className="absolute -z-10">
        <img
          src={BANNER_URL}
          alt="background"
          className="h-screen object-cover md:w-screen md:h-screen bg-black-900"
        />
      </div>

      <GptSearchBar />
      <GptMovieSuggestion />
    </div>
  );
};

export default GptSearch;
