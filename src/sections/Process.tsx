import { motion } from 'framer-motion';
import { ClipboardCheck, PencilRuler, FileCheck, Hammer, BarChart3 } from 'lucide-react';
import { useScrollAnimation } from '../hooks/useScrollAnimation';
import './Process.css';

const steps = [
    {
        icon: ClipboardCheck,
        title: 'Site Assessment',
        description: 'Our engineers visit your property to evaluate roof condition, shading, and energy consumption patterns.',
    },
    {
        icon: PencilRuler,
        title: 'System Design',
        description: 'We create a custom solar solution optimized for your specific needs and maximum energy production.',
    },
    {
        icon: FileCheck,
        title: 'Proposal & Approval',
        description: 'Receive a detailed proposal with costs, savings projections, and financing options for your approval.',
    },
    {
        icon: Hammer,
        title: 'Installation',
        description: 'Our certified installers complete the installation in 1-3 days, with minimal disruption to your routine.',
    },
    {
        icon: BarChart3,
        title: 'Monitoring & Support',
        description: 'Track your system performance 24/7 and enjoy ongoing support throughout your solar journey.',
    },
];

export default function Process() {
    const { ref, isVisible } = useScrollAnimation({ threshold: 0.1 });

    return (
        <section className="process section" ref={ref as React.RefObject<HTMLElement>}>
            <div className="container">
                <motion.div
                    className="section-header"
                    initial={{ opacity: 0, y: 30 }}
                    animate={isVisible ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.6 }}
                >
                    <h2 className="h2 section-title">How we work</h2>
                    <p className="section-subtitle">
                        Our streamlined 5-step process makes going solar simple, transparent,
                        and hassle-free from start to finish.
                    </p>
                </motion.div>

                <div className="process-timeline">
                    {steps.map((step, index) => (
                        <motion.div
                            key={index}
                            className="process-step"
                            initial={{ opacity: 0, y: 40 }}
                            animate={isVisible ? { opacity: 1, y: 0 } : {}}
                            transition={{ duration: 0.5, delay: index * 0.15 }}
                        >
                            <div className="step-number">{index + 1}</div>
                            <div className="step-icon-wrapper">
                                <step.icon className="step-icon" size={24} />
                            </div>
                            <h3 className="step-title">{step.title}</h3>
                            <p className="step-description">{step.description}</p>
                            {index < steps.length - 1 && <div className="step-connector" />}
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
