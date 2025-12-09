import { motion } from 'framer-motion';
import { Home, Building, Wrench, Sparkles, ArrowRight } from 'lucide-react';
import { useScrollAnimation } from '../hooks/useScrollAnimation';
import './Solutions.css';

const solutions = [
    {
        icon: Home,
        title: 'Residential Rooftop Solar',
        description: 'Custom-designed solar systems for Canadian homes. Reduce your electricity bills by up to 70% while increasing your property value.',
        features: ['Net metering eligible', 'Provincial rebates', '25-year warranty'],
    },
    {
        icon: Building,
        title: 'Commercial & Industrial Solar',
        description: 'Large-scale solar installations for businesses, warehouses, and industrial facilities. Achieve energy independence and meet sustainability goals.',
        features: ['Tax incentives', 'ROI within 5 years', 'Carbon credits'],
    },
    {
        icon: Wrench,
        title: 'Operations & Maintenance',
        description: 'Comprehensive O&M services to ensure your solar system operates at peak efficiency throughout its lifetime.',
        features: ['24/7 monitoring', 'Preventive maintenance', 'Performance reports'],
    },
    {
        icon: Sparkles,
        title: 'Solar Panel Cleaning',
        description: 'Professional cleaning services to maintain optimal energy output. Dirty panels can lose up to 25% efficiency.',
        features: ['Eco-friendly cleaning', 'Seasonal packages', 'Inspection included'],
    },
];

export default function Solutions() {
    const { ref, isVisible } = useScrollAnimation({ threshold: 0.1 });

    return (
        <section id="solutions" className="solutions section" ref={ref as React.RefObject<HTMLElement>}>
            <div className="container">
                <motion.div
                    className="section-header"
                    initial={{ opacity: 0, y: 30 }}
                    animate={isVisible ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.6 }}
                >
                    <h2 className="h2 section-title">Solar solutions for every need</h2>
                    <p className="section-subtitle">
                        From residential rooftops to commercial facilities, we have the expertise
                        to power your transition to clean energy.
                    </p>
                </motion.div>

                <div className="solutions-grid">
                    {solutions.map((solution, index) => (
                        <motion.div
                            key={index}
                            className="solution-card"
                            initial={{ opacity: 0, y: 40 }}
                            animate={isVisible ? { opacity: 1, y: 0 } : {}}
                            transition={{ duration: 0.5, delay: index * 0.15 }}
                        >
                            <div className="solution-icon-wrapper">
                                <solution.icon className="solution-icon" size={28} />
                            </div>
                            <h3 className="solution-title">{solution.title}</h3>
                            <p className="solution-description">{solution.description}</p>
                            <ul className="solution-features">
                                {solution.features.map((feature, i) => (
                                    <li key={i}>{feature}</li>
                                ))}
                            </ul>
                            <a href="#contact" className="solution-link">
                                Learn more <ArrowRight size={16} />
                            </a>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
