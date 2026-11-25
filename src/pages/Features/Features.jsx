import React from 'react';
import FeaturesSection from '../../components/FeaturesSection/FeaturesSection';
import ProcessStepsSection from '../../components/ProcessStepsSection/ProcessStepsSection';
import SEO from '../../components/SEO/SEO';
import './Features.css';

export function Features() {
  const featuresSchema = {
    "@context": "https://schema.org",
    "@type": "ItemList",
    "name": "StudyFlow Coaching Components & Digital Features",
    "description": "Suite of modular website blocks and student management features engineered for tuition institutes.",
    "itemListElement": [
      {
        "@type": "ListItem",
        "position": 1,
        "name": "Hero & Admissions Banner Block",
        "description": "High-converting header with live batch enrollment counter and instant demo booking form."
      },
      {
        "@type": "ListItem",
        "position": 2,
        "name": "Instant WhatsApp Admission Lead Router",
        "description": "Sub-120ms lead routing straight to counselor or director on WhatsApp."
      },
      {
        "@type": "ListItem",
        "position": 3,
        "name": "Smart QR Code Attendance Check-In Portal",
        "description": "Kiosk camera check-in with automatic arrival confirmations sent to parents."
      },
      {
        "@type": "ListItem",
        "position": 4,
        "name": "Verified Toppers & Faculty Credentials Showcase",
        "description": "Highlight national ranks, board percentiles, and verified mentor certifications."
      },
      {
        "@type": "ListItem",
        "position": 5,
        "name": "Live Batch Seats Scarcity Tracker",
        "description": "Real-time MongoDB seat countdown that creates healthy admission urgency."
      },
      {
        "@type": "ListItem",
        "position": 6,
        "name": "DPP & Formula Hub Lead Magnet Gate",
        "description": "Exchange test papers and formula sheets for qualified student lead inquiries."
      }
    ]
  };

  return (
    <div className="features-page-root">
      <SEO
        title="Features — Visual Website IDE & Coaching Operations Engine | StudyFlow"
        description="Explore StudyFlow coaching features: Drag-and-drop Visual Website IDE, sub-120ms WhatsApp Admission Router, Smart QR Attendance Check-In, Live Batch Seats Sync, and DPP Formula Lead Gate."
        keywords={[
          "coaching website features",
          "visual website IDE",
          "WhatsApp lead router for coaching",
          "QR code attendance check-in",
          "live batch seats counter",
          "topper wall for coaching",
          "coaching components",
          "tuition lead management software",
          "studyflow features"
        ]}
        canonical="https://studyflow.in/features"
        jsonLd={featuresSchema}
      />
      <FeaturesSection />
      <ProcessStepsSection />
    </div>
  );
}

export default Features;
