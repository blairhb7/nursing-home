"use client";

import React from "react";
import { motion } from "framer-motion";

// Simple Button
const Button = ({ children }) => (
  <button className="rounded-full bg-black px-6 py-3 text-white shadow-md hover:bg-gray-800 transition">
    {children}
  </button>
);

export function Layout421() {
  const images = [
    "/marin-outside.jpeg",
    "/marin-entrance.png",
    "/marin-bedroom.png",
    "/marin-fireplace.png",
    "/marrin-outside.avif",
  ];

  const desktopPositions = [
    { top: "0%", left: "0%", rotate: "-5deg", z: 5 },
    { top: "10%", left: "18%", rotate: "4deg", z: 4 },
    { top: "20%", left: "40%", rotate: "0deg", z: 3 },
    { top: "10%", left: "55%", rotate: "-3deg", z: 2 },
    { top: "0%", left: "70%", rotate: "9deg", z: 1 },
  ];

  return (
    <section className="relative flex flex-col  py-16 md:py-24 lg:py-28 w-screen overflow-hidden bg-white text-black">
      {/* Text Section */}
      <div className="text-center z-10 relative">
        <div className="mx-auto max-w-3xl w-full ">
          <h1 className="mb-5 text-5xl font-bold md:mb-6 md:text-7xl lg:text-8xl">
            Comfortable and Personalized Living Spaces
          </h1>
          <p className="md:text-md">
            Our rooms are designed to be spacious and inviting, allowing residents to create a personal sanctuary. Natural light and thoughtful layouts promote relaxation and individuality.
          </p>
          
        </div>
      </div>

      {/* Desktop Images */}
      <div className="hidden md:block lg:ml-[4%] relative mt-12 h-[70vh]">
        {images.map((src, i) => (
          <motion.div
            key={i}
            className="absolute w-80  rounded-xl shadow-2xl overflow-hidden cursor-pointer"
            style={{
              top: desktopPositions[i].top,
              left: desktopPositions[i].left,
              rotate: desktopPositions[i].rotate,
              zIndex: desktopPositions[i].z,
              
            }}
            
            initial={{ opacity: 0, y: 50, scale: 0.9 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            transition={{ duration: 0.8, delay: i * 0.2, ease: "easeOut" }}
            whileHover={{ scale: 1.05, y: -5 }}
          >
            <img
              src={src}
              alt={`Living Space ${i + 1}`}
              className="w-full h-60 lg:h-96 object-cover rounded-xl"
            />
          </motion.div>
        ))}
      </div>

      {/* Mobile Images */}
      <div className="flex p-3 flex-col md:hidden gap-6 mt-8">
        {images.map((src, i) => (
          <motion.div
            key={i}
            className="w-full rounded-xl shadow-lg overflow-hidden"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: i * 0.15 }}
          >
            <img
              src={src}
              alt={`Living Space ${i + 1}`}
              className="w-full h-60 sm:h-64 object-cover rounded-xl"
            />
          </motion.div>
        ))}
      </div>
    </section>
  );
}
