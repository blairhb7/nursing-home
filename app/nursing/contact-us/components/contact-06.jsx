"use client";

import React from "react";
import { motion } from "framer-motion";
import { BiEnvelope, BiMap, BiPhone } from "react-icons/bi";

const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0 },
};

export function Contact6() {
  return (
    <section id="contact" className="px-[5%]  py-16 md:py-24 lg:py-28 bg-[#1D3038] text-white  overflow-hidden">
      <div className="container mx-auto grid grid-cols-1 gap-y-12 md:grid-cols-2 md:gap-x-12 lg:gap-x-20">

        {/* Left Side */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          variants={fadeUp}
        >
          <div className="mb-6 md:mb-8">
            <img src="/logo.png" alt="" className=" w-96 h-40 p-6" />
            <h2 className="mb-2 text-3xl font-bold md:text-5xl lg:text-6xl">
              Contact us
            </h2>
            <p className="text-white">
              We are here to listen and provide the support you need.
            </p>
          </div>
          <div className="grid gap-4 py-2 text-white">
            <motion.div
              variants={fadeUp}
              transition={{ delay: 0.2, duration: 0.6 }}
              className="flex items-center gap-4"
            >
              <BiEnvelope className="text-2xl" />
              <p> ExecutiveDirector@MarinTerraceCare.com</p>
            </motion.div>
            <motion.div
              variants={fadeUp}
              transition={{ delay: 0.3, duration: 0.6 }}
              className="flex items-center gap-4"
            >
              <BiPhone className="text-2xl" />
              <p href="+1 (415)-388-9526"> +1 (415)-388-9526</p>
            </motion.div>
            <motion.div
              variants={fadeUp}
              transition={{ delay: 0.4, duration: 0.6 }}
              className="flex items-center gap-4"
            >
              <BiMap className="text-2xl" />
              <p>297 Miller Ave.
                  Mill Valley, California 94941
                  License #: 216803891  </p>
            </motion.div>
          </div>
        </motion.div>

        {/* Right Side (Form) */}
        <motion.form
          action="https://formspree.io/f/your-form-id" // replace with your Formspree form ID
          method="POST"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          transition={{ staggerChildren: 0.15 }}
          className="grid max-w-lg grid-cols-1 gap-6"
        >
          {/* Name */}
          <motion.div variants={fadeUp} className="grid grid-cols-1 lg:grid-cols-2 gap-3 lg:gap-6">
            <div className="grid w-full items-center">
              <label htmlFor="firstName" className="mb-2 font-medium">First name</label>
              <input
                type="text"
                id="firstName"
                name="firstName"
                required
                className="border border-gray-300 rounded-lg  px-4 py-2 focus:outline-none focus:ring-2 focus:ring-[#96C7C2]"
              />
            </div>
            <div className="grid w-full items-center">
              <label htmlFor="lastName" className="mb-2 font-medium">Last name</label>
              <input
                type="text"
                id="lastName"
                name="lastName"
                required
                className="border border-gray-300   rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-[#96C7C2]"
              />
            </div>
          </motion.div>

          {/* Email + Phone */}
          <motion.div variants={fadeUp} className="grid grid-cols-1 gap-6 lg:grid-cols-2">
            <div className="grid w-full items-center">
              <label htmlFor="email" className="mb-2 font-medium">Email</label>
              <input
                type="email"
                id="email"
                name="email"
                required
                className="border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-[#96C7C2]"
              />
            </div>
            <div className="grid w-full items-center">
              <label htmlFor="phone" className="mb-2 font-medium">Phone number</label>
              <input
                type="text"
                id="phone"
                name="phone"
                className="border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-[#96C7C2]"
              />
            </div>
          </motion.div>

          {/* Topic Select */}
          <motion.div variants={fadeUp} className="grid w-full items-center">
            <label className="mb-2 font-medium">Choose a topic</label>
            <select
              name="topic"
              className="border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-[#96C7C2]"
            >
              <option value="">Select one</option>
              <option value="first-choice">First Choice</option>
              <option value="second-choice">Second Choice</option>
              <option value="third-choice">Third Choice</option>
            </select>
          </motion.div>

          {/* Radio Group */}
          <motion.div variants={fadeUp} className="grid w-full items-start gap-3">
            <label className="font-medium mb-2">Who are you contacting us as?</label>
            <div className="grid grid-cols-2 gap-2">
              {["Family member", "Potential resident", "Healthcare professional", "Community partner", "Volunteer", "Other"].map((item, i) => (
                <label key={i} className="flex items-center space-x-2">
                  <input type="radio" name="contactType" value={item.toLowerCase().replace(/\s/g, "-")} required />
                  <span>{item}</span>
                </label>
              ))}
            </div>
          </motion.div>

          {/* Message */}
          <motion.div variants={fadeUp} className="grid w-full items-center">
            <label htmlFor="message" className="mb-2 font-medium">Message</label>
            <textarea
              id="message"
              name="message"
              placeholder="Share your thoughts here"
              required
              className="min-h-[11.25rem] border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-[#96C7C2]"
            />
          </motion.div>

          {/* Terms */}
          <motion.div variants={fadeUp} className="flex items-center space-x-2">
            <input type="checkbox" id="terms" required className="w-4 h-4" />
            <label htmlFor="terms" className="cursor-pointer text-sm">I accept the terms</label>
          </motion.div>

          {/* Submit */}
          <motion.div variants={fadeUp}>
            <button
              type="submit"
              className="w-full bg-[#80A1AE] text-white px-10 shadow-md shadow-[#ECF1F3] cursor-pointer hover:translate-y-0.5 py-2 rounded-full transition"
            >
              Submit
            </button>
          </motion.div>
        </motion.form>
      </div>
    </section>
  );
}
