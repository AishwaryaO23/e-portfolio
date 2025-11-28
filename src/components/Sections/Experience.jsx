import { motion } from 'framer-motion';
import { resumeData } from '../../data/resume';

const Experience = () => {
    return (
        <section
            id="experience"
            style={{
                padding: '6rem 2rem',
                backgroundColor: 'var(--bg-color)',
                display: 'flex',
                justifyContent: 'center',
            }}
        >
            <div style={{ maxWidth: '1000px', width: '100%' }}>
                <motion.h2
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    viewport={{ once: true }}
                    style={{
                        fontSize: '2.5rem',
                        fontWeight: 700,
                        marginBottom: '4rem',
                        textAlign: 'center',
                        background: 'linear-gradient(to right, var(--accent-primary), var(--accent-secondary))',
                        WebkitBackgroundClip: 'text',
                        WebkitTextFillColor: 'transparent',
                    }}
                >
                    Experience
                </motion.h2>

                <div style={{ display: 'flex', flexDirection: 'column', gap: '3rem' }}>
                    {resumeData.experience.map((exp, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, x: -20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.6, delay: index * 0.1 }}
                            viewport={{ once: true }}
                            style={{
                                backgroundColor: 'var(--card-bg)',
                                padding: '2rem',
                                borderRadius: '1rem',
                                border: '1px solid rgba(255, 255, 255, 0.1)',
                                position: 'relative',
                            }}
                        >
                            <div
                                style={{
                                    display: 'flex',
                                    flexDirection: 'column',
                                    gap: '0.5rem',
                                    marginBottom: '1rem',
                                }}
                            >
                                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', flexWrap: 'wrap', gap: '1rem' }}>
                                    <h3 style={{ fontSize: '1.5rem', fontWeight: 600, color: 'var(--text-primary)' }}>{exp.title}</h3>
                                    <span style={{ color: 'var(--accent-primary)', fontWeight: 500 }}>{exp.period}</span>
                                </div>
                                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap' }}>
                                    <h4 style={{ fontSize: '1.1rem', color: 'var(--text-secondary)' }}>{exp.company}</h4>
                                    <span style={{ color: 'var(--text-secondary)', fontSize: '0.9rem' }}>{exp.location}</span>
                                </div>
                            </div>

                            <ul style={{ listStyle: 'disc', paddingLeft: '1.5rem', color: 'var(--text-secondary)' }}>
                                {exp.description.map((desc, i) => (
                                    <li key={i} style={{ marginBottom: '0.5rem' }}>{desc}</li>
                                ))}
                            </ul>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Experience;
