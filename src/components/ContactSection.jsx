"use client";

import emailjs from "emailjs-com";
import { motion } from "framer-motion";
import React, { useState } from "react";
import { FaFacebookSquare, FaGithubSquare, FaLinkedin } from "react-icons/fa";
import { MdEmail, MdPhone } from "react-icons/md";
import Button from "./Button";

export default function ContactSection({ isActive }: { isActive: boolean }) {
  const [loading, setLoading] = useState(false);
  const [messageSent, setMessageSent] = useState(false);

  const sendMail = (e) => {
    e.preventDefault();
    setLoading(true);

    emailjs
      .sendForm(
        "service_3fhkoyk",
        "template_gdysp3j",
        e.target,
        "sloMNWS4vvxz1ra5Y"
      )
      .then(
        () => {
          setMessageSent(true);
          setLoading(false);
          e.target.reset();
          setTimeout(() => setMessageSent(false), 3000);
        },
        (error) => {
          alert("Failed to send message. Please try again later.");
          console.error("EmailJS Error:", error);
          setLoading(false);
        }
      );
  };
  const inputVariants = {
    hover: {
      scale: 1.02,
      boxShadow: "0 0 8px rgba(255, 255, 255, 0.3)",
      transition: {
        duration: 0.3,
      },
    },
  };

  return (
    <motion.section
      id="contact"
      className="min-h-screen h-screen flex items-center justify-center bg-gradient-to-br from-[#6D28D9] via-[#4C1D95] to-[#1E40AF] text-white px-4 py-16 overflow-y-auto hide-scrollbar"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      <div className="container mx-auto h-full">
        <motion.h2
          className="text-4xl font-bold text-center mb-12"
          initial={{ y: -50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.6, type: "spring", stiffness: 100 }}
        >
          Get in Touch
        </motion.h2>

        <div className="grid lg:grid-cols-2 gap-12 h-full">
          {/* Contact Info */}
          <motion.div
            className="space-y-8 bg-white/10 backdrop-blur-lg rounded-3xl p-8 shadow-xl h-full"
            initial={{ x: -50, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.6, ease: "easeInOut" }}
          >
            <h3 className="text-3xl font-semibold">
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-pink-500 via-yellow-300 to-cyan-500">
                Ash Sams Md Tanvir Jahan
              </span>
            </h3>
            <p className="text-xl text-gray-300">Front-End Developer</p>
            <p className="text-gray-300">
              I am available for freelance work. Connect with me via phone or
              email.
            </p>
            <div className="space-y-4 mt-8">
              <motion.div
                className="flex items-center space-x-4"
                whileHover={{ scale: 1.05 }}
              >
                <MdPhone className="text-3xl text-pink-500" />
                <p className="text-lg">+8801705536373</p>
              </motion.div>
              <motion.div
                className="flex items-center space-x-4"
                whileHover={{ scale: 1.05 }}
              >
                <MdEmail className="text-3xl text-pink-500" />
                <p className="text-lg">tanvirjahan98@gmail.com</p>
              </motion.div>
            </div>

            <div className="flex space-x-4 mt-8">
              <motion.a
                href="https://www.facebook.com/profile.php?id=100014181528018"
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.2, rotate: 5 }}
                whileTap={{ scale: 0.9 }}
              >
                <FaFacebookSquare className="h-6 w-6" />
              </motion.a>
              <motion.a
                href="https://www.linkedin.com/in/ash-sams-md-tanvir-jahan-9884081b4/"
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.2, rotate: 5 }}
                whileTap={{ scale: 0.9 }}
              >
                <FaLinkedin className="h-6 w-6" />
              </motion.a>
              <motion.a
                href="https://github.com/TanvirJahan001"
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.2, rotate: 5 }}
                whileTap={{ scale: 0.9 }}
              >
                <FaGithubSquare className="h-6 w-6" />
              </motion.a>
            </div>
          </motion.div>

          {/* Contact Form */}
          <motion.div
            className="bg-white/10 backdrop-blur-lg rounded-3xl p-8 shadow-xl h-full"
            initial={{ x: 50, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.6, ease: "easeInOut" }}
          >
            <form onSubmit={sendMail} className="space-y-6">
              <div className="space-y-4">
                <motion.input
                  type="text"
                  name="from_name"
                  placeholder="Your Name"
                  required
                  className="w-full p-3 rounded-lg bg-white/10 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-pink-500"
                  variants={inputVariants}
                  whileHover="hover"
                />
                <motion.input
                  type="tel"
                  name="from_phone"
                  placeholder="Phone Number"
                  className="w-full p-3 rounded-lg bg-white/10 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-pink-500"
                  variants={inputVariants}
                  whileHover="hover"
                />
                <motion.input
                  type="email"
                  name="from_email"
                  placeholder="Your Email"
                  required
                  className="w-full p-3 rounded-lg bg-white/10 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-pink-500"
                  variants={inputVariants}
                  whileHover="hover"
                />
                <motion.textarea
                  name="message"
                  rows={4}
                  placeholder="Your Message"
                  required
                  className="w-full p-3 rounded-lg bg-white/10 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-pink-500"
                  variants={inputVariants}
                  whileHover="hover"
                />
              </div>
              <Button type="submit" disabled={loading}>
                {loading ? "Sending..." : "Send Message"}
              </Button>
              {messageSent && (
                <motion.p
                  className="text-green-500 mt-4 text-center"
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.3 }}
                >
                  Message sent successfully!
                </motion.p>
              )}
            </form>
          </motion.div>
        </div>
      </div>
    </motion.section>
  );
}
