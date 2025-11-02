"use client";

import { useState, useEffect, useRef } from 'react';

const NUM_STARS = 500;
const SCROLL_SPEED_FACTOR = 5; 
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
    const animationFrameIdRef = useRef<number>();

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
        const animate = () => {
            setStars(prevStars =>
                prevStars.map(star => {
                    let newZ = star.z - SCROLL_SPEED_FACTOR;
                    
                    if (newZ <= 0) {
                        newZ = MAX_Z;
                        star.x = Math.random() * 2 - 1;
                        star.y = Math.random() * 2 - 1;
                    }
                    return { ...star, z: newZ };
                })
            );
            animationFrameIdRef.current = requestAnimationFrame(animate);
        };

        const handleScroll = () => {
            const delta = window.scrollY - scrollYRef.current;
            scrollYRef.current = window.scrollY;

            setStars(prevStars =>
                prevStars.map(star => {
                    let newZ = star.z - delta * 0.2;
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
        };
        
        window.addEventListener('scroll', handleScroll, { passive: true });

        return () => {
            window.removeEventListener('scroll', handleScroll);
            if(animationFrameIdRef.current) {
                cancelAnimationFrame(animationFrameIdRef.current);
            }
        };
    }, []);

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
