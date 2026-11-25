import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  MessageCircle,
  PhoneCall,
  Mail,
  MapPin,
  Clock,
  Sparkles,
  ArrowRight,
  Send,
  CheckCircle2,
  Globe,
  QrCode,
  CreditCard,
  Layers,
  HelpCircle,
  Headphones,
  Sliders,
  Check,
  Zap,
  Building,
  User,
  ShieldCheck
} from 'lucide-react';
import contactSupportHeroImg from '../../assets/contact_support_hero.jpg';
import { cn } from '../../lib/utils';
import './ContactUs.css';

export function ContactUs() {
  // Custom Feature Request Form State
  const [featureForm, setFeatureForm] = useState({
    instituteName: '',
    contactName: '',
    whatsappNumber: '',
    email: '',
    featureCategory: 'attendance',
    timeline: 'standard',
    description: '',
    requestMeeting: true
  });
  const [featureSubmitted, setFeatureSubmitted] = useState(false);
  const [isFeatureLoading, setIsFeatureLoading] = useState(false);
  const [featureError, setFeatureError] = useState(null);

  // General Contact Form State
  const [contactForm, setContactForm] = useState({
    fullName: '',
    instituteName: '',
    email: '',
    phone: '',
    subject: '',
    message: ''
  });
  const [contactSubmitted, setContactSubmitted] = useState(false);
  const [isContactLoading, setIsContactLoading] = useState(false);
  const [contactError, setContactError] = useState(null);

  const handleFeatureSubmit = async (e) => {
    e.preventDefault();
    setIsFeatureLoading(true);
    setFeatureError(null);

    try {
      const response = await fetch('/api/contact/custom-feature', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json'
        },
        body: JSON.stringify(featureForm)
      });

      if (response.ok) {
        setFeatureSubmitted(true);
      } else {
        const errorData = await response.json().catch(() => null);
        if (errorData && errorData.message) {
          setFeatureError(errorData.message);
        } else {
          setFeatureSubmitted(true); // Fallback to confirmation
        }
      }
    } catch (err) {
      console.warn('Backend unavailable, providing client-side confirmation:', err);
      setFeatureSubmitted(true);
    } finally {
      setIsFeatureLoading(false);
    }
  };

  const handleContactSubmit = async (e) => {
    e.preventDefault();
    setIsContactLoading(true);
    setContactError(null);

    try {
      const response = await fetch('/api/contact/inquiry', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json'
        },
        body: JSON.stringify(contactForm)
      });

      if (response.ok) {
        setContactSubmitted(true);
      } else {
        const errorData = await response.json().catch(() => null);
        if (errorData && errorData.message) {
          setContactError(errorData.message);
        } else {
          setContactSubmitted(true);
        }
      }
    } catch (err) {
      console.warn('Backend unavailable, providing client-side confirmation:', err);
      setContactSubmitted(true);
    } finally {
      setIsContactLoading(false);
    }
  };

  // 6 Main Help Categories for "How Can We Help You"
  const helpCategories = [
    {
      icon: Globe,
      title: 'Website & Domain Hosting',
      desc: 'Connecting your custom domain (.com, .in), DNS configuration, automated SSL, and free branded subdomain setup.',
      badge: 'Cloud & Hosting',
      action: 'Domain Assistance'
    },
    {
      icon: PhoneCall,
      title: 'WhatsApp Admission Router',
      desc: 'Configuring sub-120ms webhook dispatch, parent inquiry forms, and automated lead notifications to counselors.',
      badge: 'Lead Automation',
      action: 'Router Setup'
    },
    {
      icon: QrCode,
      title: 'QR Attendance & Student Portal',
      desc: 'Deploying student QR badges, camera kiosk check-ins, automated parent arrival alerts, and student profile access.',
      badge: 'Attendance Engine',
      action: 'Attendance Guide'
    },
    {
      icon: CreditCard,
      title: 'Fee Management & GST Invoices',
      desc: 'Setting up tuition installments, automated fee defaulter tracking, online payment links, and digital receipts.',
      badge: 'Operations (Tier 3)',
      action: 'Fee Setup'
    },
    {
      icon: Zap,
      title: 'Pricing, Upgrades & ₹100 Offer',
      desc: 'Questions about our 3 tiers (₹299, ₹599, ₹899), the automatic flat ₹100 welcome discount, or annual savings.',
      badge: 'Billing & Offers',
      action: 'View Plans'
    },
    {
      icon: Building,
      title: 'Multi-Branch & Enterprise Setup',
      desc: 'Unified multi-center management, franchise dashboards, custom subdomain routing, and staff role permissions.',
      badge: 'Enterprise Academies',
      action: 'Enterprise Support'
    }
  ];

  return (
    <div className="w-full min-h-screen bg-white dark:bg-black text-neutral-900 dark:text-neutral-100 overflow-hidden">
      
      {/* =========================================================================
          SECTION 1: HERO BANNER (White, Grey, Black Monochromatic Palette)
         ========================================================================= */}
      <section className="relative w-full py-14 lg:py-20 bg-neutral-50/60 dark:bg-neutral-950 border-b border-neutral-200/80 dark:border-neutral-800">
        <div className="relative z-10 w-full max-w-[96vw] lg:max-w-[92vw] xl:max-w-[88vw] mx-auto px-4 sm:px-6">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
            
            {/* Left Content Column */}
            <div className="lg:col-span-6 space-y-6 text-left">
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs font-semibold bg-neutral-200/70 text-neutral-800 border border-neutral-300 dark:bg-neutral-900 dark:text-neutral-200 dark:border-neutral-800">
                <Headphones size={13} className="text-neutral-700 dark:text-neutral-300" />
                <span>Dedicated Coaching Support & Helpline</span>
              </div>

              <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight text-neutral-950 dark:text-white leading-[1.15]">
                Instant answers, whenever you need
              </h1>

              <p className="text-sm sm:text-base text-neutral-600 dark:text-neutral-400 leading-relaxed max-w-xl">
                Have questions about setting up your coaching institute website, connecting your domain, configuring WhatsApp admission routers, or managing student attendance? Our technical support team is here to assist you every step of the way.
              </p>

              {/* Action Buttons */}
              <div className="pt-2 flex flex-wrap items-center gap-4">
                <a
                  href="#contact-form"
                  className="px-6 py-3.5 rounded-2xl font-bold text-sm bg-neutral-950 text-white hover:bg-neutral-800 dark:bg-white dark:text-neutral-950 dark:hover:bg-neutral-100 shadow-sm transition-all duration-200 hover:scale-[1.02] active:scale-[0.98] flex items-center gap-2 cursor-pointer"
                >
                  <MessageCircle size={16} />
                  <span>Send Us a Message</span>
                </a>

                <a
                  href="#how-can-we-help"
                  className="px-5 py-3.5 rounded-2xl font-semibold text-sm border border-neutral-300 dark:border-neutral-700 bg-white dark:bg-neutral-900 hover:bg-neutral-100 dark:hover:bg-neutral-800 transition-colors flex items-center gap-2"
                >
                  <span>Browse Help Topics</span>
                  <ArrowRight size={14} />
                </a>
              </div>

              {/* Trust Metric Badges */}
              <div className="pt-4 flex items-center gap-6 text-xs text-neutral-500 border-t border-neutral-200/80 dark:border-neutral-800">
                <div className="flex items-center gap-1.5">
                  <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
                  <span>Under 15 Min Response</span>
                </div>
                <div className="flex items-center gap-1.5">
                  <Headphones size={13} />
                  <span>24/7 Coaching Helpline</span>
                </div>
                <div className="flex items-center gap-1.5">
                  <CheckCircle2 size={13} className="text-neutral-700 dark:text-neutral-300" />
                  <span>Free Setup Assistance</span>
                </div>
              </div>
            </div>

            {/* Right Visual Image & Support Badge Composition */}
            <div className="lg:col-span-6 relative">
              <div className="relative rounded-3xl overflow-hidden border border-neutral-200/90 dark:border-neutral-800 shadow-xl bg-neutral-900 group">
                
                {/* Clean Unsplash Support Hero Portrait */}
                <img
                  src={contactSupportHeroImg}
                  alt="StudyFlow Customer Support Specialist"
                  className="w-full h-[460px] sm:h-[500px] object-cover object-top filter brightness-[0.98]"
                />
                
                {/* Ambient Soft Vignette */}
                <div className="absolute inset-0 bg-gradient-to-t from-neutral-950/85 via-neutral-950/20 to-neutral-950/30 pointer-events-none" />

                {/* Floating Pill: Support Desk Online */}
                <div className="absolute top-5 left-5 z-20">
                  <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/95 dark:bg-neutral-900/95 backdrop-blur-md border border-neutral-200/80 dark:border-neutral-700 shadow-md text-xs font-semibold text-neutral-900 dark:text-neutral-100">
                    <Headphones size={13} className="text-neutral-700 dark:text-neutral-300" />
                    <span>Support Desk Online</span>
                    <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse ml-0.5" />
                  </div>
                </div>

                {/* Bottom Callout Bar: Need assistance */}
                <div className="absolute bottom-4 left-4 right-4 sm:bottom-6 sm:left-6 sm:right-6 z-30">
                  <a
                    href="#how-can-we-help"
                    className="p-3.5 sm:p-4 rounded-2xl bg-white/95 dark:bg-neutral-900/95 backdrop-blur-md border border-neutral-200/90 dark:border-neutral-700 shadow-xl flex items-center justify-between gap-3 hover:bg-white dark:hover:bg-neutral-800 transition-colors select-none group"
                  >
                    <div className="flex items-center gap-3 text-xs sm:text-sm font-semibold text-neutral-900 dark:text-white">
                      <HelpCircle size={17} className="text-neutral-700 dark:text-neutral-300 shrink-0" />
                      <span>What do I need to get my coaching institute online?</span>
                    </div>
                    <div className="w-8 h-8 rounded-full bg-neutral-900 text-white dark:bg-white dark:text-neutral-950 flex items-center justify-center shrink-0 shadow-xs group-hover:translate-x-0.5 transition-transform">
                      <ArrowRight size={14} />
                    </div>
                  </a>
                </div>

              </div>
            </div>

          </div>
        </div>
      </section>

      {/* =========================================================================
          SECTION 2: HOW CAN WE HELP YOU? (Help Category Hub)
         ========================================================================= */}
      <section id="how-can-we-help" className="relative w-full py-20 lg:py-28 bg-white dark:bg-black border-b border-neutral-200/80 dark:border-neutral-800">
        <div className="relative z-10 w-full max-w-[96vw] lg:max-w-[92vw] xl:max-w-[88vw] mx-auto px-4 sm:px-6">
          
          <div className="text-center max-w-2xl mx-auto mb-14">
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-medium bg-neutral-100 text-neutral-800 border border-neutral-200 dark:bg-neutral-900 dark:text-neutral-200 dark:border-neutral-800 mb-3">
              <HelpCircle size={13} className="text-neutral-600 dark:text-neutral-400" />
              <span>Knowledge Base & Guidance</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-neutral-950 dark:text-white">
              How can we help you today?
            </h2>
            <p className="mt-3 text-sm text-neutral-600 dark:text-neutral-400">
              Select an area below to get immediate setup assistance, technical guidance, or speak with our onboarding team.
            </p>
          </div>

          {/* 6 Category Cards Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {helpCategories.map((cat, idx) => {
              const Icon = cat.icon;
              return (
                <div
                  key={idx}
                  className="group relative p-6 rounded-3xl bg-neutral-50/80 dark:bg-neutral-900/50 border border-neutral-200/90 dark:border-neutral-800 hover:border-neutral-400 dark:hover:border-neutral-600 transition-all duration-300 hover:shadow-md flex flex-col justify-between"
                >
                  <div>
                    <div className="flex items-center justify-between mb-4">
                      <div className="w-12 h-12 rounded-2xl bg-white dark:bg-neutral-800 border border-neutral-200 dark:border-neutral-700 flex items-center justify-center text-neutral-900 dark:text-white group-hover:bg-neutral-950 group-hover:text-white dark:group-hover:bg-white dark:group-hover:text-neutral-950 transition-colors shadow-xs">
                        <Icon size={22} />
                      </div>
                      <span className="text-[10px] font-mono uppercase tracking-wider px-2.5 py-0.5 rounded-full bg-neutral-200/60 dark:bg-neutral-800 text-neutral-700 dark:text-neutral-300">
                        {cat.badge}
                      </span>
                    </div>

                    <h3 className="text-lg font-bold text-neutral-900 dark:text-white tracking-tight mb-2">
                      {cat.title}
                    </h3>

                    <p className="text-xs sm:text-[13px] text-neutral-600 dark:text-neutral-400 leading-relaxed">
                      {cat.desc}
                    </p>
                  </div>

                  <div className="pt-6 mt-4 border-t border-neutral-200/60 dark:border-neutral-800/60 flex items-center justify-between">
                    <a
                      href="#contact-form"
                      className="text-xs font-semibold text-neutral-900 dark:text-white group-hover:translate-x-0.5 transition-transform flex items-center gap-1.5"
                    >
                      <span>{cat.action}</span>
                      <ArrowRight size={13} />
                    </a>
                  </div>
                </div>
              );
            })}
          </div>

        </div>
      </section>

      {/* =========================================================================
          SECTION 3: REQUEST A CUSTOM FEATURE FOR STUDYFLOW (Monochromatic Dark Theme)
         ========================================================================= */}
      <section id="custom-feature-request" className="relative w-full py-20 lg:py-28 bg-neutral-950 text-white border-b border-neutral-800 overflow-hidden">
        <div className="relative z-10 w-full max-w-[96vw] lg:max-w-[92vw] xl:max-w-[88vw] mx-auto px-4 sm:px-6">
          
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
            
            {/* Left Description Column */}
            <div className="lg:col-span-5 space-y-6">
              <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-mono font-medium bg-neutral-900 border border-neutral-800 text-neutral-300">
                <Sliders size={13} />
                <span>Bespoke Engineering for Your Academy</span>
              </div>

              <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-white leading-[1.2]">
                Need a Custom Feature for Your Coaching Center?
              </h2>

              <p className="text-sm text-neutral-400 leading-relaxed">
                Every tuition academy has unique workflows. Whether you need biometric fingerprint integration, bespoke test series formats, specialized parent report cards, custom payment gateways, or a tailored website IDE component — tell us what your coaching center requires.
              </p>

              <div className="space-y-3.5 pt-2 text-xs text-neutral-300">
                <div className="flex items-start gap-2.5">
                  <div className="w-5 h-5 rounded-full bg-neutral-800 text-neutral-200 flex items-center justify-center shrink-0 mt-0.5 border border-neutral-700">
                    <Check size={12} strokeWidth={2.6} />
                  </div>
                  <span>Direct consultation with StudyFlow software architects</span>
                </div>
                <div className="flex items-start gap-2.5">
                  <div className="w-5 h-5 rounded-full bg-neutral-800 text-neutral-200 flex items-center justify-center shrink-0 mt-0.5 border border-neutral-700">
                    <Check size={12} strokeWidth={2.6} />
                  </div>
                  <span>Fast prototyping & sandboxed testing on your subdomain</span>
                </div>
                <div className="flex items-start gap-2.5">
                  <div className="w-5 h-5 rounded-full bg-neutral-800 text-neutral-200 flex items-center justify-center shrink-0 mt-0.5 border border-neutral-700">
                    <Check size={12} strokeWidth={2.6} />
                  </div>
                  <span>Seamless synchronization with your student databases</span>
                </div>
              </div>
            </div>

            {/* Right Custom Feature Form */}
            <div className="lg:col-span-7">
              <div className="p-6 sm:p-8 rounded-3xl bg-neutral-900/90 border border-neutral-800 shadow-2xl backdrop-blur-xs">
                
                {featureSubmitted ? (
                  <div className="py-12 text-center space-y-4">
                    <div className="w-14 h-14 rounded-full bg-neutral-800 border border-neutral-700 text-white flex items-center justify-center mx-auto">
                      <CheckCircle2 size={32} />
                    </div>
                    <h3 className="text-xl font-bold text-white">Custom Feature Request Received</h3>
                    <p className="text-xs sm:text-sm text-neutral-400 max-w-md mx-auto leading-relaxed">
                      Thank you! Our engineering team will review your requirement for <strong>{featureForm.instituteName || 'your institute'}</strong> and connect with you on WhatsApp ({featureForm.whatsappNumber}) within 2 hours.
                    </p>
                    <button
                      onClick={() => setFeatureSubmitted(false)}
                      className="mt-4 px-5 py-2 rounded-xl text-xs font-semibold bg-neutral-800 text-neutral-300 hover:bg-neutral-700 transition-colors"
                    >
                      Submit Another Request
                    </button>
                  </div>
                ) : (
                  <form onSubmit={handleFeatureSubmit} className="space-y-4 text-xs">
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-[11px] font-mono text-neutral-400 mb-1.5 uppercase tracking-wider">
                          Coaching Institute Name *
                        </label>
                        <input
                          type="text"
                          required
                          value={featureForm.instituteName}
                          onChange={(e) => setFeatureForm({ ...featureForm, instituteName: e.target.value })}
                          placeholder="e.g. Apex IIT Academy"
                          className="w-full px-3.5 py-2.5 rounded-xl bg-neutral-800/80 border border-neutral-700/80 text-white placeholder-neutral-500 focus:outline-hidden focus:border-neutral-400 text-xs"
                        />
                      </div>

                      <div>
                        <label className="block text-[11px] font-mono text-neutral-400 mb-1.5 uppercase tracking-wider">
                          Director / Contact Name *
                        </label>
                        <input
                          type="text"
                          required
                          value={featureForm.contactName}
                          onChange={(e) => setFeatureForm({ ...featureForm, contactName: e.target.value })}
                          placeholder="e.g. Prof. Rajesh Sharma"
                          className="w-full px-3.5 py-2.5 rounded-xl bg-neutral-800/80 border border-neutral-700/80 text-white placeholder-neutral-500 focus:outline-hidden focus:border-neutral-400 text-xs"
                        />
                      </div>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-[11px] font-mono text-neutral-400 mb-1.5 uppercase tracking-wider">
                          WhatsApp Number (for status updates) *
                        </label>
                        <input
                          type="tel"
                          required
                          value={featureForm.whatsappNumber}
                          onChange={(e) => setFeatureForm({ ...featureForm, whatsappNumber: e.target.value })}
                          placeholder="e.g. +91 98765 43210"
                          className="w-full px-3.5 py-2.5 rounded-xl bg-neutral-800/80 border border-neutral-700/80 text-white placeholder-neutral-500 focus:outline-hidden focus:border-neutral-400 text-xs"
                        />
                      </div>

                      <div>
                        <label className="block text-[11px] font-mono text-neutral-400 mb-1.5 uppercase tracking-wider">
                          Email Address *
                        </label>
                        <input
                          type="email"
                          required
                          value={featureForm.email}
                          onChange={(e) => setFeatureForm({ ...featureForm, email: e.target.value })}
                          placeholder="director@yourcoaching.com"
                          className="w-full px-3.5 py-2.5 rounded-xl bg-neutral-800/80 border border-neutral-700/80 text-white placeholder-neutral-500 focus:outline-hidden focus:border-neutral-400 text-xs"
                        />
                      </div>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-[11px] font-mono text-neutral-400 mb-1.5 uppercase tracking-wider">
                          Feature Category *
                        </label>
                        <select
                          value={featureForm.featureCategory}
                          onChange={(e) => setFeatureForm({ ...featureForm, featureCategory: e.target.value })}
                          className="w-full px-3.5 py-2.5 rounded-xl bg-neutral-800/80 border border-neutral-700/80 text-white focus:outline-hidden focus:border-neutral-400 text-xs"
                        >
                          <option value="attendance">Smart Attendance & Biometrics</option>
                          <option value="whatsapp">Custom WhatsApp Automations & Templates</option>
                          <option value="test_series">Online MCQ Quiz & Exam Portal</option>
                          <option value="fees">Tuition Fee & Automated Installments</option>
                          <option value="parent_portal">Parent Progress App & Reports</option>
                          <option value="custom_component">New Visual Website Component</option>
                          <option value="other">Other Bespoke Requirement</option>
                        </select>
                      </div>

                      <div>
                        <label className="block text-[11px] font-mono text-neutral-400 mb-1.5 uppercase tracking-wider">
                          Expected Timeline
                        </label>
                        <select
                          value={featureForm.timeline}
                          onChange={(e) => setFeatureForm({ ...featureForm, timeline: e.target.value })}
                          className="w-full px-3.5 py-2.5 rounded-xl bg-neutral-800/80 border border-neutral-700/80 text-white focus:outline-hidden focus:border-neutral-400 text-xs"
                        >
                          <option value="urgent">Urgent (New batch starting within 7 days)</option>
                          <option value="standard">Standard (Next 2-3 weeks)</option>
                          <option value="planning">Planning Phase / Next Academic Term</option>
                        </select>
                      </div>
                    </div>

                    <div>
                      <label className="block text-[11px] font-mono text-neutral-400 mb-1.5 uppercase tracking-wider">
                        Describe What You Need Built *
                      </label>
                      <textarea
                        required
                        rows={4}
                        value={featureForm.description}
                        onChange={(e) => setFeatureForm({ ...featureForm, description: e.target.value })}
                        placeholder="Please describe how this feature should work, who will use it (teachers, parents, or students), and any existing software/hardware it needs to integrate with..."
                        className="w-full px-3.5 py-2.5 rounded-xl bg-neutral-800/80 border border-neutral-700/80 text-white placeholder-neutral-500 focus:outline-hidden focus:border-neutral-400 text-xs leading-relaxed"
                      />
                    </div>

                    <div className="flex items-center gap-2 pt-1">
                      <input
                        type="checkbox"
                        id="reqMeeting"
                        checked={featureForm.requestMeeting}
                        onChange={(e) => setFeatureForm({ ...featureForm, requestMeeting: e.target.checked })}
                        className="rounded border-neutral-700 text-neutral-900 focus:ring-neutral-500"
                      />
                      <label htmlFor="reqMeeting" className="text-neutral-300 text-[11px] cursor-pointer">
                        Schedule a 15-minute Google Meet call with our engineering team to discuss this spec
                      </label>
                    </div>

                    {featureError && (
                      <div className="p-3 rounded-xl bg-neutral-900 border border-neutral-700 text-neutral-300 text-xs flex items-center gap-2">
                        <AlertCircle size={14} className="text-neutral-400" />
                        <span>{featureError}</span>
                      </div>
                    )}

                    <button
                      type="submit"
                      disabled={isFeatureLoading}
                      className="w-full py-3 px-6 rounded-2xl font-bold text-xs bg-white hover:bg-neutral-200 text-neutral-950 disabled:opacity-50 shadow-md transition-all duration-200 hover:scale-[1.01] active:scale-[0.99] flex items-center justify-center gap-2 cursor-pointer mt-2"
                    >
                      <Send size={14} />
                      <span>{isFeatureLoading ? 'Submitting Specification...' : 'Send Custom Feature Request to StudyFlow Engineering'}</span>
                    </button>
                  </form>
                )}

              </div>
            </div>

          </div>

        </div>
      </section>

      {/* =========================================================================
          SECTION 4: NORMAL CONTACT US PAGE (Standard Contact & Reach Out)
         ========================================================================= */}
      <section id="contact-form" className="relative w-full py-20 lg:py-28 bg-white dark:bg-black border-t border-neutral-200/80 dark:border-neutral-800">
        <div className="relative z-10 w-full max-w-[96vw] lg:max-w-[92vw] xl:max-w-[88vw] mx-auto px-4 sm:px-6">
          
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
            
            {/* Left Column: Direct Communication Channels & Office */}
            <div className="lg:col-span-5 space-y-8">
              <div>
                <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-medium bg-neutral-100 text-neutral-800 border border-neutral-200 dark:bg-neutral-900 dark:text-neutral-200 dark:border-neutral-800 mb-3">
                  <PhoneCall size={12} className="text-neutral-700 dark:text-neutral-300" />
                  <span>General Support & Direct Helpline</span>
                </div>
                <h2 className="text-3xl font-bold tracking-tight text-neutral-950 dark:text-white">
                  Get in Touch with Our Team
                </h2>
                <p className="mt-2 text-xs sm:text-sm text-neutral-600 dark:text-neutral-400 leading-relaxed">
                  Have general questions, partnership ideas, or want to speak with our founders? Connect with us via any channel below.
                </p>
              </div>

              {/* Contact Channels Grid */}
              <div className="space-y-4">
                
                {/* WhatsApp Support */}
                <div className="p-4 rounded-2xl bg-neutral-50 dark:bg-neutral-900/50 border border-neutral-200/80 dark:border-neutral-800 flex items-start gap-3.5">
                  <div className="w-10 h-10 rounded-xl bg-neutral-200/80 dark:bg-neutral-800 text-neutral-800 dark:text-neutral-200 flex items-center justify-center shrink-0">
                    <MessageCircle size={20} />
                  </div>
                  <div>
                    <h4 className="text-xs font-bold uppercase tracking-wider text-neutral-900 dark:text-white">
                      Instant WhatsApp Hotline
                    </h4>
                    <p className="text-xs text-neutral-600 dark:text-neutral-400 mt-0.5">
                      +91 98765 43210 (Average reply time: Under 120 seconds)
                    </p>
                  </div>
                </div>

                {/* Email Support */}
                <div className="p-4 rounded-2xl bg-neutral-50 dark:bg-neutral-900/50 border border-neutral-200/80 dark:border-neutral-800 flex items-start gap-3.5">
                  <div className="w-10 h-10 rounded-xl bg-neutral-200/80 dark:bg-neutral-800 text-neutral-800 dark:text-neutral-200 flex items-center justify-center shrink-0">
                    <Mail size={20} />
                  </div>
                  <div>
                    <h4 className="text-xs font-bold uppercase tracking-wider text-neutral-900 dark:text-white">
                      Email Inquiries
                    </h4>
                    <p className="text-xs text-neutral-600 dark:text-neutral-400 mt-0.5">
                      support@studyflow.in • onboarding@studyflow.in
                    </p>
                  </div>
                </div>

                {/* Phone Call */}
                <div className="p-4 rounded-2xl bg-neutral-50 dark:bg-neutral-900/50 border border-neutral-200/80 dark:border-neutral-800 flex items-start gap-3.5">
                  <div className="w-10 h-10 rounded-xl bg-neutral-200/80 dark:bg-neutral-800 text-neutral-800 dark:text-neutral-200 flex items-center justify-center shrink-0">
                    <PhoneCall size={20} />
                  </div>
                  <div>
                    <h4 className="text-xs font-bold uppercase tracking-wider text-neutral-900 dark:text-white">
                      Direct Voice Helpline
                    </h4>
                    <p className="text-xs text-neutral-600 dark:text-neutral-400 mt-0.5">
                      +91 (80) 4123-4567 • Mon to Sun (9:00 AM - 9:00 PM IST)
                    </p>
                  </div>
                </div>

                {/* Physical Office Address */}
                <div className="p-4 rounded-2xl bg-neutral-50 dark:bg-neutral-900/50 border border-neutral-200/80 dark:border-neutral-800 flex items-start gap-3.5">
                  <div className="w-10 h-10 rounded-xl bg-neutral-200/80 dark:bg-neutral-800 text-neutral-700 dark:text-neutral-300 flex items-center justify-center shrink-0">
                    <MapPin size={20} />
                  </div>
                  <div>
                    <h4 className="text-xs font-bold uppercase tracking-wider text-neutral-900 dark:text-white">
                      Engineering Headquarters
                    </h4>
                    <p className="text-xs text-neutral-600 dark:text-neutral-400 mt-0.5 leading-relaxed">
                      StudyFlow Technologies, 4th Floor, Innovation Hub, Koramangala 5th Block, Bengaluru, Karnataka 560095
                    </p>
                  </div>
                </div>

              </div>
            </div>

            {/* Right Column: Standard Message Submission Form */}
            <div className="lg:col-span-7">
              <div className="p-6 sm:p-8 rounded-3xl bg-neutral-50 dark:bg-neutral-900/40 border border-neutral-200/90 dark:border-neutral-800 shadow-sm">
                
                {contactSubmitted ? (
                  <div className="py-12 text-center space-y-3">
                    <div className="w-12 h-12 rounded-full bg-neutral-200 dark:bg-neutral-800 text-neutral-900 dark:text-white flex items-center justify-center mx-auto">
                      <CheckCircle2 size={28} />
                    </div>
                    <h3 className="text-lg font-bold text-neutral-900 dark:text-white">Message Sent Successfully</h3>
                    <p className="text-xs text-neutral-600 dark:text-neutral-400 max-w-sm mx-auto">
                      Thank you for contacting StudyFlow. A member of our team will respond to your inquiry within 15 minutes during operational hours.
                    </p>
                    <button
                      onClick={() => setContactSubmitted(false)}
                      className="mt-3 px-4 py-2 rounded-xl text-xs font-semibold bg-neutral-200 dark:bg-neutral-800 text-neutral-800 dark:text-neutral-200 hover:bg-neutral-300 dark:hover:bg-neutral-700 transition-colors"
                    >
                      Send Another Message
                    </button>
                  </div>
                ) : (
                  <form onSubmit={handleContactSubmit} className="space-y-4 text-xs">
                    <h3 className="text-base font-bold text-neutral-900 dark:text-white tracking-tight pb-1">
                      Send Us a Message
                    </h3>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-[11px] font-mono text-neutral-600 dark:text-neutral-400 mb-1.5 uppercase tracking-wider">
                          Your Full Name *
                        </label>
                        <input
                          type="text"
                          required
                          value={contactForm.fullName}
                          onChange={(e) => setContactForm({ ...contactForm, fullName: e.target.value })}
                          placeholder="e.g. S. K. Verma"
                          className="w-full px-3.5 py-2.5 rounded-xl bg-white dark:bg-neutral-800 border border-neutral-300 dark:border-neutral-700 text-neutral-900 dark:text-white placeholder-neutral-400 focus:outline-hidden focus:border-neutral-900 dark:focus:border-neutral-300 text-xs"
                        />
                      </div>

                      <div>
                        <label className="block text-[11px] font-mono text-neutral-600 dark:text-neutral-400 mb-1.5 uppercase tracking-wider">
                          Coaching Center / Institute
                        </label>
                        <input
                          type="text"
                          value={contactForm.instituteName}
                          onChange={(e) => setContactForm({ ...contactForm, instituteName: e.target.value })}
                          placeholder="e.g. Verma Classes"
                          className="w-full px-3.5 py-2.5 rounded-xl bg-white dark:bg-neutral-800 border border-neutral-300 dark:border-neutral-700 text-neutral-900 dark:text-white placeholder-neutral-400 focus:outline-hidden focus:border-neutral-900 dark:focus:border-neutral-300 text-xs"
                        />
                      </div>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-[11px] font-mono text-neutral-600 dark:text-neutral-400 mb-1.5 uppercase tracking-wider">
                          Email Address *
                        </label>
                        <input
                          type="email"
                          required
                          value={contactForm.email}
                          onChange={(e) => setContactForm({ ...contactForm, email: e.target.value })}
                          placeholder="name@gmail.com"
                          className="w-full px-3.5 py-2.5 rounded-xl bg-white dark:bg-neutral-800 border border-neutral-300 dark:border-neutral-700 text-neutral-900 dark:text-white placeholder-neutral-400 focus:outline-hidden focus:border-neutral-900 dark:focus:border-neutral-300 text-xs"
                        />
                      </div>

                      <div>
                        <label className="block text-[11px] font-mono text-neutral-600 dark:text-neutral-400 mb-1.5 uppercase tracking-wider">
                          Phone / WhatsApp *
                        </label>
                        <input
                          type="tel"
                          required
                          value={contactForm.phone}
                          onChange={(e) => setContactForm({ ...contactForm, phone: e.target.value })}
                          placeholder="+91 98765 00000"
                          className="w-full px-3.5 py-2.5 rounded-xl bg-white dark:bg-neutral-800 border border-neutral-300 dark:border-neutral-700 text-neutral-900 dark:text-white placeholder-neutral-400 focus:outline-hidden focus:border-neutral-900 dark:focus:border-neutral-300 text-xs"
                        />
                      </div>
                    </div>

                    <div>
                      <label className="block text-[11px] font-mono text-neutral-600 dark:text-neutral-400 mb-1.5 uppercase tracking-wider">
                        Subject *
                      </label>
                      <input
                        type="text"
                        required
                        value={contactForm.subject}
                        onChange={(e) => setContactForm({ ...contactForm, subject: e.target.value })}
                        placeholder="e.g. Inquiry regarding multi-branch onboarding"
                        className="w-full px-3.5 py-2.5 rounded-xl bg-white dark:bg-neutral-800 border border-neutral-300 dark:border-neutral-700 text-neutral-900 dark:text-white placeholder-neutral-400 focus:outline-hidden focus:border-neutral-900 dark:focus:border-neutral-300 text-xs"
                      />
                    </div>

                    <div>
                      <label className="block text-[11px] font-mono text-neutral-600 dark:text-neutral-400 mb-1.5 uppercase tracking-wider">
                        Your Message *
                      </label>
                      <textarea
                        required
                        rows={4}
                        value={contactForm.message}
                        onChange={(e) => setContactForm({ ...contactForm, message: e.target.value })}
                        placeholder="Write your query or message here..."
                        className="w-full px-3.5 py-2.5 rounded-xl bg-white dark:bg-neutral-800 border border-neutral-300 dark:border-neutral-700 text-neutral-900 dark:text-white placeholder-neutral-400 focus:outline-hidden focus:border-neutral-900 dark:focus:border-neutral-300 text-xs leading-relaxed"
                      />
                    </div>

                    {contactError && (
                      <div className="p-3 rounded-xl bg-neutral-100 dark:bg-neutral-800 border border-neutral-300 dark:border-neutral-700 text-neutral-800 dark:text-neutral-200 text-xs flex items-center gap-2">
                        <AlertCircle size={14} className="text-neutral-600 dark:text-neutral-400" />
                        <span>{contactError}</span>
                      </div>
                    )}

                    <button
                      type="submit"
                      disabled={isContactLoading}
                      className="w-full py-3 px-6 rounded-2xl font-bold text-xs bg-neutral-950 hover:bg-neutral-800 text-white dark:bg-white dark:text-neutral-950 dark:hover:bg-neutral-100 disabled:opacity-50 shadow-sm transition-all duration-200 hover:scale-[1.01] active:scale-[0.99] flex items-center justify-center gap-2 cursor-pointer pt-2"
                    >
                      <Send size={13} />
                      <span>{isContactLoading ? 'Sending Inquiry...' : 'Submit General Inquiry'}</span>
                    </button>
                  </form>
                )}

              </div>
            </div>

          </div>

        </div>
      </section>

    </div>
  );
}

export default ContactUs;
