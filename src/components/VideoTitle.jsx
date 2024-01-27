const VideoTitle=({title,overview})=>{
    return (
        <div className="pt-[25%] px-36 absolute w-screen aspect-video text-white bg-gradient-to-r from-black ">
            <h1 className="text-6xl font-bold ">{title}</h1>
            <p className="py-6 text-justify text-lg w-1/4">{overview}</p>
            <div className="my-6">
                <button className="text-black  bg-white rounded  text-center py-2  w-[135px] text-xl hover:bg-opacity-50">▶️Play</button>
                <button className="bg-gray-500 bg-opacity-50 rounded text-white mx-5 p-2  w-[135px] text-xl">More Info</button>
            </div>
        </div>
    );
}
export default VideoTitle;

// imported the info icon
// How to open loginpage not browse page