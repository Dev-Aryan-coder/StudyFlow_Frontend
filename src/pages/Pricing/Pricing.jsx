import React from 'react';
import PricingSection from '../../components/PricingSection/PricingSection';
import FaqsWithDashedLines from '../../components/ui/faqs-with-dashed-lines';
import SEO from '../../components/SEO/SEO';
import './Pricing.css';

export function Pricing() {
  const pricingSchema = {
    "@context": "https://schema.org",
    "@type": "Product",
    "name": "StudyFlow Coaching Website & Management Plans",
    "description": "Affordable website hosting, visual IDE components, and student management for coaching centers with a flat ₹100 new institute discount.",
    "brand": {
      "@type": "Brand",
      "name": "StudyFlow"
    },
    "offers": [
      {
        "@type": "Offer",
        "name": "Starter Tuition Plan",
        "price": "299",
        "priceCurrency": "INR",
        "description": "3 hosted websites, free domain for 1 year, 20 GB SSD storage, and student attendance tracking."
      },
      {
        "@type": "Offer",
        "name": "Coaching Academy Plan (Most Popular)",
        "price": "599",
        "priceCurrency": "INR",
        "description": "Unlimited websites, free custom domain + WHOIS privacy, 50 GB NVMe storage, instant WhatsApp admission router, and smart QR attendance."
      },
      {
        "@type": "Offer",
        "name": "Institute Premier Plan",
        "price": "899",
        "priceCurrency": "INR",
        "description": "100% all components unlocked, 100 GB NVMe storage, multi-branch support, automated fee engine, and dedicated onboarding."
      }
    ]
  };

  return (
    <div className="w-full min-h-screen pt-12 bg-white dark:bg-black">
      <SEO
        title="Pricing Plans — Affordable Coaching Website Hosting from ₹299/mo | StudyFlow"
        description="Transparent pricing for coaching institutes. Starter Tuition (₹299/mo), Coaching Academy (₹599/mo), and Institute Premier (₹899/mo). Includes flat ₹100 welcome discount, free custom domain, and cloud hosting."
        keywords={[
          "coaching website pricing",
          "tuition website cost",
          "coaching software pricing India",
          "flat 100 discount coaching software",
          "coaching academy hosting",
          "studyflow pricing plans",
          "affordable coaching portal",
          "tuition management cost"
        ]}
        canonical="https://studyflow.in/pricing"
        jsonLd={pricingSchema}
      />
      <PricingSection />
      <FaqsWithDashedLines />
    </div>
  );
}

export default Pricing;
