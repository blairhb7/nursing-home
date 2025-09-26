"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import React, { useRef } from "react";
import { RxChevronRight } from "react-icons/rx";

export default function Layout437() {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });

  // Parallax values for each image
  const yImage1 = useTransform(scrollYProgress, [0, 1], ["0%", "15%"]);
  const yImage2 = useTransform(scrollYProgress, [0, 1], ["0%", "-15%"]);

  const fadeUp = {
    hidden: { opacity: 0, y: 30 },
    visible: (i) => ({
      opacity: 1,
      y: 0,
      transition: { delay: i * 0.2, duration: 0.6, ease: "easeOut" },
    }),
  };

  return (
    <section
      id="rehab"
      ref={ref}
      className="px-[5%] py-16 md:py-24 lg:py-28 bg-[#1D3038] text-white overflow-hidden"
    >
      <div className="container">
        <div className="grid grid-cols-1 items-start gap-x-16 gap-y-12 md:grid-cols-[1fr_0.5fr]">
          {/* Images */}
          <motion.div
            className="order-last flex flex-col justify-center md:order-first"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeUp}
            custom={0}
          >
            <div className="grid grid-cols-[0.75fr_1fr] gap-6 sm:gap-8">
              <motion.img
                src="/28.jpg"
                className="aspect-square w-full rounded-2xl object-cover shadow-md"
                alt="Rehabilitation placeholder 1"
                style={{ y: yImage1 }}
                whileHover={{ scale: 1.05 }}
              />
              <motion.img
                src="/30.jpg"
                className="aspect-[2/3] w-full rounded-2xl object-cover shadow-md"
                alt="Rehabilitation placeholder 2"
                style={{ y: yImage2 }}
                whileHover={{ scale: 1.05 }}
              />
            </div>
          </motion.div>

          {/* Text Content */}
          <motion.div
            className="flex h-full flex-col gap-3"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeUp}
            custom={3}
          >
            <div>
            
              <motion.h2
                className="mb-1 text-2xl font-bold md:mb-2 md:text-4xl lg:text-6xl"
                variants={fadeUp}
                custom={5}
              >
                Tailored Rehabilitation Services for Every Need
              </motion.h2>
            </div>

            <div className="lg:ml-[3%]">
              <motion.p
                className="md:text-lg"
                variants={fadeUp}
                custom={6}
              >
                Our rehabilitation services include physical, occupational, and
                speech therapy, all customized to meet the individual needs of
                our residents. We are dedicated to helping each person regain
                their independence and improve their overall well-being.
              </motion.p>

              {/* Buttons */}
             
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
