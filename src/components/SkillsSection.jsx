import { use, useState } from "react";
import { cn } from "@/lib/utils";


const skills =[
    {name: "HTML/CSS", level: "Advanced", category: "Frontend"},
    {name: "React", level: "Advanced", category: "Frontend"},
    {name: "Tailwind CSS", level: "Advanced", category: "Frontend"},
    {name: "JavaScript", level: "Advanced", category: "Frontend"},

    {name: "Node.js", level: "Advanced", category: "Backend"},
    {name: ".NET", level: "Advanced", category: "Backend"},
    {name: "Java", level: "Advanced", category: "Backend"},
    {name: "REST APIs", level: "Advanced", category: "Backend"},
    {name: "SignalR", level: "Medium", category: "Backend"},
    {name: "MCP", level: "Medium", category: "Backend"},

    {name: "SQL", level: "Advanced", category: "Database"},
    {name: "MongoDB", level: "Medium", category: "Database"},
    {name: "Stored Procedures", level: "Advanced", category: "Database"},
    {name: "Pandas", level: "Medium", category: "Data"},

    {name: "Windows PowerShell", level: "Advanced", category: "Systems"},
    {name: "Linux", level: "Medium", category: "Systems"},

    {name: "Git/GitHub", level: "Advanced", category: "Tools"},
    {name: "Figma", level: "Medium", category: "Tools"},
    {name: "VS Code", level: "Advanced", category: "Tools"},

    {name: "AWS", level: "Medium", category: "Cloud"},
    {name: "Google Cloud Platform", level: "Medium", category: "Cloud"},
    {name: "Docker", level: "Medium", category: "DevOps"},
    {name: "Kubernetes", level: "Medium", category: "DevOps"},
    {name: "Jenkins", level: "Medium", category: "DevOps"},

    /*hacer uno de estos por cada skill*/
];

const categories = ["all", "Frontend", "Backend", "Tools", "DevOps", "Cloud", "Systems", "Data", "Database"];

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

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                    {filteredSkills.map((skill, key) => (
                        <div key={key} className="bg-card p-6 rounded-lg shadow-xs card-hover">
                            <div className="text-left mb-4">
                                <h3 className="font-semibold text-lg">{skill.name}</h3>
                            </div>
                            <div className="w-full bg-secondary/50 h-2 rounded-full overflow-hidden">
                                <div className="bg-primary h-2 rounded-full origin-left animate-[grow_1.5s_ease-out]"
                                style={{ width: skill.level === "Advanced" ? "100%" : skill.level === "Medium" ? "50%" : "10%" }}/>

                            </div>
                            <div className="text-right mt-1">
                                <span className="text-sm text-muted-foreground">{skill.level}</span>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};