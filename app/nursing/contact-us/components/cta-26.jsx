"use client";

import React from "react";
import { motion } from "framer-motion";

export function Cta26() {
  return (
    <section className="px-[5%] py-16 md:py-24 lg:py-28 bg-[#DAE4E8] text-black overflow-hidden">
      <motion.div
        className="container mx-auto max-w-3xl text-center "
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        <h2 className="mb-5 text-3xl font-bold md:text-5xl lg:text-7xl ">
          Stay informed with our newsletter
        </h2>
        <p className="mb-6 md:text-lg">
          Receive updates about our care services, events, and community news
        </p>
        <form className="flex flex-col sm:flex-row gap-3 justify-center">
          <input
            type="email"
            placeholder="Enter your email"
            className="flex-1 border border-gray-300 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-[#96C7C2]"
          />
          <button className="bg-[#1D3038] duration-700 hover:bg-[#96C7C2] hover:text-black text-white rounded-lg px-10 py-3 font-extrabold transition">
            Sign up
          </button>
        </form>
        <p className="mt-2 text-xs">
          By signing up, you agree to receive our newsletter and updates
        </p>
      </motion.div>
    </section>
  );
}
