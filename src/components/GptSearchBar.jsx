import { useDispatch, useSelector } from "react-redux";
import lang from "../utils/languageConstant";
import { useRef } from "react";
import { GoogleGenAI } from "@google/genai";
import { API_OPTION, GEMINI_KEY } from "../utils/constant";
import { addGeminiMoviesResult } from "../utils/gptSlice";

const GptSearchBar = () => {
  const searchtext = useRef(null);
  const dispatch = useDispatch();
  const langKey = useSelector((store) => store.config.lang);

  const searchMovieTMBD = async (movie) => {
    const data = await fetch(
      "https://api.themoviedb.org/3/search/movie?query=" +
        movie +
        "&include_adult=false&language=en-US&page=1",
      API_OPTION,
    );
    const json = await data.json();
    return json.results;
  };

  const handleGPTSearch = async () => {
    console.log(searchtext.current.value);
    //Make API Call to OPEN AI GOOGLE API to get Result
    const ai = new GoogleGenAI({ apiKey: GEMINI_KEY });

    const gptQuery =
      "Act as a movie recommeded system and suggest some movie for the query" +
      searchtext.current.value +
      "only give me 5 movies name, comma seperated. For example: The Nun, etc";

    async function main() {
      const response = await ai.models.generateContent({
        model: "gemini-3.1-flash-lite",
        contents: gptQuery,
      });
      if (!response.text) {
        console.log("Error on API");
      }
      const geminiMovie = response.text.split(",");
      //For each moviei will search TMBD API
      const promiseArray = geminiMovie.map((movie) => searchMovieTMBD(movie));

      const tmbdResult = await Promise.all(promiseArray);
      console.log(tmbdResult);
      dispatch(
        addGeminiMoviesResult({
          movieNames: geminiMovie,
          movieResults: tmbdResult,
        }),
      );
    }

    main();
  };
  return (
    <div>
      <div className="pt-[40%] md:pt-[10%]  w-full flex justify-center">
        <form
          className=" bg-black md:w-1/2 grid grid-cols-12 :w-full"
          onSubmit={(e) => e.preventDefault()}
        >
          <input
            type="text"
            ref={searchtext}
            className="p-4 m-4 bg-white rounded-md col-span-9"
            placeholder={lang[langKey].gptSearchPlaceholder}
          />
          <button
            className="p-3 px-6 m-4 bg-red-600 text-white rounded-lg col-span-3"
            onClick={handleGPTSearch}
          >
            {lang[langKey].search}
          </button>
        </form>
      </div>
    </div>
  );
};

export default GptSearchBar;
