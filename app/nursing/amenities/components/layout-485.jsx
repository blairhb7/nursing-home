"use client";

import React, { useRef } from "react";
import { motion, useScroll, useSpring, useTransform } from "framer-motion";
import { RxChevronRight } from "react-icons/rx";



const FeatureCard = ({ feature, children }) => {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start center", "end center"],
  });

  const animatedWidth = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 20,
  });
  const width = useTransform(animatedWidth, [0, 1], ["0%", "100%"]);

  return (
    <motion.div
      ref={ref}
      className="flex flex-col items-start justify-center py-8 md:py-0"
      initial={{ opacity: 0, y: 60 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      viewport={{ once: true, amount: 0.3 }}
    >
      {/* Mobile number */}
      <div className="mt-10 flex text-[6rem] font-bold leading-[1] md:mt-0 md:hidden md:text-[14rem]">
        {feature.number}
      </div>

      {/* Animated progress line */}
      <div className="mb-8 mt-8 h-0.5 w-full bg-gray-200 md:mt-0">
        <motion.div className="h-0.5 bg-black" style={{ width }} />
      </div>

      {/* Content */}
      {children}
    </motion.div>
  );
};

const useStickyCounter = () => {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });
  const y = useTransform(
    scrollYProgress,
    [0.4, 0.5, 0.65, 0.75],
    ["0%", "-33.5%", "-33.5%", "-66.5%"]
  );
  return { ref, y };
};

export function Layout485() {
  const sticky = useStickyCounter();

  return (
    <section
      id="features"
      className="px-[5%] py-16 md:py-24 lg:py-28 w-screen overflow-hidden bg-[#80A1AE]"
      ref={sticky.ref}
    >
      <div className="container">
        <div className="relative grid auto-cols-fr grid-cols-1 items-start gap-x-8 gap-y-12 md:grid-cols-[0.75fr_1fr] md:gap-y-16 lg:grid-cols-[max-content_1fr] lg:gap-x-20">
          {/* Sticky counter (desktop) */}
          <div className="static top-[20%] hidden h-56 overflow-hidden md:sticky md:flex md:items-start">
            <h1 className="text-[6rem] leading-[1] text-white font-bold md:text-[14rem]">
              0
            </h1>
            <motion.div className="text-center" style={{ y: sticky.y }}>
              {[1, 2, 3].map((num) => (
                <h1
                  key={num}
                  className="text-[6rem] leading-[1] text-white font-bold md:text-[14rem]"
                >
                  {num}
                </h1>
              ))}
            </motion.div>
          </div>

          {/* Feature cards */}
          <div className="grid auto-cols-fr grid-cols-1 gap-x-12 gap-y-12 md:gap-x-28 md:gap-y-28">
            {[
              {
                number: "01",
                tagline: "Community",
                heading: "Fostering connections and meaningful relationships",
                description:
                  "We create opportunities for residents to build friendships and engage in shared experiences. Social interaction is key to happiness.",
              },
              {
                number: "02",
                tagline: "Wellness",
                heading: "Holistic programs for health and well-being",
                description:
                  "From fitness to mindfulness, our tailored activities encourage physical vitality and emotional balance.",
              },
              {
                number: "03",
                tagline: "Care",
                heading: "Compassionate and professional support",
                description:
                  "Our dedicated staff provides personalized care to meet individual needs with empathy and expertise.",
              },
            ].map((feature, idx) => (
              <FeatureCard
                key={idx}
                feature={{
                  ...feature,
                  buttons: [
                    { title: "Connect", variant: "secondary" },
                    {
                      title: "Learn",
                      variant: "link",
                      iconRight: <RxChevronRight />,
                    },
                  ],
                }}
              >
                <p className="mb-3 text-white font-semibold md:mb-4">{feature.tagline}</p>
                <h2 className="mb-5 text-2xl font-bold md:mb-6 md:text-4xl lg:text-6xl">
                  {feature.heading}
                </h2>
                <p className="md:text-md w-[70%]">{feature.description}</p>
              
              </FeatureCard>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
