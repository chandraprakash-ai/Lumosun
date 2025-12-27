import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { MapPin, Zap, Leaf, X } from 'lucide-react';
import { useScrollAnimation } from '../hooks/useScrollAnimation';
import './CaseStudies.css';

const projects = [
    {
        id: 1,
        name: 'Maplewood Residence',
        type: 'Residential',
        location: 'Toronto, ON',
        capacity: '12 kW',
        savings: '$2,400/year',
        co2: '8 tons CO₂/year',
        description: 'A beautiful Victorian home in the Annex neighbourhood, now powered by a rooftop solar array that covers 95% of the household\'s energy needs.',
        image: 'https://images.unsplash.com/photo-1513694203232-719a280e022f?auto=format&fit=crop&w=800&q=80'
    },
    {
        id: 2,
        name: 'GreenView Apartments',
        type: 'Commercial',
        location: 'Vancouver, BC',
        capacity: '80 kW',
        savings: '$18,500/year',
        co2: '52 tons CO₂/year',
        description: 'A 24-unit residential complex that reduced common area electricity costs by 70% with our commercial solar solution.',
        image: 'https://images.unsplash.com/photo-1611365892117-00ac5ef43c90?auto=format&fit=crop&w=800&q=80'
    },
    {
        id: 3,
        name: 'Northern Logistics Hub',
        type: 'Industrial',
        location: 'Calgary, AB',
        capacity: '250 kW',
        savings: '$45,000/year',
        co2: '165 tons CO₂/year',
        description: 'A 50,000 sq ft distribution warehouse with a massive rooftop installation achieving excellent performance despite cold winters.',
        image: 'https://images.unsplash.com/photo-1566093097221-ac2335b09e70?auto=format&fit=crop&w=800&q=80'
    },
    {
        id: 4,
        name: 'Lakeside Cottage',
        type: 'Residential',
        location: 'Muskoka, ON',
        capacity: '8 kW',
        savings: '$1,600/year',
        co2: '5 tons CO₂/year',
        description: 'An off-grid cottage solution with battery storage, providing year-round power independence in a remote location.',
        image: 'https://images.unsplash.com/photo-1518709268805-4e9042af9f23?auto=format&fit=crop&w=800&q=80'
    },
    {
        id: 5,
        name: 'Oakridge Community Centre',
        type: 'Commercial',
        location: 'Ottawa, ON',
        capacity: '45 kW',
        savings: '$9,200/year',
        co2: '30 tons CO₂/year',
        description: 'A municipal recreation centre showcasing renewable energy to thousands of visitors while slashing operating costs.',
        image: 'https://images.unsplash.com/photo-1508514177221-188b1cf16e9d?auto=format&fit=crop&w=800&q=80'
    },
    {
        id: 6,
        name: 'Prairie Farms Co-op',
        type: 'Agricultural',
        location: 'Regina, SK',
        capacity: '120 kW',
        savings: '$22,000/year',
        co2: '78 tons CO₂/year',
        description: 'A farming cooperative using solar to power irrigation systems and cold storage, with ground-mounted panels maximizing land use.',
        image: 'https://images.unsplash.com/photo-1473341304170-971dccb5ac1e?auto=format&fit=crop&w=800&q=80'
    },
];

interface ProjectModalProps {
    project: typeof projects[0];
    onClose: () => void;
}

function ProjectModal({ project, onClose }: ProjectModalProps) {
    return (
        <motion.div
            className="modal-overlay"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
        >
            <motion.div
                className="modal-content"
                initial={{ opacity: 0, scale: 0.9, y: 20 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.9, y: 20 }}
                onClick={(e) => e.stopPropagation()}
            >
                <button className="modal-close" onClick={onClose} aria-label="Close modal">
                    <X size={24} />
                </button>

                <div className="modal-header">
                    <span className={`project-badge project-badge-${project.type.toLowerCase()}`}>
                        {project.type}
                    </span>
                    <h3 className="modal-title">{project.name}</h3>
                    <div className="modal-location">
                        <MapPin size={16} />
                        {project.location}
                    </div>
                </div>

                <p className="modal-description">{project.description}</p>

                <div className="modal-stats">
                    <div className="modal-stat">
                        <Zap size={20} />
                        <div>
                            <span className="modal-stat-value">{project.capacity}</span>
                            <span className="modal-stat-label">System Size</span>
                        </div>
                    </div>
                    <div className="modal-stat">
                        <span className="modal-stat-icon">💰</span>
                        <div>
                            <span className="modal-stat-value">{project.savings}</span>
                            <span className="modal-stat-label">Annual Savings</span>
                        </div>
                    </div>
                    <div className="modal-stat">
                        <Leaf size={20} />
                        <div>
                            <span className="modal-stat-value">{project.co2}</span>
                            <span className="modal-stat-label">CO₂ Avoided</span>
                        </div>
                    </div>
                </div>

                <a href="#contact" className="btn btn-primary" onClick={onClose}>
                    Start Your Project
                </a>
            </motion.div>
        </motion.div>
    );
}

export default function CaseStudies() {
    const { ref, isVisible } = useScrollAnimation({ threshold: 0.1 });
    const [selectedProject, setSelectedProject] = useState<typeof projects[0] | null>(null);

    return (
        <section id="case-studies" className="case-studies section bg-light" ref={ref as React.RefObject<HTMLElement>}>
            <div className="container">
                <motion.div
                    className="section-header"
                    initial={{ opacity: 0, y: 30 }}
                    animate={isVisible ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.6 }}
                >
                    <h2 className="h2 section-title">Recent projects</h2>
                    <p className="section-subtitle">
                        Explore our portfolio of successful solar installations across Canada,
                        from residential rooftops to large-scale commercial systems.
                    </p>
                </motion.div>

                <div className="projects-grid">
                    {projects.map((project, index) => (
                        <motion.div
                            key={project.id}
                            className="project-card"
                            initial={{ opacity: 0, y: 40 }}
                            animate={isVisible ? { opacity: 1, y: 0 } : {}}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                            onClick={() => setSelectedProject(project)}
                        >
                            <div className="project-image">
                                <img
                                    src={project.image}
                                    alt={project.name}
                                    className="project-image-img"
                                />
                                <div className="project-overlay" />
                            </div>
                            <div className="project-content">
                                <span className={`project-badge project-badge-${project.type.toLowerCase()}`}>
                                    {project.type}
                                </span>
                                <h3 className="project-name">{project.name}</h3>
                                <div className="project-location">
                                    <MapPin size={14} />
                                    {project.location}
                                </div>
                                <div className="project-meta">
                                    <span><Zap size={14} /> {project.capacity}</span>
                                    <span><Leaf size={14} /> {project.co2}</span>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>

            <AnimatePresence>
                {selectedProject && (
                    <ProjectModal
                        project={selectedProject}
                        onClose={() => setSelectedProject(null)}
                    />
                )}
            </AnimatePresence>
        </section>
    );
}
