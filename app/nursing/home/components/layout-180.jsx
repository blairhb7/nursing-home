"use client";
import Link from "next/link";
import { motion } from "framer-motion";
import { RxChevronRight } from "react-icons/rx";

export default function Layout180() {
  return (
    <section className="relative flex flex-col px-5 md:px-10 py-16 md:py-24 lg:py-28 bg-[#1D3038] text-white">
      <motion.div
        className="relative z-10  flex flex-col items-center text-center"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 1 }}
      >
        <h2 className="mb-5 text-2xl md:text-4xl ">
          Exceptional Support for Every <br/> Senior's Needs
        </h2>
        <p className="mb-6 md:text-md lg:w-[40%]">
          Our commitment to personalized care ensures that every resident
          receives the attention they deserve. We create an environment where
          seniors can thrive, surrounded by compassion and understanding.
        </p>
        <div className="flex justify-center gap-4 flex-wrap">
        <Link href="/nursing/amenities"><button className="bg-[#80A1AE] text-white px-10 shadow-md shadow-[#ECF1F3] py-2 rounded-full">
        Discover
          </button></Link>
          <Link href="/nursing/gallery"><button className="bg-[#80A1AE] text-white px-10 shadow-md shadow-[#ECF1F3] py-2 rounded-full">
          Explore
          </button></Link>
        </div>
      </motion.div>

      <div className="absolute inset-0 z-0">
        <img
          src="21.jpg"
          className="w-full h-full object-cover"
          alt="Background"
        />
        <div className="absolute inset-0 bg-black/50"></div>
      </div>
    </section>
  );
}
