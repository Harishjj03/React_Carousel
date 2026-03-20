import { useState, useEffect } from "react";
import "./App.css";
import sun from "./SUN.webp";
import moon from "./MOON.jpg";
import earth from "./EARTH.jpg";

function App() {
  const images = [
    { src: sun, alt: "SUN" },
    { src: moon, alt: "Moon" },
    { src: earth, alt: "Earth" },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % images.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="carousel">
        <h1>   Solar Carousel 🌞🌙🌍</h1>
      <div className="image-container">
        <img
          src={images[currentIndex].src}
          alt={images[currentIndex].alt}
          className="fade"
        />
      </div>
      <div className="dots">
        {images.map((_, index) => (
          <span
            key={index}
            className={index === currentIndex ? "dot active" : "dot"}
            onClick={() => setCurrentIndex(index)}
          ></span>
        ))}
      </div>
    </div>
  );
}

export default App;
