import { useState, useEffect } from "react";
const images = [
  "/assets/Pastel_red_velvet_porción.jpg",
  "/assets/sandwich_clasico.jpg",
  "/assets/Conchas_rellenas.jpg"
];

function Hero() {
  const [currentIndex, setCurrentIndex] = useState(0);

  // Cambio automático cada 4 segundos
  useEffect(() => {
    const interval = setInterval(() => {
      nextSlide();
    }, 4000);
    return () => clearInterval(interval);
  }, [currentIndex]);

  const nextSlide = () => {
    setCurrentIndex((currentIndex + 1) % images.length);
  };

  const prevSlide = () => {
    setCurrentIndex((currentIndex - 1 + images.length) % images.length);
  };

  const goToSlide = (index) => {
    setCurrentIndex(index);
  };

  return (
    <section className="hero">
      <div className="hero-left">
        <h1>Panadería Artesanal</h1>
        <p>
          Tradición y calidad desde 1950.
          <br />
          Pan recién horneado cada mañana.
        </p>
        <a href="#" className="cta-button">
          Lo más vendido
        </a>
      </div>

      <div className="hero-right">
        <div className="hero-carousel">
          {/* Flechas */}
          <button className="arrow left" onClick={prevSlide}>
            &#10094;
          </button>
          <img
            src={images[currentIndex]}
            className="slide"
            alt={`Producto ${currentIndex + 1}`}
          />
          <button className="arrow right" onClick={nextSlide}>
            &#10095;
          </button>

          {/* Indicadores */}
          <div className="carousel-dots">
            {images.map((_, index) => (
              <span
                key={index}
                className={`dot ${currentIndex === index ? "active" : ""}`}
                onClick={() => goToSlide(index)}
              ></span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export default Hero;
