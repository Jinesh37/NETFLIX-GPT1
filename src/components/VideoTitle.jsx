const VideoTitle=({title,overview})=>{
    return (
        <div className="pt-[15%] my-24 md:my-0 px-6 md:px-20 absolute w-screen aspect-video text-white bg-gradient-to-r from-black ">
            <h1 className="text-xl md:text-6xl mb-4 md:mb-0  md font-bold ">{title}</h1>
            <p className="hidden md:block py-6 md:text-justify text-lg w-1/4">{overview}</p>
            <div className=" md:my-6">
                <button className="text-black  bg-white rounded  text-center py-2  w-[135px] text-xl hover:bg-opacity-50">▶️Play</button>
                <button className="bg-gray-500 hidden md:block bg-opacity-50 rounded text-white mx-5 p-2  w-[135px] text-xl">More Info</button>
            </div>
        </div>
    );
}
export default VideoTitle;

// imported the info icon
// How to open loginpage not browse page