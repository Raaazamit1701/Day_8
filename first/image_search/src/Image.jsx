import { useState } from "react";

const Image = () => {
  const [input, setInput] = useState("");
  const [imageUrls, setImageUrls] = useState([]);

  const SearchImage = async () => {
    try {
      const urls = [];
      for (let i = 0; i < 10; i++) {
        const res = await fetch(
          `https://source.unsplash.com/1600x900/?${input}`
        );
        urls.push(res.url);
      }
      setImageUrls(urls);
      setInput(""); // Clear the input field after fetching images
    } catch (e) {
      console.log("error", e);
    }
  };

  return (
    <div className="m-auto items-center border border-green-600 mt-36 flex flex-col">
      <h2 className="text-2xl text-blue-500 items-center m-5">
        Image Generation App
      </h2>
      <div>
        <input
          className="items-center border border-black rounded-lg"
          type="text"
          placeholder="Search image....."
          value={input}
          onChange={(e) => setInput(e.target.value)}
        />
        <button
          className="bg-blue-600 text-white m-2 rounded-lg cursor-pointer"
          onClick={SearchImage}
        >
          Search
        </button>
      </div>
      <div className="mt-10 grid grid-cols-2 gap-4">
        {imageUrls.length === 0 ? (
          <h1>Loading...</h1>
        ) : (
          imageUrls.map((url, index) => (
            <img
              key={index}
              src={url}
              alt="Search result"
              className="w-full h-auto"
            />
          ))
        )}
      </div>
    </div>
  );
};

export default Image;
