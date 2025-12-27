import { motion } from 'framer-motion';
import { ArrowRight, Shield, Zap, Award } from 'lucide-react';
import './Hero.css';

const trustBadges = [
    { icon: Shield, text: '100+ Installations' },
    { icon: Zap, text: '15+ MW Deployed' },
    { icon: Award, text: '5-Year Service Support' },
];

export default function Hero() {
    const handleNavClick = (href: string) => {
        const element = document.querySelector(href);
        if (element) {
            element.scrollIntoView({ behavior: 'smooth' });
        }
    };

    return (
        <section id="home" className="hero">
            <div className="hero-bg">
                {/* Subtle geometric pattern for light mode background */}
                <div className="hero-bg-pattern-light" />
            </div>

            <div className="container hero-container">
                <motion.div
                    className="hero-content"
                    initial={{ opacity: 0, x: -30 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.8, ease: 'easeOut' }}
                >
                    <motion.div
                        className="hero-badge-container"
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.2 }}
                    >
                        <span className="hero-badge-light">
                            🌱 Canada's #1 Solar Installer
                        </span>
                    </motion.div>

                    <h1 className="h1 hero-title">
                        Power Your Future with <span className="text-primary">Clean Energy</span>
                    </h1>

                    <p className="hero-subtitle">
                        Transform your home into a sustainable powerhouse. Save on electricity bills, increase your property value, and protect the planet with our premium solar solutions.
                    </p>

                    <div className="hero-ctas">
                        <motion.a
                            href="#contact"
                            className="btn btn-primary btn-lg"
                            onClick={(e) => {
                                e.preventDefault();
                                handleNavClick('#contact');
                            }}
                            whileHover={{ scale: 1.02 }}
                            whileTap={{ scale: 0.98 }}
                        >
                            Get a Free Quote
                            <ArrowRight size={18} />
                        </motion.a>
                        <motion.a
                            href="#case-studies"
                            className="btn btn-outline btn-lg"
                            onClick={(e) => {
                                e.preventDefault();
                                handleNavClick('#case-studies');
                            }}
                            whileHover={{ scale: 1.02 }}
                            whileTap={{ scale: 0.98 }}
                        >
                            View Projects
                        </motion.a>
                    </div>

                    <motion.div
                        className="hero-trust-row"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 0.6 }}
                    >
                        {trustBadges.map((badge, index) => (
                            <div key={index} className="trust-item">
                                <badge.icon className="trust-icon" size={20} />
                                <span className="trust-text">{badge.text}</span>
                            </div>
                        ))}
                    </motion.div>
                </motion.div>

                <motion.div
                    className="hero-visual"
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.8, delay: 0.3 }}
                >
                    <div className="hero-image-container">
                        <img
                            src="https://images.unsplash.com/photo-1508514177221-188b1cf16e9d?q=80&w=2072&auto=format&fit=crop"
                            alt="Modern Solar Home"
                            className="hero-main-image"
                        />
                        <div className="hero-image-overlay" />

                        {/* Floating Stat Card */}
                        <motion.div
                            className="floating-stat-card"
                            initial={{ y: 20, opacity: 0 }}
                            animate={{ y: 0, opacity: 1 }}
                            transition={{ delay: 1, duration: 0.6 }}
                        >
                            <div className="stat-icon-bg">
                                <Zap size={24} color="var(--color-primary)" fill="currentColor" />
                            </div>
                            <div className="stat-info">
                                <span className="stat-value">40%</span>
                                <span className="stat-label">Avg. Savings</span>
                            </div>
                        </motion.div>
                    </div>
                </motion.div>
            </div>

            <div className="hero-scroll-light">
                <motion.div
                    animate={{ y: [0, 8, 0] }}
                    transition={{ repeat: Infinity, duration: 2 }}
                >
                    <div className="scroll-mouse">
                        <div className="scroll-wheel" />
                    </div>
                </motion.div>
            </div>
        </section>
    );
}
