import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FaBars, FaTimes, FaGithub, FaLinkedin } from 'react-icons/fa';
import { resumeData } from '../../data/resume';

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);
    const [isMobile, setIsMobile] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 50);
        };

        const handleResize = () => {
            setIsMobile(window.innerWidth < 768);
        };

        handleResize();
        window.addEventListener('scroll', handleScroll);
        window.addEventListener('resize', handleResize);

        return () => {
            window.removeEventListener('scroll', handleScroll);
            window.removeEventListener('resize', handleResize);
        };
    }, []);

    const navLinks = [
        { name: 'About', href: '#about' },
        { name: 'Experience', href: '#experience' },
        { name: 'Skills', href: '#skills' },
        { name: 'Projects', href: '#projects' },
        { name: 'Contact', href: '#contact' },
    ];

    const handleLinkClick = () => {
        setIsOpen(false);
    };

    return (
        <>
            <nav
                style={{
                    position: 'fixed',
                    top: 0,
                    left: 0,
                    width: '100%',
                    zIndex: 50,
                    backgroundColor: scrolled ? 'var(--nav-bg)' : 'transparent',
                    backdropFilter: scrolled ? 'blur(10px)' : 'none',
                    padding: scrolled ? '1rem 2rem' : '1.5rem 2rem',
                    display: 'flex',
                    justifyContent: 'space-between',
                    alignItems: 'center',
                    transition: 'all 0.3s',
                }}
            >
                <div style={{ fontSize: '1.5rem', fontWeight: 'bold', color: 'var(--text-primary)' }}>
                    <a href="#">AP.</a>
                </div>

                {/* Desktop Menu */}
                {!isMobile && (
                    <div style={{ display: 'flex', alignItems: 'center', gap: '2rem' }}>
                        <ul style={{ display: 'flex', gap: '2rem', margin: 0, padding: 0 }}>
                            {navLinks.map((link) => (
                                <li key={link.name} style={{ listStyle: 'none' }}>
                                    <a
                                        href={link.href}
                                        style={{
                                            color: 'var(--text-secondary)',
                                            fontSize: '0.9rem',
                                            fontWeight: '500',
                                            transition: 'color 0.3s',
                                        }}
                                        onMouseEnter={(e) => (e.target.style.color = 'var(--accent-primary)')}
                                        onMouseLeave={(e) => (e.target.style.color = 'var(--text-secondary)')}
                                    >
                                        {link.name}
                                    </a>
                                </li>
                            ))}
                        </ul>
                        <div style={{ display: 'flex', gap: '1rem' }}>
                            <a href={resumeData.personalInfo.github} target="_blank" rel="noopener noreferrer" style={{ color: 'var(--text-primary)' }}>
                                <FaGithub size={20} />
                            </a>
                            <a href={resumeData.personalInfo.linkedin} target="_blank" rel="noopener noreferrer" style={{ color: 'var(--text-primary)' }}>
                                <FaLinkedin size={20} />
                            </a>
                        </div>
                    </div>
                )}

                {/* Mobile Menu Button */}
                {isMobile && (
                    <button
                        onClick={() => setIsOpen(!isOpen)}
                        style={{
                            color: 'var(--text-primary)',
                            background: 'none',
                            border: 'none',
                            cursor: 'pointer',
                            padding: '0.5rem',
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center',
                        }}
                    >
                        {isOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
                    </button>
                )}
            </nav>

            {/* Mobile Menu Panel */}
            <AnimatePresence>
                {isMobile && isOpen && (
                    <motion.div
                        initial={{ x: '100%' }}
                        animate={{ x: 0 }}
                        exit={{ x: '100%' }}
                        transition={{ type: 'tween', duration: 0.3 }}
                        style={{
                            position: 'fixed',
                            top: 0,
                            right: 0,
                            width: '75%',
                            maxWidth: '300px',
                            height: '100vh',
                            backgroundColor: 'var(--card-bg)',
                            zIndex: 40,
                            padding: '5rem 2rem 2rem',
                            display: 'flex',
                            flexDirection: 'column',
                            gap: '2rem',
                            boxShadow: '-5px 0 15px rgba(0, 0, 0, 0.3)',
                        }}
                    >
                        <ul style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem', margin: 0, padding: 0 }}>
                            {navLinks.map((link) => (
                                <li key={link.name} style={{ listStyle: 'none' }}>
                                    <a
                                        href={link.href}
                                        onClick={handleLinkClick}
                                        style={{
                                            color: 'var(--text-primary)',
                                            fontSize: '1.2rem',
                                            fontWeight: '500',
                                            transition: 'color 0.3s',
                                            display: 'block',
                                        }}
                                        onMouseEnter={(e) => (e.target.style.color = 'var(--accent-primary)')}
                                        onMouseLeave={(e) => (e.target.style.color = 'var(--text-primary)')}
                                    >
                                        {link.name}
                                    </a>
                                </li>
                            ))}
                        </ul>
                        <div style={{ display: 'flex', gap: '1.5rem', marginTop: 'auto' }}>
                            <a
                                href={resumeData.personalInfo.github}
                                target="_blank"
                                rel="noopener noreferrer"
                                style={{ color: 'var(--text-primary)', transition: 'color 0.3s' }}
                                onMouseEnter={(e) => (e.target.style.color = 'var(--accent-primary)')}
                                onMouseLeave={(e) => (e.target.style.color = 'var(--text-primary)')}
                            >
                                <FaGithub size={24} />
                            </a>
                            <a
                                href={resumeData.personalInfo.linkedin}
                                target="_blank"
                                rel="noopener noreferrer"
                                style={{ color: 'var(--text-primary)', transition: 'color 0.3s' }}
                                onMouseEnter={(e) => (e.target.style.color = 'var(--accent-primary)')}
                                onMouseLeave={(e) => (e.target.style.color = 'var(--text-primary)')}
                            >
                                <FaLinkedin size={24} />
                            </a>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>

            {/* Overlay */}
            <AnimatePresence>
                {isMobile && isOpen && (
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        transition={{ duration: 0.3 }}
                        onClick={() => setIsOpen(false)}
                        style={{
                            position: 'fixed',
                            top: 0,
                            left: 0,
                            width: '100%',
                            height: '100vh',
                            backgroundColor: 'rgba(0, 0, 0, 0.5)',
                            zIndex: 30,
                        }}
                    />
                )}
            </AnimatePresence>
        </>
    );
};

export default Navbar;
