import GptSearchBar from "./GptSearchBar";
import GptMovieSuggestion from "./GptMovieSuggestion";
import { BG_URL } from "../utils/constant";
const GptSearch = () => {
  return (
    <>
      <div className="absolute md:fixed -z-10">
        <img className=" md:w-screen h-screen object-cover" src={BG_URL} alt="" />
      </div>
      <div className="pt-[25%] md:pt-[0]">
        <GptSearchBar />
        <GptMovieSuggestion />
      </div>
    </>
  );
};
export default GptSearch;
