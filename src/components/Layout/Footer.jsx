import { FaGithub, FaLinkedin, FaEnvelope } from 'react-icons/fa';
import { resumeData } from '../../data/resume';

const Footer = () => {
    return (
        <footer
            style={{
                backgroundColor: 'var(--card-bg)',
                padding: '3rem 2rem',
                textAlign: 'center',
                marginTop: '4rem',
            }}
        >
            <div style={{ marginBottom: '1.5rem', display: 'flex', justifyContent: 'center', gap: '2rem' }}>
                <a href={resumeData.personalInfo.github} target="_blank" rel="noopener noreferrer" style={{ color: 'var(--text-secondary)', transition: 'color 0.3s' }}>
                    <FaGithub size={24} />
                </a>
                <a href={resumeData.personalInfo.linkedin} target="_blank" rel="noopener noreferrer" style={{ color: 'var(--text-secondary)', transition: 'color 0.3s' }}>
                    <FaLinkedin size={24} />
                </a>
                <a href={`mailto:${resumeData.personalInfo.email}`} style={{ color: 'var(--text-secondary)', transition: 'color 0.3s' }}>
                    <FaEnvelope size={24} />
                </a>
            </div>
            <p style={{ color: 'var(--text-secondary)', fontSize: '0.9rem' }}>
                © {new Date().getFullYear()} {resumeData.personalInfo.name}. All rights reserved.
            </p>
        </footer>
    );
};

export default Footer;
