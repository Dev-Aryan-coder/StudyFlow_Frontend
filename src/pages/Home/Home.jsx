import React from 'react';
import MinimalHero from '../../components/MinimalHero/MinimalHero';
import SEO from '../../components/SEO/SEO';
import './Home.css';

export function Home() {
  const homeSchema = {
    "@context": "https://schema.org",
    "@type": "SoftwareApplication",
    "name": "StudyFlow",
    "url": "https://studyflow.in/",
    "applicationCategory": "EducationalApplication, BusinessApplication",
    "operatingSystem": "All Web Browsers",
    "description": "Visual coaching website IDE and student operations engine. Live batch seat sync, sub-120ms WhatsApp admission router, and QR attendance tracking.",
    "offers": {
      "@type": "AggregateOffer",
      "priceCurrency": "INR",
      "lowPrice": "299",
      "highPrice": "899",
      "priceValidUntil": "2027-12-31"
    },
    "featureList": [
      "Visual Website IDE with MongoDB real-time schema sync",
      "Instant WhatsApp Admission Lead Router (120ms)",
      "Smart QR Code Student Attendance Check-In Portal",
      "Verified Topper & Board Percentile Showcase Wall",
      "Live Batch Seats Scarcity Tracker",
      "DPP & Formula Hub Lead Magnet Download Gate",
      "Automated Fee Management & Defaulter Tracking Engine"
    ]
  };

  return (
    <div className="home-page-container">
      <SEO
        title="StudyFlow — Visual Coaching Website Builder & Student Operations Engine"
        description="Design, customize, and launch your coaching institute website in minutes. Includes instant WhatsApp admission routing, QR code attendance tracking, verified topper showcase, and high-speed cloud hosting."
        keywords={[
          "coaching institute website builder",
          "tuition class website maker",
          "coaching admission software",
          "WhatsApp lead router for coaching",
          "student QR attendance portal",
          "verified topper showcase website",
          "coaching management engine India",
          "tuition fee defaulter tracker",
          "IIT JEE NEET coaching website portal",
          "studyflow coaching engine"
        ]}
        canonical="https://studyflow.in/"
        jsonLd={homeSchema}
      />
      <MinimalHero />
    </div>
  );
}

export default Home;
