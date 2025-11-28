import { motion } from 'framer-motion';
import { resumeData } from '../../data/resume';

const About = () => {
    return (
        <section
            id="about"
            style={{
                padding: '6rem 2rem',
                backgroundColor: 'var(--bg-color)',
                display: 'flex',
                justifyContent: 'center',
            }}
        >
            <div style={{ maxWidth: '1000px', width: '100%' }}>
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    viewport={{ once: true }}
                >
                    <h2
                        style={{
                            fontSize: '2.5rem',
                            fontWeight: 700,
                            marginBottom: '2rem',
                            textAlign: 'center',
                            background: 'linear-gradient(to right, var(--accent-primary), var(--accent-secondary))',
                            WebkitBackgroundClip: 'text',
                            WebkitTextFillColor: 'transparent',
                        }}
                    >
                        About Me
                    </h2>
                    <div
                        style={{
                            backgroundColor: 'var(--card-bg)',
                            padding: '2rem',
                            borderRadius: '1rem',
                            border: '1px solid rgba(255, 255, 255, 0.1)',
                            lineHeight: '1.8',
                            fontSize: '1.1rem',
                            color: 'var(--text-secondary)',
                        }}
                    >
                        <p style={{ whiteSpace: 'pre-line' }}>{resumeData.personalInfo.about}</p>
                    </div>
                </motion.div>
            </div>
        </section>
    );
};

export default About;
