import { useEffect, useState } from "react";

export const StarBackground = () => {

    const [stars, setStars] = useState([]);
    const [meteors, setMeteors] = useState([]);

    useEffect(() => {
        generateStars();

        for (let i = 0; i < 9; i++) spawnMeteor();

        const handleResize = () =>{
            generateStars();
        } 
        window.addEventListener("resize", handleResize);

        return () => window.removeEventListener("resize", handleResize);
    }, []);

    const generateStars = () => {
        const numberOfStars = Math.floor((window.innerWidth * window.innerHeight) / 1000);

        const newStars = [];

        for (let i = 0; i < numberOfStars; i++) {
            newStars.push({
                id: i,
                size: Math.random() < 0.8 
                    ? Math.random() * 0.7 + 0.3     // 80% muy pequeñas
                    : Math.random() * 1.3 + 0.7,    // 20% medianas
                x: Math.random() * 100,
                y: Math.random() * 100,
                opacity: Math.random() * 0.5 + 0.5,
                animationDuration: Math.random() * 4 + 2,
            });
        }

        setStars(newStars);
    };

    const generateOffscreenMeteor = () => {
        const side = Math.floor(Math.random() * 4);
        let x, y;

        if (side === 0) {
            x = Math.random() * 100;
            y = -10;
        } else if (side === 1) {
            x = 110;
            y = Math.random() * 100;
        } else if (side === 2) {
            x = Math.random() * 100;
            y = 110;
        } else {
            x = -10;
            y = Math.random() * 100;
        }

        return {
            id: crypto.randomUUID(),
            x,
            y,
            size: Math.random() * 2 + 1,
            delay: Math.random() * 1.2,
            duration: Math.random() * 3 + 3,
            alive: true
        };
    };



    const spawnMeteor = () => {
        const id = crypto.randomUUID();
        const meteor = generateOffscreenMeteor();

        setMeteors((prev) => [...prev, meteor]);

        const totalTime = (meteor.delay + meteor.duration) * 1000;

        setTimeout(() => {
        setMeteors((prev) => prev.map((m) => m.id === id ? { ...m, alive: false } : m));
        }, totalTime);

        setTimeout(() => {
            setMeteors((prev) => {
                const filtered = prev.filter((m) => m.id !== id);

                if (filtered.length < 9) {
                    setTimeout(() => spawnMeteor(), 0);
                }
                return filtered;
            });
        }, totalTime + 5000);
    };

    return <div className="fixed inset-0 overflow-hidden pointer-events-none z-0">
        {stars.map((star) => (
            <div key={star.id} className="star animate-pulse-subtle" style= {{
                width: star.size + "px",
                height: star.size + "px",
                left: star.x + "%",
                top: star.y + "%",
                opacity: star.opacity,
                animationDuration: star.animationDuration + "s",
            }}/>
        ))}

        {meteors.map((meteor) => (
            <div key={meteor.id} className="meteor animate-meteor" style= {{
                width: meteor.size * 5 + "px",
                height: meteor.size + "px",
                left: meteor.x + "%",
                top: meteor.y + "%",
                animationDelay: `${meteor.delay}s`,
                animationDuration: meteor.animationDuration + "s",
            }}/>
        ))}
    </div>;
}