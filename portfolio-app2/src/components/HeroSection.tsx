"use client";

import React from "react";
import Image from "next/image";
import { TypeAnimation } from "react-type-animation";
import { motion } from "framer-motion";
import Link from "next/link";

const HeroSection = () => {
  return (
    <section className="hero-section">
      <div className="hero-grid">
        <motion.div
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
          className="hero-text"
        >
          <h1 className="hero-heading">
            <span>Hello, I&apos;m</span>
            <br />
            <TypeAnimation
              sequence={["Rubi", 1000, "Web Developer", 1000, "Teacher", 1000]}
              wrapper="span"
              speed={50}
              repeat={Infinity}
            />
          </h1>

          <p className="hero-description">
            A passionate full-stack web developer currently exploring new technologies
            and creating engaging digital experiences.
          </p>

          <div className="hero-links">
            <Link href="/#contact" className="hire-me-btn">
              Hire Me
            </Link>

            <Link
              href="/CV.pdf" // Ensure the correct path to your CV
              download="Rubi_Abid_CV.pdf" // Optional: specify the download filename
              className="download-cv-btn"
            >
              <span className="cv-btn-text">Download CV</span>
            </Link>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
          className="hero-image-wrapper"
        >
          <div className="hero-image-container">
            <Image
              src="/profile.jpg"
              alt="hero image"
              className="hero-image"
              width={200}
              height={200}
            />
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;
