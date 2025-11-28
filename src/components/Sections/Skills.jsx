import { motion } from 'framer-motion';
import { resumeData } from '../../data/resume';

const Skills = () => {
    return (
        <section
            id="skills"
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
                    Skills
                </motion.h2>

                <div
                    style={{
                        display: 'grid',
                        gridTemplateColumns: 'repeat(auto-fill, minmax(120px, 1fr))',
                        gap: '2rem',
                        justifyContent: 'center',
                    }}
                >
                    {resumeData.skills.map((skill, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, scale: 0.8 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            transition={{ duration: 0.4, delay: index * 0.05 }}
                            viewport={{ once: true }}
                            whileHover={{ scale: 1.1, color: 'var(--accent-primary)' }}
                            style={{
                                display: 'flex',
                                flexDirection: 'column',
                                alignItems: 'center',
                                gap: '1rem',
                                padding: '1.5rem',
                                backgroundColor: 'var(--card-bg)',
                                borderRadius: '1rem',
                                border: '1px solid rgba(255, 255, 255, 0.05)',
                                cursor: 'default',
                                transition: 'border-color 0.3s',
                            }}
                            onMouseEnter={(e) => (e.currentTarget.style.borderColor = 'var(--accent-primary)')}
                            onMouseLeave={(e) => (e.currentTarget.style.borderColor = 'rgba(255, 255, 255, 0.05)')}
                        >
                            {skill.icon ? (
                                <skill.icon size={40} />
                            ) : (
                                <div style={{ fontSize: '1.5rem', fontWeight: 'bold' }}>{skill.name.charAt(0)}</div>
                            )}
                            <span style={{ textAlign: 'center', fontSize: '0.9rem', fontWeight: 500 }}>{skill.name}</span>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Skills;
