
"use client";

import { useState, useEffect, useRef } from 'react';

const NUM_STARS = 50;
const NUM_GALAXIES = 8;
const NUM_PLANETS = 5;
const SCROLL_SPEED_FACTOR = 2.0; // Increased from 1.0 to 2.0 (200%)
const MAX_Z = 1000;

interface Star {
    x: number;
    y: number;
    z: number;
    type: 'star' | 'galaxy' | 'planet';
    color: string;
}

const STAR_COLORS = ['#FFFFFF', '#FFFFE0', '#ADD8E6', '#FFDAB9', '#F08080', '#20B2AA'];
const PLANET_COLORS = ['#A52A2A', '#4682B4', '#D2691E', '#5F9EA0', '#8A2BE2', '#DB7093'];

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
                    type: 'star',
                    color: STAR_COLORS[Math.floor(Math.random() * STAR_COLORS.length)],
                });
            }
            for (let i = 0; i < NUM_GALAXIES; i++) {
                newStars.push({
                    x: Math.random() * 2 - 1,
                    y: Math.random() * 2 - 1,
                    z: Math.random() * MAX_Z,
                    type: 'galaxy',
                    color: '#000', // Galaxy color is handled by CSS
                });
            }
            for (let i = 0; i < NUM_PLANETS; i++) {
                newStars.push({
                    x: Math.random() * 2 - 1,
                    y: Math.random() * 2 - 1,
                    z: Math.random() * MAX_Z,
                    type: 'planet',
                    color: PLANET_COLORS[Math.floor(Math.random() * PLANET_COLORS.length)],
                });
            }
            setStars(newStars);
            scrollYRef.current = window.scrollY;
        };
        initStars();
    }, []);

    useEffect(() => {
        const handleScroll = () => {
            const delta = window.scrollY - scrollYRef.current;
            scrollYRef.current = window.scrollY;

            setStars(prevStars =>
                prevStars.map(star => {
                    const speedMultiplier = star.type === 'galaxy' ? 0.7 : (star.type === 'planet' ? 0.9 : 1);
                    let newZ = star.z - delta * SCROLL_SPEED_FACTOR * speedMultiplier;

                    if (newZ <= 1) { // When particle is at or behind the camera
                        newZ = MAX_Z; // Reset to the back
                        star.x = Math.random() * 2 - 1;
                        star.y = Math.random() * 2 - 1;
                    } else if (newZ > MAX_Z) { // When particle is too far away
                        newZ = 1; // Reset to the front
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
        };
    }, []);

    const getParticleStyle = (star: Star) => {
        if (!containerRef.current) return {};
        
        const perspective = containerRef.current.offsetWidth / 2;
        const scale = perspective / (perspective + star.z);
        const x = star.x * containerRef.current.offsetWidth * 0.5 * scale + containerRef.current.offsetWidth / 2;
        const y = star.y * containerRef.current.offsetHeight * 0.5 * scale + containerRef.current.offsetHeight / 2;
        
        let size, opacity;
        switch (star.type) {
            case 'galaxy':
                size = Math.max(0.1, 10 * scale);
                opacity = Math.max(0, Math.min(1, scale * 1.2));
                break;
            case 'planet':
                size = Math.max(0.1, 5 * scale);
                opacity = Math.max(0, Math.min(1, scale * 1.3));
                break;
            case 'star':
            default:
                size = Math.max(0.1, 2.5 * scale);
                opacity = Math.max(0, Math.min(1, scale * 1.5));
                break;
        }

        const style: React.CSSProperties = {
            transform: `translate(${x}px, ${y}px)`,
            width: `${size}px`,
            height: `${size}px`,
            opacity: opacity,
        };

        if (star.type !== 'galaxy') {
            style.backgroundColor = star.color;
        }
        if (star.type === 'planet') {
            style.boxShadow = `0 0 8px ${star.color}55`;
        }

        return style;
    };

    const getParticleClassName = (star: Star) => {
        switch (star.type) {
            case 'galaxy': return 'galaxy';
            case 'planet': return 'planet';
            case 'star': return 'star';
            default: return 'star';
        }
    }

    return (
        <div ref={containerRef} className="starfield-canvas">
            {stars.map((star, index) => (
                <div key={index} className={getParticleClassName(star)} style={getParticleStyle(star)} />
            ))}
        </div>
    );
};
