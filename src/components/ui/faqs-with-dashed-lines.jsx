import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  Plus,
  HelpCircle,
  MessageCircle,
  ArrowRight,
  Sparkles,
  Zap,
  ShieldCheck,
  CheckCircle2
} from 'lucide-react';
import { cn } from '../../lib/utils';

export function FaqsWithDashedLines() {
  const [openIndex, setOpenIndex] = useState(0); // First item open by default

  const toggleFaq = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  const faqs = [
    {
      id: 'hosting',
      tag: 'Cloud & Hosting',
      question: 'How does StudyFlow host my coaching website? Do I need to buy hosting separately?',
      answer: 'No separate hosting or technical setup is needed. Every StudyFlow plan includes fully managed cloud hosting powered by AWS infrastructure, automated edge CDN caching, free SSL certificates, and 99.9% uptime. You can launch instantly on your free branded subdomain (your-name.studyflow.in) or connect your custom domain (youracademy.com) in one click.'
    },
    {
      id: 'whatsapp-router',
      tag: 'Admission Router',
      question: 'How does the instant WhatsApp Admission Router work?',
      answer: 'When a prospective student or parent requests a demo class, inquires about batch fees, or downloads a syllabus PDF from your website, our webhook routes their name, standard, and mobile number directly to your director or counselor on WhatsApp in under 120ms with instant notification triggers.'
    },
    {
      id: 'component-tiers',
      tag: 'Component Tiers',
      question: 'What website IDE components are included in each pricing tier?',
      answer: 'Our components follow a clear 3-tier structure: Starter (₹299/mo) includes basic layout components (Hero & Admissions Banner, Student Admission Registration Form, DPP Download Gate, and basic attendance). Coaching Academy (₹599/mo) unlocks high-converting complex modules (Instant WhatsApp Lead Router, Smart QR Attendance Check-In, Live Batch Seats Sync, and Verified Toppers Wall). Institute Premier (₹899/mo) provides 100% unrestricted access to all components, including the automated Fee & Defaulter Engine, Online MCQ Test Series, and Multi-Branch Management.'
    },
    {
      id: 'discount',
      tag: 'Pricing & Offers',
      question: 'How does the flat ₹100 new institute discount work?',
      answer: 'Every new institute signing up on StudyFlow receives an automatic, permanent flat ₹100/month discount across every pricing category (Starter: ₹399 down to ₹299/mo, Coaching Academy: ₹699 down to ₹599/mo, and Institute Premier: ₹999 down to ₹899/mo). No promo codes or vouchers are needed—the discount is already factored into your welcome rate.'
    },
    {
      id: 'qr-attendance',
      tag: 'Student Operations',
      question: 'How does the Smart QR Code Attendance Portal work for students and parents?',
      answer: 'Each student receives a personalized digital ID badge. When they scan the dynamic QR code at your coaching center entrance or your staff marks them via mobile, our attendance engine logs their check-in time and instantly dispatches an automated WhatsApp confirmation to their parents. Parents can also view their child’s live monthly attendance stats on the student portal.'
    },
    {
      id: 'result-day',
      tag: 'Concurrency & Traffic',
      question: 'Will our coaching website crash on board or entrance exam result days?',
      answer: 'Never. StudyFlow websites are hosted on horizontally scalable multi-tenant edge infrastructure with automated global CDN caching. Even when thousands of parents and students simultaneously flood your website to view topper results, merit lists, or download answer keys, response latency stays sub-500ms.'
    },
    {
      id: 'migration',
      tag: 'Domain & Migration',
      question: 'Can I connect our existing custom domain or migrate from an existing website?',
      answer: 'Yes. You can map any custom domain (.com, .in, .org, .edu.in) directly from your StudyFlow dashboard. We configure DNS, generate SSL certificates automatically, and provide step-by-step migration assistance to ensure zero downtime for your existing students and staff.'
    }
  ];

  return (
    <section id="faqs" className="relative w-full py-20 lg:py-28 bg-white dark:bg-black border-t border-neutral-200/80 dark:border-neutral-800 overflow-hidden">
      
      {/* Background Subtle Ambience */}
      <div className="pointer-events-none absolute inset-0 [background-size:40px_40px] [background-image:linear-gradient(to_right,#f4f4f5_1px,transparent_1px),linear-gradient(to_bottom,#f4f4f5_1px,transparent_1px)] dark:[background-image:linear-gradient(to_right,#18181b_1px,transparent_1px),linear-gradient(to_bottom,#18181b_1px,transparent_1px)] opacity-50" />
      <div className="pointer-events-none absolute inset-0 bg-radial from-transparent via-white/80 to-white dark:via-black/80 dark:to-black" />

      <div className="relative z-10 w-full max-w-[96vw] lg:max-w-[92vw] xl:max-w-[88vw] mx-auto px-4 sm:px-6">
        
        {/* Main Two-Column Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          
          {/* Left Column: Heading, Subtitle & Support Card */}
          <div className="lg:col-span-5 space-y-6 lg:sticky lg:top-28">
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-medium bg-neutral-100 text-neutral-800 border border-neutral-200 dark:bg-neutral-900 dark:text-neutral-200 dark:border-neutral-800">
              <HelpCircle size={13} className="text-rose-500" />
              <span>Questions & Answers</span>
            </div>

            <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-neutral-950 dark:text-white leading-[1.2]">
              Frequently Asked Questions
            </h2>

            <p className="text-sm sm:text-base text-neutral-600 dark:text-neutral-400 leading-relaxed">
              Everything you need to know about StudyFlow’s visual website IDE components, cloud hosting, WhatsApp routing, and pricing plans.
            </p>

            {/* Direct WhatsApp Consultation Card */}
            <div className="relative p-5 rounded-2xl bg-neutral-50 dark:bg-neutral-900/60 border border-dashed border-neutral-300 dark:border-neutral-800 space-y-3">
              {/* Corner Intersection Plus Accents */}
              <span className="absolute -top-1.5 -left-1.5 font-mono text-[10px] text-neutral-400 dark:text-neutral-600 select-none">+</span>
              <span className="absolute -top-1.5 -right-1.5 font-mono text-[10px] text-neutral-400 dark:text-neutral-600 select-none">+</span>
              <span className="absolute -bottom-1.5 -left-1.5 font-mono text-[10px] text-neutral-400 dark:text-neutral-600 select-none">+</span>
              <span className="absolute -bottom-1.5 -right-1.5 font-mono text-[10px] text-neutral-400 dark:text-neutral-600 select-none">+</span>

              <div className="flex items-center gap-2 text-xs font-semibold text-neutral-900 dark:text-neutral-100">
                <MessageCircle size={15} className="text-emerald-600" />
                <span>Need Personalized Guidance?</span>
              </div>

              <p className="text-xs text-neutral-600 dark:text-neutral-400 leading-relaxed">
                Have specific coaching requirements or multiple branches? Speak directly with our educational tech specialists.
              </p>

              <a
                href="#pricing"
                className="inline-flex items-center gap-1.5 text-xs font-semibold text-rose-600 dark:text-rose-400 hover:text-rose-700 transition-colors pt-1"
              >
                <span>Explore All 3 Plans with ₹100 OFF</span>
                <ArrowRight size={13} />
              </a>
            </div>
          </div>

          {/* Right Column: FAQ Accordion with Aceternity Dashed Lines */}
          <div className="lg:col-span-7">
            <div className="relative border-t border-dashed border-neutral-300 dark:border-neutral-800">
              
              {/* Top Intersection Accents */}
              <span className="absolute -top-2 -left-1.5 font-mono text-[11px] text-neutral-400 dark:text-neutral-600 select-none">+</span>
              <span className="absolute -top-2 -right-1.5 font-mono text-[11px] text-neutral-400 dark:text-neutral-600 select-none">+</span>

              {faqs.map((faq, index) => {
                const isOpen = openIndex === index;

                return (
                  <div
                    key={faq.id}
                    className="relative border-b border-dashed border-neutral-300 dark:border-neutral-800 transition-colors"
                  >
                    {/* Corner Intersection Crosses */}
                    <span className="absolute -bottom-2 -left-1.5 font-mono text-[11px] text-neutral-400 dark:text-neutral-600 select-none">+</span>
                    <span className="absolute -bottom-2 -right-1.5 font-mono text-[11px] text-neutral-400 dark:text-neutral-600 select-none">+</span>

                    {/* Question Button Header */}
                    <button
                      onClick={() => toggleFaq(index)}
                      className="w-full py-5 px-1 sm:px-2 flex items-start justify-between gap-4 text-left group cursor-pointer focus:outline-hidden"
                      aria-expanded={isOpen}
                    >
                      <div className="space-y-1.5 pr-2">
                        <span className="inline-block text-[10px] font-mono uppercase tracking-wider px-2 py-0.5 rounded-md bg-neutral-100 text-neutral-600 dark:bg-neutral-900 dark:text-neutral-400 border border-neutral-200/80 dark:border-neutral-800">
                          {faq.tag}
                        </span>
                        <h3 className={cn(
                          "text-base sm:text-lg font-semibold tracking-tight transition-colors",
                          isOpen
                            ? "text-rose-600 dark:text-rose-400"
                            : "text-neutral-900 dark:text-neutral-100 group-hover:text-rose-600 dark:group-hover:text-rose-400"
                        )}>
                          {faq.question}
                        </h3>
                      </div>

                      {/* Animated Plus / Cross Icon */}
                      <div className={cn(
                        "w-8 h-8 rounded-full flex items-center justify-center shrink-0 border transition-all duration-300 mt-1",
                        isOpen
                          ? "bg-rose-50 border-rose-200 text-rose-600 dark:bg-rose-950/40 dark:border-rose-900/50 dark:text-rose-400 rotate-45"
                          : "bg-neutral-50 border-neutral-200 text-neutral-500 dark:bg-neutral-900 dark:border-neutral-800 dark:text-neutral-400 group-hover:border-neutral-300 dark:group-hover:border-neutral-700"
                      )}>
                        <Plus size={16} strokeWidth={2.2} />
                      </div>
                    </button>

                    {/* Answer Accordion Content */}
                    <AnimatePresence initial={false}>
                      {isOpen && (
                        <motion.div
                          initial={{ height: 0, opacity: 0 }}
                          animate={{ height: "auto", opacity: 1 }}
                          exit={{ height: 0, opacity: 0 }}
                          transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
                          className="overflow-hidden"
                        >
                          <div className="pb-6 px-1 sm:px-2 pt-1 text-xs sm:text-sm text-neutral-600 dark:text-neutral-400 leading-relaxed max-w-2xl">
                            {faq.answer}
                          </div>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
                );
              })}

            </div>
          </div>

        </div>

      </div>
    </section>
  );
}

export default FaqsWithDashedLines;
