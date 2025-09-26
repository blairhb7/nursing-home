"use client";

import React from "react";
import { BiSolidStar } from "react-icons/bi";
import { motion } from "framer-motion";

const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0 },
};

export function Testimonial17() {
  const testimonials = [
    {
      quote: "The compassionate care made all the difference for us. The perfect spot for our loved ones.",
      name: "Laura Thompson",
      role: "Daughter, Resident",
      img: "/lady-3.jpg",
    },
    {
      quote: "They truly treat you like family here! Every one is so nice and welcoming.",
      name: "John Davis",
      role: "Son, Family",
      img: "/man-3.jpg",
    },
    {
      quote: "A wonderful place where my mom feels at home. She really enjoy's this place and we're thankful for all staff and workers, who take's care of her.",
      name: "Rachel Green",
      role: "Daughter, Family",
      img: "/lady-2.jpg",
    },
  ];

  return (
    <section
      id="relume"
      className="px-[5%] py-16 md:py-24 lg:py-28 bg-white"
    >
      <div className="container mx-auto">
        {/* Section Header */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          variants={fadeUp}
          className="mx-auto mb-12 w-full max-w-3xl text-center md:mb-18 lg:mb-20"
        >
          <h2 className="mb-5 text-5xl font-bold md:mb-6 md:text-7xl lg:text-8xl">
            What Families Say
          </h2>
          <p className="md:text-md text-gray-600">
            Real experiences from our cherished residents' families
          </p>
        </motion.div>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
          {testimonials.map((t, i) => (
            <motion.div
              key={i}
              className="flex w-full flex-col items-start justify-between rounded-2xl border border-gray-200 bg-white p-6 shadow-md transition hover:shadow-lg md:p-8"
              variants={fadeUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: i * 0.2 }}
            >
              <div className="mb-5 md:mb-6">
                {/* Stars */}
                <div className="mb-5 flex text-yellow-500 md:mb-6">
                  {Array.from({ length: 5 }).map((_, idx) => (
                    <BiSolidStar key={idx} className="mr-1 size-6" />
                  ))}
                </div>
                {/* Quote */}
                <blockquote className="md:text-md text-gray-700 italic">
                  “{t.quote}”
                </blockquote>
              </div>

              {/* Avatar + Name */}
              <div className="mt-5 flex w-full flex-col items-start md:mt-6 md:w-fit md:flex-row md:items-center">
                <img
                  src={t.img}
                  alt={`${t.name} avatar`}
                  className="mb-4 size-12 min-h-12 min-w-12 rounded-full object-cover md:mr-4 md:mb-0"
                />
                <div>
                  <p className="font-semibold">{t.name}</p>
                  <p className="text-sm text-gray-500">{t.role}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
