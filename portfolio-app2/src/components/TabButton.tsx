import React from "react";
import { motion } from "framer-motion";

// Define types for props
interface TabButtonProps {
  active: boolean;
  selectTab: () => void;
  children: React.ReactNode;
}

const variants = {
  default: { width: 0 },
  active: { width: "calc(100% - 0.75rem)" },
};

const TabButton: React.FC<TabButtonProps> = ({ active, selectTab, children }) => {
  const buttonClasses = active ? "active" : "inactive";

  return (
    <button onClick={selectTab}>
      <p className={`tab-text ${buttonClasses}`}>{children}</p>
      <motion.div
        animate={active ? "active" : "default"}
        variants={variants}
        className="tab-indicator"
      ></motion.div>
    </button>
  );
};

export default TabButton;
