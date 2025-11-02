"use client";

import { useState, useEffect, useRef } from 'react';

const NUM_STARS = 500;
const SCROLL_FACTOR = 0.002;
const MAX_Z = 1000;

interface Star {
    x: number;
    y: number;
    z: number;
}

export const StarfieldAnimation = () => {
    const [stars, setStars] = useState<Star[]>([]);
    const containerRef = useRef<HTMLDivElement>(null);
    const scrollYRef = useRef(0);

    useEffect(() => {
        const initStars = () => {
            const newStars: Star[] = [];
            for (let i = 0; i < NUM_STARS; i++) {
                newStars.push({
                    x: Math.random() * 2 - 1,
                    y: Math.random() * 2 - 1,
                    z: Math.random() * MAX_Z,
                });
            }
            setStars(newStars);
        };
        initStars();
    }, []);

    useEffect(() => {
        let animationFrameId: number;
        
        const handleScroll = () => {
            scrollYRef.current = window.scrollY;
        };

        const animate = () => {
            if (containerRef.current) {
                const sectionTop = containerRef.current.parentElement?.offsetTop ?? 0;
                const sectionHeight = containerRef.current.parentElement?.offsetHeight ?? window.innerHeight;
                const viewBottom = window.scrollY + window.innerHeight;

                if (window.scrollY > sectionTop - window.innerHeight && window.scrollY < sectionTop + sectionHeight) {
                    setStars(prevStars =>
                        prevStars.map(star => {
                            let newZ = star.z - (window.scrollY - scrollYRef.current) * SCROLL_FACTOR * 10;
                            
                            if (newZ <= 0) {
                                newZ = MAX_Z;
                                star.x = Math.random() * 2 - 1;
                                star.y = Math.random() * 2 - 1;
                            } else if (newZ > MAX_Z) {
                                newZ = 1;
                                star.x = Math.random() * 2 - 1;
                                star.y = Math.random() * 2 - 1;
                            }

                            return { ...star, z: newZ };
                        })
                    );
                }
            }
            scrollYRef.current = window.scrollY;
            animationFrameId = requestAnimationFrame(animate);
        };

        window.addEventListener('scroll', handleScroll);
        animationFrameId = requestAnimationFrame(animate);

        return () => {
            window.removeEventListener('scroll', handleScroll);
            cancelAnimationFrame(animationFrameId);
        };
    }, [stars]);

    const getStarStyle = (star: Star) => {
        if (!containerRef.current) return {};
        
        const perspective = containerRef.current.offsetWidth / 2;
        const scale = perspective / (perspective + star.z);
        const x = star.x * containerRef.current.offsetWidth * 0.5 * scale + containerRef.current.offsetWidth / 2;
        const y = star.y * containerRef.current.offsetHeight * 0.5 * scale + containerRef.current.offsetHeight / 2;
        const size = Math.max(0.1, 2 * scale);
        const opacity = Math.max(0, Math.min(1, scale * 1.5));

        return {
            transform: `translate(${x}px, ${y}px)`,
            width: `${size}px`,
            height: `${size}px`,
            opacity: opacity,
        };
    };

    return (
        <div ref={containerRef} className="starfield-canvas">
            {stars.map((star, index) => (
                <div key={index} className="star" style={getStarStyle(star)} />
            ))}
        </div>
    );
};
