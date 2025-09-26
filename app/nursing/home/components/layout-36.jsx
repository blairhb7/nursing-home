"use client";

import { motion } from "framer-motion";

export default function Layout36() {
  return (
    <motion.section
      className="px-5 md:px-10 py-16 md:py-24 lg:py-28 bg-[#1D3038] text-white"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8 }}
    >
      <div className=" grid grid-cols-1 lg:flex  px-6 lg:px-20">
        <h3 className="mb-5 text-2xl md:text-4xl lg:w-[40%] font-extralight">
          Welcome to a Place Where Care Meets Compassion for Seniors
        </h3>
        <p className="md:text-md lg:w-[45%]">
          At our nursing home, we prioritize the well-being and happiness of
          every resident. Our dedicated team is committed to creating a
          nurturing environment that feels like home.
        </p>
      </div>
    </motion.section>
  );
}
