import React, { useState, useEffect, useCallback, useRef } from 'react';

function Carousel({ images, alt }) {
  const [current, setCurrent] = useState(0);
  const [paused, setPaused] = useState(false);
  const timerRef = useRef(null);

  const next = useCallback(() => {
    setCurrent((c) => (c + 1) % images.length);
  }, [images.length]);

  const prev = () => {
    setCurrent((c) => (c - 1 + images.length) % images.length);
  };

  const goTo = (idx) => setCurrent(idx);

  useEffect(() => {
    if (paused) return;
    timerRef.current = setInterval(next, 3800);
    return () => clearInterval(timerRef.current);
  }, [paused, next]);

  return (
    <div
      className="carousel"
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
      role="region"
      aria-label={`${alt} image carousel`}
      aria-roledescription="carousel"
    >
      <div className="carousel-track-wrap">
        <div
          className="carousel-track"
          style={{ transform: `translateX(-${current * 100}%)` }}
          aria-live="polite"
        >
          {images.map((src, i) => (
            <div
              className="carousel-slide"
              key={i}
              aria-label={`Slide ${i + 1} of ${images.length}`}
              aria-hidden={i !== current}
            >
              <img
                src={src}
                alt={`${alt} screenshot ${i + 1}`}
                loading={i === 0 ? 'eager' : 'lazy'}
              />
            </div>
          ))}
        </div>
      </div>

      <button
        className="carousel-btn carousel-prev"
        onClick={prev}
        aria-label="Previous slide"
      >
        <i className="fas fa-chevron-left" aria-hidden="true"></i>
      </button>

      <button
        className="carousel-btn carousel-next"
        onClick={next}
        aria-label="Next slide"
      >
        <i className="fas fa-chevron-right" aria-hidden="true"></i>
      </button>

      <div className="carousel-dots" role="tablist" aria-label="Slide navigation">
        {images.map((_, i) => (
          <button
            key={i}
            className={`carousel-dot${i === current ? ' active' : ''}`}
            onClick={() => goTo(i)}
            role="tab"
            aria-selected={i === current}
            aria-label={`Go to slide ${i + 1}`}
          />
        ))}
      </div>
    </div>
  );
}

export default Carousel;
