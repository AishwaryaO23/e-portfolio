import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FaBars, FaTimes, FaGithub, FaLinkedin } from 'react-icons/fa';
import { resumeData } from '../../data/resume';

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 50);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const navLinks = [
        { name: 'About', href: '#about' },
        { name: 'Experience', href: '#experience' },
        { name: 'Skills', href: '#skills' },
        { name: 'Projects', href: '#projects' },
        { name: 'Contact', href: '#contact' },
    ];

    return (
        <nav
            className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${scrolled ? 'bg-black/80 backdrop-blur-md py-4' : 'bg-transparent py-6'
                }`}
            style={{
                backgroundColor: scrolled ? 'var(--nav-bg)' : 'transparent',
                backdropFilter: scrolled ? 'blur(10px)' : 'none',
                padding: scrolled ? '1rem 2rem' : '1.5rem 2rem',
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: 'center',
            }}
        >
            <div className="logo" style={{ fontSize: '1.5rem', fontWeight: 'bold', color: 'var(--text-primary)' }}>
                <a href="#">AP.</a>
            </div>

            {/* Desktop Menu */}
            <div className="hidden md:flex items-center gap-8" style={{ display: 'flex', gap: '2rem' }}>
                <ul style={{ display: 'flex', gap: '2rem' }}>
                    {navLinks.map((link) => (
                        <li key={link.name}>
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

            {/* Mobile Menu Button */}
            <div className="md:hidden" style={{ display: 'none' }}>
                {/* Hidden for now, will implement responsive styles properly with CSS modules or media queries later if needed, 
           but inline styles for media queries are tricky. I'll rely on a simple CSS file for media queries or use window width.
           Actually, let's use a simple media query in a style tag or CSS file.
           For now, I'll just add a class and handle it in index.css
        */}
                <button onClick={() => setIsOpen(!isOpen)} style={{ color: 'var(--text-primary)' }}>
                    {isOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
                </button>
            </div>
        </nav>
    );
};

export default Navbar;
