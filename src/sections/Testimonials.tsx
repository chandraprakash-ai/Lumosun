import { motion } from 'framer-motion';
import { Star, Quote } from 'lucide-react';
import { useScrollAnimation } from '../hooks/useScrollAnimation';
import './Testimonials.css';

const testimonials = [
    {
        name: 'Sarah Mitchell',
        role: 'Homeowner',
        location: 'Toronto, ON',
        quote: 'Lumosun made the entire process seamless. From the initial assessment to installation, everything was professional and on schedule. Our electricity bills dropped by 75% in the first month!',
        rating: 5,
        project: '10 kW Residential',
    },
    {
        name: 'Michael Chen',
        role: 'Business Owner',
        location: 'Vancouver, BC',
        quote: 'As a restaurant owner, energy costs were eating into our margins. Lumosun designed a system that not only saves us $1,800 monthly but also helps us market our commitment to sustainability.',
        rating: 5,
        project: '35 kW Commercial',
    },
    {
        name: 'Amanda Rodriguez',
        role: 'Property Manager',
        location: 'Calgary, AB',
        quote: 'Managing a condo complex means dealing with shared electricity costs. Lumosun\'s solution reduced our common area costs significantly. The tenants love that we\'re going green.',
        rating: 5,
        project: '60 kW Multi-Unit',
    },
    {
        name: 'David Thompson',
        role: 'Farmer',
        location: 'Regina, SK',
        quote: 'The ground-mounted system works perfectly for our farm. Even in Saskatchewan winters, we\'re generating power. The payback is on track, and the monitoring app is fantastic.',
        rating: 4,
        project: '120 kW Agricultural',
    },
];

function StarRating({ rating }: { rating: number }) {
    return (
        <div className="star-rating">
            {[...Array(5)].map((_, i) => (
                <Star
                    key={i}
                    size={16}
                    fill={i < rating ? 'var(--color-accent)' : 'none'}
                    color={i < rating ? 'var(--color-accent)' : 'var(--text-light)'}
                />
            ))}
        </div>
    );
}

export default function Testimonials() {
    const { ref, isVisible } = useScrollAnimation({ threshold: 0.1 });

    return (
        <section className="testimonials section bg-light" ref={ref as React.RefObject<HTMLElement>}>
            <div className="container">
                <motion.div
                    className="section-header"
                    initial={{ opacity: 0, y: 30 }}
                    animate={isVisible ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.6 }}
                >
                    <h2 className="h2 section-title">What our clients say</h2>
                    <p className="section-subtitle">
                        Don't just take our word for it. Hear from homeowners and businesses
                        across Canada who made the switch to solar with Lumosun.
                    </p>
                </motion.div>

                <div className="testimonials-grid">
                    {testimonials.map((testimonial, index) => (
                        <motion.div
                            key={index}
                            className="testimonial-card"
                            initial={{ opacity: 0, y: 40 }}
                            animate={isVisible ? { opacity: 1, y: 0 } : {}}
                            transition={{ duration: 0.5, delay: index * 0.12 }}
                        >
                            <Quote className="quote-icon" size={32} />
                            <p className="testimonial-quote">{testimonial.quote}</p>
                            <StarRating rating={testimonial.rating} />
                            <div className="testimonial-author">
                                <div className="author-avatar">
                                    {testimonial.name.split(' ').map(n => n[0]).join('')}
                                </div>
                                <div className="author-info">
                                    <div className="author-name">{testimonial.name}</div>
                                    <div className="author-role">{testimonial.role} • {testimonial.location}</div>
                                </div>
                            </div>
                            <div className="testimonial-project">
                                <span>{testimonial.project}</span>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
