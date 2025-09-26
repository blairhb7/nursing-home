"use client";

import React from "react";
import { motion } from "framer-motion";

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.7 } },
};

export function Header49() {
  return (
    <section id="relume" className="px-[5%] py-16 md:py-24 lg:py-28 bg-white text-black">
      <div className="container">
        <div className="grid grid-cols-1 items-start gap-x-12 gap-y-5 md:grid-cols-2 lg:gap-x-20 lg:gap-y-16">
          {/* Heading */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeUp}
          >
            <h1 className="text-2xl font-bold md:text-6xl ">
              We're Here to Help
            </h1>
          </motion.div>

          {/* Paragraph */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.2 }}
          >
            <p className="md:text-md">
              Your questions matter to us. Reach out today for any information
              or assistance regarding our services.
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
