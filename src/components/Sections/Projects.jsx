import { motion } from 'framer-motion';
import { resumeData } from '../../data/resume';
import { FaGithub, FaExternalLinkAlt } from 'react-icons/fa';

const Projects = () => {
    return (
        <section
            id="projects"
            style={{
                padding: '6rem 2rem',
                backgroundColor: 'var(--bg-color)',
                display: 'flex',
                justifyContent: 'center',
            }}
        >
            <div style={{ maxWidth: '1200px', width: '100%' }}>
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
                    Featured Projects
                </motion.h2>

                <div
                    style={{
                        display: 'grid',
                        gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
                        gap: '2rem',
                    }}
                >
                    {resumeData.projects.map((project, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6, delay: index * 0.1 }}
                            viewport={{ once: true }}
                            whileHover={{ y: -10 }}
                            style={{
                                backgroundColor: 'var(--card-bg)',
                                borderRadius: '1rem',
                                overflow: 'hidden',
                                border: '1px solid rgba(255, 255, 255, 0.1)',
                                display: 'flex',
                                flexDirection: 'column',
                            }}
                        >
                            <div style={{ padding: '2rem', flex: 1, display: 'flex', flexDirection: 'column' }}>
                                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'start', marginBottom: '1rem' }}>
                                    <h3 style={{ fontSize: '1.5rem', fontWeight: 600, color: 'var(--text-primary)' }}>{project.title}</h3>
                                    <div style={{ display: 'flex', gap: '1rem' }}>
                                        <a href={project.link} target="_blank" rel="noopener noreferrer" style={{ color: 'var(--text-secondary)', transition: 'color 0.3s' }}>
                                            <FaGithub size={20} />
                                        </a>
                                        {/* Placeholder for live link if available */}
                                        {/* <a href="#" style={{ color: 'var(--text-secondary)' }}><FaExternalLinkAlt size={18} /></a> */}
                                    </div>
                                </div>

                                <p style={{ color: 'var(--text-secondary)', marginBottom: '1.5rem', lineHeight: '1.6' }}>
                                    {project.description}
                                </p>

                                <div style={{ marginTop: 'auto', display: 'flex', flexWrap: 'wrap', gap: '0.5rem' }}>
                                    {project.tech.map((tech, i) => (
                                        <span
                                            key={i}
                                            style={{
                                                fontSize: '0.85rem',
                                                padding: '0.25rem 0.75rem',
                                                borderRadius: '15px',
                                                backgroundColor: 'rgba(100, 108, 255, 0.1)',
                                                color: 'var(--accent-primary)',
                                            }}
                                        >
                                            {tech}
                                        </span>
                                    ))}
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Projects;
