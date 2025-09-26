"use client";

import React from "react";
import { BiEnvelope, BiMap, BiMessageDetail, BiPhone } from "react-icons/bi";
import { motion } from "framer-motion";

const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  visible: (i) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, delay: i * 0.15 },
  }),
};

export function Contact23() {
  const contacts = [
    {
      icon: <BiEnvelope className="size-12" />,
      title: "Email",
      desc: "Send us a message for quick and personalized assistance",
      link: "mailto:ExecutiveDirector@MarinTerraceCare.com",
      label: "ExecutiveDirector@MarinTerraceCare.com",
    },
    {
      icon: <BiMessageDetail className="size-12" />,
      title: "Live chat",
      desc: "Connect with our support team in real time",
      link: "#",
      label: "Start chat now",
    },
    {
      icon: <BiPhone className="size-12" />,
      title: "Phone",
      desc: "Speak directly with our caring staff during business hours",
      link: "tel:+1 (415)-388-9526",
      label: "+1 (415)-388-9526",
    },
    {
      icon: <BiMap className="size-12" />,
      title: "Office",
      desc: "Visit us to discuss your loved one's care needs in person",
      link: "#",
      label: "297 Miller Ave, Mill Valley, CA 94941",
    },
  ];

  return (
    <section id="relume" className="px-[5%] py-16 md:py-24 lg:py-28 bg-[#DAE4E8] text-black overflow-hidden">
      <div className="container">
        {/* Heading */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          variants={fadeUp}
          className="mx-auto mb-12 max-w-lg text-center md:mb-18 lg:mb-20"
        >
          
          <h2 className="mb-5 text-5xl font-bold md:mb-6 md:text-7xl lg:text-8xl">
            Contact us
          </h2>
          <p className="md:text-md">
            Our team is ready to answer your questions and provide support
          </p>
        </motion.div>

        {/* Cards */}
        <div className="grid auto-cols-fr gap-x-8 gap-y-12 md:grid-cols-2 md:gap-y-16 lg:grid-cols-4">
          {contacts.map((item, i) => (
            <motion.div
              key={i}
              custom={i}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeUp}
              className="flex flex-col items-center text-center p-6 rounded-xl shadow-sm hover:shadow-md transition"
            >
              <div className="mb-5 text-primary sm:mb-6">{item.icon}</div>
              <h3 className="mb-3 text-2xl font-bold leading-[1.4] sm:mb-4 md:text-3xl lg:text-4xl">
                {item.title}
              </h3>
              <p className="mb-5 text-gray-600 md:mb-6">{item.desc}</p>
              <a href={item.link} className=" hover:text-primary">
                {item.label}
              </a>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
