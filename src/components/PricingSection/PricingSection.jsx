import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  Check,
  Minus,
  ArrowRight,
  ShieldCheck,
  Zap,
  Globe,
  QrCode,
  Gift,
  HelpCircle,
  ChevronDown,
  ChevronUp,
  Server,
  Cpu,
  HardDrive,
  Database,
  Sparkles,
  Award,
  Layers,
  Clock
} from 'lucide-react';
import { cn } from '../../lib/utils';

// Red Scalloped Rosette Gift Sticker matching user reference
export function GiftRosetteBadge({ className = "w-11 h-11", size = 44 }) {
  // 16-point scalloped rosette outer path
  const points = 16;
  const cx = 50;
  const cy = 50;
  const rOuter = 46;
  const rInner = 38;
  
  let pathD = "";
  for (let i = 0; i < points * 2; i++) {
    const angle = (i * Math.PI) / points - Math.PI / 2;
    const r = i % 2 === 0 ? rOuter : rInner;
    const x = cx + r * Math.cos(angle);
    const y = cy + r * Math.sin(angle);
    pathD += (i === 0 ? `M ${x.toFixed(2)} ${y.toFixed(2)}` : ` Q ${cx + (r + (i % 2 === 0 ? 3 : -3)) * Math.cos(angle - Math.PI / (points * 2))} ${cy + (r + (i % 2 === 0 ? 3 : -3)) * Math.sin(angle - Math.PI / (points * 2))} ${x.toFixed(2)} ${y.toFixed(2)}`);
  }
  pathD += " Z";

  return (
    <div className={cn("relative flex items-center justify-center shrink-0 drop-shadow-md select-none", className)}>
      <svg
        width={size}
        height={size}
        viewBox="0 0 100 100"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="w-full h-full"
      >
        <path
          d="M50 4 C53 8.5 58 9 63 6 C67 10 72 11 76 9 C79.5 13.5 85 15.5 88 14 C90.5 19 95.5 22 97 21 C98.5 26.5 101 30.5 101 36 C101.5 42 101.5 46.5 99.5 51 C101.5 55.5 101.5 60 101 66 C101 71.5 98.5 75.5 97 81 C95.5 80 90.5 83 88 88 C85 86.5 79.5 88.5 76 93 C72 91 67 92 63 96 C58 93 53 93.5 50 98 C47 93.5 42 93 37 96 C33 92 28 91 24 93 C20.5 88.5 15 86.5 12 88 C9.5 83 4.5 80 3 81 C1.5 75.5 -1 71.5 -1 66 C-1.5 60 -1.5 55.5 0.5 51 C-1.5 46.5 -1.5 42 -1 36 C-1 30.5 1.5 26.5 3 21 C4.5 22 9.5 19 12 14 C15 15.5 20.5 13.5 24 9 C28 11 33 10 37 6 C42 9 47 8.5 50 4 Z"
          fill="#ff3b5c"
        />
        <circle cx="50" cy="50" r="41" fill="#f43f5e" />
      </svg>
      {/* Centered White Gift Box Icon */}
      <Gift className="absolute text-white" size={Math.round(size * 0.48)} strokeWidth={2.4} />
    </div>
  );
}

export function PricingSection() {
  const [billingCycle, setBillingCycle] = useState('monthly'); // 'monthly' | 'yearly'
  const [showComparison, setShowComparison] = useState(false);

  const plans = [
    {
      id: 'starter',
      name: 'Starter Tuition',
      tagline: 'Ideal for single-batch tutors & neighborhood classrooms',
      originalPrice: 399,
      discountedPrice: 299,
      yearlyOriginalPrice: 3990,
      yearlyDiscountedPrice: 2990,
      popular: false,
      badge: 'STARTER',
      highlights: [
        '3 Hosted Websites / Landing Pages',
        'Free Domain for 1 Year Included',
        '20 GB High-Speed SSD Storage',
        'Free Weekly Cloud Backups',
        'Global Edge CDN & Automated SSL',
        'Student Registration & Admission Form',
        'Daily Student Attendance Tracking',
        'Up to 100 Active Students',
      ],
      ctaText: 'Choose Starter Plan',
      buttonVariant: 'secondary',
    },
    {
      id: 'growth',
      name: 'Coaching Academy',
      tagline: 'Best for growing institutes scaling across multiple batches',
      originalPrice: 699,
      discountedPrice: 599,
      yearlyOriginalPrice: 6990,
      yearlyDiscountedPrice: 5990,
      popular: true,
      badge: 'MOST POPULAR',
      highlights: [
        'Unlimited Hosted Coaching Websites',
        'Free Custom Domain + WHOIS Privacy',
        '50 GB NVMe Cloud Storage',
        'Daily Backups + 1-Click Restore',
        'Instant WhatsApp Admission Router',
        'Smart QR Code Attendance Portal',
        'Ecommerce & Course Selling (Free 1 yr)',
        'Priority 24/7 Expert Coaching Support',
      ],
      ctaText: 'Choose Academy Plan',
      buttonVariant: 'flashy',
    },
    {
      id: 'pro',
      name: 'Institute Premier',
      tagline: 'Built for large coaching academies and multi-branch centers',
      originalPrice: 999,
      discountedPrice: 899,
      yearlyOriginalPrice: 9990,
      yearlyDiscountedPrice: 8990,
      popular: false,
      badge: 'PREMIER',
      highlights: [
        'Unlimited Websites & Multi-Branch Support',
        'Free Custom Domain + Dedicated IP Address',
        '100 GB NVMe Cloud Storage',
        'Daily & On-Demand Live Backups',
        'Complete Fee Management & Defaulter Tracker',
        'Full Web Apps & Student Portal Access',
        '400,000+ Inodes & 4 Dedicated CPU Cores',
        'Dedicated Account Manager & Fast Onboarding',
      ],
      ctaText: 'Choose Premier Plan',
      buttonVariant: 'secondary',
    },
  ];

  // Comprehensive Feature Comparison Matrix (inspired by hosting platform specifications)
  const comparisonCategories = [
    {
      category: 'Top Features',
      rows: [
        { name: 'Hosted Websites', starter: '3 websites', growth: 'Unlimited', pro: 'Unlimited' },
        { name: 'Custom Domain (Free 1st Year)', starter: 'Included', growth: 'Included', pro: 'Included' },
        { name: 'Free Domain WHOIS Privacy ($9.99 Value)', starter: 'Included', growth: 'Included', pro: 'Included' },
        { name: 'Course Selling & Fee Portal', starter: false, growth: 'Free for 1 year (NEW)', pro: 'Free for 1 year (NEW)' },
        { name: 'Cloud Storage Capacity', starter: '20 GB SSD', growth: '50 GB NVMe', pro: '100 GB NVMe' },
        { name: 'Automated Cloud Backups', starter: 'Free weekly', growth: 'Daily + 1-Click Restore', pro: 'Daily & On-Demand' },
        { name: 'Global Edge CDN Network', starter: true, growth: true, pro: true },
        { name: 'Priority 24/7 Expert Support', starter: 'Standard Ticket', growth: 'Priority 24/7 Chat & Call', pro: 'Dedicated Account Manager' },
        { name: 'AI Builder Credits', starter: '500 (+250 bonus)', growth: '1,000 (+500 bonus)', pro: '2,000 (+1,000 bonus)' },
        { name: 'Full Web Apps & Student Portal', starter: false, growth: true, pro: true },
        { name: 'Mailboxes per Website', starter: '2 mailboxes', growth: 'Unlimited', pro: 'Unlimited' },
        { name: 'Free AI Email & WhatsApp Marketing', starter: false, growth: 'Up to 100 subscribers', pro: 'Up to 500 subscribers' },
        { name: 'AI SEO Optimization Ready', starter: true, growth: true, pro: true },
        { name: 'Uptime SLA Guarantee', starter: '99.9%', growth: '99.9%', pro: '99.9%' },
      ],
    },
    {
      category: 'Coaching Management Features',
      rows: [
        { name: 'Student Enrolment Limit', starter: '100 Students', growth: '350 Students', pro: '1,000 Students' },
        { name: 'WhatsApp Admission Router (120ms)', starter: false, growth: true, pro: true },
        { name: 'QR Code Attendance Check-In', starter: 'Manual Form', growth: true, pro: true },
        { name: 'Verified Topper & Faculty Wall', starter: 'Basic', growth: true, pro: true },
        { name: 'DPP & Formula Sheet Download Gate', starter: true, growth: true, pro: true },
        { name: 'Fee Collection & GST Invoices', starter: false, growth: 'Basic Tracking', pro: 'Complete Automated Engine' },
        { name: 'Multi-Branch Management', starter: false, growth: false, pro: true },
      ],
    },
    {
      category: 'Technical & Cloud Infrastructure',
      rows: [
        { name: 'Global Data Centers & Free SSL', starter: true, growth: true, pro: true },
        { name: 'Free Automatic Website Migration', starter: true, growth: true, pro: true },
        { name: 'Files and Directories (Inodes)', starter: '400,000', growth: '600,000', pro: '2,000,000' },
        { name: 'Engine Worker Threads', starter: '40 workers', growth: '60 workers', pro: '100 workers' },
        { name: 'Database Allocation', starter: '10 Databases (3 GB)', growth: '150 Databases (3 GB)', pro: '300 Databases (6 GB)' },
        { name: 'Server RAM Allocation', starter: '2 GB RAM', growth: '3 GB RAM', pro: '4 GB RAM' },
        { name: 'Dedicated CPU Cores', starter: '1 Core', growth: '2 Cores', pro: '4 Cores' },
        { name: 'Bandwidth', starter: 'Unlimited', growth: 'Unlimited', pro: 'Unlimited' },
        { name: 'Dedicated Static IP Address', starter: false, growth: false, pro: true },
      ],
    },
  ];

  return (
    <section id="pricing" className="relative w-full py-20 lg:py-28 bg-white dark:bg-black border-t border-neutral-200/80 dark:border-neutral-800 overflow-hidden">
      {/* Background Subtle Tech Grid Ambience */}
      <div className="pointer-events-none absolute inset-0 [background-size:36px_36px] [background-image:linear-gradient(to_right,#f4f4f5_1px,transparent_1px),linear-gradient(to_bottom,#f4f4f5_1px,transparent_1px)] dark:[background-image:linear-gradient(to_right,#18181b_1px,transparent_1px),linear-gradient(to_bottom,#18181b_1px,transparent_1px)] opacity-50" />
      <div className="pointer-events-none absolute inset-0 bg-radial from-transparent via-white/80 to-white dark:via-black/80 dark:to-black" />

      <div className="relative z-10 w-full max-w-[96vw] lg:max-w-[92vw] xl:max-w-[88vw] mx-auto px-4 sm:px-6">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-10 sm:mb-14">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-medium bg-neutral-100 text-neutral-800 border border-neutral-200 dark:bg-neutral-900 dark:text-neutral-200 dark:border-neutral-800 mb-4">
            <Zap size={12} className="text-amber-500" />
            <span>Transparent Coaching & Hosting Plans</span>
          </div>

          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-neutral-950 dark:text-white leading-[1.2]">
            Affordable Plans for Every Coaching Center
          </h2>

          <p className="mt-4 text-sm sm:text-base text-neutral-600 dark:text-neutral-400 max-w-2xl mx-auto leading-relaxed">
            Everything your coaching academy needs: custom domain, high-speed cloud hosting, student portal, and automated WhatsApp admission routers.
          </p>

          {/* New Institute Welcome Gift Banner with Red Rosette Logo */}
          <div className="mt-8 inline-flex items-center gap-3.5 p-2 sm:p-2.5 pr-5 sm:pr-6 rounded-2xl bg-rose-50/90 dark:bg-rose-950/30 border border-rose-200/90 dark:border-rose-900/50 shadow-sm backdrop-blur-xs">
            <GiftRosetteBadge size={40} className="w-10 h-10 sm:w-11 sm:h-11 shrink-0" />
            <div className="text-left">
              <div className="flex items-center gap-2">
                <span className="text-xs sm:text-sm font-bold text-rose-900 dark:text-rose-200">
                  New Institute Offer: Flat ₹100 OFF
                </span>
                <span className="px-2 py-0.5 rounded-full text-[9px] font-mono font-bold bg-rose-600 text-white uppercase tracking-wider">
                  Active
                </span>
              </div>
              <p className="text-[11px] sm:text-xs text-rose-700/90 dark:text-rose-300/80 mt-0.5">
                Automatic ₹100 discount applied to every plan for all newly registered institutes.
              </p>
            </div>
          </div>
        </div>

        {/* Pricing Cards Grid (3 Categories: ₹399 / ₹699 / ₹999 with ₹100 OFF applied) */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 lg:gap-8 items-stretch pt-2">
          {plans.map((plan) => {
            const isPopular = plan.popular;
            const currentOriginal = billingCycle === 'monthly' ? plan.originalPrice : plan.yearlyOriginalPrice;
            const currentDiscounted = billingCycle === 'monthly' ? plan.discountedPrice : plan.yearlyDiscountedPrice;

            return (
              <motion.div
                key={plan.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
                className={cn(
                  'relative rounded-3xl p-6 sm:p-8 flex flex-col justify-between transition-all duration-300 select-none',
                  isPopular
                    ? 'bg-neutral-950 text-white dark:bg-neutral-900 border-2 border-rose-500 shadow-2xl scale-[1.02] lg:-translate-y-2'
                    : 'bg-white dark:bg-neutral-950 text-neutral-950 dark:text-white border border-neutral-200/90 dark:border-neutral-800 shadow-lg hover:border-neutral-300 dark:hover:border-neutral-700'
                )}
              >
                {/* Popular Card Header Banner & Gift Rosette Badge Sticker */}
                {isPopular && (
                  <>
                    <div className="absolute -top-3.5 left-1/2 -translate-x-1/2 px-3.5 py-1 rounded-full text-[10px] font-mono font-bold tracking-wider uppercase bg-rose-600 text-white shadow-md">
                      {plan.badge}
                    </div>
                    {/* Top Right Rosette Sticker */}
                    <div className="absolute -top-4 -right-3 sm:-top-5 sm:-right-4 z-20">
                      <GiftRosetteBadge size={46} className="w-11 h-11 sm:w-12 sm:h-12 hover:scale-110 transition-transform cursor-pointer" />
                    </div>
                  </>
                )}

                {/* Plan Header Info */}
                <div>
                  <div className="flex items-center justify-between">
                    <span
                      className={cn(
                        'text-xs font-mono font-semibold uppercase tracking-wider px-2.5 py-1 rounded-full border',
                        isPopular
                          ? 'bg-white/10 text-rose-300 border-white/20'
                          : 'bg-neutral-100 text-neutral-600 border-neutral-200 dark:bg-neutral-800 dark:text-neutral-400 dark:border-neutral-700'
                      )}
                    >
                      {plan.badge}
                    </span>
                    {!isPopular && (
                      <div className="flex items-center gap-1 text-[11px] font-mono text-rose-600 dark:text-rose-400 font-semibold bg-rose-50 dark:bg-rose-950/40 px-2 py-0.5 rounded-full border border-rose-200 dark:border-rose-900/50">
                        <span>Save ₹100</span>
                      </div>
                    )}
                  </div>

                  <h3 className="text-xl sm:text-2xl font-bold mt-4 tracking-tight">
                    {plan.name}
                  </h3>

                  <p
                    className={cn(
                      'text-xs mt-1.5 leading-relaxed',
                      isPopular ? 'text-neutral-300' : 'text-neutral-500 dark:text-neutral-400'
                    )}
                  >
                    {plan.tagline}
                  </p>

                  {/* Price Tag with Struck-Through Original Price */}
                  <div className="mt-6 pb-6 border-b border-neutral-200/80 dark:border-neutral-800/80 flex items-baseline gap-2.5">
                    <div className="flex items-baseline gap-1.5">
                      <span className="text-3xl sm:text-4xl md:text-5xl font-extrabold font-mono tracking-tight">
                        ₹{currentDiscounted}
                      </span>
                      <span
                        className={cn(
                          'text-xs font-medium',
                          isPopular ? 'text-neutral-300' : 'text-neutral-500'
                        )}
                      >
                        / month
                      </span>
                    </div>

                    {/* Struck through regular rate */}
                    <div className="flex flex-col items-start pl-1">
                      <span
                        className={cn(
                          'line-through text-xs sm:text-sm font-mono',
                          isPopular ? 'text-neutral-400' : 'text-neutral-400'
                        )}
                      >
                        ₹{currentOriginal}
                      </span>
                      <span className="text-[10px] font-bold text-rose-500 font-mono leading-none">
                        -₹100 OFF
                      </span>
                    </div>
                  </div>

                  {/* Feature Checklist */}
                  <div className="py-6 space-y-3">
                    <span
                      className={cn(
                        'text-[11px] font-mono uppercase tracking-wider block font-semibold',
                        isPopular ? 'text-neutral-300' : 'text-neutral-500 dark:text-neutral-400'
                      )}
                    >
                      Top Included Features:
                    </span>

                    <ul className="space-y-2.5 text-xs sm:text-[13px]">
                      {plan.highlights.map((feature, idx) => (
                        <li key={idx} className="flex items-start gap-2.5">
                          <div
                            className={cn(
                              'w-4.5 h-4.5 rounded-full flex items-center justify-center shrink-0 mt-0.5',
                              isPopular
                                ? 'bg-rose-500/20 text-rose-400'
                                : 'bg-emerald-50 dark:bg-emerald-950/50 text-emerald-600 dark:text-emerald-400'
                            )}
                          >
                            <Check size={12} strokeWidth={2.6} />
                          </div>
                          <span
                            className={cn(
                              'leading-snug',
                              isPopular ? 'text-neutral-200' : 'text-neutral-700 dark:text-neutral-300'
                            )}
                          >
                            {feature}
                          </span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                {/* Flashy / High-Conversion Action Button */}
                <div className="pt-4 mt-auto">
                  {plan.buttonVariant === 'flashy' ? (
                    /* Flashy Glowing Gradient Button for Recommended Plan */
                    <button
                      className="group relative w-full py-3.5 px-6 rounded-2xl font-bold text-sm text-white overflow-hidden transition-all duration-300 hover:scale-[1.02] active:scale-[0.98] shadow-[0_0_28px_rgba(244,63,94,0.45)] hover:shadow-[0_0_36px_rgba(244,63,94,0.65)] cursor-pointer"
                      style={{
                        background: 'linear-gradient(135deg, #e11d48 0%, #f43f5e 50%, #fb7185 100%)',
                      }}
                    >
                      {/* Sweeping Shimmer Flare Effect */}
                      <span className="absolute inset-0 w-full h-full bg-gradient-to-r from-transparent via-white/40 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000 ease-out" />
                      
                      <span className="relative z-10 flex items-center justify-center gap-2">
                        <span>{plan.ctaText}</span>
                        <ArrowRight size={15} className="group-hover:translate-x-1 transition-transform" />
                      </span>
                    </button>
                  ) : (
                    /* Clean Secondary Action Button */
                    <button
                      className="group relative w-full py-3 px-6 rounded-2xl font-semibold text-sm bg-neutral-900 text-white dark:bg-white dark:text-black hover:bg-neutral-800 dark:hover:bg-neutral-100 transition-all duration-300 hover:scale-[1.02] active:scale-[0.98] shadow-sm cursor-pointer"
                    >
                      <span className="flex items-center justify-center gap-2">
                        <span>{plan.ctaText}</span>
                        <ArrowRight size={15} className="group-hover:translate-x-1 transition-transform text-neutral-400 group-hover:text-white dark:group-hover:text-black" />
                      </span>
                    </button>
                  )}
                  <p
                    className={cn(
                      'text-center text-[10px] mt-2.5 font-mono',
                      isPopular ? 'text-neutral-400' : 'text-neutral-400'
                    )}
                  >
                    Instant Setup • Cancel Anytime
                  </p>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Toggle Detailed Comparison Table Button */}
        <div className="mt-12 text-center">
          <button
            onClick={() => setShowComparison(!showComparison)}
            className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full text-xs sm:text-sm font-medium border border-neutral-300 dark:border-neutral-700 bg-white dark:bg-neutral-900 text-neutral-800 dark:text-neutral-200 hover:bg-neutral-50 dark:hover:bg-neutral-800 transition-colors shadow-xs"
          >
            <span>{showComparison ? 'Hide Feature Comparison' : 'Compare All Hosting & Coaching Features'}</span>
            {showComparison ? <ChevronUp size={15} /> : <ChevronDown size={15} />}
          </button>
        </div>

        {/* Expandable Full Feature Comparison Matrix */}
        <AnimatePresence>
          {showComparison && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
              className="mt-8 overflow-hidden"
            >
              <div className="w-full overflow-x-auto rounded-2xl border border-neutral-200 dark:border-neutral-800 bg-white dark:bg-neutral-950 shadow-sm">
                <table className="w-full text-left border-collapse text-xs sm:text-sm">
                  {/* Table Header with Plans */}
                  <thead>
                    <tr className="border-b border-neutral-200 dark:border-neutral-800 bg-neutral-50 dark:bg-neutral-900/60">
                      <th className="py-4 px-4 sm:px-6 font-semibold text-neutral-900 dark:text-neutral-100 w-2/5">
                        Feature Specification
                      </th>
                      <th className="py-4 px-3 sm:px-4 font-semibold text-neutral-900 dark:text-neutral-100 text-center w-1/5">
                        Starter Tuition
                        <span className="block text-[11px] font-mono text-rose-600 font-normal">₹299/mo</span>
                      </th>
                      <th className="py-4 px-3 sm:px-4 font-semibold text-neutral-900 dark:text-neutral-100 text-center w-1/5 bg-rose-50/50 dark:bg-rose-950/20 border-x border-rose-200 dark:border-rose-900/30">
                        Coaching Academy
                        <span className="block text-[11px] font-mono text-rose-600 font-bold">₹599/mo (Popular)</span>
                      </th>
                      <th className="py-4 px-3 sm:px-4 font-semibold text-neutral-900 dark:text-neutral-100 text-center w-1/5">
                        Institute Premier
                        <span className="block text-[11px] font-mono text-rose-600 font-normal">₹899/mo</span>
                      </th>
                    </tr>
                  </thead>

                  {/* Table Body Categories */}
                  <tbody className="divide-y divide-neutral-200 dark:divide-neutral-800">
                    {comparisonCategories.map((cat, catIdx) => (
                      <React.Fragment key={catIdx}>
                        {/* Category Heading Row */}
                        <tr className="bg-neutral-100/70 dark:bg-neutral-900/80">
                          <td
                            colSpan={4}
                            className="py-2.5 px-4 sm:px-6 text-[11px] font-mono font-bold uppercase tracking-wider text-neutral-700 dark:text-neutral-300"
                          >
                            {cat.category}
                          </td>
                        </tr>

                        {/* Category Items */}
                        {cat.rows.map((row, rIdx) => (
                          <tr
                            key={rIdx}
                            className="hover:bg-neutral-50/70 dark:hover:bg-neutral-900/30 transition-colors"
                          >
                            <td className="py-3 px-4 sm:px-6 font-medium text-neutral-800 dark:text-neutral-200">
                              {row.name}
                            </td>
                            {/* Starter column */}
                            <td className="py-3 px-3 sm:px-4 text-center text-neutral-600 dark:text-neutral-400">
                              {row.starter === true ? (
                                <Check size={16} className="mx-auto text-emerald-600" />
                              ) : row.starter === false ? (
                                <Minus size={16} className="mx-auto text-neutral-300 dark:text-neutral-600" />
                              ) : (
                                <span>{row.starter}</span>
                              )}
                            </td>
                            {/* Growth column (highlighted) */}
                            <td className="py-3 px-3 sm:px-4 text-center text-neutral-900 dark:text-neutral-100 font-medium bg-rose-50/30 dark:bg-rose-950/10 border-x border-rose-200/60 dark:border-rose-900/30">
                              {row.growth === true ? (
                                <Check size={16} className="mx-auto text-emerald-600" />
                              ) : row.growth === false ? (
                                <Minus size={16} className="mx-auto text-neutral-300 dark:text-neutral-600" />
                              ) : (
                                <span>{row.growth}</span>
                              )}
                            </td>
                            {/* Pro column */}
                            <td className="py-3 px-3 sm:px-4 text-center text-neutral-600 dark:text-neutral-400">
                              {row.pro === true ? (
                                <Check size={16} className="mx-auto text-emerald-600" />
                              ) : row.pro === false ? (
                                <Minus size={16} className="mx-auto text-neutral-300 dark:text-neutral-600" />
                              ) : (
                                <span>{row.pro}</span>
                              )}
                            </td>
                          </tr>
                        ))}
                      </React.Fragment>
                    ))}
                  </tbody>
                </table>
              </div>
            </motion.div>
          )}
        </AnimatePresence>

        {/* Bottom Trust & Assurance Footer */}
        <div className="mt-14 pt-8 border-t border-neutral-200/80 dark:border-neutral-800 grid grid-cols-1 sm:grid-cols-3 gap-6 text-center text-xs text-neutral-500">
          <div className="flex items-center justify-center gap-2">
            <ShieldCheck size={16} className="text-emerald-600 shrink-0" />
            <span>Automated Free SSL & Edge CDN Included</span>
          </div>
          <div className="flex items-center justify-center gap-2">
            <Sparkles size={16} className="text-amber-500 shrink-0" />
            <span>Flat ₹100 Welcome Discount Applied Automatically</span>
          </div>
          <div className="flex items-center justify-center gap-2">
            <HelpCircle size={16} className="text-neutral-600 shrink-0" />
            <span>24/7 Dedicated Coaching Support & WhatsApp Helpline</span>
          </div>
        </div>

      </div>
    </section>
  );
}

export default PricingSection;
