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
                <div className="hero-bg-gradient" />
                <div className="hero-bg-pattern" />
            </div>

            <div className="container hero-container">
                <motion.div
                    className="hero-content"
                    initial={{ opacity: 0, y: 40 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, ease: 'easeOut' }}
                >
                    <motion.span
                        className="hero-badge"
                        initial={{ opacity: 0, scale: 0.9 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ delay: 0.2 }}
                    >
                        🌱 Canada's Trusted Solar Partner
                    </motion.span>

                    <h1 className="h1 hero-title">
                        Power your world with{' '}
                        <span className="hero-title-accent">clean solar energy</span>
                    </h1>

                    <p className="hero-subtitle">
                        Lumosun Energy designs and installs smart solar systems that reduce your
                        electricity bills and your carbon footprint. Join thousands of Canadians
                        making the switch to sustainable energy.
                    </p>

                    <div className="hero-ctas">
                        <motion.a
                            href="#contact"
                            className="btn btn-accent"
                            onClick={(e) => {
                                e.preventDefault();
                                handleNavClick('#contact');
                            }}
                            whileHover={{ scale: 1.02 }}
                            whileTap={{ scale: 0.98 }}
                        >
                            Get a Free Assessment
                            <ArrowRight size={18} />
                        </motion.a>
                        <motion.a
                            href="#case-studies"
                            className="btn btn-secondary"
                            onClick={(e) => {
                                e.preventDefault();
                                handleNavClick('#case-studies');
                            }}
                            whileHover={{ scale: 1.02 }}
                            whileTap={{ scale: 0.98 }}
                        >
                            View Our Case Studies
                        </motion.a>
                    </div>

                    <motion.div
                        className="hero-trust"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 0.6 }}
                    >
                        {trustBadges.map((badge, index) => (
                            <div key={index} className="trust-badge">
                                <badge.icon className="trust-badge-icon" size={20} />
                                <span>{badge.text}</span>
                            </div>
                        ))}
                    </motion.div>
                </motion.div>

                <motion.div
                    className="hero-visual"
                    initial={{ opacity: 0, x: 40 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.8, delay: 0.3 }}
                >
                    <div className="hero-image-wrapper">
                        <div className="hero-image-card">
                            <div className="hero-image-content">
                                <div className="hero-solar-icon">☀️</div>
                                <div className="hero-image-text">
                                    <span className="hero-image-stat">70%</span>
                                    <span className="hero-image-label">Average Bill Reduction</span>
                                </div>
                            </div>
                        </div>
                        <div className="hero-image-card hero-image-card-2">
                            <div className="hero-image-content">
                                <div className="hero-solar-icon">🏠</div>
                                <div className="hero-image-text">
                                    <span className="hero-image-stat">5-7 Years</span>
                                    <span className="hero-image-label">Typical Payback Period</span>
                                </div>
                            </div>
                        </div>
                        <div className="hero-image-card hero-image-card-3">
                            <div className="hero-image-content">
                                <div className="hero-solar-icon">🌍</div>
                                <div className="hero-image-text">
                                    <span className="hero-image-stat">25+ Years</span>
                                    <span className="hero-image-label">Panel Warranty</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </motion.div>
            </div>

            <div className="hero-scroll-indicator">
                <motion.div
                    animate={{ y: [0, 10, 0] }}
                    transition={{ repeat: Infinity, duration: 1.5 }}
                >
                    <span>Scroll to explore</span>
                    <div className="scroll-arrow" />
                </motion.div>
            </div>
        </section>
    );
}
