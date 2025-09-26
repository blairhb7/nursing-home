"use client";

import React from "react";
import { motion } from "framer-motion";
import { BiLogoDribbble, BiLogoLinkedinSquare } from "react-icons/bi";
import { FaXTwitter } from "react-icons/fa6";

export function Team2() {
  const teamMembers = [
    {
      img:"/w4.jpg",
      name: "Margaret Wilson",
      role: "Executive Director",
      desc: "Veteran healthcare administrator with 25 years of compassionate senior care experience",
    },
    {
      img:"/m7.jpg",
      name: "Robert Chen",
      role: "Medical Director",
      desc: "Board-certified geriatrician committed to holistic patient wellness and individualized treatment",
    },
    {
      img:"/m5.jpg",
      name: "Sarah Rodriguez",
      role: "Care Coordinator",
      desc: "Skilled nurse specializing in personalized care plans and family support",
    },
    {
      img:"/m1.jpg",
      name: "James Thompson",
      role: "Activities Director",
      desc: "Passionate about creating engaging and meaningful experiences for residents",
    },
    {
      img:"/w7.jpg",
      name: "Emily Nakamura",
      role: "Nutrition Specialist",
      desc: "Develops nutritious and delicious meal plans tailored to individual dietary needs",
    },
    {img:"/w5.jpg",
      name: "Michael O'Brien",
      role: "Rehabilitation Lead",
      desc: "Expert physiotherapist focused on maintaining mobility and independence",
    },
    {
      img:"/m6.jpg",
      name: "Lisa Garcia",
      role: "Social Services Manager",
      desc: "Provides emotional support and connects residents with community resources",
    },
    {
      img:"/m2.jpg",
      name: "David Kim",
      role: "Wellness Coordinator",
      desc: "Designs holistic wellness programs promoting physical and mental health",
    },
  ];

  return (
    <section id="team" className="py-16 flex items-center  px-6">
      <div className="">
        {/* Header */}
        <motion.div
          className=" mb-12 text-center md:mb-18 lg:mb-20"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2 className="mb-5 text-5xl font-bold md:mb-6 md:text-7xl lg:text-8xl">
            Our Team
          </h2>
          <p className="md:text-md">
            Experienced professionals dedicated to providing exceptional elder care
          </p>
        </motion.div>

        {/* Team Grid */}
        <div className="grid grid-cols-1 gap-x-8 gap-y-12 items-start justify-center md:grid-cols-2 md:gap-y-16 lg:grid-cols-4">
          {teamMembers.map((member, idx) => (
            <motion.div
              key={idx}
              className="flex flex-col text-center"
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: idx * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ scale: 1.03 }}
            >
              {/* Placeholder Image */}
              <div className="relative mb-5 overflow-hidden pt-[66%] md:mb-6 md:pt-[100%] rounded-lg">
                <img
                  src={member.img}
                  alt={`${member.name} profile`}
                  className="absolute inset-0 size-full object-cover rounded-lg transition-transform object-[25%_27%]  duration-300 hover:scale-105"
                />
              </div>

              {/* Info */}
              <div className="mb-3 md:mb-4">
                <h5 className="text-md font-semibold md:text-lg">{member.name}</h5>
                <h6 className="md:text-md text-gray-600">{member.role}</h6>
              </div>
              <p className="text-sm text-gray-700">{member.desc}</p>

              {/* Socials */}
             
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
