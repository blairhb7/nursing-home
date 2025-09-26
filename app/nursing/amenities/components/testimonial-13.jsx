"use client";

import React, { useRef } from "react";
import { BiSolidStar } from "react-icons/bi";
import { motion, useScroll, useTransform } from "framer-motion";

const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  visible: (custom = 0) => ({
    opacity: 1,
    y: 0,
    transition: { delay: custom * 0.2, duration: 0.6, ease: "easeOut" },
  }),
};

export function Testimonial13() {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });

  // Parallax: move image slightly based on scroll
  const yParallax = useTransform(scrollYProgress, [0, 1], ["0%", "10%"]);

  return (
    <section
      ref={ref}
      className="px-[5%] h-[700px] bg-[#1D3038] text-white relative overflow-hidden"
    >
      <div className="container mx-auto">
        <div className="grid grid-cols-1 pt-4 items-center justify-center gap-12 md:grid-cols-2 md:gap-10 lg:gap-x-20">
          {/* Image with parallax */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.5 }}
            custom={0}
            variants={fadeUp}
            style={{ y: yParallax }}
            className="order-last md:order-first"
          >
            <img
              src="/marin-patio.png"
              alt="Testimonial image 1"
              className="aspect-square w-full rounded-image object-cover hover:scale-105 transition-transform duration-500"
            />
          </motion.div>

          {/* Content */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.5 }}
            custom={1}
            variants={fadeUp}
            className="flex flex-col items-start"
          >
            <div className="mb-6 flex md:mb-8">
              <BiSolidStar className="size-6 text-yellow-400" />
              <BiSolidStar className="size-6 text-yellow-400" />
              <BiSolidStar className="size-6 text-yellow-400" />
              <BiSolidStar className="size-6 text-yellow-400" />
              <BiSolidStar className="size-6 text-yellow-400" />
            </div>
            <blockquote className="text-xl font-bold md:text-2xl mb-6">
              "This place feels like home. The staff treats me with respect and
              kindness every single day."
            </blockquote>
            <div className="flex flex-nowrap items-center gap-5 md:mt-0">
              <div>
                <p className="font-semibold">Margaret Wilson</p>
                <p className="text-gray-500">Resident since 2019</p>
              </div>
              <div className="mx-4 w-px self-stretch bg-gray-200 sm:mx-0" />
             
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
