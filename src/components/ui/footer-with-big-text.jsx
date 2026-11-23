import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import {
  QrCode,
  PhoneCall,
  Award,
  BookOpen,
  FolderKanban,
  FileText,
  CreditCard,
  Users,
  ShieldCheck,
  Zap,
  Globe,
  ArrowRight,
  Sparkles,
  Server,
  CheckCircle2,
  Lock,
  Layers,
  HelpCircle,
  MessageCircle,
  Heart
} from 'lucide-react';
import Logo from '../Logo/Logo';
import { cn } from '../../lib/utils';

export function FooterWithBigText() {
  // Feature highlights of StudyFlow's visual website components
  const componentFeatures = [
    {
      icon: FileText,
      name: 'Hero & Admissions Gate',
      desc: 'Live batch counters, demo bookings & automated lead forms.',
      tier: 'Basic (Tier 1+)'
    },
    {
      icon: PhoneCall,
      name: 'WhatsApp Admission Router',
      desc: 'Sub-120ms lead routing directly to counselor on WhatsApp.',
      tier: 'Complex (Tier 2+)'
    },
    {
      icon: QrCode,
      name: 'Smart QR Attendance Portal',
      desc: 'Fast camera check-in with automated parent arrival alerts.',
      tier: 'Complex (Tier 2+)'
    },
    {
      icon: Award,
      name: 'Verified Toppers Showcase',
      desc: 'Highlight national ranks, percentiles, and faculty credentials.',
      tier: 'Complex (Tier 2+)'
    },
    {
      icon: FolderKanban,
      name: 'Live Batch Seats Tracker',
      desc: 'Real-time MongoDB seat countdown with urgency triggers.',
      tier: 'Complex (Tier 2+)'
    },
    {
      icon: BookOpen,
      name: 'DPP & Formula Hub',
      desc: 'Lead-gated question banks, test papers, and syllabus downloads.',
      tier: 'Basic (Tier 1+)'
    },
    {
      icon: CreditCard,
      name: 'Automated Fee Engine',
      desc: 'Fee installments, defaulter tracker, and GST digital receipts.',
      tier: 'Exclusive (Tier 3)'
    },
    {
      icon: Users,
      name: 'Multi-Branch Switcher',
      desc: 'Unified administrative control across multiple coaching centers.',
      tier: 'Exclusive (Tier 3)'
    }
  ];

  const footerLinks = {
    components: [
      { name: 'Hero & Admission Banner', href: '/#features' },
      { name: 'WhatsApp Lead Router', href: '/#features' },
      { name: 'QR Attendance Portal', href: '/#features' },
      { name: 'Verified Toppers Wall', href: '/#features' },
      { name: 'Live Batch Seats Tracker', href: '/#features' },
      { name: 'DPP & Formula Hub', href: '/#features' },
      { name: 'Fee & Defaulter Engine', href: '/#pricing' },
    ],
    infrastructure: [
      { name: 'Free Custom Domain', href: '/pricing' },
      { name: 'Branded Subdomains', href: '/pricing' },
      { name: 'Global Edge CDN', href: '/pricing' },
      { name: 'NVMe Cloud Storage', href: '/pricing' },
      { name: 'Automated Daily Backups', href: '/pricing' },
      { name: 'Free SSL Certificates', href: '/pricing' },
      { name: 'Result-Day Cloud Scaling', href: '/pricing' },
    ],
    solutions: [
      { name: 'Single-Batch Tutors', href: '/pricing' },
      { name: 'Multi-Batch Coaching Centers', href: '/pricing' },
      { name: 'Premier IIT-JEE / NEET Academies', href: '/pricing' },
      { name: 'Commerce & CA Coaching', href: '/pricing' },
      { name: 'Foundation School Classes', href: '/pricing' },
      { name: 'Tuition Hubs & Study Centers', href: '/pricing' },
    ],
    company: [
      { name: 'About StudyFlow', href: '/about-us' },
      { name: 'Pricing Plans & ₹100 Discount', href: '/pricing' },
      { name: 'Component Features', href: '/features' },
      { name: 'Services & Cloud Setup', href: '/services' },
      { name: 'Contact & Helpline', href: '/contact-us' },
      { name: 'System Status: Operational', href: '/#pricing' },
    ],
  };

  return (
    <footer className="relative w-full bg-neutral-950 text-white overflow-hidden border-t border-neutral-800">
      
      {/* Background Ambience & Radial Glow */}
      <div className="pointer-events-none absolute inset-0 [background-size:40px_40px] [background-image:linear-gradient(to_right,#262626_1px,transparent_1px),linear-gradient(to_bottom,#262626_1px,transparent_1px)] opacity-25" />
      <div className="pointer-events-none absolute -top-40 left-1/2 -translate-x-1/2 w-[700px] h-[350px] bg-neutral-800/20 blur-[130px] rounded-full" />

      <div className="relative z-10 w-full max-w-[96vw] lg:max-w-[92vw] xl:max-w-[88vw] mx-auto px-4 sm:px-6 pt-16 sm:pt-20 pb-8">
        
        {/* Top Interactive Component Features Showcase Ribbon */}
        <div className="pb-16 border-b border-neutral-800/80">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-8">
            <div>
              <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-[11px] font-mono font-medium bg-neutral-900 border border-neutral-800 text-neutral-300 mb-3">
                <Layers size={12} className="text-rose-500" />
                <span>Visual Website IDE Component Library</span>
              </div>
              <h3 className="text-xl sm:text-2xl font-bold tracking-tight text-white">
                Engineered for Coaching Growth & Student Admissions
              </h3>
              <p className="text-xs sm:text-sm text-neutral-400 mt-1 max-w-xl">
                Every component is modular, responsive, and syncs seamlessly with MongoDB and WhatsApp.
              </p>
            </div>

            <div className="flex items-center gap-2">
              <span className="flex h-2 w-2 relative">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
                <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500" />
              </span>
              <span className="text-xs font-mono text-emerald-400">
                8 Coaching Components Ready
              </span>
            </div>
          </div>

          {/* Grid of Component Features */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {componentFeatures.map((comp, idx) => {
              const Icon = comp.icon;
              return (
                <div
                  key={idx}
                  className="group relative p-4 rounded-2xl bg-neutral-900/60 border border-neutral-800/90 hover:border-neutral-700 transition-all duration-200 hover:-translate-y-0.5"
                >
                  <div className="flex items-start justify-between mb-3">
                    <div className="w-9 h-9 rounded-xl bg-neutral-800 border border-neutral-700/80 flex items-center justify-center text-white group-hover:text-rose-400 transition-colors">
                      <Icon size={18} />
                    </div>
                    <span className="text-[10px] font-mono uppercase tracking-wider px-2 py-0.5 rounded-full bg-neutral-800/80 text-neutral-400 border border-neutral-700/60">
                      {comp.tier}
                    </span>
                  </div>

                  <h4 className="text-sm font-semibold text-white tracking-tight group-hover:text-rose-200 transition-colors">
                    {comp.name}
                  </h4>

                  <p className="text-xs text-neutral-400 mt-1 leading-relaxed">
                    {comp.desc}
                  </p>
                </div>
              );
            })}
          </div>
        </div>

        {/* Middle Navigation & Directory Grid */}
        <div className="py-14 border-b border-neutral-800/80 grid grid-cols-2 md:grid-cols-5 gap-8 lg:gap-12">
          
          {/* Brand & Mission Statement Column */}
          <div className="col-span-2 space-y-4">
            <Link to="/" className="inline-flex items-center gap-2.5 text-white hover:opacity-90 transition-opacity">
              <Logo size={24} color="#ffffff" />
              <span className="text-xl font-bold tracking-tight text-white">StudyFlow</span>
            </Link>

            <p className="text-xs sm:text-[13px] text-neutral-400 leading-relaxed max-w-sm">
              The Hyperlocal Coaching Website & Portal Engine. Design, customize, and live-preview your coaching academy's website with real-time MongoDB schema sync, instant WhatsApp admission routers, and zero coding required.
            </p>

            <div className="pt-2">
              <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-xl bg-neutral-900 border border-neutral-800 text-[11px] font-mono text-neutral-300">
                <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
                <span>Multi-Tenant Cloud Edge: Operational</span>
              </div>
            </div>

            {/* Quick Demo CTA */}
            <div className="pt-3">
              <Link
                to="/pricing"
                className="inline-flex items-center gap-2 text-xs font-semibold text-rose-400 hover:text-rose-300 transition-colors"
              >
                <span>View All 3 Plans with Flat ₹100 Welcome Discount</span>
                <ArrowRight size={13} />
              </Link>
            </div>
          </div>

          {/* Directory Column 1: Components */}
          <div className="space-y-3">
            <h4 className="text-xs font-mono font-bold uppercase tracking-wider text-neutral-300">
              IDE Components
            </h4>
            <ul className="space-y-2 text-xs">
              {footerLinks.components.map((link, idx) => (
                <li key={idx}>
                  <Link
                    to={link.href}
                    className="text-neutral-400 hover:text-white transition-colors"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Directory Column 2: Cloud & Infrastructure */}
          <div className="space-y-3">
            <h4 className="text-xs font-mono font-bold uppercase tracking-wider text-neutral-300">
              Cloud & Hosting
            </h4>
            <ul className="space-y-2 text-xs">
              {footerLinks.infrastructure.map((link, idx) => (
                <li key={idx}>
                  <Link
                    to={link.href}
                    className="text-neutral-400 hover:text-white transition-colors"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Directory Column 3: Solutions & Company */}
          <div className="space-y-3">
            <h4 className="text-xs font-mono font-bold uppercase tracking-wider text-neutral-300">
              Platform & Company
            </h4>
            <ul className="space-y-2 text-xs">
              {footerLinks.company.map((link, idx) => (
                <li key={idx}>
                  <Link
                    to={link.href}
                    className="text-neutral-400 hover:text-white transition-colors"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

        </div>

        {/* Aceternity Signature: Big Wordmark Section */}
        <div className="relative pt-12 sm:pt-16 pb-8 sm:pb-12 overflow-hidden flex flex-col items-center justify-center select-none pointer-events-none">
          <div className="w-full text-center">
            <h1
              className="text-[14vw] sm:text-[14.5vw] md:text-[15vw] font-black tracking-tighter leading-none text-transparent bg-clip-text bg-gradient-to-b from-neutral-200 via-neutral-600 to-neutral-900 opacity-90"
              style={{
                fontFamily: 'system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif'
              }}
            >
              STUDYFLOW
            </h1>
          </div>

          <div className="text-center -mt-2 sm:-mt-4">
            <p className="text-[11px] sm:text-xs font-mono uppercase tracking-[0.25em] text-neutral-500">
              Hyperlocal Coaching Website & Student Operations Engine
            </p>
          </div>
        </div>

        {/* Bottom Bar: Copyright & Legal */}
        <div className="pt-8 border-t border-neutral-800/80 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-neutral-500">
          <div className="text-center sm:text-left">
            <span>© 2026 StudyFlow Inc. Built for India's independent coaching institutes and tutors.</span>
          </div>

          <div className="flex flex-wrap items-center justify-center gap-6 text-[11px] font-medium">
            <Link to="/about-us" className="hover:text-neutral-300 transition-colors">
              Privacy Policy
            </Link>
            <Link to="/services" className="hover:text-neutral-300 transition-colors">
              Terms of Service
            </Link>
            <Link to="/pricing" className="hover:text-neutral-300 transition-colors">
              Refund Policy
            </Link>
            <Link to="/contact-us" className="hover:text-neutral-300 transition-colors">
              Security & Compliance
            </Link>
          </div>
        </div>

      </div>
    </footer>
  );
}

export default FooterWithBigText;
