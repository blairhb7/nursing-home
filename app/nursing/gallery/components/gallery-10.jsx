"use client";

import React from "react";
import { motion } from "framer-motion";

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0 },
};

export function Gallery10() {
  // image list with size variation
  const images = [
    { src: "/1.jpeg", size: "h-96" }, // tall
    { src: "/marin-entrance.png", size: "h-64" }, // medium
    { src: "/35.jpg", size: "h-80" }, // tall-medium
    { src: "/marin-outside.jpeg", size: "h-72" }, // medium
    { src: "/41.jpg", size: "h-56" }, // shorter
    { src: "/marin-lunch.png ", size: "h-96" }, // tall
    { src: "/21.jpg", size: "h-64" },
    { src: "/33.jpg", size: "h-80" },
    { src: "/40.jpg", size: "h-96" },
  ];

  return (
    <section
      id="relume"
      className="px-[5%] py-16 md:py-24 lg:py-28 bg-white text-black"
    >
      <div className="container">
        {/* Heading */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          variants={fadeUp}
          className="mb-12 text-center md:mb-18 lg:mb-20"
        >
          <h2 className="mb-5 text-5xl font-bold md:mb-2 md:text-7xl lg:text-8xl">
            Gallery
          </h2>
          <p className="md:text-lg">
            Cherishing the beautiful moments shared in our community.
          </p>
        </motion.div>

        {/* Masonry Gallery */}
        <div className="gap-6 space-y-6 md:columns-3">
          {images.map((img, i) => (
            <motion.a
              key={i}
              href="#"
              className="block w-full"
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              whileHover={{ scale: 1.05 }}
            >
              <img
                src={img.src}
                alt={`Gallery image ${i + 1}`}
                className={`w-full ${img.size} rounded-xl object-cover shadow-md`}
              />
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  );
}
