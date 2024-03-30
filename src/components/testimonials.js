import React, { useState, useEffect } from "react";
import "../styles/testimonials.css";
import testimonials_data from "../data/testimonials_data"

export default function Testimonials() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const myList = testimonials_data.map(item =>(
    <div className="slide-col">
            <div className="content">
              <p>{item.testimony}</p>
              <h2>{item.name}</h2>
              <p>{item.title}</p>
            </div>
            <div className="hero">
              <img src={item.image} alt="avatar"/>
            </div>
          </div>
  ))

  useEffect(() => {
    const updateSlide = () => {
      const mainWidth = document.querySelector(".testimonials").offsetWidth;
      const slideRow = document.getElementById("slide-row");
      const btns = document.querySelectorAll(".indicator_btn");

      const translateValue = currentIndex * -mainWidth;
      slideRow.style.transform = `translateX(${translateValue}px)`;

      btns.forEach((btn, index) => {
        btn.classList.toggle("active", index === currentIndex);
      });
    };

    updateSlide();

    const btns = document.querySelectorAll(".indicator_btn");
    btns.forEach((btn, index) => {
      btn.addEventListener("click", () => {
        setCurrentIndex(index);
      });
    });

    // Cleanup
    
  }, [currentIndex]);

  return (
    <main className="testimonials pb-4">


      <div className="slider">
        <div className="slide-row" id="slide-row">
          {myList}
          
        </div>
      </div>

      <div className="indicator">
        {[...Array(4)].map((_, index) => (
          <span
            key={index}
            className={`btn indicator_btn btn-success ${index === currentIndex ? "active" : ""}`}
            onClick={() => setCurrentIndex(index)}
          ></span>
        ))}
      </div>
    </main>
  );
}
