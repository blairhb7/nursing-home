"use client";

import React from "react";
import { motion } from "framer-motion";

export function Testimonial3() {
  const testimonials = [
    {
      img:"/lady-1.jpg",
      quote:
        "The staff treated my mother like family. They gave her dignity and respect.",
      name: "Elizabeth Martin",
      role: "Daughter of resident",
      logo: "https://d22po4pjz3o32e.cloudfront.net/webflow-logo.svg",
      avatar: "https://d22po4pjz3o32e.cloudfront.net/placeholder-image.svg",
    },
    {
      img:"/man-1.jpg",
      quote:
        "This nursing home transformed my father's final years into a time of joy and connection.",
      name: "Thomas Rodriguez",
      role: "Son of resident",
      logo: "https://d22po4pjz3o32e.cloudfront.net/webflow-logo.svg",
      avatar: "https://d22po4pjz3o32e.cloudfront.net/placeholder-image.svg",
    },
    {
      img:"/old-lady.jpg",
      quote:
        "I feel safe, cared for, and part of a community here. It's more than a home.",
      name: "Helen Thompson",
      role: "Long-term resident",
      logo: "https://d22po4pjz3o32e.cloudfront.net/webflow-logo.svg",
      avatar: "https://d22po4pjz3o32e.cloudfront.net/placeholder-image.svg",
    },
  ];

  return (
    <section id="testimonials" className="px-[5%] py-16 md:py-24 lg:py-28  bg-[#ECF1F3] text-black">
      <div className="container">
        {/* Header */}
        <motion.div
          className="mx-auto mb-12 w-full  text-center md:mb-18 lg:mb-20"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h1 className="mb-2 text-5xl font-bold md:mb-3 md:text-7xl lg:text-8xl">
            Resident stories
          </h1>
          <p className="md:text-md max-w-lg mx-auto">
            Hear from families who have experienced our compassionate care
          </p>
        </motion.div>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 gap-y-12 md:grid-cols-3 md:gap-x-8 lg:gap-x-12 lg:gap-y-16">
          {testimonials.map((t, idx) => (
            <motion.div
              key={idx}
              className="flex flex-col items-center justify-center text-center p-6 rounded-xl shadow-md bg-white"
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: idx * 0.15 }}
              viewport={{ once: true }}
              whileHover={{ y: -8, scale: 1.02 }}
            >
              {/* Logo */}
             

              {/* Quote */}
              <blockquote className="text-md leading-[1.4] font-bold md:text-xl">
                {t.quote}
              </blockquote>

              {/* Person */}
              <div className="mt-6 flex flex-col items-center justify-center md:mt-8">
                <div className="mb-3 md:mb-4">
                  <img
                    src={t.img}
                    alt={`${t.name} avatar`}
                    className="size-14 min-h-14 min-w-14 rounded-full object-cover"
                  />
                </div>
                <p className="font-semibold">{t.name}</p>
                <p className="text-gray-600">{t.role}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
