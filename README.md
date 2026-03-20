# Ex05 Image Carousel
## Date:21-03-2026

## AIM
To create a Image Carousel using React 

## ALGORITHM
### STEP 1 Initial Setup:
Input: A list of images to display in the carousel.

Output: A component displaying the images with navigation controls (e.g., next/previous buttons).

### Step 2 State Management:
Use a state variable (currentIndex) to track the index of the current image displayed.

The carousel starts with the first image, so initialize currentIndex to 0.

### Step 3 Navigation Controls:
Next Image: When the "Next" button is clicked, increment currentIndex.

If currentIndex is at the end of the image list (last image), loop back to the first image using modulo:
currentIndex = (currentIndex + 1) % images.length;

Previous Image: When the "Previous" button is clicked, decrement currentIndex.

If currentIndex is at the beginning (first image), loop back to the last image:
currentIndex = (currentIndex - 1 + images.length) % images.length;

### Step 4 Displaying the Image:
The currentIndex determines which image is displayed.

Using the currentIndex, display the corresponding image from the images list.

### Step 5 Auto-Rotation:
Set an interval to automatically change the image after a set amount of time (e.g., 3 seconds).

Use setInterval to call the nextImage() function at regular intervals.

Clean up the interval when the component unmounts using clearInterval to prevent memory leaks.

## PROGRAM
App.jsx:
```
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

```
App.css:
```
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

html, body, #root {
  width: 100%;
  height: 100%;
}

#root {
  margin: 0;
  padding: 0;
}
.carousel {
  background-color: #001f3f;
  color: white;
  height: 100vh;
  width: 100vw;
  display: flex;
  flex-direction: column;
  justify-content: center; /* vertical center */
  align-items: center; /* horizontal center */
  text-align: center;
  overflow: hidden;
  margin: 0;
}


.carousel h1 {
  font-size: 2.5rem;
  margin-bottom: 20px;
  font-weight: bold;
}


.image-container {
  width: 400px;
  height: 400px;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 20px;
  overflow: hidden;
  box-shadow: 0 0 30px rgba(255, 255, 255, 0.3);
}


.image-container img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  border-radius: 20px;
  transition: opacity 1s ease-in-out;
}


.dots {
  margin-top: 20px;
}

.dot {
  height: 12px;
  width: 12px;
  margin: 0 5px;
  background-color: #bbb;
  border-radius: 50%;
  display: inline-block;
  cursor: pointer;
  transition: background-color 0.3s;
}

.dot.active {
  background-color: white;
}

.fade {
  animation: fadeEffect 1s ease-in-out;
}

@keyframes fadeEffect {
  from {
    opacity: 0.5;
  }
  to {
    opacity: 1;
  }
}


body, html {
  margin: 0;
  padding: 0;
  overflow: hidden;
}

```

## OUTPUT
![alt text](<Screenshot 2026-03-21 015244.png>)
![alt text](<Screenshot 2026-03-21 015331.png>)
![alt text](<Screenshot 2026-03-21 015342.png>)
## RESULT
The program for creating Image Carousel using React is executed successfully.
