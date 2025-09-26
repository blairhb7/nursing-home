"use client";

import React, { useState } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";

const faqData = [
  {
    q: "What services do you offer?",
    a: "We provide nursing care, rehabilitation services, and assisted living support for seniors. Our comprehensive care includes medical supervision, therapy programs, and daily living assistance.",
  },
  {
    q: "How do I schedule a visit?",
    a: "Contact our admissions team to arrange a personal tour. We'll discuss your specific needs and show you our facilities.",
  },
  {
    q: "Are medical staff available 24/7?",
    a: "Yes, registered nurses and medical professionals are on-site around the clock to ensure resident safety and immediate care.",
  },
  {
    q: "What are the costs?",
    a: "Costs vary based on individual care needs. We offer transparent pricing and can discuss insurance and payment options.",
  },
  {
    q: "How are meals prepared?",
    a: "Our professional chef prepares nutritious, balanced meals considering dietary restrictions and resident preferences.",
  },
];

export function Faq7() {
  const [activeIndex, setActiveIndex] = useState(null);

  const toggleFAQ = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <section
      id="faq"
      className="px-[5%] py-16 md:py-24 lg:py-28 bg-[#DAE4E8] text-gray-900"
    >
      <div className="container mx-auto max-w-3xl">
        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="mb-12 text-center md:mb-18 lg:mb-20"
        >
          <h2 className="mb-5 text-5xl font-bold md:mb-6 md:text-7xl lg:text-8xl">
            FAQs
          </h2>
          <p className="md:text-md text-gray-600">
            Common questions about our nursing home services answered here
          </p>
        </motion.div>

        {/* FAQ Accordion with scroll reveal */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={{
            hidden: { opacity: 0 },
            visible: {
              opacity: 1,
              transition: { staggerChildren: 0.15 },
            },
          }}
          className="space-y-6"
        >
          {faqData.map((faq, i) => (
            <motion.div
              key={i}
              variants={{
                hidden: { opacity: 0, y: 40 },
                visible: { opacity: 1, y: 0 },
              }}
              transition={{ duration: 0.5, ease: "easeOut" }}
              className="rounded-lg bg-white shadow-md"
            >
              <button
                className="flex w-full items-center justify-between px-6 py-4 text-left font-medium text-lg focus:outline-none"
                onClick={() => toggleFAQ(i)}
              >
                {faq.q}
                <motion.span
                  animate={{ rotate: activeIndex === i ? 45 : 0 }}
                  transition={{ duration: 0.3 }}
                  className="text-2xl font-bold text-[#1D3038]"
                >
                  +
                </motion.span>
              </button>

              <AnimatePresence initial={false}>
                {activeIndex === i && (
                  <motion.div
                    key="content"
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.4, ease: "easeInOut" }}
                    className="overflow-hidden px-6 pb-4 "
                  >
                    {faq.a}
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </motion.div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mx-auto mt-16 max-w-md text-center md:mt-20"
        >
          <h4 className="mb-3 text-2xl font-bold md:mb-4 md:text-3xl lg:text-4xl">
            Need more information?
          </h4>
          <p className="text-gray-600 md:text-md">
            We're here to answer any additional questions you might have.
          </p>
          <div className="mt-6">
            <Link href="/nursing/contact-us"><button className="rounded-full bg-[#3B6170] px-10 py-3 text-white shadow-md transition ">
              Contact
            </button></Link>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
