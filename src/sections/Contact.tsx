import { useState } from 'react';
import { motion } from 'framer-motion';
import { Phone, Mail, MapPin, Send, CheckCircle } from 'lucide-react';
import { useScrollAnimation } from '../hooks/useScrollAnimation';
import './Contact.css';

export default function Contact() {
    const { ref, isVisible } = useScrollAnimation({ threshold: 0.1 });
    const [formState, setFormState] = useState({
        name: '',
        email: '',
        phone: '',
        city: '',
        propertyType: 'Residential',
        monthlyBill: '',
        message: '',
    });
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [isSuccess, setIsSuccess] = useState(false);

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        setIsSubmitting(true);

        // Simulate API call
        setTimeout(() => {
            console.log('Form submitted:', formState);
            setIsSubmitting(false);
            setIsSuccess(true);
            setFormState({
                name: '',
                email: '',
                phone: '',
                city: '',
                propertyType: 'Residential',
                monthlyBill: '',
                message: '',
            });

            // Reset success message after 5 seconds
            setTimeout(() => setIsSuccess(false), 5000);
        }, 1500);
    };

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
        setFormState({
            ...formState,
            [e.target.name]: e.target.value,
        });
    };

    return (
        <section id="contact" className="contact section" ref={ref as React.RefObject<HTMLElement>}>
            <div className="container">
                <motion.div
                    className="section-header"
                    initial={{ opacity: 0, y: 30 }}
                    animate={isVisible ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.6 }}
                >
                    <h2 className="h2 section-title">Request a solar consultation</h2>
                    <p className="section-subtitle">
                        Ready to start saving? Fill out the form below and one of our solar experts
                        will get back to you within 24 hours with a free assessment.
                    </p>
                </motion.div>

                <div className="contact-grid">
                    <motion.div
                        className="contact-info"
                        initial={{ opacity: 0, x: -30 }}
                        animate={isVisible ? { opacity: 1, x: 0 } : {}}
                        transition={{ duration: 0.6, delay: 0.2 }}
                    >
                        <div className="info-card">
                            <h3>Get in touch</h3>
                            <p>
                                Have questions about solar? Our team is here to help you navigate
                                your transition to clean energy.
                            </p>

                            <ul className="contact-details">
                                <li>
                                    <div className="contact-icon">
                                        <Phone size={20} />
                                    </div>
                                    <div>
                                        <span className="contact-label">Call Us</span>
                                        <a href="tel:+14165551234" className="contact-value">+1 (416) 555-1234</a>
                                    </div>
                                </li>
                                <li>
                                    <div className="contact-icon">
                                        <Mail size={20} />
                                    </div>
                                    <div>
                                        <span className="contact-label">Email Us</span>
                                        <a href="mailto:hello@lumosunenergy.com" className="contact-value">hello@lumosunenergy.com</a>
                                    </div>
                                </li>
                                <li>
                                    <div className="contact-icon">
                                        <MapPin size={20} />
                                    </div>
                                    <div>
                                        <span className="contact-label">Visit Us</span>
                                        <span className="contact-value">100 King Street West<br />Toronto, ON M5X 1A9</span>
                                    </div>
                                </li>
                            </ul>

                            <div className="contact-hours">
                                <h4>Business Hours</h4>
                                <p>Monday - Friday: 9:00 AM - 6:00 PM</p>
                                <p>Saturday: 10:00 AM - 4:00 PM</p>
                                <p>Sunday: Closed</p>
                            </div>
                        </div>
                    </motion.div>

                    <motion.div
                        className="contact-form-wrapper"
                        initial={{ opacity: 0, x: 30 }}
                        animate={isVisible ? { opacity: 1, x: 0 } : {}}
                        transition={{ duration: 0.6, delay: 0.3 }}
                    >
                        {isSuccess ? (
                            <motion.div
                                className="success-message"
                                initial={{ opacity: 0, scale: 0.9 }}
                                animate={{ opacity: 1, scale: 1 }}
                            >
                                <CheckCircle size={64} className="success-icon" />
                                <h3>Thank you!</h3>
                                <p>We've received your request and will be in touch shortly.</p>
                                <button
                                    className="btn btn-primary mt-4"
                                    onClick={() => setIsSuccess(false)}
                                >
                                    Send another message
                                </button>
                            </motion.div>
                        ) : (
                            <form className="contact-form" onSubmit={handleSubmit}>
                                <div className="form-row">
                                    <div className="form-group">
                                        <label htmlFor="name" className="form-label">Full Name</label>
                                        <input
                                            type="text"
                                            id="name"
                                            name="name"
                                            className="form-input"
                                            required
                                            value={formState.name}
                                            onChange={handleChange}
                                            placeholder="John Doe"
                                        />
                                    </div>
                                    <div className="form-group">
                                        <label htmlFor="email" className="form-label">Email Address</label>
                                        <input
                                            type="email"
                                            id="email"
                                            name="email"
                                            className="form-input"
                                            required
                                            value={formState.email}
                                            onChange={handleChange}
                                            placeholder="john@example.com"
                                        />
                                    </div>
                                </div>

                                <div className="form-row">
                                    <div className="form-group">
                                        <label htmlFor="phone" className="form-label">Phone Number</label>
                                        <input
                                            type="tel"
                                            id="phone"
                                            name="phone"
                                            className="form-input"
                                            required
                                            value={formState.phone}
                                            onChange={handleChange}
                                            placeholder="(555) 123-4567"
                                        />
                                    </div>
                                    <div className="form-group">
                                        <label htmlFor="city" className="form-label">City / Province</label>
                                        <input
                                            type="text"
                                            id="city"
                                            name="city"
                                            className="form-input"
                                            required
                                            value={formState.city}
                                            onChange={handleChange}
                                            placeholder="Toronto, ON"
                                        />
                                    </div>
                                </div>

                                <div className="form-row">
                                    <div className="form-group">
                                        <label htmlFor="propertyType" className="form-label">Property Type</label>
                                        <select
                                            id="propertyType"
                                            name="propertyType"
                                            className="form-select"
                                            value={formState.propertyType}
                                            onChange={handleChange}
                                        >
                                            <option value="Residential">Residential</option>
                                            <option value="Commercial">Commercial</option>
                                            <option value="Industrial">Industrial</option>
                                            <option value="Agricultural">Agricultural</option>
                                        </select>
                                    </div>
                                    <div className="form-group">
                                        <label htmlFor="monthlyBill" className="form-label">Approx. Monthly Bill ($)</label>
                                        <input
                                            type="number"
                                            id="monthlyBill"
                                            name="monthlyBill"
                                            className="form-input"
                                            value={formState.monthlyBill}
                                            onChange={handleChange}
                                            placeholder="e.g. 150"
                                        />
                                    </div>
                                </div>

                                <div className="form-group">
                                    <label htmlFor="message" className="form-label">Message (Optional)</label>
                                    <textarea
                                        id="message"
                                        name="message"
                                        className="form-textarea"
                                        value={formState.message}
                                        onChange={handleChange}
                                        placeholder="Tell us about your energy goals..."
                                    ></textarea>
                                </div>

                                <button
                                    type="submit"
                                    className="btn btn-primary submit-btn"
                                    disabled={isSubmitting}
                                >
                                    {isSubmitting ? (
                                        'Sending...'
                                    ) : (
                                        <>
                                            Submit Request <Send size={18} />
                                        </>
                                    )}
                                </button>
                            </form>
                        )}
                    </motion.div>
                </div>
            </div>
        </section>
    );
}
