import React from "react";

// Define types for the component props
interface ProjectTagProps {
  name: string;
  onClick: (name: string) => void;
  isSelected: boolean;
}

const ProjectTag: React.FC<ProjectTagProps> = ({ name, onClick, isSelected }) => {
  const buttonStyles = isSelected
    ? "selected"
    : "unselected";

  return (
    <button
      className={`project-tag ${buttonStyles}`}
      onClick={() => onClick(name)}
    >
      {name}
    </button>
  );
};

export default ProjectTag;
