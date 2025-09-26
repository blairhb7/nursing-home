"use client";

import React from "react";

export function Layout19() {
  return (
    <section id="relume" className="px-[5%] py-16 md:py-24 lg:py-28">
      <div className="container">
        <div className="grid grid-cols-1 gap-y-12 md:grid-cols-2 md:items-center md:gap-x-12 lg:gap-x-20">
          <div>
            <p className="mb-3 font-semibold md:mb-4">Voice</p>
            <h2 className="mb-5 text-5xl font-bold md:mb-6 md:text-7xl lg:text-8xl">
              Empowering Communication Through Speech Therapy
            </h2>
            <p className="mb-5 md:mb-6 md:text-md">
              Our speech therapy services are designed to assist residents in
              overcoming communication barriers. We focus on enhancing clarity
              and confidence in every interaction.
            </p>
            <ul className="my-4 list-disc pl-5">
              <li className="my-1 self-start pl-2">
                <p>Individualized speech assessments for tailored support</p>
              </li>
              <li className="my-1 self-start pl-2">
                <p>Techniques to improve articulation and fluency</p>
              </li>
              <li className="my-1 self-start pl-2">
                <p>Support for cognitive communication challenges</p>
              </li>
            </ul>
          </div>
          <div>
            <img
              src="https://d22po4pjz3o32e.cloudfront.net/placeholder-image.svg"
              className="w-full rounded-image object-cover"
              alt="Relume placeholder image"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
