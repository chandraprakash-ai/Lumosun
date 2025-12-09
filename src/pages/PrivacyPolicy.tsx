import Header from '../components/Header';
import Footer from '../components/Footer';

export default function PrivacyPolicy() {
    return (
        <div className="privacy-policy-page">
            <Header />
            <main className="container section" style={{ paddingTop: '8rem', minHeight: '60vh' }}>
                <h1 className="h1 mb-6">Privacy Policy</h1>
                <div className="prose" style={{ maxWidth: '800px' }}>
                    <p className="mb-4">Last updated: {new Date().toLocaleDateString()}</p>

                    <h2 className="h3 mb-4 mt-8">1. Introduction</h2>
                    <p className="mb-4">
                        Lumosun Energy ("we," "our," or "us") respects your privacy and is committed to protecting your personal data.
                        This privacy policy will inform you as to how we look after your personal data when you visit our website
                        and tell you about your privacy rights and how the law protects you.
                    </p>

                    <h2 className="h3 mb-4 mt-8">2. Data We Collect</h2>
                    <p className="mb-4">
                        We may collect, use, store and transfer different kinds of personal data about you which we have grouped together follows:
                    </p>
                    <ul className="list-disc pl-6 mb-4" style={{ listStyleType: 'disc', paddingLeft: '1.5rem' }}>
                        <li className="mb-2">Identity Data includes first name, last name, username or similar identifier.</li>
                        <li className="mb-2">Contact Data includes billing address, delivery address, email address and telephone numbers.</li>
                        <li className="mb-2">Technical Data includes internet protocol (IP) address, browser type and version, time zone setting and location.</li>
                    </ul>

                    <h2 className="h3 mb-4 mt-8">3. How We Use Your Data</h2>
                    <p className="mb-4">
                        We will only use your personal data when the law allows us to. Most commonly, we will use your personal data in the following circumstances:
                    </p>
                    <ul className="list-disc pl-6 mb-4" style={{ listStyleType: 'disc', paddingLeft: '1.5rem' }}>
                        <li className="mb-2">To provide the solar assessment services you requested.</li>
                        <li className="mb-2">To manage our relationship with you.</li>
                        <li className="mb-2">To improve our website, products/services, marketing or customer relationships.</li>
                    </ul>

                    <h2 className="h3 mb-4 mt-8">4. Contact Us</h2>
                    <p className="mb-4">
                        If you have any questions about this privacy policy or our privacy practices, please contact us at:
                        <a href="mailto:privacy@lumosunenergy.com" className="text-primary"> privacy@lumosunenergy.com</a>
                    </p>
                </div>
            </main>
            <Footer />
        </div>
    );
}
