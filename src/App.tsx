import { useState } from "react";
import Header from "./components/Header";
import SectionTwo from "./components/SectionTwo";
import Showcase from "./components/Showcase";
import { data } from "./components/Data";

function App() {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const [items] = useState(data);
  const [slideIndex, setSlideIndex] = useState<number>(1);

  const handleOpen = () => {
    setIsOpen(!isOpen);
  };

  const handleNextSlide = () => {
    if (slideIndex !== items.length) {
      setSlideIndex(slideIndex + 1);
    } else if (slideIndex === items.length) {
      setSlideIndex(1);
    }
  };

  const handlePrevSlide = () => {
    if (slideIndex !== 1) {
      setSlideIndex(slideIndex - 1);
    } else if (slideIndex === 1) {
      setSlideIndex(items.length);
    }
  };

  return (
    <>
      <Header isOpen={isOpen} setIsOpen={setIsOpen} handleOpen={handleOpen} />
      <Showcase
        items={items}
        slideIndex={slideIndex}
        setSlideIndex={setSlideIndex}
        handleNextSlide={handleNextSlide}
        handlePrevSlide={handlePrevSlide}
        data={[]}
      />
      <SectionTwo />
    </>
  );
}

export default App;
