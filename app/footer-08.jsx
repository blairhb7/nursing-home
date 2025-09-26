"use client";

import { useState } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";

export default function Footer8() {
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState("");
  const [type, setType] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch("https://formspree.io/f/FORM_ENDPOINT", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email }),
      });

      if (response.ok) {
        setStatus("✅ Thanks for subscribing!");
        setType("success");
        setEmail("");
      } else {
        setStatus("❌ Something went wrong. Please try again.");
        setType("error");
      }
    } catch {
      setStatus("❌ Network error. Please try again later.");
      setType("error");
    }
  };

  return (
    <footer className="relative overflow-hidden text-white py-16">
      {/* 🔥 Animated Gradient Background */}
      <motion.div
        className="absolute inset-0"
        initial={{ backgroundPosition: "0% 50%" }}
        animate={{ backgroundPosition: "100% 50%" }}
        transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
        style={{
          background:
            "linear-gradient(270deg, #1D3038, #243b55, #141E30, #1D3038)",
          backgroundSize: "400% 400%",
        }}
      />
      <div className="absolute inset-0 bg-black/50" />

      {/* Main Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 md:px-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 pb-12 border-b border-gray-600/50">
          {/* Brand */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <a href="/" className="inline-block">
              <img src="/logo.png" alt="Logo" className="h-12 mb-4" />
            </a>
            <p className="text-gray-300 text-sm leading-relaxed">
              Caring for our community with compassion and respect. Join our
              journey and stay connected.
            </p>
          </motion.div>

          {/* Navigation */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.1 }}
            viewport={{ once: true }}
          >
            <h3 className="font-semibold text-lg mb-4">Quick Links</h3>
            <ul className="space-y-3 text-gray-300">
              <li><Link href="/" className="hover:text-[#3B6170] transition">Home</Link></li>
              <li><Link href="/nursing/amenities" className="hover:text-[#3B6170] transition">Amenities</Link></li>
              <li><Link href="/nursing/services" className="hover:text-[#3B6170] transition">Services</Link></li>
              <li><Link href="/nursing/about-us" className="hover:text-[#3B6170] transition">About Us</Link></li>
              <li><Link href="/nursing/gallery" className="hover:text-[#3B6170] transition">Gallery</Link></li>
              <li><Link href="/nursing/contact-us" className="hover:text-[#3B6170] transition">Contact</Link></li>
            </ul>
          </motion.div>

          {/* Newsletter */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <h3 className="font-semibold text-lg mb-4">Join Our Newsletter</h3>
            <form
              onSubmit={handleSubmit}
              className="flex flex-col sm:flex-row gap-3 mb-4"
            >
              <input
                type="email"
                placeholder="Enter your email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                className="px-4 py-3 rounded-md flex-1 bg-gray-800 text-white placeholder-gray-400 border border-gray-600 focus:outline-none focus:ring-2 focus:ring-teal-500"
              />
              <motion.button
                type="submit"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="bg-gradient-to-r from-[#B5D7D4] to-[#3B6170] px-6 py-3 rounded-md font-semibold shadow-lg hover:opacity-90 transition"
              >
                Subscribe
              </motion.button>
            </form>

            {/* Status Banner */}
            <AnimatePresence>
              {status && (
                <motion.div
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  transition={{ duration: 0.3 }}
                  className={`p-3 rounded-md text-sm font-medium ${
                    type === "success"
                      ? "bg-green-600 text-white"
                      : "bg-red-600 text-white"
                  }`}
                >
                  {status}
                </motion.div>
              )}
            </AnimatePresence>
            <p className="text-xs text-gray-400 mt-2">
              By subscribing you agree to our{" "}
              <a href="/privacy" className="underline hover:text-white">
                privacy policy
              </a>.
            </p>
          </motion.div>
        </div>

        {/* Bottom Section */}
        <div className="flex flex-col md:flex-row justify-between items-center pt-6 text-sm text-gray-400 gap-4 md:gap-0">
          <ul className="flex flex-wrap gap-6">
            <li><Link href="/nursing/privacy" className="hover:text-white transition">Privacy Policy</Link></li>
            <li><a href="/terms" className="hover:text-white transition">Terms of Service</a></li>
            <li><a href="/cookies" className="hover:text-white transition">Cookies</a></li>
          </ul>
          <p>© {new Date().getFullYear()} Marin Terrace. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
