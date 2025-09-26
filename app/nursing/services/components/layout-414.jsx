"use client";

import { motion } from "framer-motion";
import React from "react";
import { RxChevronRight } from "react-icons/rx";

export function Layout414() {
  const imagesRow1 = [
    "/w7.jpg",
    "/m6.jpg",
    "/w4.jpg",
    "/m5.jpg",
    
  ];

  const imagesRow2 = [
    "/w6.jpg",
    "/w5.jpg",
    "/m7.jpg",
    "/m1.jpg",
    
  ];

  const fadeUp = {
    hidden: { opacity: 0, y: 30 },
    visible: (i) => ({
      opacity: 1,
      y: 0,
      transition: {
        delay: i * 0.1,
        duration: 0.6,
        ease: "easeOut",
      },
    }),
  };

  const marqueeAnimation = {
    animate: {
      x: ["0%", "-50%"],
      transition: {
        x: {
          repeat: Infinity,
          repeatType: "loop",
          duration: 60,
          ease: "linear",
        },
      },
    },
  };

  return (
    <section
      id="marquee"
      className="overflow-hidden px-[5%] py-10 md:py-14 lg:py-28 bg-[#1D3038] text-white"
    >
      <div className="container">
        <div className="flex flex-col items-center">
          {/* Text Content */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="mb-12 grid grid-cols-1 gap-8 md:mb-20 md:grid-cols-2"
          >
            <div>
              
              <h2 className="text-2xl font-bold md:text-5xl lg:text-6xl">
                Experienced medical professionals
              </h2>
            </div>
            <div className="flex flex-col justify-center">
              <p className="md:text-lg ">
                Our dedicated team provides top-quality care with compassion
                and professionalism. From checkups to specialized treatments,
                we’re here to support you every step of the way.
              </p>
              <div className="mt-6 flex flex-wrap items-center gap-4 md:mt-8">
               
              </div>
            </div>
          </motion.div>

          {/* Scrolling Images */}
          <div className="relative flex w-full flex-col gap-6 overflow-hidden">
            {/* Row 1 */}
            <motion.div
              className="flex w-max gap-4"
              variants={marqueeAnimation}
              animate="animate"
            >
              {[...imagesRow1, ...imagesRow1].map((src, i) => (
                <motion.div
                  key={`row1-${i}`}
                  className="w-[40vw] md:w-[30vw] flex-none"
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true }}
                  variants={fadeUp}
                  custom={i}
                  whileHover={{ scale: 1.05, filter: "brightness(1.2)" }}
                >
                  <img
                    src={src}
                    alt={`Placeholder ${i + 1}`}
                    className="aspect-[4/3] w-full rounded-2xl object-[25%_35%] object-cover shadow-md"
                  />
                </motion.div>
              ))}
            </motion.div>

            {/* Row 2 (reverse) */}
            <motion.div
              className="flex w-max gap-4"
              animate={{
                x: ["-50%", "0%"],
                transition: {
                  x: {
                    repeat: Infinity,
                    repeatType: "loop",
                    duration: 60,
                    ease: "linear",
                  },
                },
              }}
            >
              {[...imagesRow2, ...imagesRow2].map((src, i) => (
                <motion.div
                  key={`row2-${i}`}
                  className="w-[40vw] md:w-[30vw] flex-none"
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true }}
                  variants={fadeUp}
                  custom={i}
                  whileHover={{ scale: 1.05, filter: "brightness(1.2)" }}
                >
                  <img
                    src={src}
                    alt={`Placeholder ${i + 1}`}
                    className="aspect-[4/3] w-full rounded-2xl object-[25%_15%]  object-cover shadow-md"
                  />
                </motion.div>
              ))}
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
