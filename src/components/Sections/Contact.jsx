import { motion } from 'framer-motion';
import { resumeData } from '../../data/resume';
import { FaEnvelope, FaPhone, FaMapMarkerAlt, FaLinkedin, FaGithub } from 'react-icons/fa';

const Contact = () => {
    return (
        <section
            id="contact"
            style={{
                padding: '6rem 2rem',
                backgroundColor: 'var(--bg-color)',
                display: 'flex',
                justifyContent: 'center',
            }}
        >
            <div style={{ maxWidth: '800px', width: '100%', textAlign: 'center' }}>
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
                            marginBottom: '1.5rem',
                            background: 'linear-gradient(to right, var(--accent-primary), var(--accent-secondary))',
                            WebkitBackgroundClip: 'text',
                            WebkitTextFillColor: 'transparent',
                        }}
                    >
                        Get In Touch
                    </h2>
                    <p style={{ color: 'var(--text-secondary)', fontSize: '1.1rem', marginBottom: '3rem' }}>
                        I'm currently looking for new opportunities. Whether you have a question or just want to say hi, I'll try my best to get back to you!
                    </p>

                    <div
                        style={{
                            display: 'flex',
                            flexDirection: 'column',
                            gap: '2rem',
                            alignItems: 'center',
                            marginBottom: '3rem',
                        }}
                    >
                        <a
                            href={`mailto:${resumeData.personalInfo.email}`}
                            style={{
                                display: 'flex',
                                alignItems: 'center',
                                gap: '1rem',
                                color: 'var(--text-primary)',
                                fontSize: '1.2rem',
                                padding: '1rem 2rem',
                                backgroundColor: 'var(--card-bg)',
                                borderRadius: '50px',
                                border: '1px solid rgba(255, 255, 255, 0.1)',
                                transition: 'all 0.3s',
                            }}
                            onMouseEnter={(e) => {
                                e.currentTarget.style.borderColor = 'var(--accent-primary)';
                                e.currentTarget.style.transform = 'translateY(-3px)';
                            }}
                            onMouseLeave={(e) => {
                                e.currentTarget.style.borderColor = 'rgba(255, 255, 255, 0.1)';
                                e.currentTarget.style.transform = 'translateY(0)';
                            }}
                        >
                            <FaEnvelope /> {resumeData.personalInfo.email}
                        </a>

                        <div style={{ display: 'flex', gap: '2rem', color: 'var(--text-secondary)' }}>
                            <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                                <FaPhone /> {resumeData.personalInfo.phone}
                            </div>
                            <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                                <FaMapMarkerAlt /> {resumeData.personalInfo.location}
                            </div>
                        </div>
                    </div>

                    <div style={{ display: 'flex', justifyContent: 'center', gap: '2rem' }}>
                        <a
                            href={resumeData.personalInfo.linkedin}
                            target="_blank"
                            rel="noopener noreferrer"
                            style={{
                                color: 'var(--text-secondary)',
                                fontSize: '2rem',
                                transition: 'color 0.3s',
                            }}
                            onMouseEnter={(e) => (e.target.style.color = 'var(--accent-primary)')}
                            onMouseLeave={(e) => (e.target.style.color = 'var(--text-secondary)')}
                        >
                            <FaLinkedin />
                        </a>
                        <a
                            href={resumeData.personalInfo.github}
                            target="_blank"
                            rel="noopener noreferrer"
                            style={{
                                color: 'var(--text-secondary)',
                                fontSize: '2rem',
                                transition: 'color 0.3s',
                            }}
                            onMouseEnter={(e) => (e.target.style.color = 'var(--accent-primary)')}
                            onMouseLeave={(e) => (e.target.style.color = 'var(--text-secondary)')}
                        >
                            <FaGithub />
                        </a>
                    </div>
                </motion.div>
            </div>
        </section>
    );
};

export default Contact;
