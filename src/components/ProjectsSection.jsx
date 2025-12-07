import { ArrowRight, ExternalLinkIcon, Github } from "lucide-react";


const projects = [
    {
        id: 1,
        title: "Project One",
        description: "Description for project one.",
        Image: "../projects/Prueba1.png",
        tags: ["React", "JavaScript"],
        demoUrl: "#",
        githubUrl: "#"
    }, {
        id: 2,
        title: "Project two",
        description: "Description for project two.",
        Image: "../projects/Prueba2.png",
        tags: ["React", "JavaScript"],
        demoUrl: "#",
        githubUrl: "#"
    }, {
        id: 3,
        title: "Project three",
        description: "Description for project three.",
        Image: "../projects/Prueba3.png",
        tags: ["React", "JavaScript"],
        demoUrl: "#",
        githubUrl: "#"
    }
]


export const ProjectsSection = () => {
    return <section id="projects" className="py-24 px-4 relative">
        <div className="container mx-auto max-w-5xl">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center"> Featured <span className="text-primary"> Projects</span></h2>
            <p className="text-center text.muted-foreground mb-12 max-w-2xl mx-auto">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                sed do eiusmod tempor incididunt ut labore et dolore magna
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
