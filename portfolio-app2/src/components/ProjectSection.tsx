"use client";
import React, { useState, useRef } from "react";
import { motion, useInView } from "framer-motion";
import ProjectCard from "./ProjectCard";
import ProjectTag from "./ProjectTag";


// Define types for project data
interface Project {
  id: number;
  title: string;
  description: string;
  image: string;
  tag: string[];
  gitUrl: string;
  previewUrl: string;
}

const projectsData: Project[] = [
  {
    id: 1,
    title: "Dynamic Resume Builder",
    description: "A web app to create and download customized resumes with a live preview.",
    image: "/Project11.jpg",
    tag: ["All", "Web"],
    gitUrl: "https://github.com/RubiAbid/hackathon1/tree/main/milestone4",
    previewUrl: "https://milestone4-dusky.vercel.app/",
  },
  {
    id: 2,
    title: "Restaurant Website",
    description: "A responsive website showcasing a restaurant's menu and services",
    image: "foodapp.png",
    tag: ["All", "Web"],
    gitUrl: "/",
    previewUrl: "/",
  },
  {
    id: 3,
    title: "Word Counter",
    description: "A tool to count words and characters in a given text.",
    image: "/counter-tool.png",
    tag: ["All", "TS Projects"],
    gitUrl: "https://github.com/RubiAbid/word-counter",
    previewUrl: "/",
  },
  {
    id: 4,
    title: "Student Management System",
    description: "An app to manage student records, grades, and attendance.",
    image: "/StudentSys.png",
    tag: ["All", "TS Projects"],
    gitUrl: "https://github.com/RubiAbid/student-management-system",
    previewUrl: "/",
  },
  {
    id: 5,
    title: "ATM Machine",
    description: "A simulation of an ATM with features like balance check, withdrawal, and transfers.",
    image: "/atm.jpg",
    tag: ["All", "TS Projects"],
    gitUrl: "https://github.com/RubiAbid/ATM-machine",
    previewUrl: "/",
  },
  {
    id: 6,
    title: "TODO List",
    description: "A to-do list app to add, edit, and organize tasks.",
    image: "/todolist.png",
    tag: ["All", "TS Projects"],
    gitUrl: "https://github.com/RubiAbid/todo-list",
    previewUrl: "", 
  },
];

const ProjectsSection: React.FC = () => {
  const [tag, setTag] = useState<string>("All");
  const ref = useRef<HTMLUListElement | null>(null);
  const isInView = useInView(ref, { once: true });

  const handleTagChange = (newTag: string) => {
    setTag(newTag);
  };

  // Modify the filteredProjects to include "TS Projects"
  const filteredProjects = projectsData.filter((project) =>
    tag === "All" || project.tag.includes(tag)
  );

  const cardVariants = {
    initial: { y: 50, opacity: 0 },
    animate: { y: 0, opacity: 1 },
  };

  return (
    <section id="projects" className="projects-section">
      <h2 className="section-title">
        My Projects
      </h2>
      <div className="tag-container">
        <ProjectTag
          onClick={handleTagChange}
          name="All"
          isSelected={tag === "All"}
        />
        <ProjectTag
          onClick={handleTagChange}
          name="Web"
          isSelected={tag === "Web"}
        />
        <ProjectTag
          onClick={handleTagChange}
          name="TS Projects"
          isSelected={tag === "TS Projects"}
        />
      </div>
      <ul ref={ref} className="projects-list">
        {filteredProjects.map((project, index) => (
          <motion.li
            key={project.id}
            variants={cardVariants}
            initial="initial"
            animate={isInView ? "animate" : "initial"}
            transition={{ duration: 0.3, delay: index * 0.4 }}
          >
            <ProjectCard
              title={project.title}
              description={project.description}
              imgUrl={project.image}
              gitUrl={project.gitUrl}
              previewUrl={project.previewUrl}
            />
          </motion.li>
        ))}
      </ul>
    </section>
  );
};

export default ProjectsSection;
