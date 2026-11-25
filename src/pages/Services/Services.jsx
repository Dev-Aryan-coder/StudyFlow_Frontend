import React from 'react';
import { motion } from 'framer-motion';
import {
  Globe,
  ShieldCheck,
  Server,
  PhoneCall,
  QrCode,
  CreditCard,
  Zap,
  ArrowRight,
  CheckCircle2,
  Lock,
  Headphones,
  UploadCloud
} from 'lucide-react';
import { Link } from 'react-router-dom';
import SEO from '../../components/SEO/SEO';
import './Services.css';

export function Services() {
  const servicesSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    "serviceType": "Coaching Website Hosting & Educational Infrastructure",
    "provider": {
      "@type": "Organization",
      "name": "StudyFlow Technologies",
      "url": "https://studyflow.in"
    },
    "hasOfferCatalog": {
      "@type": "OfferCatalog",
      "name": "Coaching Infrastructure Services",
      "itemListElement": [
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Managed AWS Cloud Hosting & Global Edge CDN"
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Custom Domain Mapping & Automated SSL Provisioning"
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Sub-120ms WhatsApp Admission Webhook Router"
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Smart QR Code Student Attendance Portal"
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Fee Management & GST Digital Invoicing"
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Zero-Downtime Data & Content Migration Assistance"
          }
        }
      ]
    }
  };

  const servicesList = [
    {
      icon: Server,
      title: 'Managed Cloud Hosting & Global Edge CDN',
      desc: 'Enterprise AWS cloud infrastructure with automatic edge CDN caching. Guarantees sub-500ms load times even on high-concurrency board exam result days.',
      features: ['Automated Edge Caching', 'Zero Result-Day Crash SLA', '20 GB - 100 GB NVMe Storage', 'Daily Automated Backups']
    },
    {
      icon: Globe,
      title: 'Custom Domain & Free Subdomain Setup',
      desc: 'Connect your own branded domain (yourcoaching.com) or use our free SSL-secured subdomain (your-name.studyflow.in) with instant 1-click DNS provisioning.',
      features: ['1-Click Domain Linking', 'Free SSL Certificates Included', 'WHOIS Privacy Protection', 'Subdomain Routing']
    },
    {
      icon: PhoneCall,
      title: 'Instant WhatsApp Admission Lead Router',
      desc: 'High-speed webhook integration that routes website inquiries, demo class bookings, and syllabus downloads directly to your counselors on WhatsApp in 120ms.',
      features: ['Sub-120ms Webhook Speed', 'Counselor WhatsApp Alerts', 'Parent Inquiry Data Logging', 'Lead Conversion Analytics']
    },
    {
      icon: QrCode,
      title: 'Smart QR Code Attendance & Parent SMS',
      desc: 'Deploy contactless QR code check-in kiosks at your coaching entrance. When students scan in, automated arrival confirmations are immediately sent to parents.',
      features: ['Camera Kiosk Check-In', 'Automated Parent Alerts', 'Monthly Attendance Percentage', 'Absentee Notification Logs']
    },
    {
      icon: CreditCard,
      title: 'Tuition Fee Engine & GST Digital Invoices',
      desc: 'Complete fee collection portal with online payment link generation, installment schedule tracking, automated fee defaulter alerts, and GST digital receipts.',
      features: ['Automated Defaulter Tracker', 'Razorpay & UPI Payment Links', 'GST Compliant Receipts', 'Installment Schedules']
    },
    {
      icon: UploadCloud,
      title: 'Zero-Downtime Migration & Onboarding',
      desc: 'Our dedicated migration specialists transfer your existing coaching notes, question banks, batch schedules, and student directories to StudyFlow for free.',
      features: ['Free Assisted Migration', 'Student Database Import', 'Syllabus PDF Cloud Uploads', 'Dedicated Onboarding Call']
    }
  ];

  return (
    <div className="w-full min-h-screen bg-white dark:bg-black text-neutral-900 dark:text-neutral-100 overflow-hidden">
      <SEO
        title="Services — Managed Cloud Hosting, Custom Domains & Coaching Solutions | StudyFlow"
        description="Discover StudyFlow's managed digital services for coaching centers: High-speed AWS cloud hosting, custom domain configuration, automated SSL, WhatsApp automation, and student data migration."
        keywords={[
          "coaching website hosting services",
          "custom domain coaching website",
          "automated SSL coaching",
          "student portal migration",
          "coaching edge CDN",
          "tuition software services",
          "studyflow services"
        ]}
        canonical="https://studyflow.in/services"
        jsonLd={servicesSchema}
      />

      {/* Hero Section */}
      <section className="relative w-full py-16 sm:py-24 bg-neutral-50/60 dark:bg-neutral-950 border-b border-neutral-200/80 dark:border-neutral-800">
        <div className="relative z-10 w-full max-w-[96vw] lg:max-w-[88vw] mx-auto px-4 sm:px-6 text-center max-w-3xl">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold bg-neutral-200/70 text-neutral-800 border border-neutral-300 dark:bg-neutral-900 dark:text-neutral-200 dark:border-neutral-800 mb-4">
            <Zap size={12} className="text-neutral-700 dark:text-neutral-300" />
            <span>Comprehensive Digital Services</span>
          </div>

          <h1 className="text-3xl sm:text-5xl font-extrabold tracking-tight text-neutral-950 dark:text-white leading-[1.15]">
            Full-Stack Digital Infrastructure for Coaching Institutes
          </h1>

          <p className="mt-5 text-sm sm:text-base text-neutral-600 dark:text-neutral-400 leading-relaxed max-w-2xl mx-auto">
            From managed cloud hosting and custom domain DNS mapping to instant WhatsApp admission routers and automated QR attendance portals.
          </p>

          <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
            <Link
              to="/pricing"
              className="px-6 py-3 rounded-2xl font-bold text-xs bg-neutral-950 text-white hover:bg-neutral-800 dark:bg-white dark:text-neutral-950 dark:hover:bg-neutral-100 shadow-sm transition-all"
            >
              Explore Plans from ₹299/mo (Flat ₹100 Off)
            </Link>
            <Link
              to="/contact-us"
              className="px-5 py-3 rounded-2xl font-semibold text-xs border border-neutral-300 dark:border-neutral-700 bg-white dark:bg-neutral-900 hover:bg-neutral-100 dark:hover:bg-neutral-800 transition-colors"
            >
              Request Custom Feature
            </Link>
          </div>
        </div>
      </section>

      {/* Services Grid Section */}
      <section className="relative w-full py-16 sm:py-24 border-b border-neutral-200/80 dark:border-neutral-800">
        <div className="w-full max-w-[96vw] lg:max-w-[88vw] mx-auto px-4 sm:px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            {servicesList.map((service, idx) => {
              const Icon = service.icon;
              return (
                <div
                  key={idx}
                  className="p-6 sm:p-8 rounded-3xl bg-neutral-50/80 dark:bg-neutral-900/50 border border-neutral-200/90 dark:border-neutral-800 flex flex-col justify-between hover:border-neutral-400 dark:hover:border-neutral-600 transition-all hover:shadow-md"
                >
                  <div>
                    <div className="w-12 h-12 rounded-2xl bg-white dark:bg-neutral-800 border border-neutral-200 dark:border-neutral-700 flex items-center justify-center text-neutral-900 dark:text-white mb-5 shadow-xs">
                      <Icon size={22} />
                    </div>

                    <h3 className="text-lg font-bold text-neutral-900 dark:text-white tracking-tight mb-2">
                      {service.title}
                    </h3>

                    <p className="text-xs sm:text-[13px] text-neutral-600 dark:text-neutral-400 leading-relaxed mb-6">
                      {service.desc}
                    </p>
                  </div>

                  <div className="pt-4 border-t border-neutral-200/60 dark:border-neutral-800/60">
                    <ul className="space-y-2 text-xs text-neutral-700 dark:text-neutral-300">
                      {service.features.map((item, fIdx) => (
                        <li key={fIdx} className="flex items-center gap-2">
                          <CheckCircle2 size={13} className="text-neutral-600 dark:text-neutral-400 shrink-0" />
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
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

export default Services;
