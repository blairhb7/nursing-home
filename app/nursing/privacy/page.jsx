"use client";

import React from "react";
import { motion } from "framer-motion";

export default function PrivacyPolicy() {
  const lastUpdated = new Date().toLocaleDateString();

  const sectionVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  };

  const sections = [
    {
      title: "Introduction",
      content: `At Marin Terrace Senior Living, we are committed to providing our users with exceptional service. As providing this service involves the collection, use, and disclosure of some personal information about our users, protecting their personal information is one of our highest priorities.

We will inform our users of why and how we collect, use, and disclose their personal information, obtain their consent where required, and only handle their personal information in a manner that a reasonable person would consider appropriate in the circumstances.

The Personal Information Protection Policy in compliance with PIPA, outlines the principles and practices we will follow in protecting our users’ personal information. Our privacy commitment includes ensuring the accuracy, confidentiality, and security of our users’ personal information and allowing our users to request access to, and correction of the personal information.`,
    },
    {
      title: "Definitions",
      content: `Personal Information means information about an identifiable individual. Personal information does not include contact information (described below).

Contact Information means information that would enable an individual to be contacted at a place of business and includes name, position name or title, business telephone number, business address, business email, or business fax number. Contact information is not covered by this policy or PIPA.

Privacy Officer means the individual designated responsibility for ensuring that Marin Terrace Senior Living complies with this POLICY and PIPA.`,
    },
    {
      title: "Policy I – Collecting Personal Information",
      content: `1.1: Unless the purposes for collecting personal information are obvious and the user voluntarily provides his or her personal information for those purposes, we will communicate the purposes for which personal information is being collected, either orally or in writing, before or at the time of collection.

1.2: We will only collect user information that is necessary to fulfill the following purposes:
- To verify identity;
- To identify user preferences;
- To deliver requested products and services;
- To enroll the client in a program;
- To send out association membership information;
- To ensure a high standard of service to our users;
- To meet regulatory requirements;
- To contact the user (if requested) via the information provided.`,
    },
    {
      title: "Policy II – Consent",
      content: `2.1: We will obtain user consent to collect, use, or disclose personal information (except where, as noted below, we are authorized to do so without consent).

2.2: Consent can be provided or implied where the purpose for collecting, using, or disclosing the personal information would be considered obvious and the user voluntarily provides personal information for that purpose.

2.3: Consent may also be implied where a user is given notice and a reasonable opportunity to opt out of his or her personal information being used for mail-outs, the marketing of new services or products, fundraising, and the user does not opt out.

2.4: Subject to certain exceptions, users can withhold or withdraw their consent for Marin Terrace Senior Living to use their personal information in certain ways. A user’s decision to withhold or withdraw consent may restrict our ability to provide a particular service or product. We will explain the situation to assist the user.`,
    },
    // Add more sections here as needed...
  ];

  return (
    <main className="min-h-screen bg-gray-50 text-gray-900 py-16 px-6 md:px-20 lg:px-40">
      {/* Page Header */}
      <motion.header
        initial={{ opacity: 0, y: 18 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="max-w-3xl mx-auto text-center mb-16"
      >
        <h1 className="text-3xl md:text-4xl font-bold mb-2 text-gray-800">
          MARIN TERRACE SENIOR LIVING
        </h1>
        <p className="text-sm text-gray-600">Personal Information Protection Policy</p>
        <p className="text-xs text-gray-500 mt-1">Last updated: {lastUpdated}</p>
      </motion.header>

      {/* Sections */}
      <div className="space-y-10 max-w-3xl mx-auto">
        {sections.map((section, index) => (
          <motion.section
            key={index}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={sectionVariants}
            transition={{ duration: 0.6, delay: index * 0.15 }}
            className="bg-white rounded-xl shadow-lg p-6 md:p-10"
          >
            <h2 className="text-xl md:text-2xl font-semibold mb-3">{section.title}</h2>
            <p className="whitespace-pre-line text-gray-700 leading-relaxed">{section.content}</p>
          </motion.section>
        ))}
      </div>

      {/* Contact Box */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, delay: 0.6 }}
        className="max-w-3xl mx-auto mt-16 bg-teal-50 border-l-4 border-teal-500 p-6 rounded-lg shadow-md"
      >
        <h3 className="text-lg font-semibold mb-2">Contact Privacy Officer</h3>
        <p>
          If you wish to request access to or correction of your personal information, or have any questions about this policy, please contact our Privacy Officer:
        </p>
        <p className="mt-2">
          <strong>Privacy Officer</strong><br />
          Marin Terrace Senior Living<br />
          Email: <a href="mailto:privacy@marinterrace.com" className="text-teal-600 hover:underline">privacy@marinterrace.com</a>
        </p>
      </motion.div>

      {/* Note */}
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, delay: 0.75 }}
        className="max-w-3xl mx-auto mt-10 text-sm text-gray-500 italic"
      >
        Note: This policy is provided for informational purposes and is not legal advice. For legal guidance on privacy compliance, consult a qualified attorney.
      </motion.div>
    </main>
  );
}
