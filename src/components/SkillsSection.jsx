import { useEffect, useRef, useState, useCallback } from "react";
import { cn } from "@/lib/utils";
import { motion } from "framer-motion";


const skills =[
    {name: "CSS", level: "Advanced", category: "Frontend", logo: "/images/brands/css.svg"},
    {name: "HTML", level: "Advanced", category: "Frontend", logo: "/images/brands/html5-plain.svg"},
    {name: "React", level: "Advanced", category: "Frontend", logo: "/images/brands/react.svg"},
    {name: "Tailwind CSS", level: "Advanced", category: "Frontend", logo: "/images/brands/tcss.svg"},
    {name: "JavaScript", level: "Advanced", category: "Frontend", logo: "/images/brands/js.svg"},

    {name: "Node.js", level: "Advanced", category: "Backend", logo: "/images/brands/nodejs.svg"},
    {name: ".NET", level: "Advanced", category: "Backend", logo: "/images/brands/dotnet.svg"},
    {name: "Java", level: "Advanced", category: "Backend", logo: "/images/brands/java.svg"},
    {name: "REST APIs", level: "Advanced", category: "Backend"},
    {name: "SignalR", level: "Medium", category: "Backend"},
    {name: "MCP", level: "Medium", category: "Backend"},

    {name: "SQL", level: "Advanced", category: "Database", logo: "/images/brands/sql.svg"},
    {name: "MongoDB", level: "Medium", category: "Database", logo: "/images/brands/mdb.svg"},
    {name: "Pandas", level: "Medium", category: "Data", logo: "/images/brands/pandas.svg"},

    {name: "PowerShell", level: "Advanced", category: "Systems", logo: "/images/brands/ps.svg"},
    {name: "Linux", level: "Medium", category: "Systems", logo: "/images/brands/linux.svg"},

    {name: "GitHub", level: "Advanced", category: "Tools", logo: "/images/brands/github.svg"},
    {name: "Git", level: "Advanced", category: "Tools", logo: "/images/brands/git.svg"},
    {name: "Figma", level: "Medium", category: "Tools", logo: "/images/brands/figma.svg"},

    {name: "AWS", level: "Medium", category: "Cloud", logo: "/images/brands/aws.svg"},
    {name: "Google Cloud", level: "Medium", category: "Cloud", logo: "/images/brands/googlecloud.svg"},
    {name: "Docker", level: "Medium", category: "DevOps", logo: "/images/brands/docker.svg"},
    {name: "Kubernetes", level: "Medium", category: "DevOps", logo: "/images/brands/kubernetes.svg"},
    {name: "Jenkins", level: "Medium", category: "DevOps", logo: "/images/brands/jenkins.svg"},

    /*hacer uno de estos por cada skill*/
];

const categories = ["all", "Frontend", "Backend", "Tools", "DevOps", "Cloud", "Systems", "Data", "Database"];

const CoolMarquee = ({ children }) => {
  return (
    <div className="overflow-hidden">
      <motion.div
        className="flex gap-6"
        animate={{ x: ["0%", "-50%"] }}
        transition={{
          duration: 20,       // velocidad
          ease: "linear",     // movimiento constante
          repeat: Infinity,   // bucle infinito
          repeatType: "loop", // cuando termina, vuelve a empezar
        }}
      >
        {Array.from({ length: 10 }).map((_, i) => (
            <div key={i} className="flex gap-6">
                {children}
            </div>
        ))}

         {/* duplicamos para efecto infinito */}
      </motion.div>
      
    </div>
  );
};

export const SkillsSection = () => {
    const [activeCategory, setActiveCategory] = useState("all");
    const filteredSkills = skills.filter((skill) => activeCategory === "all" || skill.category === activeCategory);

    return (
        <section id = "skills" className="py-24 px-4 relative bg-secondary/30">
            <div className="container mx-auto max-w-5xl">
                <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
                    My <span className="text-primary"> Skills</span>
                </h2>

                <div className="flex flex-wrap justify-center gap-4 mb-12">
                    {categories.map((category, key) => (
                        <button key={key} onClick={() => setActiveCategory(category)} className={cn("px-5 py-2 rounded-full transition-colors duration-300 capitalize",
                            activeCategory === category ? "bg-primary text-primary-foreground" : "bg-secondary/70 text-foreground hover:bd-secondary"
                        )}>
                            {category}
                        </button>
                    ))}
                </div>

                <CoolMarquee>
                    {filteredSkills.map((skill, key) => (
                        <div
                        key={key}
                        className="min-w-[220px] bg-card p-6 rounded-lg shadow-xs card-hover"
                        >
                        <div className="flex items-center gap-3 mb-4">
                            {skill.logo && (
                            <img
                                src={skill.logo}
                                alt={skill.name}
                                className="h-6 w-6 object-contain dark:invert"
                                loading="lazy"
                                draggable={false}
                            />
                            )}

                            <h3 className="font-semibold text-lg">{skill.name}</h3>
                        </div>

                        <div className="w-full bg-secondary/50 h-2 rounded-full overflow-hidden">
                            <div
                            className="bg-primary h-2 rounded-full origin-left animate-[grow_1.5s_ease-out]"
                            style={{
                                width:
                                skill.level === "Advanced"
                                    ? "100%"
                                    : skill.level === "Medium"
                                    ? "50%"
                                    : "10%",
                            }}
                            />
                        </div>

                        <div className="text-right mt-1">
                            <span className="text-sm text-muted-foreground">{skill.level}</span>
                        </div>
                        </div>
                    ))}
                </CoolMarquee>
            </div>
        </section>
    );
};