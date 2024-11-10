"use client";
import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";

interface Achievement {
  prefix?: string;
  metric: string;
  value: string;
  postfix?: string;
}

const achievementsList: Achievement[] = [
  { metric: "Projects", value: "10", postfix: "+" },
  { prefix: "~", metric: "Users", value: "1000" },
  { metric: "Awards", value: "2" },
  { metric: "Years", value: "2" },
];

const AnimatedNumber: React.FC<{ value: number }> = ({ value }) => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    let current = 0;
    const step = Math.max(1, Math.ceil(value / 100)); // Calculate the increment step
    const interval = setInterval(() => {
      current += step;
      if (current >= value) {
        setCount(value);
        clearInterval(interval);
      } else {
        setCount(current);
      }
    }, 10); // Adjust the interval time as needed for smooth animation

    return () => clearInterval(interval);
  }, [value]);

  return (
    <motion.span
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      {count}
    </motion.span>
  );
};

const AchievementsSection: React.FC = () => {
  return (
    <div className="achievements-section">
      <div className="achievements-container">
        {achievementsList.map((achievement, index) => {
          const numericValue = parseInt(achievement.value.replace(",", ""), 10);

          return (
            <div key={index} className="achievement">
              <h2 className="achievement-value">
                {achievement.prefix}
                <AnimatedNumber value={numericValue} />
                {achievement.postfix}
              </h2>
              <p className="achievement-metric">{achievement.metric}</p>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default AchievementsSection;
