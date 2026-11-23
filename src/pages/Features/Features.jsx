import React from 'react';
import FeaturesSection from '../../components/FeaturesSection/FeaturesSection';
import ProcessStepsSection from '../../components/ProcessStepsSection/ProcessStepsSection';
import './Features.css';

export function Features() {
  return (
    <div className="features-page-root">
      <FeaturesSection />
      <ProcessStepsSection />
    </div>
  );
}

export default Features;
