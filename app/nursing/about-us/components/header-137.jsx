"use client";

import React from "react";
import { motion } from "framer-motion";

export function Header137() {
  return (
    <section
      id="relume"
      className="grid grid-cols-1 items-center mt-6 overflow-hidden gap-y-16 w-screen pt-16 md:pt-24 lg:grid-cols-2 lg:pt-0 bg-[#1D3038] text-white"
    >
      {/* Text Content */}
      <motion.div
        className=""
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
      >
        {/* Heading with zoom effect */}
        <motion.h1
          className=" py-4 text-3xl font-bold md:mb-6 md:text-6xl px-10  "
          initial={{ opacity: 0, y: 40, scale: 0.95 }}
          whileInView={{ opacity: 1, y: 0, scale: 1 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 1, delay: 0.2, ease: "easeOut" }}
        >
          Compassionate Care for Your Loved Ones
        </motion.h1>

        {/* Subtext */}
        <motion.p
          className="md:text-md px-4 lg:px-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 1, delay: 0.5, ease: "easeOut" }}
        >
          At our nursing home, we prioritize the well-being and happiness of
          every resident. Our dedicated team is here to provide personalized
          care that feels like family.
        </motion.p>
      </motion.div>

      {/* Image Section */}
      <motion.div
        className="relative flex items-center"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
        variants={{
          hidden: {},
          visible: { transition: { staggerChildren: 0.3 } },
        }}
      >
        {/* Left Image */}
       

        {/* Right Image */}
        <motion.div
          className=" w-full"
          initial={{ opacity: 0, x: 50, scale: 0.95 }}
          whileInView={{ opacity: 1, x: 0, scale: 1 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 1, ease: "easeOut", delay: 0.7 }}
        >
          <motion.img
            src="/29.jpg"
            alt="Relume placeholder image 2"
            className="w-full rounded-xl object-top object-cover  lg:h-[800px] "
            initial={{ scale: 1 }}
            animate={{ scale: .9 }}
            transition={{ duration: 20, ease: "linear", }}
          />
        </motion.div>
      </motion.div>
    </section>
  );
}
