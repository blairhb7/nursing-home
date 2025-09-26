"use client";

import React from "react";
import { motion } from "framer-motion";

export function Layout42() {
  return (
    <section id="relume" className="px-[5%] py-16 md:py-24 lg:py-28 bg-[#1D3038] text-white">
      <div className="container">
        <motion.div
          className="grid grid-cols-1 items-start justify-between gap-5 md:grid-cols-2 md:gap-x-12 md:gap-y-8 lg:gap-x-20"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          variants={{
            hidden: {},
            visible: {
              transition: { staggerChildren: 0.3 },
            },
          }}
        >
          {/* Left: Heading */}
          <motion.div
            initial={{ opacity: 0, x: -50, scale: 0.95 }}
            whileInView={{ opacity: 1, x: 0, scale: 1 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.9, ease: "easeOut" }}
          >
            <motion.h3
              className="text-2xl leading-[1.2] font-bold md:text-5xl lg:text-4xl"
              initial={{ opacity: 0, y: 30, scale: 0.98 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              viewport={{ once: true, amount: 0.3 }}
              animate={{ scale: [1, 1.02, 1] }}
              transition={{
                duration: 5,
                ease: "easeInOut",
                repeatType: "reverse",
              }}
            >
              Discover Our Commitment to Compassionate and Personalized Elder
              Care
            </motion.h3>
          </motion.div>

          {/* Right: Paragraph */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 1, ease: "easeOut", delay: 0.4 }}
          >
            <p className="md:text-md  font-light lg:px-6">
              At our nursing home, we believe that every resident deserves a
              nurturing environment where they can thrive. Our mission is to
              provide exceptional care that respects the dignity and
              individuality of each person. With a focus on community and
              connection, we strive to create a home where residents feel valued
              and supported.
            </p>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
