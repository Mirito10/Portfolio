import { ArrowRight, ExternalLinkIcon, Github } from "lucide-react";


const projects = [
    {
        id: 1,
        title: "AI Gym Plannes",
        description: "An AI-powered fitness web application that generates personalized workout plans based on each user’s profile.",
        Image: "../public/images/projects/AIGymPlanner.png",
        tags: ["AI", "Health Tech", "Typescript", "Vite", "NodeJS", "PostgreSQL", "SaaS"],
        demoUrl: "https://ai-gym-planner-two.vercel.app/",
        githubUrl: "https://github.com/Mirito10/AIGymPlanner.git"
    }
]


export const ProjectsSection = () => {
    return <section id="projects" className="py-24 px-4 relative">
        <div className="container mx-auto max-w-5xl">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center"> Featured <span className="text-primary"> Projects</span></h2>
            <p className="text-center text.muted-foreground mb-12 max-w-2xl mx-auto"> 
                Here are some of the projects I've worked on recently. Click on the links to see more details and demos.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">

                {projects.map((projects, key) => (

                    <div key={key} className="group bg-card rounded-lg shadow-xs overflow-hidden card-hover">

                        <div className="h-48 overflow-hidden">
                            <img src={projects.Image} alt={projects.title} className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"/>
                        </div>

                        <div className="p-6">
                            <div className="flex flex-wrap gap-2 mb-4">
                                {projects.tags.map((tag) => (
                                    <span className="px-2 py-1 text-xs font-medium border rounded-full bg-secondary text-secondary-foreground">
                                        {tag}
                                    </span>
                                ))}
                            </div>

                            <h3 className="text-xl font-semibold mb-1"> {projects.title} </h3>
                            <p className="text-muted-foreground text-sm mb-4"> {projects.description} </p>

                            <div className="flex justify-between items-center">
                                <div className="flex space-x-3">
                                    <a href={projects.demoUrl} target="_blank" rel="noopener noreferrer" className="text-foreground/80 hover:text-primary transition-colors duration-300">
                                        <ExternalLinkIcon className="w-5 h-5 hover:text-primary/80" size={20}/>
                                    </a>
                                    <a href={projects.githubUrl} target="_blank" rel="noopener noreferrer" className="text-foreground/80 hover:text-primary transition-colors duration-300">
                                        <Github className="w-5 h-5 hover:text-primary/80" size={20}/>
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                ))}
            </div>

            <div className="text-center mt-12">
                <a className="cosmic-button w-fit flex items-center mx-auto gap-2" href="https://github.com/Mirito10" target="_blank" rel="noopener noreferrer">
                    Check my Github <ArrowRight size={16}/>
                </a>
            </div>

        </div>
    </section>
}
