"use client";

import { motion } from "framer-motion";

const features = [
  {
    img: "/42.jpeg",
    title: "Discover Our Comprehensive Amenities for a Fulfilling Senior Lifestyle",
    description: "Our range of amenities ensures that residents enjoy a vibrant and engaging lifestyle.",
  },
  {
    img: "40.jpg",
    title: "Engaging Activities Designed to Enrich Lives and Foster Connections",
    description: "From arts and crafts to fitness classes, we offer diverse activities for all interests.",
  },
  {
    img: "/15.jpg",
    title: "Nutritious Meal Options Tailored to Individual Dietary Needs and Preferences",
    description: "Our culinary team prepares delicious meals that cater to all dietary requirements.",
  },
];

export default function Layout230() {
  return (
    <section className="px-5 md:px-10 py-16 md:py-24 lg:py-28 bg-[#ECF1F3] text-black">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-y-12 md:gap-x-8 md:gap-y-16 lg:gap-x-2 text-center">
        {features.map((feature, index) => (
          <motion.div
            key={index}
            className="flex flex-col h-96 md:h-full items-center"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: index * 0.2 }}
          >
            <img src={feature.img} alt={feature.title} className="mb-6 rounded-md w-full lg:h-80" />
            <h3 className="mb-2 font-extralight text-md lg:text-2xl  lg:h-20">{feature.title}</h3>
            <p className="lg:w-80 font-light  lg:text-lg">{feature.description}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
