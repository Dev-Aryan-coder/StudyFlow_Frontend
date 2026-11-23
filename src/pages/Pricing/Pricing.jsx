import React from 'react';
import PricingSection from '../../components/PricingSection/PricingSection';
import './Pricing.css';

export function Pricing() {
  return (
    <div className="w-full min-h-screen pt-12 bg-white dark:bg-black">
      <PricingSection />
    </div>
  );
}

export default Pricing;
