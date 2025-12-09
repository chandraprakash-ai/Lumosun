import { motion } from 'framer-motion';
import { Target, Eye, Award, Shield, Gauge, Users } from 'lucide-react';
import { useScrollAnimation } from '../hooks/useScrollAnimation';
import './About.css';

const values = [
    {
        icon: Award,
        title: 'Certified Engineers',
        description: 'Our team includes licensed electrical engineers and certified solar installers.',
    },
    {
        icon: Shield,
        title: 'End-to-End Execution',
        description: 'From design to installation to maintenance, we handle every step.',
    },
    {
        icon: Gauge,
        title: 'Performance Tracking',
        description: '24/7 monitoring with real-time performance dashboards for your system.',
    },
];

const team = [
    {
        name: 'James Morrison',
        role: 'CEO & Founder',
        description: '15+ years in renewable energy, formerly at SunPower Canada.',
    },
    {
        name: 'Priya Sharma',
        role: 'Chief Technical Officer',
        description: 'P.Eng with expertise in large-scale solar system design.',
    },
    {
        name: 'Marc Dubois',
        role: 'Head of Operations',
        description: 'Leads our installation teams across Ontario and Quebec.',
    },
    {
        name: 'Emily Watson',
        role: 'Customer Success Lead',
        description: 'Ensures every client has a seamless solar journey.',
    },
];

export default function About() {
    const { ref, isVisible } = useScrollAnimation({ threshold: 0.1 });

    return (
        <section id="about" className="about section" ref={ref as React.RefObject<HTMLElement>}>
            <div className="container">
                <div className="about-grid">
                    <motion.div
                        className="about-content"
                        initial={{ opacity: 0, x: -30 }}
                        animate={isVisible ? { opacity: 1, x: 0 } : {}}
                        transition={{ duration: 0.6 }}
                    >
                        <h2 className="h2 about-title">About Lumosun Energy</h2>

                        <p className="about-description">
                            Founded in 2018, Lumosun Energy has grown to become one of Canada's most trusted
                            solar installation companies. We believe every Canadian home and business deserves
                            access to clean, affordable solar energy.
                        </p>

                        <div className="about-mission-vision">
                            <div className="mission-item">
                                <Target className="mission-icon" size={24} />
                                <div>
                                    <h3>Our Mission</h3>
                                    <p>To make clean, reliable solar energy accessible for every rooftop in Canada,
                                        helping families and businesses reduce their environmental impact while saving money.</p>
                                </div>
                            </div>
                            <div className="mission-item">
                                <Eye className="mission-icon" size={24} />
                                <div>
                                    <h3>Our Vision</h3>
                                    <p>A sustainable, low-carbon future where renewable energy powers communities
                                        coast to coast, creating jobs and energy independence for Canadians.</p>
                                </div>
                            </div>
                        </div>

                        <div className="about-values">
                            {values.map((value, index) => (
                                <motion.div
                                    key={index}
                                    className="value-item"
                                    initial={{ opacity: 0, y: 20 }}
                                    animate={isVisible ? { opacity: 1, y: 0 } : {}}
                                    transition={{ duration: 0.4, delay: 0.3 + index * 0.1 }}
                                >
                                    <value.icon className="value-icon" size={20} />
                                    <div>
                                        <h4>{value.title}</h4>
                                        <p>{value.description}</p>
                                    </div>
                                </motion.div>
                            ))}
                        </div>
                    </motion.div>

                    <motion.div
                        className="about-team"
                        initial={{ opacity: 0, x: 30 }}
                        animate={isVisible ? { opacity: 1, x: 0 } : {}}
                        transition={{ duration: 0.6, delay: 0.2 }}
                    >
                        <div className="team-header">
                            <Users size={24} />
                            <h3>Meet Our Leadership</h3>
                        </div>

                        <div className="team-grid">
                            {team.map((member, index) => (
                                <motion.div
                                    key={index}
                                    className="team-card"
                                    initial={{ opacity: 0, y: 20 }}
                                    animate={isVisible ? { opacity: 1, y: 0 } : {}}
                                    transition={{ duration: 0.4, delay: 0.4 + index * 0.1 }}
                                >
                                    <div className="team-avatar">
                                        {member.name.split(' ').map(n => n[0]).join('')}
                                    </div>
                                    <h4 className="team-name">{member.name}</h4>
                                    <span className="team-role">{member.role}</span>
                                    <p className="team-description">{member.description}</p>
                                </motion.div>
                            ))}
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
}
