import { useState } from "react";

const images = [
  "https://images.pexels.com/photos/14421753/pexels-photo-14421753.jpeg?auto=compress&cs=tinysrgb&w=600",
  "https://images.pexels.com/photos/14426211/pexels-photo-14426211.jpeg?auto=compress&cs=tinysrgb&w=600",
  "https://images.pexels.com/photos/14447524/pexels-photo-14447524.jpeg?auto=compress&cs=tinysrgb&w=600",
  "https://images.pexels.com/photos/14483467/pexels-photo-14483467.jpeg?auto=compress&cs=tinysrgb&w=600",
];
const availabeIndexofImage = images.length - 1;
export default function Slider() {
  const [imageIndex, setImageindex] = useState(0);
  function handleNext() {
    imageIndex < availabeIndexofImage
      ? setImageindex(imageIndex + 1)
      : setImageindex(0);
  }
  function handlePrev() {
    imageIndex !== 0
      ? setImageindex(imageIndex - 1)
      : setImageindex(availabeIndexofImage);
  }
  return (
    <>
      <h1 className="p-5 font-bold uppercase bg-orange-800 text-white mb-9">Image Slider Using React</h1>
      {/* Optimizing the code to prevent the re network
      calls for fetching the image from urls*/}
      <div className="flex justify-center">
        {images.map((url, i) => (
          <img
            src={url}
            alt="slider"
            key={url}
            className={imageIndex === i ? "block" : "hidden"}
          />
        ))}
      </div>
      <br />
      {/* <img src={images[imageIndex]} alt="slider" /> <br /> */}
      <div className="flex justify-center gap-5">
        <button
          onClick={handlePrev}
          className="p-2 text-center bg-sky-950 text-white w-40"
        >
          Prev
        </button>
        <button
          onClick={handleNext}
          className="p-2 text-center bg-sky-950 text-white w-40"
        >
          Next
        </button>
      </div>
    </>
  );
}
