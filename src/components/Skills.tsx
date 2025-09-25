"use client";

import { motion } from "framer-motion";

type Skill = {
  name: string;
  level: number;
  icon: string;
};

const skills: Skill[] = [
  { name: "JavaScript", level: 90, icon: "javascript" },
  { name: "TypeScript", level: 85, icon: "typescript" },
  { name: "React", level: 85, icon: "react" },
  { name: "Next.js", level: 80, icon: "nextjs" },
  { name: "Node.js", level: 75, icon: "nodejs" },
  { name: "Python", level: 70, icon: "python" },
  { name: "HTML5", level: 90, icon: "html5" },
  { name: "CSS3", level: 85, icon: "css3" },
  { name: "Tailwind CSS", level: 85, icon: "tailwind" },
  { name: "Git", level: 80, icon: "git" },
  { name: "Docker", level: 70, icon: "docker" },
  { name: "SQL", level: 75, icon: "database" },
];

export default function Skills() {
  return (
    <section
      id="skills"
      className="min-h-screen flex items-center justify-center bg-gradient-to-br from-muted/20 to-primary/5 py-20 px-4"
    >
      <div className="w-full max-w-6xl mx-auto">
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-center mb-12 text-gray-800 dark:text-white">
          My <span className="text-primary">Skills</span>
        </h2>
        
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {skills.map((skill, index) => (
            <motion.div
              key={skill.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300"
            >
              <div className="flex items-center justify-between mb-2">
                <span className="text-lg font-medium text-gray-800 dark:text-gray-200">
                  {skill.name}
                </span>
                <span className="text-sm font-medium text-primary">
                  {skill.level}%
                </span>
              </div>
              <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2.5">
                <motion.div
                  className="h-full bg-gradient-to-r from-blue-500 to-purple-600 rounded-full"
                  initial={{ width: 0 }}
                  whileInView={{ width: `${skill.level}%` }}
                  viewport={{ once: true }}
                  transition={{ duration: 1, delay: 0.5 + index * 0.05 }}
                />
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
