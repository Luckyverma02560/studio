export const WhoWeAreParticles = () => (
    <div className="particle-container">
        {Array.from({ length: 60 }).map((_, i) => (
            <div key={i} className={`particle particle-${i + 1}`} />
        ))}
    </div>
);
