
'use client';
import { useMemo } from 'react';

const PARTICLE_COUNT = 100;
const GLOWING_COLORS = ['#C7A45B', '#23C6D9', '#FF00FF']; // Gold, Teal, Magenta

export const WhoWeAreParticles = () => {
    const particles = useMemo(() => {
        return Array.from({ length: PARTICLE_COUNT }).map((_, i) => {
            const size = Math.random() * 3 + 1;
            const color = GLOWING_COLORS[Math.floor(Math.random() * GLOWING_COLORS.length)];
            const style = {
                left: `${Math.random() * 100}%`,
                width: `${size}px`,
                height: `${size}px`,
                backgroundColor: color,
                boxShadow: `0 0 8px ${color}, 0 0 12px ${color}66`,
                animationDuration: `${Math.random() * 15 + 15}s`,
                animationDelay: `-${Math.random() * 20}s`,
            };
            return <div key={i} className="particle" style={style} />;
        });
    }, []);

    return <div className="particle-container">{particles}</div>;
};
