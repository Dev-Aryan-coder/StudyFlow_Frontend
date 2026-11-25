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
  AlertCircle,
  X
} from 'lucide-react';
import contactHeroBannerImg from '../../assets/contact_hero_banner.jpg';
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

  // Interactive AI Assistant Chat Modal State
  const [isAiModalOpen, setIsAiModalOpen] = useState(false);
  const [aiChatMessages, setAiChatMessages] = useState([
    { sender: 'ai', text: 'Hello! I am your StudyFlow Assistant. How can I help your coaching academy today?' }
  ]);
  const [aiInputText, setAiInputText] = useState('');

  const handleSendAiMessage = (e) => {
    e?.preventDefault();
    if (!aiInputText.trim()) return;

    const userMsg = aiInputText;
    setAiChatMessages((prev) => [...prev, { sender: 'user', text: userMsg }]);
    setAiInputText('');

    setTimeout(() => {
      let reply = 'Thank you for your message! Our coaching onboarding specialist will assist you with connecting your domain, setting up WhatsApp lead routing, and activating your flat ₹100 new institute discount.';
      if (userMsg.toLowerCase().includes('domain')) {
        reply = 'You can connect any custom domain (.com, .in, .edu.in) directly from your StudyFlow dashboard with automated SSL generation and zero downtime.';
      } else if (userMsg.toLowerCase().includes('whatsapp') || userMsg.toLowerCase().includes('lead')) {
        reply = 'The WhatsApp Admission Router dispatches student inquiries directly to your counselor in sub-120ms with automated webhook triggers.';
      } else if (userMsg.toLowerCase().includes('price') || userMsg.toLowerCase().includes('discount') || userMsg.toLowerCase().includes('cost')) {
        reply = 'Our plans start at ₹299/mo (Starter), ₹599/mo (Academy), and ₹899/mo (Premier). All new institutes receive an automatic flat ₹100 discount!';
      }
      setAiChatMessages((prev) => [...prev, { sender: 'ai', text: reply }]);
    }, 600);
  };

  const handleFeatureSubmit = (e) => {
    e.preventDefault();
    setFeatureSubmitted(true);
  };

  const handleContactSubmit = (e) => {
    e.preventDefault();
    setContactSubmitted(true);
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
          SECTION 1: HERO BANNER (Modeled precisely on the provided visual reference)
         ========================================================================= */}
      <section className="relative w-full py-14 lg:py-20 bg-gradient-to-b from-neutral-50 via-white to-white dark:from-neutral-950 dark:via-black dark:to-black border-b border-neutral-200/80 dark:border-neutral-800">
        <div className="relative z-10 w-full max-w-[96vw] lg:max-w-[92vw] xl:max-w-[88vw] mx-auto px-4 sm:px-6">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
            
            {/* Left Content Column */}
            <div className="lg:col-span-6 space-y-6 text-left">
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs font-semibold bg-violet-50 text-violet-800 border border-violet-200/80 dark:bg-violet-950/40 dark:text-violet-300 dark:border-violet-900/60">
                <Sparkles size={13} className="text-violet-600 dark:text-violet-400" />
                <span>Instant answers, whenever you need</span>
              </div>

              <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight text-neutral-950 dark:text-white leading-[1.15]">
                Instant answers, whenever you need
              </h1>

              <p className="text-sm sm:text-base text-neutral-600 dark:text-neutral-400 leading-relaxed max-w-xl">
                Just tell StudyFlow Assistant what you want to do, and it can take care of it — connecting domains, configuring DNS, activating WhatsApp admission routers, deploying QR attendance, and more. Chat with our team or simply ask StudyFlow Assistant so you can get online faster and focus on growing your coaching institute.
              </p>

              {/* Action Buttons */}
              <div className="pt-2 flex flex-wrap items-center gap-4">
                <button
                  onClick={() => setIsAiModalOpen(true)}
                  className="px-6 py-3.5 rounded-2xl font-bold text-sm bg-violet-600 hover:bg-violet-700 text-white shadow-lg shadow-violet-500/25 transition-all duration-200 hover:scale-[1.02] active:scale-[0.98] flex items-center gap-2 cursor-pointer"
                >
                  <Sparkles size={16} />
                  <span>Chat with StudyFlow Assistant</span>
                </button>

                <a
                  href="#how-can-we-help"
                  className="px-5 py-3.5 rounded-2xl font-semibold text-sm border border-neutral-300 dark:border-neutral-700 hover:bg-neutral-100 dark:hover:bg-neutral-900 transition-colors flex items-center gap-2"
                >
                  <span>Browse Help Topics</span>
                  <ArrowRight size={14} />
                </a>
              </div>

              {/* Trust Metric Badges */}
              <div className="pt-4 flex items-center gap-6 text-xs text-neutral-500 border-t border-neutral-200/80 dark:border-neutral-800">
                <div className="flex items-center gap-1.5">
                  <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
                  <span>120ms Response Time</span>
                </div>
                <div className="flex items-center gap-1.5">
                  <Headphones size={13} />
                  <span>24/7 Coaching Helpline</span>
                </div>
                <div className="flex items-center gap-1.5">
                  <CheckCircle2 size={13} className="text-emerald-600" />
                  <span>Free Setup & Migration</span>
                </div>
              </div>
            </div>

            {/* Right Visual Image & Interactive Chat Composition (From User Reference) */}
            <div className="lg:col-span-6 relative">
              <div className="relative rounded-3xl overflow-hidden border border-neutral-200/90 dark:border-neutral-800 shadow-2xl bg-neutral-100 dark:bg-neutral-900">
                <img
                  src={contactHeroBannerImg}
                  alt="StudyFlow Instant Support Assistant"
                  className="w-full h-auto object-cover max-h-[500px]"
                />
                
                {/* Overlay Floating Interactive Speech Prompts for High Fidelity */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent flex flex-col justify-end p-5 sm:p-6">
                  <div
                    onClick={() => setIsAiModalOpen(true)}
                    className="p-3.5 sm:p-4 rounded-2xl bg-white/95 dark:bg-neutral-900/95 backdrop-blur-md border border-white/40 dark:border-neutral-700 shadow-xl flex items-center justify-between cursor-pointer hover:scale-[1.01] transition-transform"
                  >
                    <div className="flex items-center gap-2.5 text-xs sm:text-sm font-medium text-neutral-800 dark:text-neutral-200">
                      <Sparkles size={16} className="text-violet-600 dark:text-violet-400 shrink-0" />
                      <span>What do I need to get my coaching institute online?</span>
                    </div>
                    <div className="w-8 h-8 rounded-full bg-violet-600 text-white flex items-center justify-center shrink-0">
                      <ArrowRight size={14} />
                    </div>
                  </div>
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
              <HelpCircle size={13} className="text-amber-500" />
              <span>Knowledge Base & Guidance</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-neutral-950 dark:text-white">
              How can we help you today?
            </h2>
            <p className="mt-3 text-sm text-neutral-600 dark:text-neutral-400">
              Select an area below to get immediate technical walkthroughs, onboarding guidance, or speak with our specialized engineering team.
            </p>
          </div>

          {/* 6 Category Cards Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {helpCategories.map((cat, idx) => {
              const Icon = cat.icon;
              return (
                <div
                  key={idx}
                  className="group relative p-6 rounded-3xl bg-neutral-50/80 dark:bg-neutral-900/50 border border-neutral-200/90 dark:border-neutral-800 hover:border-violet-500/50 transition-all duration-300 hover:shadow-lg flex flex-col justify-between"
                >
                  <div>
                    <div className="flex items-center justify-between mb-4">
                      <div className="w-12 h-12 rounded-2xl bg-white dark:bg-neutral-800 border border-neutral-200 dark:border-neutral-700 flex items-center justify-center text-neutral-900 dark:text-white group-hover:bg-violet-600 group-hover:text-white group-hover:border-violet-600 transition-colors shadow-xs">
                        <Icon size={22} />
                      </div>
                      <span className="text-[10px] font-mono uppercase tracking-wider px-2.5 py-0.5 rounded-full bg-neutral-200/60 dark:bg-neutral-800 text-neutral-600 dark:text-neutral-400">
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
                      className="text-xs font-semibold text-violet-600 dark:text-violet-400 group-hover:translate-x-0.5 transition-transform flex items-center gap-1.5"
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
          SECTION 3: REQUEST A CUSTOM FEATURE FOR STUDYFLOW (User Specific Request)
         ========================================================================= */}
      <section id="custom-feature-request" className="relative w-full py-20 lg:py-28 bg-neutral-950 text-white border-b border-neutral-800 overflow-hidden">
        {/* Subtle Background Glow */}
        <div className="pointer-events-none absolute -top-32 right-1/4 w-[500px] h-[300px] bg-rose-500/10 blur-[130px] rounded-full" />
        <div className="pointer-events-none absolute -bottom-32 left-1/4 w-[500px] h-[300px] bg-violet-500/10 blur-[130px] rounded-full" />

        <div className="relative z-10 w-full max-w-[96vw] lg:max-w-[92vw] xl:max-w-[88vw] mx-auto px-4 sm:px-6">
          
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
            
            {/* Left Description Column */}
            <div className="lg:col-span-5 space-y-6">
              <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-mono font-medium bg-neutral-900 border border-neutral-800 text-rose-400">
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
                  <div className="w-5 h-5 rounded-full bg-emerald-500/20 text-emerald-400 flex items-center justify-center shrink-0 mt-0.5">
                    <Check size={12} strokeWidth={2.6} />
                  </div>
                  <span>Direct consultation with StudyFlow core software architects</span>
                </div>
                <div className="flex items-start gap-2.5">
                  <div className="w-5 h-5 rounded-full bg-emerald-500/20 text-emerald-400 flex items-center justify-center shrink-0 mt-0.5">
                    <Check size={12} strokeWidth={2.6} />
                  </div>
                  <span>Fast prototyping & sandboxed testing on your subdomain</span>
                </div>
                <div className="flex items-start gap-2.5">
                  <div className="w-5 h-5 rounded-full bg-emerald-500/20 text-emerald-400 flex items-center justify-center shrink-0 mt-0.5">
                    <Check size={12} strokeWidth={2.6} />
                  </div>
                  <span>Seamless synchronization with your MongoDB student databases</span>
                </div>
              </div>
            </div>

            {/* Right Custom Feature Form */}
            <div className="lg:col-span-7">
              <div className="p-6 sm:p-8 rounded-3xl bg-neutral-900/90 border border-neutral-800 shadow-2xl backdrop-blur-xs">
                
                {featureSubmitted ? (
                  <div className="py-12 text-center space-y-4">
                    <div className="w-14 h-14 rounded-full bg-emerald-500/20 text-emerald-400 flex items-center justify-center mx-auto">
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
                          className="w-full px-3.5 py-2.5 rounded-xl bg-neutral-800/80 border border-neutral-700/80 text-white placeholder-neutral-500 focus:outline-hidden focus:border-rose-500 text-xs"
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
                          className="w-full px-3.5 py-2.5 rounded-xl bg-neutral-800/80 border border-neutral-700/80 text-white placeholder-neutral-500 focus:outline-hidden focus:border-rose-500 text-xs"
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
                          className="w-full px-3.5 py-2.5 rounded-xl bg-neutral-800/80 border border-neutral-700/80 text-white placeholder-neutral-500 focus:outline-hidden focus:border-rose-500 text-xs"
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
                          className="w-full px-3.5 py-2.5 rounded-xl bg-neutral-800/80 border border-neutral-700/80 text-white placeholder-neutral-500 focus:outline-hidden focus:border-rose-500 text-xs"
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
                          className="w-full px-3.5 py-2.5 rounded-xl bg-neutral-800/80 border border-neutral-700/80 text-white focus:outline-hidden focus:border-rose-500 text-xs"
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
                          className="w-full px-3.5 py-2.5 rounded-xl bg-neutral-800/80 border border-neutral-700/80 text-white focus:outline-hidden focus:border-rose-500 text-xs"
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
                        className="w-full px-3.5 py-2.5 rounded-xl bg-neutral-800/80 border border-neutral-700/80 text-white placeholder-neutral-500 focus:outline-hidden focus:border-rose-500 text-xs leading-relaxed"
                      />
                    </div>

                    <div className="flex items-center gap-2 pt-1">
                      <input
                        type="checkbox"
                        id="reqMeeting"
                        checked={featureForm.requestMeeting}
                        onChange={(e) => setFeatureForm({ ...featureForm, requestMeeting: e.target.checked })}
                        className="rounded border-neutral-700 text-rose-600 focus:ring-rose-500"
                      />
                      <label htmlFor="reqMeeting" className="text-neutral-300 text-[11px] cursor-pointer">
                        Schedule a 15-minute Google Meet call with our engineering team to discuss this spec
                      </label>
                    </div>

                    <button
                      type="submit"
                      className="w-full py-3 px-6 rounded-2xl font-bold text-xs bg-rose-600 hover:bg-rose-700 text-white shadow-lg shadow-rose-600/30 transition-all duration-200 hover:scale-[1.01] active:scale-[0.99] flex items-center justify-center gap-2 cursor-pointer mt-2"
                    >
                      <Send size={14} />
                      <span>Send Custom Feature Request to StudyFlow Engineering</span>
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
                  <PhoneCall size={12} className="text-emerald-600" />
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
                  <div className="w-10 h-10 rounded-xl bg-emerald-50 dark:bg-emerald-950/50 text-emerald-600 dark:text-emerald-400 flex items-center justify-center shrink-0">
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
                  <div className="w-10 h-10 rounded-xl bg-violet-50 dark:bg-violet-950/50 text-violet-600 dark:text-violet-400 flex items-center justify-center shrink-0">
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
                  <div className="w-10 h-10 rounded-xl bg-rose-50 dark:bg-rose-950/50 text-rose-600 dark:text-rose-400 flex items-center justify-center shrink-0">
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
                    <div className="w-12 h-12 rounded-full bg-emerald-500/20 text-emerald-600 dark:text-emerald-400 flex items-center justify-center mx-auto">
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
                          className="w-full px-3.5 py-2.5 rounded-xl bg-white dark:bg-neutral-800 border border-neutral-300 dark:border-neutral-700 text-neutral-900 dark:text-white placeholder-neutral-400 focus:outline-hidden focus:border-violet-500 text-xs"
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
                          className="w-full px-3.5 py-2.5 rounded-xl bg-white dark:bg-neutral-800 border border-neutral-300 dark:border-neutral-700 text-neutral-900 dark:text-white placeholder-neutral-400 focus:outline-hidden focus:border-violet-500 text-xs"
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
                          className="w-full px-3.5 py-2.5 rounded-xl bg-white dark:bg-neutral-800 border border-neutral-300 dark:border-neutral-700 text-neutral-900 dark:text-white placeholder-neutral-400 focus:outline-hidden focus:border-violet-500 text-xs"
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
                          className="w-full px-3.5 py-2.5 rounded-xl bg-white dark:bg-neutral-800 border border-neutral-300 dark:border-neutral-700 text-neutral-900 dark:text-white placeholder-neutral-400 focus:outline-hidden focus:border-violet-500 text-xs"
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
                        className="w-full px-3.5 py-2.5 rounded-xl bg-white dark:bg-neutral-800 border border-neutral-300 dark:border-neutral-700 text-neutral-900 dark:text-white placeholder-neutral-400 focus:outline-hidden focus:border-violet-500 text-xs"
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
                        className="w-full px-3.5 py-2.5 rounded-xl bg-white dark:bg-neutral-800 border border-neutral-300 dark:border-neutral-700 text-neutral-900 dark:text-white placeholder-neutral-400 focus:outline-hidden focus:border-violet-500 text-xs leading-relaxed"
                      />
                    </div>

                    <button
                      type="submit"
                      className="w-full py-3 px-6 rounded-2xl font-bold text-xs bg-neutral-900 hover:bg-neutral-800 text-white dark:bg-white dark:text-black dark:hover:bg-neutral-100 shadow-sm transition-all duration-200 hover:scale-[1.01] active:scale-[0.99] flex items-center justify-center gap-2 cursor-pointer pt-2"
                    >
                      <Send size={13} />
                      <span>Submit General Inquiry</span>
                    </button>
                  </form>
                )}

              </div>
            </div>

          </div>

        </div>
      </section>

      {/* =========================================================================
          INTERACTIVE AI ASSISTANT CHAT MODAL (Triggered by Hero Banner)
         ========================================================================= */}
      <AnimatePresence>
        {isAiModalOpen && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm">
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 15 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 15 }}
              transition={{ duration: 0.25, ease: [0.16, 1, 0.3, 1] }}
              className="relative w-full max-w-lg rounded-3xl bg-white dark:bg-neutral-900 border border-neutral-200 dark:border-neutral-800 shadow-2xl overflow-hidden flex flex-col max-h-[85vh]"
            >
              {/* Header */}
              <div className="p-4 sm:p-5 border-b border-neutral-200 dark:border-neutral-800 flex items-center justify-between bg-neutral-50 dark:bg-neutral-950">
                <div className="flex items-center gap-2.5">
                  <div className="w-8 h-8 rounded-full bg-violet-600 text-white flex items-center justify-center">
                    <Sparkles size={16} />
                  </div>
                  <div>
                    <h3 className="text-sm font-bold text-neutral-900 dark:text-white">
                      StudyFlow AI Assistant
                    </h3>
                    <p className="text-[10px] text-emerald-600 dark:text-emerald-400 font-mono">
                      Online • 24/7 Coaching Intelligence
                    </p>
                  </div>
                </div>

                <button
                  onClick={() => setIsAiModalOpen(false)}
                  className="w-8 h-8 rounded-full bg-neutral-200/80 dark:bg-neutral-800 text-neutral-600 dark:text-neutral-400 flex items-center justify-center hover:bg-neutral-300 dark:hover:bg-neutral-700 transition-colors"
                >
                  <X size={16} />
                </button>
              </div>

              {/* Chat Conversation Body */}
              <div className="flex-1 p-4 sm:p-5 overflow-y-auto space-y-3 text-xs">
                {aiChatMessages.map((msg, idx) => (
                  <div
                    key={idx}
                    className={cn(
                      'flex items-start gap-2.5',
                      msg.sender === 'user' ? 'justify-end' : 'justify-start'
                    )}
                  >
                    {msg.sender === 'ai' && (
                      <div className="w-6 h-6 rounded-full bg-violet-600 text-white flex items-center justify-center shrink-0 mt-0.5 text-[10px]">
                        AI
                      </div>
                    )}
                    <div
                      className={cn(
                        'p-3 rounded-2xl max-w-[80%] leading-relaxed',
                        msg.sender === 'user'
                          ? 'bg-violet-600 text-white rounded-tr-xs'
                          : 'bg-neutral-100 dark:bg-neutral-800 text-neutral-800 dark:text-neutral-200 rounded-tl-xs'
                      )}
                    >
                      {msg.text}
                    </div>
                  </div>
                ))}
              </div>

              {/* Input Form */}
              <form onSubmit={handleSendAiMessage} className="p-3 sm:p-4 border-t border-neutral-200 dark:border-neutral-800 flex items-center gap-2 bg-neutral-50 dark:bg-neutral-950">
                <input
                  type="text"
                  value={aiInputText}
                  onChange={(e) => setAiInputText(e.target.value)}
                  placeholder="Ask anything about domain setup, fees, or QR attendance..."
                  className="flex-1 px-3.5 py-2.5 rounded-xl bg-white dark:bg-neutral-900 border border-neutral-200 dark:border-neutral-800 text-neutral-900 dark:text-white placeholder-neutral-400 text-xs focus:outline-hidden focus:border-violet-500"
                />
                <button
                  type="submit"
                  className="w-10 h-10 rounded-xl bg-violet-600 hover:bg-violet-700 text-white flex items-center justify-center shrink-0 transition-colors"
                >
                  <Send size={15} />
                </button>
              </form>
            </motion.div>
          </div>
        )}
      </AnimatePresence>

    </div>
  );
}

export default ContactUs;
