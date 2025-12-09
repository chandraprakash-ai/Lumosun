import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, Sun } from 'lucide-react';
import './Header.css';

const navLinks = [
    { name: 'Home', href: '#home' },
    { name: 'Solutions', href: '#solutions' },
    { name: 'Case Studies', href: '#case-studies' },
    { name: 'About', href: '#about' },
    { name: 'Calculator', href: '#calculator' },
    { name: 'Contact', href: '#contact' },
];

export default function Header() {
    const [isScrolled, setIsScrolled] = useState(false);
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 50);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const handleNavClick = (href: string) => {
        setIsMobileMenuOpen(false);
        const element = document.querySelector(href);
        if (element) {
            element.scrollIntoView({ behavior: 'smooth' });
        }
    };

    return (
        <header className={`header ${isScrolled ? 'header--scrolled' : ''}`}>
            <div className="container">
                <nav className="nav">
                    <a href="#home" className="logo" onClick={() => handleNavClick('#home')}>
                        <Sun className="logo-icon" />
                        <span className="logo-text">Lumosun Energy</span>
                    </a>

                    <ul className="nav-links">
                        {navLinks.map((link) => (
                            <li key={link.name}>
                                <a
                                    href={link.href}
                                    className="nav-link"
                                    onClick={(e) => {
                                        e.preventDefault();
                                        handleNavClick(link.href);
                                    }}
                                >
                                    {link.name}
                                </a>
                            </li>
                        ))}
                    </ul>

                    <a
                        href="#contact"
                        className="btn btn-primary header-cta"
                        onClick={(e) => {
                            e.preventDefault();
                            handleNavClick('#contact');
                        }}
                    >
                        Get a Solar Quote
                    </a>

                    <button
                        className="mobile-menu-btn"
                        onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                        aria-label="Toggle menu"
                    >
                        {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
                    </button>
                </nav>
            </div>

            <AnimatePresence>
                {isMobileMenuOpen && (
                    <motion.div
                        className="mobile-menu"
                        initial={{ opacity: 0, x: '100%' }}
                        animate={{ opacity: 1, x: 0 }}
                        exit={{ opacity: 0, x: '100%' }}
                        transition={{ type: 'tween', duration: 0.3 }}
                    >
                        <ul className="mobile-nav-links">
                            {navLinks.map((link, index) => (
                                <motion.li
                                    key={link.name}
                                    initial={{ opacity: 0, x: 20 }}
                                    animate={{ opacity: 1, x: 0 }}
                                    transition={{ delay: index * 0.05 }}
                                >
                                    <a
                                        href={link.href}
                                        className="mobile-nav-link"
                                        onClick={(e) => {
                                            e.preventDefault();
                                            handleNavClick(link.href);
                                        }}
                                    >
                                        {link.name}
                                    </a>
                                </motion.li>
                            ))}
                            <motion.li
                                initial={{ opacity: 0, x: 20 }}
                                animate={{ opacity: 1, x: 0 }}
                                transition={{ delay: navLinks.length * 0.05 }}
                            >
                                <a
                                    href="#contact"
                                    className="btn btn-primary mobile-cta"
                                    onClick={(e) => {
                                        e.preventDefault();
                                        handleNavClick('#contact');
                                    }}
                                >
                                    Get a Solar Quote
                                </a>
                            </motion.li>
                        </ul>
                    </motion.div>
                )}
            </AnimatePresence>
        </header>
    );
}
