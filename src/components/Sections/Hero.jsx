import { motion } from 'framer-motion';
import { resumeData } from '../../data/resume';

const Hero = () => {
    return (
        <section
            id="hero"
            style={{
                height: '100vh',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                position: 'relative',
                overflow: 'hidden',
                padding: '0 2rem',
            }}
        >
            {/* Background Gradient/Animation */}
            <div
                style={{
                    position: 'absolute',
                    top: 0,
                    left: 0,
                    right: 0,
                    bottom: 0,
                    background: 'radial-gradient(circle at 50% 50%, var(--accent-primary) 0%, transparent 70%)',
                    opacity: 0.15,
                    zIndex: -1,
                }}
            />

            <div style={{ maxWidth: '1200px', width: '100%', textAlign: 'center', zIndex: 1 }}>
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                >
                    <h2 style={{ color: 'var(--accent-primary)', fontSize: '1.5rem', marginBottom: '1rem', fontWeight: 600 }}>
                        Hello, I'm
                    </h2>
                    <h1
                        style={{
                            fontSize: 'clamp(3rem, 8vw, 6rem)',
                            fontWeight: 800,
                            lineHeight: 1.1,
                            marginBottom: '1.5rem',
                            background: 'linear-gradient(to right, var(--text-primary), var(--text-secondary))',
                            WebkitBackgroundClip: 'text',
                            WebkitTextFillColor: 'transparent',
                        }}
                    >
                        {resumeData.personalInfo.name}
                    </h1>
                    <h3 style={{ fontSize: 'clamp(1.5rem, 4vw, 2.5rem)', color: 'var(--text-secondary)', marginBottom: '2rem' }}>
                        {resumeData.personalInfo.title}
                    </h3>
                    <p style={{ maxWidth: '600px', margin: '0 auto 3rem', fontSize: '1.1rem', color: 'var(--text-secondary)' }}>
                        {resumeData.personalInfo.summary}
                    </p>

                    <div style={{ display: 'flex', gap: '1.5rem', justifyContent: 'center' }}>
                        <a
                            href="#projects"
                            style={{
                                padding: '1rem 2rem',
                                backgroundColor: 'var(--accent-primary)',
                                color: 'white',
                                borderRadius: '50px',
                                fontWeight: 600,
                                transition: 'transform 0.2s',
                            }}
                            onMouseEnter={(e) => (e.target.style.transform = 'scale(1.05)')}
                            onMouseLeave={(e) => (e.target.style.transform = 'scale(1)')}
                        >
                            View Work
                        </a>
                        <a
                            href="#contact"
                            style={{
                                padding: '1rem 2rem',
                                border: '2px solid var(--text-secondary)',
                                color: 'var(--text-primary)',
                                borderRadius: '50px',
                                fontWeight: 600,
                                transition: 'all 0.2s',
                            }}
                            onMouseEnter={(e) => {
                                e.target.style.borderColor = 'var(--accent-primary)';
                                e.target.style.color = 'var(--accent-primary)';
                            }}
                            onMouseLeave={(e) => {
                                e.target.style.borderColor = 'var(--text-secondary)';
                                e.target.style.color = 'var(--text-primary)';
                            }}
                        >
                            Contact Me
                        </a>
                    </div>
                </motion.div>
            </div>
        </section>
    );
};

export default Hero;
