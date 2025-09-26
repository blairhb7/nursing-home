"use client";

import { motion } from "framer-motion";

const keyFeatures = [
  {
    img: "/heart.png",
    title: "Personalized Support",
    description: "Tailored care plans designed for individual wellness and comfort.",
  },
  {
    img: "/bed-2.png",
    title: "Comfortable Living",
    description: "Modern facilities that feel like home, promoting dignity and independence.",
  },
  {
    img: "/staff.png",
    title: "Professional Staff",
    description: "Highly trained and compassionate healthcare professionals dedicated to resident well-being.",
  },
];

export default function Layout237() {
  return (
    <section className="px-5 md:px-10 py-16 md:py-24 lg:py-28 bg-[#1D3038] text-white ">
      <div className="text-center flex flex-col items-center  mx-auto mb-12 md:mb-18 lg:mb-20">
        <motion.h2
          className="mb-5 text-3xl lg:text-5xl font-bold"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          Exceptional Care for Every Resident
        </motion.h2>
        <motion.p
          className="md:text-md lg:w-[45%] "
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          We understand that each resident has unique needs and preferences.
          Our approach focuses on individual care and support.
        </motion.p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-y-12 md:gap-x-8 md:gap-y-16 lg:gap-x-12 text-center">
        {keyFeatures.map((feature, index) => (
          <motion.div
            key={index}
            className="flex flex-col items-center"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: index * 0.2 }}
          >
            <img src={feature.img} alt={feature.title} className="mb-5 w-12 h-12" />
            <h3 className="mb-5 text-2xl md:text-3xl lg:text-4xl font-bold">{feature.title}</h3>
            <p>{feature.description}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
