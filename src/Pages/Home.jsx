import { ThemeToggle } from "../components/themeToggle";
import { StarBackground } from "../components/StarBackground";
import { Navbar } from "../components/Navbar";
import { HeroSection } from "../components/HeroSection";
import { AboutSection } from "../components/AboutSection";
import { SkillsSection } from "../components/SkillsSection";


export const Home = () => {
    return <div className="min-h-screen bg-background overflow-x-hidden">
        
    {/* Theme Toggle */}
        <ThemeToggle />

    {/* BackGround Effects */}
        <StarBackground />

    {/* NavBar */}
        <Navbar />

    {/* Main Content */}
        <main>
            <HeroSection />
            <AboutSection />
            <SkillsSection />
        </main>

    {/* Footer */}

    </div>;
};