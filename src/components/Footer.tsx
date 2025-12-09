import { Sun, Linkedin, Instagram, Mail, Phone, MapPin } from 'lucide-react';
import './Footer.css';

const quickLinks = [
    { name: 'Solutions', href: '#solutions' },
    { name: 'Case Studies', href: '#case-studies' },
    { name: 'About Us', href: '#about' },
    { name: 'Calculator', href: '#calculator' },
    { name: 'Contact', href: '#contact' },
];

const services = [
    { name: 'Residential Solar', href: '#solutions' },
    { name: 'Commercial Solar', href: '#solutions' },
    { name: 'O&M Services', href: '#solutions' },
    { name: 'Solar Cleaning', href: '#solutions' },
];

export default function Footer() {
    const handleNavClick = (href: string) => {
        const element = document.querySelector(href);
        if (element) {
            element.scrollIntoView({ behavior: 'smooth' });
        }
    };

    return (
        <footer className="footer">
            <div className="container">
                <div className="footer-grid">
                    <div className="footer-brand">
                        <a href="#home" className="footer-logo" onClick={() => handleNavClick('#home')}>
                            <Sun className="footer-logo-icon" />
                            <span>Lumosun Energy</span>
                        </a>
                        <p className="footer-description">
                            Powering Canada's transition to clean energy with smart solar solutions.
                            We design, install, and maintain solar systems that save money and the planet.
                        </p>
                        <div className="footer-social">
                            <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="social-link" aria-label="LinkedIn">
                                <Linkedin size={20} />
                            </a>
                            <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="social-link" aria-label="Instagram">
                                <Instagram size={20} />
                            </a>
                        </div>
                    </div>

                    <div className="footer-links-section">
                        <h4 className="footer-heading">Quick Links</h4>
                        <ul className="footer-links">
                            {quickLinks.map((link) => (
                                <li key={link.name}>
                                    <a
                                        href={link.href}
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
                    </div>

                    <div className="footer-links-section">
                        <h4 className="footer-heading">Services</h4>
                        <ul className="footer-links">
                            {services.map((link) => (
                                <li key={link.name}>
                                    <a
                                        href={link.href}
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
                    </div>

                    <div className="footer-links-section">
                        <h4 className="footer-heading">Contact Us</h4>
                        <ul className="footer-contact">
                            <li>
                                <Phone size={16} />
                                <a href="tel:+14165551234">+1 (416) 555-1234</a>
                            </li>
                            <li>
                                <Mail size={16} />
                                <a href="mailto:hello@lumosunenergy.com">hello@lumosunenergy.com</a>
                            </li>
                            <li>
                                <MapPin size={16} />
                                <span>100 King Street West<br />Toronto, ON M5X 1A9</span>
                            </li>
                        </ul>
                    </div>
                </div>

                <div className="footer-bottom">
                    <p>&copy; {new Date().getFullYear()} Lumosun Energy. All rights reserved.</p>
                    <div className="footer-legal">
                        <a href="/privacy-policy">Privacy Policy</a>
                        <a href="/terms">Terms of Service</a>
                    </div>
                </div>
            </div>
        </footer>
    );
}
