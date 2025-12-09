import { useState } from 'react';
import { motion } from 'framer-motion';
import { Calculator as CalcIcon, Sun, DollarSign, Clock, Leaf } from 'lucide-react';
import { useScrollAnimation } from '../hooks/useScrollAnimation';
import './Calculator.css';

const provinces = [
    { name: 'Ontario', psh: 4.2 },
    { name: 'British Columbia', psh: 3.8 },
    { name: 'Alberta', psh: 4.5 },
    { name: 'Quebec', psh: 4.0 },
    { name: 'Saskatchewan', psh: 4.6 },
    { name: 'Manitoba', psh: 4.3 },
    { name: 'Nova Scotia', psh: 3.9 },
    { name: 'New Brunswick', psh: 3.8 },
    { name: 'Newfoundland', psh: 3.5 },
    { name: 'Prince Edward Island', psh: 3.9 },
];

interface CalculationResult {
    systemSize: number;
    billReduction: number;
    paybackYears: string;
    annualSavings: number;
    co2Avoided: number;
}

export default function Calculator() {
    const { ref, isVisible } = useScrollAnimation({ threshold: 0.1 });
    const [monthlyBill, setMonthlyBill] = useState('');
    const [province, setProvince] = useState('');
    const [result, setResult] = useState<CalculationResult | null>(null);
    const [isCalculating, setIsCalculating] = useState(false);

    const calculateSolar = () => {
        if (!monthlyBill || !province) return;

        setIsCalculating(true);

        // Simulate calculation delay for UX
        setTimeout(() => {
            const bill = parseFloat(monthlyBill);
            const avgRate = 0.13; // Average rate per kWh in CAD
            const monthlyKwh = bill / avgRate;
            const selectedProvince = provinces.find(p => p.name === province);
            const psh = selectedProvince?.psh || 4.0;

            // System size calculation
            const systemSize = (monthlyKwh * 12) / (psh * 365 * 0.8); // 80% efficiency factor

            // Savings calculations
            const billReduction = Math.min(85, 60 + (systemSize * 2)); // 60-85% reduction
            const annualSavings = bill * 12 * (billReduction / 100);

            // Payback calculation (average $3/W installed cost)
            const systemCost = systemSize * 1000 * 2.5; // $2.50/W average
            const paybackYears = systemCost / annualSavings;

            // CO2 calculation (0.5 kg CO2 per kWh in Canada average)
            const annualProduction = systemSize * psh * 365 * 0.8;
            const co2Avoided = annualProduction * 0.5 / 1000; // in tonnes

            setResult({
                systemSize: Math.round(systemSize * 10) / 10,
                billReduction: Math.round(billReduction),
                paybackYears: paybackYears < 5 ? '4-5' : paybackYears < 7 ? '5-7' : '7-9',
                annualSavings: Math.round(annualSavings),
                co2Avoided: Math.round(co2Avoided * 10) / 10,
            });

            setIsCalculating(false);
        }, 800);
    };

    return (
        <section id="calculator" className="calculator section" ref={ref as React.RefObject<HTMLElement>}>
            <div className="container">
                <div className="calculator-wrapper">
                    <motion.div
                        className="calculator-content"
                        initial={{ opacity: 0, x: -30 }}
                        animate={isVisible ? { opacity: 1, x: 0 } : {}}
                        transition={{ duration: 0.6 }}
                    >
                        <h2 className="h2 calculator-title">
                            Estimate your solar potential
                        </h2>
                        <p className="calculator-description">
                            Get a quick estimate of the solar system size you need and potential savings.
                            Enter your monthly electricity bill and province to get started.
                        </p>

                        <div className="calculator-form">
                            <div className="form-group">
                                <label className="form-label" htmlFor="monthly-bill">
                                    Monthly Electricity Bill ($)
                                </label>
                                <div className="input-with-icon">
                                    <DollarSign size={18} className="input-icon" />
                                    <input
                                        type="number"
                                        id="monthly-bill"
                                        className="form-input"
                                        placeholder="e.g., 150"
                                        value={monthlyBill}
                                        onChange={(e) => setMonthlyBill(e.target.value)}
                                        min="0"
                                    />
                                </div>
                            </div>

                            <div className="form-group">
                                <label className="form-label" htmlFor="province">
                                    Province
                                </label>
                                <select
                                    id="province"
                                    className="form-select"
                                    value={province}
                                    onChange={(e) => setProvince(e.target.value)}
                                >
                                    <option value="">Select your province</option>
                                    {provinces.map((p) => (
                                        <option key={p.name} value={p.name}>
                                            {p.name}
                                        </option>
                                    ))}
                                </select>
                            </div>

                            <button
                                className="btn btn-primary calculator-btn"
                                onClick={calculateSolar}
                                disabled={!monthlyBill || !province || isCalculating}
                            >
                                {isCalculating ? (
                                    <>Calculating...</>
                                ) : (
                                    <>
                                        <CalcIcon size={18} />
                                        Estimate System Size
                                    </>
                                )}
                            </button>
                        </div>
                    </motion.div>

                    <motion.div
                        className="calculator-results"
                        initial={{ opacity: 0, x: 30 }}
                        animate={isVisible ? { opacity: 1, x: 0 } : {}}
                        transition={{ duration: 0.6, delay: 0.2 }}
                    >
                        {result ? (
                            <motion.div
                                className="results-card"
                                initial={{ opacity: 0, scale: 0.95 }}
                                animate={{ opacity: 1, scale: 1 }}
                                transition={{ duration: 0.4 }}
                            >
                                <h3 className="results-title">Your Solar Estimate</h3>

                                <div className="results-grid">
                                    <div className="result-item">
                                        <Sun className="result-icon" size={24} />
                                        <div className="result-value">{result.systemSize} kW</div>
                                        <div className="result-label">Recommended System</div>
                                    </div>

                                    <div className="result-item">
                                        <DollarSign className="result-icon" size={24} />
                                        <div className="result-value">${result.annualSavings}</div>
                                        <div className="result-label">Annual Savings</div>
                                    </div>

                                    <div className="result-item">
                                        <Clock className="result-icon" size={24} />
                                        <div className="result-value">{result.paybackYears} years</div>
                                        <div className="result-label">Payback Period</div>
                                    </div>

                                    <div className="result-item">
                                        <Leaf className="result-icon" size={24} />
                                        <div className="result-value">{result.co2Avoided} tonnes</div>
                                        <div className="result-label">CO₂ Avoided/Year</div>
                                    </div>
                                </div>

                                <div className="results-note">
                                    <strong>Up to {result.billReduction}% bill reduction</strong>
                                    <p>This is an estimate based on average rates. Get a free site assessment for an accurate quote.</p>
                                </div>

                                <a href="#contact" className="btn btn-accent results-cta">
                                    Get Your Free Assessment
                                </a>
                            </motion.div>
                        ) : (
                            <div className="results-placeholder">
                                <div className="placeholder-icon">
                                    <Sun size={48} />
                                </div>
                                <h3>Your Results Will Appear Here</h3>
                                <p>Enter your monthly bill and province to see your personalized solar estimate.</p>
                            </div>
                        )}
                    </motion.div>
                </div>
            </div>
        </section>
    );
}
