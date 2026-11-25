import React from 'react';
import { motion } from 'framer-motion';
import {
  Users,
  Award,
  ShieldCheck,
  Zap,
  Globe,
  Heart,
  BookOpen,
  ArrowRight,
  CheckCircle2,
  Sparkles,
  Building,
  Target
} from 'lucide-react';
import SEO from '../../components/SEO/SEO';
import './AboutUs.css';

export function AboutUs() {
  const aboutSchema = {
    "@context": "https://schema.org",
    "@type": "AboutPage",
    "name": "About StudyFlow",
    "description": "StudyFlow empowers independent tutors, tuition classes, and coaching academies with visual website engines and student operations software.",
    "url": "https://studyflow.in/about-us",
    "mainEntity": {
      "@type": "Organization",
      "name": "StudyFlow Inc.",
      "url": "https://studyflow.in",
      "logo": "https://studyflow.in/favicon.svg",
      "foundingDate": "2026",
      "description": "The Hyperlocal Coaching & Tuition Class Engine built for Indian educators."
    }
  };

  const pillars = [
    {
      icon: Target,
      title: 'Coaching-First Architecture',
      desc: 'Generic website builders fail coaching institutes. StudyFlow is purposely engineered for batch seats, DPP downloads, topper showcases, and parent communication.'
    },
    {
      icon: Zap,
      title: 'Zero-Code Visual Simplicity',
      desc: 'Educators should spend their time teaching, not wrestling with code. Our Visual Website IDE lets you customize and preview components live in under 2 minutes.'
    },
    {
      icon: ShieldCheck,
      title: '120ms WhatsApp Lead Routing',
      desc: 'Parent inquiries lose 80% interest if not contacted within 5 minutes. Our webhook engine routes demo bookings directly to counselors instantly on WhatsApp.'
    },
    {
      icon: Globe,
      title: 'Enterprise Cloud at Hyperlocal Rates',
      desc: 'We bring AWS enterprise cloud hosting, automated SSL, and global edge CDN caching to every neighborhood coaching academy starting at just ₹299/mo.'
    }
  ];

  return (
    <div className="w-full min-h-screen bg-white dark:bg-black text-neutral-900 dark:text-neutral-100 overflow-hidden">
      <SEO
        title="About Us — Digitizing India's Independent Coaching Institutes & Tutors | StudyFlow"
        description="Learn how StudyFlow is empowering independent educators, tuition teachers, and coaching academies across India with visual website builders, instant WhatsApp lead routers, and QR attendance portals."
        keywords={[
          "about studyflow",
          "coaching institute technology India",
          "private tutor website engine",
          "educational SaaS India",
          "tuition management mission",
          "hyperlocal coaching digitalization",
          "independent tutor software"
        ]}
        canonical="https://studyflow.in/about-us"
        jsonLd={aboutSchema}
      />

      {/* Hero Section */}
      <section className="relative w-full py-16 sm:py-24 bg-neutral-50/60 dark:bg-neutral-950 border-b border-neutral-200/80 dark:border-neutral-800">
        <div className="relative z-10 w-full max-w-[96vw] lg:max-w-[88vw] mx-auto px-4 sm:px-6 text-center max-w-3xl">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold bg-neutral-200/70 text-neutral-800 border border-neutral-300 dark:bg-neutral-900 dark:text-neutral-200 dark:border-neutral-800 mb-4">
            <Heart size={12} className="text-neutral-700 dark:text-neutral-300" />
            <span>Built for Educators & Coaching Centers</span>
          </div>

          <h1 className="text-3xl sm:text-5xl font-extrabold tracking-tight text-neutral-950 dark:text-white leading-[1.15]">
            Digitizing India's Independent Coaching Academies
          </h1>

          <p className="mt-5 text-sm sm:text-base text-neutral-600 dark:text-neutral-400 leading-relaxed max-w-2xl mx-auto">
            StudyFlow was created with a single objective: give every private tutor, coaching institute, and tuition center the digital superpowers previously reserved for venture-funded edtech giants.
          </p>
        </div>
      </section>

      {/* Narrative & Story Section */}
      <section className="relative w-full py-16 sm:py-20 border-b border-neutral-200/80 dark:border-neutral-800">
        <div className="w-full max-w-[96vw] lg:max-w-[88vw] mx-auto px-4 sm:px-6">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 items-center">
            
            <div className="lg:col-span-6 space-y-4 text-xs sm:text-sm text-neutral-600 dark:text-neutral-400 leading-relaxed">
              <span className="text-[11px] font-mono uppercase tracking-wider text-neutral-400 font-bold block">
                The Problem We Solve
              </span>
              <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-neutral-950 dark:text-white">
                Why Generic Website Builders Fail Coaching Classes
              </h2>
              <p>
                Generic site builders are designed to sell shoes, coffee, or design portfolios. They have zero understanding of what a tuition institute needs: live batch seat counters, WhatsApp lead routers, verified topper showcases, and automated QR attendance.
              </p>
              <p>
                Coaching directors were forced to stitch together 5 different tools or pay lakhs to local agencies for buggy WordPress setups that crashed every time board exam results were released.
              </p>
              <p>
                StudyFlow replaces that broken workflow with a single visual engine built exclusively for Indian coaching centers—delivering sub-500ms speeds on result days and sub-120ms lead routing to your counselors.
              </p>
            </div>

            <div className="lg:col-span-6 grid grid-cols-2 gap-4">
              <div className="p-6 rounded-3xl bg-neutral-50 dark:bg-neutral-900 border border-neutral-200 dark:border-neutral-800 text-center">
                <span className="text-3xl sm:text-4xl font-extrabold font-mono text-neutral-950 dark:text-white block">
                  120ms
                </span>
                <span className="text-xs text-neutral-500 mt-1 block">
                  WhatsApp Lead Routing Speed
                </span>
              </div>

              <div className="p-6 rounded-3xl bg-neutral-50 dark:bg-neutral-900 border border-neutral-200 dark:border-neutral-800 text-center">
                <span className="text-3xl sm:text-4xl font-extrabold font-mono text-neutral-950 dark:text-white block">
                  99.9%
                </span>
                <span className="text-xs text-neutral-500 mt-1 block">
                  Uptime Guarantee on Result Days
                </span>
              </div>

              <div className="p-6 rounded-3xl bg-neutral-50 dark:bg-neutral-900 border border-neutral-200 dark:border-neutral-800 text-center">
                <span className="text-3xl sm:text-4xl font-extrabold font-mono text-neutral-950 dark:text-white block">
                  ₹299
                </span>
                <span className="text-xs text-neutral-500 mt-1 block">
                  Starting Monthly Rate with Flat ₹100 Off
                </span>
              </div>

              <div className="p-6 rounded-3xl bg-neutral-50 dark:bg-neutral-900 border border-neutral-200 dark:border-neutral-800 text-center">
                <span className="text-3xl sm:text-4xl font-extrabold font-mono text-neutral-950 dark:text-white block">
                  2 Mins
                </span>
                <span className="text-xs text-neutral-500 mt-1 block">
                  Average Time to Launch Online
                </span>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* Core Architectural Pillars */}
      <section className="relative w-full py-16 sm:py-24 bg-neutral-50/50 dark:bg-neutral-950/40">
        <div className="w-full max-w-[96vw] lg:max-w-[88vw] mx-auto px-4 sm:px-6">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-neutral-950 dark:text-white">
              Our Core Architectural Commitments
            </h2>
            <p className="mt-2 text-xs sm:text-sm text-neutral-600 dark:text-neutral-400">
              The four foundational principles guiding how we engineer StudyFlow for educators.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {pillars.map((item, idx) => {
              const Icon = item.icon;
              return (
                <div
                  key={idx}
                  className="p-6 rounded-3xl bg-white dark:bg-neutral-900 border border-neutral-200/90 dark:border-neutral-800 shadow-xs flex flex-col justify-between"
                >
                  <div>
                    <div className="w-10 h-10 rounded-2xl bg-neutral-100 dark:bg-neutral-800 text-neutral-900 dark:text-white flex items-center justify-center mb-4">
                      <Icon size={20} />
                    </div>
                    <h3 className="text-base font-bold text-neutral-900 dark:text-white mb-2 tracking-tight">
                      {item.title}
                    </h3>
                    <p className="text-xs text-neutral-600 dark:text-neutral-400 leading-relaxed">
                      {item.desc}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

    </div>
  );
}

export default AboutUs;
