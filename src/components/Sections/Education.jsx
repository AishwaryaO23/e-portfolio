import { motion } from 'framer-motion';
import { resumeData } from '../../data/resume';
import { FaGraduationCap } from 'react-icons/fa';

const Education = () => {
    return (
        <section
            id="education"
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
                    Education
                </motion.h2>

                <div style={{ display: 'flex', flexDirection: 'column', gap: '2rem' }}>
                    {resumeData.education.map((edu, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, x: index % 2 === 0 ? -20 : 20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.6 }}
                            viewport={{ once: true }}
                            style={{
                                backgroundColor: 'var(--card-bg)',
                                padding: '2rem',
                                borderRadius: '1rem',
                                border: '1px solid rgba(255, 255, 255, 0.1)',
                                display: 'flex',
                                gap: '1.5rem',
                                alignItems: 'flex-start',
                            }}
                        >
                            <div
                                style={{
                                    backgroundColor: 'rgba(100, 108, 255, 0.1)',
                                    padding: '1rem',
                                    borderRadius: '50%',
                                    color: 'var(--accent-primary)',
                                    display: 'flex',
                                    alignItems: 'center',
                                    justifyContent: 'center',
                                }}
                            >
                                <FaGraduationCap size={24} />
                            </div>

                            <div style={{ flex: 1 }}>
                                <div style={{ display: 'flex', justifyContent: 'space-between', flexWrap: 'wrap', gap: '0.5rem', marginBottom: '0.5rem' }}>
                                    <h3 style={{ fontSize: '1.25rem', fontWeight: 600, color: 'var(--text-primary)' }}>{edu.degree}</h3>
                                    <span style={{ color: 'var(--accent-primary)', fontWeight: 500 }}>{edu.year}</span>
                                </div>
                                <h4 style={{ fontSize: '1.1rem', color: 'var(--text-secondary)', marginBottom: '0.5rem' }}>{edu.institution}, {edu.location}</h4>
                                <p style={{ color: 'var(--text-secondary)', fontSize: '0.95rem' }}>
                                    <span style={{ fontWeight: 600 }}>Relevant Coursework:</span> {edu.coursework}
                                </p>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Education;
