const VideoTitle = ({ title, overview }) => {
  return (
    <div className="pt-[20%] px-10 w-1/2 absolute text-white">
      <h1 className="md:text-4xl text-lg font-bold">{title}</h1>
      <p className="hidden  md:inline-block text-lg py-6 w-[60%]">{overview}</p>
      <div>
        <button className="bg-red-600 py-2 px-10 text-white rounded-md hidden ">
          Play
        </button>
        <button className="bg-gray-600 py-2 px-10 mx-2 text-white rounded-md hidden ">
          More Info
        </button>
      </div>
    </div>
  );
};

export default VideoTitle;
