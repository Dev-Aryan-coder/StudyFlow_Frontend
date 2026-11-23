import React from 'react';
import { motion } from 'framer-motion';
import {
  TrendingUp,
  Globe,
  Users,
  QrCode,
  ArrowUpRight,
  CheckCircle2,
  BarChart3,
  ShieldCheck,
  FileText,
  Sparkles,
  Laptop,
  Smartphone,
  Layers,
  ArrowRight
} from 'lucide-react';
import { cn } from '../../lib/utils';
import trafficAnalyticsImg from '../../assets/studyflow_traffic_analytics.jpg';
import operationalAnalyticsImg from '../../assets/studyflow_operations_analytics.jpg';

export function GrowthSection() {
  const websiteMetrics = [
    { label: 'Total Visits', value: '14,820', change: '+18.4% this month', changeType: 'positive' },
    { label: 'Inquiry Rate', value: '12.4%', change: 'High interest', changeType: 'positive' },
    { label: 'Mobile Users', value: '78.2%', change: 'Phone visitors', changeType: 'neutral' },
  ];

  const operationalMetrics = [
    { label: 'Daily Attendance', value: '96.4%', change: 'QR checked in', changeType: 'positive' },
    { label: 'Active Students', value: '248', change: '8 Batches', changeType: 'neutral' },
    { label: 'Fee Collection', value: '94.8%', change: 'On track', changeType: 'positive' },
  ];

  return (
    <section className="relative w-full py-20 lg:py-32 bg-white dark:bg-black border-t border-neutral-200/80 dark:border-neutral-800 overflow-hidden">
      {/* Background Subtle Ambience */}
      <div className="pointer-events-none absolute inset-0 [background-size:40px_40px] [background-image:linear-gradient(to_right,#f4f4f5_1px,transparent_1px),linear-gradient(to_bottom,#f4f4f5_1px,transparent_1px)] dark:[background-image:linear-gradient(to_right,#18181b_1px,transparent_1px),linear-gradient(to_bottom,#18181b_1px,transparent_1px)] opacity-50" />
      <div className="pointer-events-none absolute inset-0 bg-radial from-transparent via-white/80 to-white dark:via-black/80 dark:to-black" />

      <div className="relative z-10 w-full max-w-[96vw] lg:max-w-[92vw] xl:max-w-[88vw] mx-auto px-4 sm:px-6">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 sm:mb-24">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-medium bg-neutral-100 text-neutral-800 border border-neutral-200 dark:bg-neutral-900 dark:text-neutral-200 dark:border-neutral-800 mb-4">
            <TrendingUp size={12} className="text-neutral-600 dark:text-neutral-400" />
            <span>Tracking Your Growth</span>
          </div>

          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-neutral-950 dark:text-white leading-[1.2]">
            See How Your Website & Coaching Are Growing
          </h2>

          <p className="mt-4 text-sm sm:text-base text-neutral-600 dark:text-neutral-400 max-w-2xl mx-auto leading-relaxed">
            Check how many parents visit your website every day and manage all your student attendance, fees, and batches from one simple place.
          </p>
        </div>

        {/* Article 1: Hosted Website & Traffic Analytics (Image Left, Content Right) */}
        <div className="mb-20 sm:mb-28 lg:mb-32">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-14 items-center">
            
            {/* Left Column: Illustration & Visual Preview */}
            <div className="lg:col-span-6 w-full order-1">
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 0.65, ease: [0.16, 1, 0.3, 1] }}
                className="relative rounded-3xl p-2 sm:p-3 border border-neutral-200/90 dark:border-neutral-800 bg-neutral-50/70 dark:bg-neutral-900/60 shadow-xl backdrop-blur-md overflow-hidden group"
              >
                {/* Visual Frame */}
                <div className="relative rounded-2xl overflow-hidden bg-neutral-100 dark:bg-neutral-950 aspect-[16/10] sm:aspect-[16/11] flex items-center justify-center border border-neutral-200/80 dark:border-neutral-800">
                  <img
                    src={trafficAnalyticsImg}
                    alt="Hosted Website & Traffic Analytics Illustration"
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-[1.03]"
                  />

                  {/* Fallback Clean Visual Mockup if Image Pending */}
                  <div className="hidden flex-col items-center justify-center p-6 text-center space-y-4 w-full h-full bg-gradient-to-br from-neutral-50 to-neutral-100 dark:from-neutral-900 dark:to-neutral-950">
                    <div className="w-16 h-16 rounded-2xl bg-white dark:bg-neutral-800 border border-neutral-200 dark:border-neutral-700 shadow-md flex items-center justify-center text-neutral-800 dark:text-neutral-200">
                      <Globe size={32} />
                    </div>
                    <div>
                      <h4 className="text-base font-bold text-neutral-900 dark:text-white">Website & Traffic Analytics</h4>
                      <p className="text-xs text-neutral-500 max-w-sm mt-1">See how many parents visit your website and send inquiries.</p>
                    </div>
                  </div>
                </div>

                {/* Live Floating Telemetry Bar */}
                <div className="mt-3 grid grid-cols-3 gap-2 px-1 pb-1">
                  {websiteMetrics.map((item, idx) => (
                    <div key={idx} className="bg-white dark:bg-neutral-900/90 rounded-xl p-2.5 border border-neutral-200/80 dark:border-neutral-800 shadow-2xs">
                      <span className="text-[10px] font-mono text-neutral-500 uppercase block truncate">{item.label}</span>
                      <div className="text-sm sm:text-base font-bold text-neutral-950 dark:text-white font-mono mt-0.5">{item.value}</div>
                      <span className="text-[10px] text-emerald-600 dark:text-emerald-400 font-semibold">{item.change}</span>
                    </div>
                  ))}
                </div>
              </motion.div>
            </div>

            {/* Right Column: Content */}
            <div className="lg:col-span-6 w-full order-2">
              <motion.div
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 0.65, ease: [0.16, 1, 0.3, 1] }}
                className="space-y-6 text-left"
              >
                <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-[11px] font-mono font-semibold tracking-wider uppercase bg-neutral-100 text-neutral-700 border border-neutral-200 dark:bg-neutral-800 dark:text-neutral-300 dark:border-neutral-700">
                  <span>Website Visitors • 01</span>
                </div>

                <h3 className="text-2xl sm:text-3xl md:text-4xl font-bold tracking-tight text-neutral-950 dark:text-white leading-tight">
                  Website Visitors & Admission Inquiries
                </h3>

                <p className="text-sm sm:text-base text-neutral-600 dark:text-neutral-300 leading-relaxed">
                  See how parents find your coaching online. Know how many people visit your website, how many send admission inquiries, and how well it opens on mobile phones.
                </p>

                {/* Key Capability Points */}
                <div className="space-y-3.5 pt-2">
                  {[
                    {
                      title: 'Daily & Monthly Website Visitors',
                      desc: 'See how many parents and students visit your coaching website each day and each month.',
                    },
                    {
                      title: 'New Admission Leads & Inquiries',
                      desc: 'Count how many parents click the WhatsApp button, fill out admission forms, or download your prospectus.',
                    },
                    {
                      title: 'Phone & Computer Visitors',
                      desc: 'See whether parents are browsing your website on mobile phones or laptops so it always loads quickly.',
                    },
                    {
                      title: 'Pamphlet & Banner QR Scans',
                      desc: 'Know exactly how many local parents scanned the QR codes printed on your admission posters, banners, and flyers.',
                    },
                  ].map((feat, idx) => (
                    <div key={idx} className="flex items-start gap-3">
                      <div className="w-5 h-5 rounded-full bg-neutral-100 dark:bg-neutral-800 text-neutral-800 dark:text-neutral-200 flex items-center justify-center shrink-0 mt-0.5 border border-neutral-200 dark:border-neutral-700">
                        <CheckCircle2 size={12} className="text-emerald-600 dark:text-emerald-400" />
                      </div>
                      <div>
                        <h4 className="text-xs sm:text-sm font-semibold text-neutral-900 dark:text-neutral-100">{feat.title}</h4>
                        <p className="text-xs text-neutral-500 dark:text-neutral-400 mt-0.5 leading-relaxed">{feat.desc}</p>
                      </div>
                    </div>
                  ))}
                </div>

                {/* Action Link */}
                <div className="pt-3">
                  <a
                    href="#features"
                    className="inline-flex items-center gap-1.5 text-xs sm:text-sm font-semibold text-neutral-900 dark:text-white hover:underline underline-offset-4"
                  >
                    <span>Learn more about website visitors</span>
                    <ArrowRight size={14} />
                  </a>
                </div>
              </motion.div>
            </div>

          </div>
        </div>

        {/* Article 2: User & Operational Analytics (Content Left, Image Right) */}
        <div>
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-14 items-center">
            
            {/* Left Column: Content */}
            <div className="lg:col-span-6 w-full order-2 lg:order-1">
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 0.65, ease: [0.16, 1, 0.3, 1] }}
                className="space-y-6 text-left"
              >
                <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-[11px] font-mono font-semibold tracking-wider uppercase bg-neutral-100 text-neutral-700 border border-neutral-200 dark:bg-neutral-800 dark:text-neutral-300 dark:border-neutral-700">
                  <span>Daily Coaching Work • 02</span>
                </div>

                <h3 className="text-2xl sm:text-3xl md:text-4xl font-bold tracking-tight text-neutral-950 dark:text-white leading-tight">
                  Student Attendance, Batches & Fees
                </h3>

                <p className="text-sm sm:text-base text-neutral-600 dark:text-neutral-300 leading-relaxed">
                  Connect your website directly to your daily coaching work. Track student attendance, share study notes, and check fee collections in one dashboard.
                </p>

                {/* Key Capability Points */}
                <div className="space-y-3.5 pt-2">
                  {[
                    {
                      title: 'Quick QR Attendance Check-In',
                      desc: 'Students scan a QR code when entering class. Parents get a quick WhatsApp message confirming their arrival.',
                    },
                    {
                      title: 'Study Notes & Formula Downloads',
                      desc: 'See which students download your practice sheets, chapter formulas, and study material.',
                    },
                    {
                      title: 'Fee Payments & Due Reminders',
                      desc: 'Track paid fees, pending installments, and send automatic fee reminder messages to parents on WhatsApp.',
                    },
                    {
                      title: 'Batch Seats & Class Limits',
                      desc: 'Know exactly how many seats are left in each batch so your classrooms never get overcrowded.',
                    },
                  ].map((feat, idx) => (
                    <div key={idx} className="flex items-start gap-3">
                      <div className="w-5 h-5 rounded-full bg-neutral-100 dark:bg-neutral-800 text-neutral-800 dark:text-neutral-200 flex items-center justify-center shrink-0 mt-0.5 border border-neutral-200 dark:border-neutral-700">
                        <CheckCircle2 size={12} className="text-emerald-600 dark:text-emerald-400" />
                      </div>
                      <div>
                        <h4 className="text-xs sm:text-sm font-semibold text-neutral-900 dark:text-neutral-100">{feat.title}</h4>
                        <p className="text-xs text-neutral-500 dark:text-neutral-400 mt-0.5 leading-relaxed">{feat.desc}</p>
                      </div>
                    </div>
                  ))}
                </div>

                {/* Action Link */}
                <div className="pt-3">
                  <a
                    href="#features"
                    className="inline-flex items-center gap-1.5 text-xs sm:text-sm font-semibold text-neutral-900 dark:text-white hover:underline underline-offset-4"
                  >
                    <span>Learn more about coaching tools</span>
                    <ArrowRight size={14} />
                  </a>
                </div>
              </motion.div>
            </div>

            {/* Right Column: Illustration & Visual Preview */}
            <div className="lg:col-span-6 w-full order-1 lg:order-2">
              <motion.div
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 0.65, ease: [0.16, 1, 0.3, 1] }}
                className="relative rounded-3xl p-2 sm:p-3 border border-neutral-200/90 dark:border-neutral-800 bg-neutral-50/70 dark:bg-neutral-900/60 shadow-xl backdrop-blur-md overflow-hidden group"
              >
                {/* Visual Frame */}
                <div className="relative rounded-2xl overflow-hidden bg-neutral-100 dark:bg-neutral-950 aspect-[16/10] sm:aspect-[16/11] flex items-center justify-center border border-neutral-200/80 dark:border-neutral-800">
                  <img
                    src={operationalAnalyticsImg}
                    alt="User & Operational Analytics Illustration"
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-[1.03]"
                  />

                  {/* Fallback Clean Visual Mockup if Image Pending */}
                  <div className="hidden flex-col items-center justify-center p-6 text-center space-y-4 w-full h-full bg-gradient-to-br from-neutral-50 to-neutral-100 dark:from-neutral-900 dark:to-neutral-950">
                    <div className="w-16 h-16 rounded-2xl bg-white dark:bg-neutral-800 border border-neutral-200 dark:border-neutral-700 shadow-md flex items-center justify-center text-neutral-800 dark:text-neutral-200">
                      <BarChart3 size={32} />
                    </div>
                    <div>
                      <h4 className="text-base font-bold text-neutral-900 dark:text-white">Internal Operational Analytics</h4>
                      <p className="text-xs text-neutral-500 max-w-sm mt-1">Track student attendance, fee collections, and batch sizes.</p>
                    </div>
                  </div>
                </div>

                {/* Live Floating Telemetry Bar */}
                <div className="mt-3 grid grid-cols-3 gap-2 px-1 pb-1">
                  {operationalMetrics.map((item, idx) => (
                    <div key={idx} className="bg-white dark:bg-neutral-900/90 rounded-xl p-2.5 border border-neutral-200/80 dark:border-neutral-800 shadow-2xs">
                      <span className="text-[10px] font-mono text-neutral-500 uppercase block truncate">{item.label}</span>
                      <div className="text-sm sm:text-base font-bold text-neutral-950 dark:text-white font-mono mt-0.5">{item.value}</div>
                      <span className="text-[10px] text-emerald-600 dark:text-emerald-400 font-semibold">{item.change}</span>
                    </div>
                  ))}
                </div>
              </motion.div>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
}

export default GrowthSection;