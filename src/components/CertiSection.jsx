import { ArrowRight, ExternalLinkIcon } from "lucide-react";


const certis = [
    {
        id: 1,
        title: "ETC Certificate – CEFR C1 (Advanced English)",
        description: "Awarded by ETC International College, this certificate validates advanced English proficiency at the CEFR C1 level.",
        Image: "../images/certifications/ETCInternationalCollege.png",
        demoUrl: null
    }, {
        id: 2,
        title: "MySQL Bootcamp",
        description: "Comprehensive introduction to MySQL, covering SQL fundamentals, data analysis, joins, and real-world querying to extract insights from data.",
        Image: "../images/certifications/Mar2026-Udemy-MySQL_Bootcamp.png",
        demoUrl: "https://ude.my/UC-822c8861-5f5c-4a97-b4ed-40a792f04729",
    }, {
        id: 3,
        title: "AWS Cloud Practitioner Essentials",
        description: "This certificate confirms foundational knowledge of cloud computing concepts and core AWS services.",
        Image: "../images/certifications/Feb2026-AWS-CloudPractioner-AWSCloudPractionerEssentials.png",
        demoUrl: null
    }
]


export const CertiSection = () => {
    return <section id="certis" className="py-24 px-4 relative">
        <div className="container mx-auto max-w-5xl">
            <h2 className="text-3xl md:text-4xl font-bold mb-8 text-center"> Degrees & Certifications</h2>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">

                {certis.map((certi, key) => (

                    <div key={key} className="group bg-card rounded-lg shadow-xs overflow-hidden card-hover">

                        <div className="h-48 overflow-hidden">
                            <img src={certi.Image} alt={certi.title} className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"/>
                        </div>

                        <div className="p-6">

                            <h3 className="text-xl font-semibold mb-1"> {certi.title} </h3>
                            <p className="text-muted-foreground text-sm mb-4"> {certi.description} </p>

                            <div className="flex justify-between items-center">
                                <div className="flex space-x-3">
                                    {certi.demoUrl && (
                                    <a href={certi.demoUrl} target="_blank" rel="noopener noreferrer" className="text-foreground/80 hover:text-primary transition-colors duration-300">
                                        <ExternalLinkIcon className="w-5 h-5 hover:text-primary/80" size={20}/>
                                    </a>
                                    )}
                                </div>
                            </div>
                        </div>
                    </div>
                ))}
            </div>

            <div className="text-center mt-12">
                <a className="cosmic-button w-fit flex items-center mx-auto gap-2" href="https://certifications-mathiascalderon.vercel.app/" target="_blank" rel="noopener noreferrer">
                    All Degrees & Certifications <ArrowRight size={16}/>
                </a>
            </div>
        </div>
    </section>
}
