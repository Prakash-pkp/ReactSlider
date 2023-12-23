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
      <p>SLIDER</p>
      <img src={images[imageIndex]} alt="slider" /> <br />
      <button onClick={handlePrev}>Prev</button>{" "}
      <button onClick={handleNext}>Next</button>
    </>
  );
}
