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
                            Computer Engineering Student | Cloud, Data & AI Builder
                        </h3>

                        <p className="text-muted-foreground">
                            I work across modern technology stacks, with a strong focus on cloud computing and cybersecurity. 
                            I design and build scalable applications, APIs, and cloud ready solutions while applying a security first mindset to ensure reliability and resilience.
                            For me, technology goes beyond writing code, it is about engineering systems that are efficient, secure, and capable of solving real-world problems.
                        </p>

                        <p className="text-muted-foreground">
                            Outside of technology, I build discipline and creativity through the gym and long-distance running, 
                            and I constantly explore new ideas through reading and hands-on experimentation. I am particularly interested in how systems
                            integrate design, logic, and performance to create meaningful experiences.
                            This mindset drives how I approach engineering: with curiosity, structure, and a focus on continuous improvement.
                        </p>

                        <div className="flex flex-col sm:flex-row gap-4 pt-4 justify-center">

                            <a href="#contact" className="cosmic-button">
                                Get in Touch
                            </a>
                            <a href="/projects/Resume/CVMathiasJoseCalderonVasquez.pdf" target="_blank" rel="noopener noreferrer" className="px-6 py-2 rounded-full border border-primary text-primary hover:bg-primay/10 transition-colors duration-300">
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
                                        Designing and deploying scalable cloud based systems using AWS, 
                                        with a focus on secure architectures, backend services, and performance optimization.
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
                                        data driven solutions.
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
                                        Cybersecurity
                                    </h4>
                                    <p className="text-muted-foreground">
                                        Identifying and analyzing security risks in applications and APIs,
                                        with a focus on access control, vulnerability detection, and secure system design.
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