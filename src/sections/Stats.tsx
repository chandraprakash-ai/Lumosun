import { motion } from 'framer-motion';
import { Home, Building2, Zap, TrendingUp } from 'lucide-react';
import { useScrollAnimation } from '../hooks/useScrollAnimation';
import './Stats.css';

const stats = [
    {
        icon: Home,
        value: '100+',
        label: 'Residential Projects',
    },
    {
        icon: Building2,
        value: '30+',
        label: 'Commercial Sites',
    },
    {
        icon: Zap,
        value: '15+ MW',
        label: 'Installed Capacity',
    },
    {
        icon: TrendingUp,
        value: '5-7 Years',
        label: 'Average Payback',
    },
];

export default function Stats() {
    const { ref, isVisible } = useScrollAnimation({ threshold: 0.2 });

    return (
        <section className="stats" ref={ref as React.RefObject<HTMLElement>}>
            <div className="container">
                <div className="stats-grid">
                    {stats.map((stat, index) => (
                        <motion.div
                            key={index}
                            className="stat-item"
                            initial={{ opacity: 0, y: 30 }}
                            animate={isVisible ? { opacity: 1, y: 0 } : {}}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                        >
                            <stat.icon className="stat-icon" size={28} />
                            <div className="stat-content">
                                <span className="stat-value">{stat.value}</span>
                                <span className="stat-label">{stat.label}</span>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
