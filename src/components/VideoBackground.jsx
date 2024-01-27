import useMovieTrailer from "../hooks/useMovieTrailer"
import {useSelector} from "react-redux";
const VideoBackground = ({ movieId }) => {
    const trailerVideo = useSelector((store) => store.movies?.trailerVideo);
    console.log(trailerVideo);
  //fetch trailer videos && updating the store
  // use state variable for trailerId
  // const [trailerId, setTrailerId] = useState(null);
  useMovieTrailer(movieId)
  return (
    <div className="w-[100%] h-[100%] bg-green-500 aspect-video">
      <iframe
        width="100%"
        height="100%"
        src="https://www.youtube.com/embed/hXzcyx9V0xw?&autoplay=1&mute=1"
        title="YouTube video player"
        frameBorder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        allowFullScreen
      ></iframe>
    </div>
  );
};
export default VideoBackground;



// "https://www.youtube.com/embed/"+trailerVideo?.key+"?si=1L4OfkFHaOcog-SB"
// src={"https://www.youtube.com/embed/dqWB4pfIbOM?&autoplay=1"}
// How to change the src url
// {trailerVideo?.key
//   ? `https://www.youtube.com/embed/${trailerVideo?.key}?&autoplay=1`
//   : "https://www.youtube.com/embed/dqWB4pfIbOM?&autoplay=1"}
