"use client";

import React from "react";
import { motion } from "framer-motion";

const fadeUpVariant = {
  hidden: { opacity: 0, y: 30 },
  visible: (custom = 0) => ({
    opacity: 1,
    y: 0,
    transition: { delay: custom * 0.2, duration: 0.6, ease: "easeOut" },
  }),
};

export function Layout132() {
  return (
    <section className="px-[5%] py-16 md:py-24 lg:py-28 bg-white text-black">
      <div className="container mx-auto">
        <div className="grid grid-cols-1 items-start gap-y-12 md:grid-cols-2 md:gap-x-12 lg:gap-16">
          {/* Card 1 */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.5 }}
          >
            <motion.div
              custom={0}
              variants={fadeUpVariant}
              className="mb-6 md:mb-8 overflow-hidden rounded-2xl shadow-lg"
            >
              <img
                src="/marin-front.png"
                alt="Lifestyle"
                className="w-full md:h-[400px] hover:scale-105 transition-transform duration-500"
              />
            </motion.div>
            <motion.h3
              custom={1}
              variants={fadeUpVariant}
              className="mb-5 text-2xl leading-[1.2] font-bold md:mb-6 md:text-3xl lg:text-4xl"
            >
              Experience a vibrant lifestyle filled with support and engagement.
            </motion.h3>
            <motion.p
              custom={2}
              variants={fadeUpVariant}
              className="mt-5 md:mt-6 text-gray-600"
            >
              Our community offers a rich array of activities designed to
              enhance well-being and joy. Residents thrive in an environment
              that promotes both independence and connection.
            </motion.p>
          </motion.div>

          {/* Card 2 */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.5 }}
          >
            <motion.div
              custom={0}
              variants={fadeUpVariant}
              className="mb-6 md:mb-8 overflow-hidden rounded-2xl shadow-lg"
            >
              <img
                src="/marin-lunch.png"
                alt="Care services"
                className="w-full md:h-[400px] hover:scale-105 transition-transform duration-500"
              />
            </motion.div>
            <motion.h3
              custom={1}
              variants={fadeUpVariant}
              className="mb-5 text-2xl leading-[1.2] font-bold md:mb-6 md:text-3xl lg:text-4xl"
            >
              Tailored services that cater to individual needs and preferences.
            </motion.h3>
            <motion.p
              custom={2}
              variants={fadeUpVariant}
              className="mt-5 md:mt-6 text-gray-600"
            >
              We provide customized care plans that adapt to each resident's
              unique requirements. This ensures that everyone receives the
              attention and support they deserve.
            </motion.p>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
