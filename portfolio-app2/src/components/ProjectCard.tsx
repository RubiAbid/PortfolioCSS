import React from "react";
import { CodeBracketIcon, EyeIcon } from "@heroicons/react/24/outline";
import Link from "next/link";

// Define types for the component props
interface ProjectCardProps {
  imgUrl: string;
  title: string;
  description: string;
  gitUrl: string;
  previewUrl: string;
}

const ProjectCard: React.FC<ProjectCardProps> = ({ imgUrl, title, description, gitUrl, previewUrl }) => {
  return (
    <div className="project-card">
      <div
        className="project-image"
        style={{ background: `url(${imgUrl})`, backgroundSize: "cover" }}
      >
        <div className="overlay">
          <Link href={gitUrl} className="icon-link">
            <CodeBracketIcon className="icon" />
          </Link>
          <Link href={previewUrl} className="icon-link">
            <EyeIcon className="icon" />
          </Link>
        </div>
      </div>
      <div className="card-content">
        <h5 className="card-title">{title}</h5>
        <p className="card-description">{description}</p>
      </div>
    </div>
  );
};

export default ProjectCard;
