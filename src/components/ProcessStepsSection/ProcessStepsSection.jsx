import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  ArrowUpRight,
  Sparkles,
  Layers,
  Layout,
  MessageSquare,
  Globe,
  QrCode,
  FileText,
  CheckCircle2,
  Code2,
  ShieldCheck,
  Check,
  Laptop,
  Flame,
  Send,
  Lock,
  ArrowRight
} from 'lucide-react';
import { cn } from '../../lib/utils';

export function ProcessStepsSection() {
  const [activeStep, setActiveStep] = useState(0);

  const steps = [
    {
      id: 'setup',
      stepNum: '01',
      badge: 'PROJECT SETUP',
      title: 'Describe Idea & Initialize Project',
      tagline: 'Instant Cloud Workspace Provisioning',
      description:
        'Tell StudyFlow your academy name, subjects (JEE, NEET, Foundation), and branch locations. The platform automatically bootstraps your database schemas and design layout in seconds.',
      bottomHighlight: 'Zero DB Config Required',
      activeBg: 'bg-gradient-to-br from-neutral-900 via-neutral-950 to-black text-white border-neutral-700',
      inactiveBg: 'bg-neutral-900 text-neutral-300 border-neutral-800',
      pillColor: 'bg-neutral-800 text-neutral-200 border-neutral-700',
      accentColor: 'text-amber-400',
      renderVisual: (isActive) => (
        <div className="relative w-full h-full flex items-center justify-center">
          <div className="relative w-full max-w-[260px] rounded-2xl bg-white/5 border border-white/10 p-4 backdrop-blur-md shadow-xl">
            <div className="flex items-center justify-between pb-2 mb-2 border-b border-white/10 text-xs">
              <span className="font-mono text-neutral-400">new_institute.init</span>
              <span className="inline-flex items-center gap-1 font-mono text-[10px] text-emerald-400 bg-emerald-500/10 px-1.5 py-0.5 rounded border border-emerald-500/20">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                Live Schema
              </span>
            </div>
            <div className="space-y-1.5 text-[11px] font-mono text-neutral-300">
              <div className="flex items-center gap-2">
                <span className="text-amber-400">$</span>
                <span>create-institute "Apex Academy"</span>
              </div>
              <div className="text-neutral-400 text-[10px] pl-3">
                → Provisioned MongoDB layout docs
              </div>
              <div className="text-neutral-400 text-[10px] pl-3">
                → Generated lead router pipeline
              </div>
            </div>
            <div className="mt-3 pt-2 border-t border-white/10 flex items-center justify-between text-[10px] text-neutral-400">
              <span>Target: JEE & NEET</span>
              <span className="text-amber-400 font-semibold">120ms Ready</span>
            </div>
          </div>
        </div>
      ),
    },
    {
      id: 'pages',
      stepNum: '02',
      badge: 'PAGE SUITE',
      title: 'Default Welcoming Pages Created',
      tagline: 'High-Converting 5-Page Foundation',
      description:
        'Your portal comes pre-bundled with 5 conversion-optimized pages: Admissions Hero, Faculty Dossiers, Live Batch Timetables, Verified Topper Hall of Fame, and Quick Enquiry Gate.',
      bottomHighlight: 'Complete 5-Page Suite Live',
      activeBg: 'bg-gradient-to-br from-indigo-950 via-neutral-900 to-black text-white border-indigo-700/50',
      inactiveBg: 'bg-neutral-900 text-neutral-300 border-neutral-800',
      pillColor: 'bg-indigo-900/60 text-indigo-200 border-indigo-700/40',
      accentColor: 'text-indigo-400',
      renderVisual: (isActive) => (
        <div className="relative w-full h-full flex items-center justify-center">
          <div className="relative w-full max-w-[240px] h-[150px]">
            {/* Stacked Pages Deck */}
            <div className="absolute inset-x-2 top-0 h-28 rounded-xl bg-white/5 border border-white/10 transform -rotate-6 scale-90 opacity-60 backdrop-blur-xs" />
            <div className="absolute inset-x-1 top-2 h-28 rounded-xl bg-white/10 border border-white/15 transform rotate-3 scale-95 opacity-80 backdrop-blur-xs" />
            <div className="absolute inset-x-0 top-4 h-28 rounded-xl bg-neutral-900/90 border border-indigo-500/30 p-3 shadow-2xl backdrop-blur-md">
              <div className="flex items-center justify-between border-b border-white/10 pb-1.5 mb-2">
                <span className="text-[11px] font-semibold text-white">Admissions Portal</span>
                <span className="text-[9px] font-mono text-indigo-400 bg-indigo-500/10 px-1.5 py-0.5 rounded">Welcoming</span>
              </div>
              <div className="space-y-1">
                <div className="h-2 w-3/4 bg-white/20 rounded-full" />
                <div className="h-2 w-1/2 bg-white/10 rounded-full" />
              </div>
              <div className="mt-3 flex items-center gap-1.5">
                <span className="text-[9px] px-1.5 py-0.5 rounded bg-white/10 text-neutral-300">Home</span>
                <span className="text-[9px] px-1.5 py-0.5 rounded bg-white/10 text-neutral-300">Batches</span>
                <span className="text-[9px] px-1.5 py-0.5 rounded bg-white/10 text-neutral-300">Toppers</span>
              </div>
            </div>
          </div>
        </div>
      ),
    },
    {
      id: 'layout',
      stepNum: '03',
      badge: 'VISUAL IDE',
      title: 'Edit Layout to Match Your Brand',
      tagline: 'Real-Time Drag-and-Drop Canvas',
      description:
        'Open the macOS-style website IDE to adjust typography, modify brand colors, rearrange course sections, and inspect mobile/tablet responsiveness in real time.',
      bottomHighlight: 'Instant Live Canvas Sync',
      activeBg: 'bg-gradient-to-br from-blue-950 via-neutral-900 to-black text-white border-blue-700/50',
      inactiveBg: 'bg-neutral-900 text-neutral-300 border-neutral-800',
      pillColor: 'bg-blue-900/60 text-blue-200 border-blue-700/40',
      accentColor: 'text-blue-400',
      renderVisual: (isActive) => (
        <div className="relative w-full h-full flex items-center justify-center">
          <div className="w-full max-w-[260px] rounded-xl bg-neutral-950/90 border border-blue-500/30 p-3 shadow-xl">
            <div className="flex items-center justify-between border-b border-white/10 pb-2 mb-2 text-xs">
              <div className="flex items-center gap-1.5">
                <span className="w-2 h-2 rounded-full bg-red-400" />
                <span className="w-2 h-2 rounded-full bg-amber-400" />
                <span className="w-2 h-2 rounded-full bg-emerald-400" />
              </div>
              <span className="text-[10px] font-mono text-blue-400">Layout Inspector</span>
            </div>
            <div className="p-2 rounded-lg border border-dashed border-blue-400/40 bg-blue-500/5 text-center">
              <p className="text-[10px] font-mono text-blue-300">&lt;HeroSection layout="split" /&gt;</p>
              <div className="mt-1 flex items-center justify-center gap-1">
                <span className="text-[9px] px-1.5 py-0.5 rounded bg-white/10 text-neutral-300">Padding: 32px</span>
                <span className="text-[9px] px-1.5 py-0.5 rounded bg-white/10 text-neutral-300">Font: Jakarta</span>
              </div>
            </div>
            <div className="mt-2 flex items-center justify-between text-[10px] text-neutral-400">
              <span>Viewport: Desktop</span>
              <span className="text-emerald-400 font-medium">Synced</span>
            </div>
          </div>
        </div>
      ),
    },
    {
      id: 'features',
      stepNum: '04',
      badge: 'COACHING SUITE',
      title: 'Attach Hyperlocal Coaching Tools',
      tagline: 'Zero-Code Tuition Feature Modules',
      description:
        'Plug in institute-critical capabilities with a single click: WhatsApp Lead Dispatcher (120ms router), DPP & Formula Booklet Lead Gates, and Student QR Attendance.',
      bottomHighlight: '120ms WhatsApp Lead Routing',
      activeBg: 'bg-gradient-to-br from-emerald-950 via-neutral-900 to-black text-white border-emerald-700/50',
      inactiveBg: 'bg-neutral-900 text-neutral-300 border-neutral-800',
      pillColor: 'bg-emerald-900/60 text-emerald-200 border-emerald-700/40',
      accentColor: 'text-emerald-400',
      renderVisual: (isActive) => (
        <div className="relative w-full h-full flex items-center justify-center">
          <div className="w-full max-w-[260px] rounded-xl bg-neutral-950/90 border border-emerald-500/30 p-3 shadow-xl">
            <div className="flex items-center gap-2 border-b border-white/10 pb-2 mb-2">
              <div className="w-5 h-5 rounded-full bg-emerald-600 text-white flex items-center justify-center text-[10px]">
                <MessageSquare size={11} />
              </div>
              <div className="overflow-hidden">
                <p className="text-[11px] font-semibold text-white truncate">WhatsApp Admission Router</p>
                <p className="text-[9px] text-neutral-400">Direct to Director Phone</p>
              </div>
            </div>
            <div className="rounded bg-white/5 p-2 text-[10px] space-y-1 font-mono text-neutral-300">
              <div className="flex items-center justify-between text-emerald-400">
                <span>Parent Inquiry</span>
                <span>Active</span>
              </div>
              <p className="text-[10px] text-neutral-400 truncate">JEE Pinnacle 2026 syllabus requested</p>
            </div>
            <div className="mt-2 flex items-center justify-between text-[10px] text-neutral-400 pt-1.5 border-t border-white/5">
              <span>QR Gate Attendance</span>
              <span className="text-emerald-400 font-semibold">Enabled</span>
            </div>
          </div>
        </div>
      ),
    },
    {
      id: 'deploy',
      stepNum: '05',
      badge: 'EDGE HOSTING',
      title: 'Host & Go Live in Seconds',
      tagline: 'Automated Subdomain & SSL Provisioning',
      description:
        'Hit Publish to deploy your custom academy website to your dedicated subdomain (your-institute.studyflow.in) or custom domain with automatic SSL, HTTP/3, and edge CDN.',
      bottomHighlight: 'Instant Global Edge CDN',
      activeBg: 'bg-gradient-to-br from-purple-950 via-neutral-900 to-black text-white border-purple-700/50',
      inactiveBg: 'bg-neutral-900 text-neutral-300 border-neutral-800',
      pillColor: 'bg-purple-900/60 text-purple-200 border-purple-700/40',
      accentColor: 'text-purple-400',
      renderVisual: (isActive) => (
        <div className="relative w-full h-full flex items-center justify-center">
          <div className="w-full max-w-[260px] rounded-xl bg-neutral-950/90 border border-purple-500/30 p-3 shadow-xl">
            <div className="flex items-center justify-between border-b border-white/10 pb-2 mb-2 text-xs">
              <div className="flex items-center gap-1.5 font-mono text-[10px] text-purple-300">
                <Lock size={10} className="text-emerald-400" />
                <span>apex-science.studyflow.in</span>
              </div>
              <span className="text-[9px] font-mono text-emerald-400 bg-emerald-500/10 px-1 py-0.5 rounded">
                SSL OK
              </span>
            </div>
            <div className="p-2 rounded bg-purple-500/10 border border-purple-500/20 text-center">
              <p className="text-[11px] font-semibold text-white">Global Edge Deployment</p>
              <p className="text-[9px] text-purple-300 mt-0.5">Edge CDN Latency: 18ms</p>
            </div>
            <div className="mt-2.5 flex items-center justify-between text-[10px] text-neutral-400">
              <span>Uptime: 99.99%</span>
              <span className="text-purple-400 font-semibold">Live Worldwide</span>
            </div>
          </div>
        </div>
      ),
    },
  ];

  return (
    <section className="relative w-full py-20 lg:py-28 bg-white dark:bg-black border-t border-neutral-200/80 dark:border-neutral-800 overflow-hidden">
      {/* Background Subtle Ambience */}
      <div className="pointer-events-none absolute inset-0 [background-size:40px_40px] [background-image:linear-gradient(to_right,#f4f4f5_1px,transparent_1px),linear-gradient(to_bottom,#f4f4f5_1px,transparent_1px)] dark:[background-image:linear-gradient(to_right,#18181b_1px,transparent_1px),linear-gradient(to_bottom,#18181b_1px,transparent_1px)] opacity-60" />
      <div className="pointer-events-none absolute inset-0 bg-radial from-transparent via-white/80 to-white dark:via-black/80 dark:to-black" />

      <div className="relative z-10 w-full max-w-[96vw] lg:max-w-[93vw] xl:max-w-[90vw] mx-auto px-4 sm:px-6">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-16">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-medium bg-neutral-100 text-neutral-800 border border-neutral-200 dark:bg-neutral-900 dark:text-neutral-200 dark:border-neutral-800 mb-4">
            <Sparkles size={12} className="text-neutral-600 dark:text-neutral-400" />
            <span>End-to-End Creation Process</span>
          </div>

          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-neutral-950 dark:text-white leading-[1.2]">
            How It Works: Launch Your Academy Website
          </h2>

          <p className="mt-4 text-sm sm:text-base text-neutral-600 dark:text-neutral-400 max-w-2xl mx-auto">
            From your first concept to a live coaching portal with admissions routing and attendance. Hover over each card to explore each phase of the workflow.
          </p>
        </div>

        {/* Expandable Hover Cards Deck */}
        <div className="flex flex-col lg:flex-row gap-3.5 sm:gap-4 h-auto lg:h-[490px] xl:h-[520px] w-full">
          {steps.map((item, index) => {
            const isExpanded = activeStep === index;

            return (
              <motion.div
                key={item.id}
                onMouseEnter={() => setActiveStep(index)}
                onClick={() => setActiveStep(index)}
                layout
                transition={{
                  layout: { duration: 0.45, ease: [0.16, 1, 0.3, 1] },
                }}
                className={cn(
                  'group relative rounded-3xl p-5 sm:p-7 flex flex-col justify-between overflow-hidden cursor-pointer border transition-all duration-300 select-none shadow-sm',
                  isExpanded
                    ? cn(item.activeBg, 'lg:flex-[2.6] xl:flex-[3.0] shadow-2xl ring-1 ring-white/10')
                    : cn(item.inactiveBg, 'lg:flex-1 hover:border-neutral-700 opacity-95')
                )}
              >
                {/* Top Row: Badge & Step Indicator / Arrow */}
                <div className="flex items-center justify-between w-full relative z-10">
                  <div className="flex items-center gap-2">
                    <span
                      className={cn(
                        'px-3 py-1 rounded-full text-[10px] font-mono font-semibold tracking-wider uppercase border',
                        isExpanded
                          ? item.pillColor
                          : 'bg-neutral-800 text-neutral-400 border-neutral-700/60'
                      )}
                    >
                      {item.badge}
                    </span>
                    <span className="text-[11px] font-mono text-neutral-500 font-medium">
                      {item.stepNum}
                    </span>
                  </div>

                  <div
                    className={cn(
                      'w-8 h-8 rounded-full flex items-center justify-center transition-transform duration-300',
                      isExpanded
                        ? 'bg-white/15 text-white scale-105 rotate-45'
                        : 'bg-white/5 text-neutral-400 group-hover:text-white group-hover:scale-105'
                    )}
                  >
                    <ArrowUpRight size={15} />
                  </div>
                </div>

                {/* Center Visual Mockup */}
                <div className="my-auto py-4 min-h-[160px] sm:min-h-[180px] flex items-center justify-center relative z-10">
                  {item.renderVisual(isExpanded)}
                </div>

                {/* Bottom Content Area */}
                <div className="relative z-10 mt-auto pt-2">
                  <AnimatePresence initial={false} mode="wait">
                    {isExpanded ? (
                      <motion.div
                        key={'expanded-' + item.id}
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -6 }}
                        transition={{ duration: 0.3 }}
                        className="space-y-2 text-left"
                      >
                        <p className={cn('text-xs font-mono font-semibold uppercase tracking-wider', item.accentColor)}>
                          {item.tagline}
                        </p>
                        <h3 className="text-xl sm:text-2xl font-bold tracking-tight text-white leading-snug">
                          {item.title}
                        </h3>
                        <p className="text-xs sm:text-sm text-neutral-300 leading-relaxed max-w-xl">
                          {item.description}
                        </p>
                        <div className="pt-2 flex items-center justify-between text-xs border-t border-white/10 text-neutral-400">
                          <span className="font-mono text-[11px]">{item.bottomHighlight}</span>
                          <span className="inline-flex items-center gap-1 font-medium text-white hover:underline">
                            <span>Explore Phase</span>
                            <ArrowRight size={12} />
                          </span>
                        </div>
                      </motion.div>
                    ) : (
                      <motion.div
                        key={'collapsed-' + item.id}
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        transition={{ duration: 0.2 }}
                        className="text-left"
                      >
                        <p className="text-xs font-mono font-semibold text-neutral-400 uppercase tracking-wider truncate">
                          Step {item.stepNum}
                        </p>
                        <h4 className="text-sm font-semibold text-neutral-200 truncate mt-0.5">
                          {item.title}
                        </h4>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Bottom Helper Bar */}
        <div className="mt-8 pt-6 border-t border-neutral-200/80 dark:border-neutral-800 flex flex-col sm:flex-row items-center justify-between text-xs text-neutral-500 gap-3">
          <div className="flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-emerald-500" />
            <span>Interactive Workflow Engine • Hover to inspect each phase</span>
          </div>
          <div className="font-mono text-[11px]">
            StudyFlow Lifecycle Architecture v2.4
          </div>
        </div>

      </div>
    </section>
  );
}

export default ProcessStepsSection;
