"use client";

import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";

const images = [
  "/1.jpeg",
  "/4.jpg",
  "/5.jpg",
  "/12.png",
  "/9.jpg",
  "/22.jpg",
  "/10.jpg",
  "/14.jpg",
  "/33.jpg",
  "/29.jpg",
  "/15.jpg",
  "/34.jpg",
  "/9.jpg",
  "/27.jpg",
  "/8.jpg",
  "/11.jpg",
  "/20.jpeg",
  "/21.jpg",
  "/19.jpeg",
  "/43.jpg",
  "/29.jpg",
  "/2.webp",
  "/31.jpg",
  "/9.jpg",
  "/28.jpg",
  "/8.jpg",
  "/6.webp",
];

// duplicate for infinite loop
const loopedImages = [...images, ...images];

export function Gallery23() {
  const [scrollX, setScrollX] = useState(0);

  // Auto scroll
  useEffect(() => {
    let animation;
    let offset = 0;

    const scroll = () => {
      offset -= .5; // speed (px/frame)
      if (Math.abs(offset) >= loopedImages.length * 260 / 2) {
        offset = 0; // reset halfway for seamless loop
      }
      setScrollX(offset);
      animation = requestAnimationFrame(scroll);
    };

    animation = requestAnimationFrame(scroll);
    return () => cancelAnimationFrame(animation);
  }, []);

  const handlePrev = () => setScrollX((prev) => prev + 300);
  const handleNext = () => setScrollX((prev) => prev - 300);

  return (
    <section className="overflow-hidden px-[5%] py-16 bg-[#ECF1F3] text-black">
      <div className="container">
        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 2.6 }}
          className="mb-12 text-center md:mb-18 lg:mb-20"
        >
          <h2 className="text-5xl font-bold md:text-7xl lg:text-8xl">
            Our Moments
          </h2>
        </motion.div>

        {/* Carousel */}
        <div className="relative w-full overflow-hidden">
          <div
            className="flex gap-6 md:gap-8 will-change-transform transition-transform duration-500 ease-out"
            style={{ transform: `translateX(${scrollX}px)` }}
          >
            {loopedImages.map((src, i) => (
              <div
                key={i}
                className="min-w-[250px] md:min-w-[350px] h-[400px] rounded-xl overflow-hidden shadow-md"
              >
                <img
                  src={src}
                  alt={`Gallery image ${i + 1}`}
                  className="w-full h-full object-cover"
                />
              </div>
            ))}
          </div>

          {/* Manual controls */}
        
        </div>
      </div>
    </section>
  );
}
