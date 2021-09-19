import React from "react";
import SedansIcon from "./images/icon-sedans.svg";
import SUVsIcon from "./images/icon-suvs.svg";
import LuxuryIcon from "./images/icon-luxury.svg";
import "./App.css";
import "./App.responsive.css";

function App() {
  return (
    <>
      <main id="App">
        <section id="card">
          <div className="car-type" id="sedans">
            <img src={SedansIcon} alt="Sedans Icon" />
            <h1>SEDANS</h1>
            <p>
              Choose a sedan for its affordability and excellent fuel economy.
              Ideal for cruising in the city or on your next road trip.
            </p>
            <button className="orange">Learn More</button>
          </div>
          <div className="car-type" id="suvs">
            <img src={SUVsIcon} alt="SUVs Icon" />
            <h1>SUVS</h1>
            <p>
              Take an SUV for its spacious interior, power, and versatility.
              Perfect for your next family vacation and off-road adventures.
            </p>
            <button className="dark-cyan">Learn More</button>
          </div>
          <div className="car-type" id="luxury">
            <img src={LuxuryIcon} alt="Luxury Car Icon" />
            <h1>LUXURY</h1>
            <p>
              Cruise in the best car brands without the bloated prices. Enjoy
              the enhanced comfort of a luxury rental and arrive in style.
            </p>
            <button className="very-dark-cyan">Learn More</button>
          </div>
        </section>
      </main>
      <footer className="attribution">
        <p>
          Challenge by{" "}
          <a
            href="https://www.frontendmentor.io?ref=challenge"
            rel="noreferrer"
            target="_blank"
          >
            Frontend Mentor
          </a>
          .
        </p>
        <p>
          Coded by{" "}
          <a href="https://github.com/Ullvang" rel="noreferrer" target="_blank">
            Jon Erik Ullvang
          </a>
          .
        </p>
      </footer>
    </>
  );
}

export default App;
