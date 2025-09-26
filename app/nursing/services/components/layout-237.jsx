"use client";

import React from "react";
import { RxChevronRight } from "react-icons/rx";
import { motion } from "framer-motion";
import Link from 'next/link';

export function Layout237() {
  return (
    <section id="services" className="px-[5%] py-16 md:py-24 lg:py-28 bg-white text-black">
      <div className="container mx-auto">
        <div className="flex flex-col items-center">
          {/* Heading */}
          <motion.div
            className="mb-12 w-full max-w-4xl flex flex-col items-center text-center md:mb-18 lg:mb-20"
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="mb-5 text-2xl font-bold md:mb-6 md:text-4xl lg:text-6xl">
              Comprehensive care for your loved ones
            </h2>
            <p className="max-w-2xl md:text-md">
              We offer three primary service categories designed to meet diverse
              senior care needs. Our goal is to provide holistic support.
            </p>
          </motion.div>

          {/* Services Grid */}
          <div className="grid grid-cols-1 gap-y-12 md:grid-cols-3 md:gap-x-8 md:gap-y-16 lg:gap-x-12">
            {[
              {
                title: "Nursing care",
                img: "/medical.svg",
                desc: "Round-the-clock medical supervision and personalized treatment plans.",
              },
              {
                title: "Rehabilitation services",
                img: "/rehab.svg",
                desc: "Targeted therapy programs to restore mobility and independence.",
              },
              {
                title: "Assisted living",
                img: "/happy.svg",
                desc: "Daily support for personal care and social engagement.",
              },
            ].map((service, i) => (
              <motion.div
                key={i}
                className="flex flex-col items-center text-center rounded-xl p-6 shadow-md bg-white"
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                whileHover={{
                  scale: 1.05,
                  boxShadow: "0px 8px 24px rgba(0,0,0,0.15)",
                }}
                whileTap={{ scale: 0.97 }}
                transition={{ duration: 0.3, delay: i * 0.2 }}
                viewport={{ once: true }}
              >
                <div className="mb-5 md:mb-6">
                  <img
                    src={service.img}
                    alt={service.title}
                    className="size-12"
                  />
                </div>
                <h3 className="mb-5 text-2xl font-bold md:mb-6 md:text-3xl lg:text-4xl">
                  {service.title}
                </h3>
                <p className="text-gray-600">{service.desc}</p>
              </motion.div>
            ))}
          </div>

          {/* Buttons with stagger + hover animation */}
          <motion.div
            className="mt-10 flex items-center gap-4 md:mt-14 lg:mt-16"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={{
              hidden: { opacity: 0 },
              visible: {
                opacity: 1,
                transition: {
                  staggerChildren: 0.25,
                },
              },
            }}
          >
            {/* Learn more button */}
           <Link href="/nursing/amenities"><motion.button
              variants={{
                hidden: { opacity: 0, y: 20 },
                visible: { opacity: 1, y: 0 },
              }}
              transition={{ duration: 0.6 }}
              whileHover={{ scale: 1.05, boxShadow: "0px 6px 16px rgba(0,0,0,0.2)" }}
              whileTap={{ scale: 0.95 }}
              className="rounded-lg bg-[#3B6170] px-10 py-3 text-white transition"
            >
              Learn more
            </motion.button></Link> 

            {/* Contact button */}
            <Link href="/nursing/contact-us"><motion.button
              variants={{
                hidden: { opacity: 0, y: 20 },
                visible: { opacity: 1, y: 0 },
              }}
              transition={{ duration: 0.6 }}
              whileHover={{ scale: 1.05, boxShadow: "0px 6px 16px rgba(0,0,0,0.2)"   }}
              whileTap={{ scale: 0.95 }}
              className="flex items-center bg-[#3B6170] px-10 py-3 hover:text-white text-white   rounded-lg"
            >
              Contact 
            </motion.button></Link>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
