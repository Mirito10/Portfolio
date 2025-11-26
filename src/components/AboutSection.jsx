import { Bot, TextSearch, Cloud } from "lucide-react";

export const AboutSection = () => {
    return (
       <section id="about" className="py-24 px-4 relative">
            {" "}
            <div className="container mx-auto max-w-5xl">
                <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
                    About <span className="text-primary"> Me</span>
                </h2>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
                    <div className="space-y-6">
                        <h3 className="text-2xl font-semibold">
                            Computer Engineering Student & Cloud Enthusiast
                        </h3>

                        <p className="text-muted-foreground">
                             I am a Computer Systems Engineering student at Universidad Latina de Costa Rica, 
                             with a strong focus on Cloud Computing and modern software solutions. I am passionate 
                             about designing, building, and optimizing scalable systems using cloud-based 
                             technologies.
                        </p>

                        <p className="text-muted-foreground">
                            My main area of interest is Cloud Computing, complemented by secondary interests 
                            in Artificial Intelligence and Data Analysis. I am currently earning certifications 
                            in AWS and Google Cloud, and I already hold several cloud-related certifications, 
                            strengthening both my theoretical knowledge and practical skills.
                        </p>

                        <div className="flex flex-col sm:flex-row gap-4 pt-4 justify-center">

                            <a href="#contact" className="cosmic-button">
                                Get in Touch
                            </a>
                            <a href="/projects/Resume/CV_Mathias_Calderon.pdf" target="_blank" rel="noopener noreferrer" className="px-6 py-2 rounded-full border border-primary text-primary hover:bg-primay/10 transition-colors duration-300">
                                Resume
                            </a>

                        </div>
                    </div>

                    <div className="grid grid-cols-1 gap-6">
                        <div className="gradient-border p-6 card-hover">
                            <div className="flex items-start gap-4">
                                <div className="p-3 rounded-full bg-primary/10">
                                    <Cloud className="h-6 w-6 text-primary"/>
                                </div>
                                <div className="text-left">
                                    <h4 className="font-semibold text-lg">
                                        Cloud Computing
                                    </h4>
                                    <p className="text-muted-foreground">
                                        Building and managing scalable cloud solutions using platforms like AWS and 
                                        Google Cloud, with a focus on best practices and security.
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div className="gradient-border p-6 card-hover">
                            <div className="flex items-start gap-4">
                                <div className="p-3 rounded-full bg-primary/10">
                                    <Bot className="h-6 w-6 text-primary"/>
                                </div>
                                <div className="text-left">
                                    <h4 className="font-semibold text-lg">
                                        Artificial Intelligence
                                    </h4>
                                    <p className="text-muted-foreground">
                                        Exploring machine learning and AI concepts to create smarter applications and 
                                        data-driven solutions.
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div className="gradient-border p-6 card-hover">
                            <div className="flex items-start gap-4">
                                <div className="p-3 rounded-full bg-primary/10">
                                    <TextSearch className="h-6 w-6 text-primary"/>
                                </div>
                                <div className="text-left">
                                    <h4 className="font-semibold text-lg">
                                        Data Analysis
                                    </h4>
                                    <p className="text-muted-foreground">
                                        Analyzing and interpreting data to extract insights that support decision-making 
                                        and improve system performance.
                                    </p>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>
            </div>
        </section> 
    )
}