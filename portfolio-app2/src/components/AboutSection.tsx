"use client";  
import React, { useState } from "react"; 
import Image from "next/image"; 
import TabButton from "./TabButton"; 

interface Tab { 
  title: string; 
  id: string; 
  content: JSX.Element; 
}

const TAB_DATA: Tab[] = [
  {
    title: "Skills",
    id: "skills",
    content: (
      <ul className="custom-list">
        <li>Next.js</li>
        <li>TypeScript</li>
        <li>HTML</li>
        <li>CSS</li>
        <li>Microsoft Word</li>
        <li>Microsoft Excel</li>
      </ul>
    ),
  },
  {
    title: "Education",
    id: "education",
    content: (
      <ul className="custom-list">
        <li>(MSc) in Applied Mathematics, University of Karachi</li>
        <li>(BSc) in Mathematics (Honors), University of Karachi</li>
        <li>FSc in Computer Science, Sir Syed Government Girls College</li>
      </ul>
    ),
  },
  {
    title: "Certifications",
    id: "certifications",
    content: (
      <ul className="custom-list">
        <li>Computer operator/Office Assistant</li>
        <li>Certified Cloud Applied Generative AI Engineer (GenEng).</li>
      </ul>
    ),
  },
];

const AboutSection = () => {
  const [tab, setTab] = useState<string>("skills");

  const handleTabChange = (id: string): void => {
    setTab(id);
  };

  return (
    <section className="about-section" id="about">
      <div className="about-container">
        <Image
          src="/about-image.png"
          alt="Description of the hero image"
          width={500}
          height={500}
        />
        <div className="about-content">
          <h2 className="about-title">About Me</h2>
          <p className="about-description">
            I am an aspiring full-stack web developer with a keen interest in
            building interactive, responsive web applications. Currently, I am
            honing my skills in Next.js, HTML, CSS, and TypeScript. I have a
            passion for creating clean, efficient code and always strive to
            expand my knowledge and stay up-to-date with the latest
            technologies. I am a fast learner, a team player, and excited to
            collaborate with others to develop innovative applications that
            meet both user and business needs.
          </p>
          <div className="tab-buttons">
            <TabButton
              selectTab={() => handleTabChange("skills")}
              active={tab === "skills"}
            >
              Skills
            </TabButton>
            <TabButton
              selectTab={() => handleTabChange("education")}
              active={tab === "education"}
            >
              Education
            </TabButton>
            <TabButton
              selectTab={() => handleTabChange("certifications")}
              active={tab === "certifications"}
            >
              Certifications
            </TabButton>
          </div>
          <div className="tab-content">
            {TAB_DATA.find((t) => t.id === tab)?.content}
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
