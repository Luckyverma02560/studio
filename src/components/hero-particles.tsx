
'use client';
import { useMemo } from 'react';

const PARTICLE_COUNT = 50;
const GLOWING_COLORS = ['#C7A45B', '#23C6D9', '#FF00FF']; // Gold, Teal, Magenta

export const HeroParticles = () => {
    const particles = useMemo(() => {
        return Array.from({ length: PARTICLE_COUNT }).map((_, i) => {
            const size = Math.random() * 2 + 1;
            const color = GLOWING_COLORS[Math.floor(Math.random() * GLOWING_COLORS.length)];
            const style = {
                left: `${Math.random() * 100}%`,
                width: `${size}px`,
                height: `${size}px`,
                backgroundColor: color,
                boxShadow: `0 0 4px ${color}, 0 0 6px ${color}33`,
                animationDuration: `${Math.random() * 15 + 20}s`,
                animationDelay: `-${Math.random() * 25}s`,
            };
            return <div key={i} className="particle down" style={style} />;
        });
    }, []);

    return <div className="particle-container">{particles}</div>;
};
