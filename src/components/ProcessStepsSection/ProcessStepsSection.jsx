import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  ArrowUpRight,
  Sparkles,
  Layers,
  Layout,
  MessageSquare,
  Globe,
  Lock,
  ArrowRight
} from 'lucide-react';
import { cn } from '../../lib/utils';
import { CanvasRevealEffect, Icon } from '../ui/canvas-reveal-effect';

export function ProcessStepsSection() {
  const [activeStep, setActiveStep] = useState(0);

  const steps = [
    {
      id: 'setup',
      stepNum: '01',
      badge: 'STEP 1',
      shortTitle: 'Project Setup',
      icon: Sparkles,
      title: 'Describe Your Idea & Start Your Project',
      tagline: 'Quick Project Setup',
      description:
        'Just enter your coaching institute name, subjects you teach (like JEE, NEET, or School Boards), and your branch location. We set up your whole project in seconds.',
      bottomHighlight: 'Takes less than 1 minute • No setup hassle',
      canvasColors: [
        [245, 158, 11],
        [251, 191, 36],
        [253, 230, 138]
      ],
      canvasBg: 'bg-amber-50/70 dark:bg-amber-950/20',
      accentText: 'text-amber-600 dark:text-amber-400',
      collapsedIconBg: 'bg-amber-500/10 border-amber-500/30 text-amber-600 dark:text-amber-400',
      pillActive: 'bg-amber-100 text-amber-900 border-amber-300 dark:bg-amber-950/70 dark:text-amber-300 dark:border-amber-800',
      activeBorder: 'border-amber-300/90 dark:border-amber-700/70 shadow-amber-500/10',
      renderVisual: () => (
        <div className="w-full max-w-[270px] rounded-2xl bg-white/95 dark:bg-neutral-900/95 border border-neutral-200/90 dark:border-neutral-800 p-3.5 shadow-lg backdrop-blur-md">
          <div className="flex items-center justify-between pb-2 mb-2 border-b border-neutral-200/80 dark:border-neutral-800 text-xs">
            <span className="font-mono text-neutral-600 dark:text-neutral-400 text-[11px] truncate">new_institute.init</span>
            <span className="shrink-0 inline-flex items-center gap-1 font-mono text-[10px] text-emerald-700 bg-emerald-50 dark:bg-emerald-950/50 dark:text-emerald-400 px-1.5 py-0.5 rounded border border-emerald-200 dark:border-emerald-800 font-medium">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
              Live Setup
            </span>
          </div>
          <div className="space-y-1 text-[11px] font-mono text-neutral-800 dark:text-neutral-200">
            <div className="flex items-center gap-1.5 truncate">
              <span className="text-amber-600 dark:text-amber-400 font-bold">$</span>
              <span className="truncate">create-institute "Apex Academy"</span>
            </div>
            <div className="text-neutral-500 dark:text-neutral-400 text-[10px] pl-2.5 truncate">
              → Created website project
            </div>
            <div className="text-neutral-500 dark:text-neutral-400 text-[10px] pl-2.5 truncate">
              → Set up admission pipeline
            </div>
          </div>
          <div className="mt-2.5 pt-2 border-t border-neutral-200/80 dark:border-neutral-800 flex items-center justify-between text-[10px] text-neutral-500 dark:text-neutral-400">
            <span className="truncate">Courses: JEE & NEET</span>
            <span className="shrink-0 text-amber-600 dark:text-amber-400 font-semibold">Ready in 2s</span>
          </div>
        </div>
      ),
    },
    {
      id: 'pages',
      stepNum: '02',
      badge: 'STEP 2',
      shortTitle: 'Ready Pages',
      icon: Layers,
      title: 'Get Default Welcoming Pages Ready',
      tagline: 'Pre-Made Pages Ready To Use',
      description:
        'Your website comes pre-built with essential pages already created for you: Admissions Home, About Us, Course & Batch Timings, Verified Toppers Wall, and Contact Page.',
      bottomHighlight: '5 essential pages created automatically',
      canvasColors: [
        [99, 102, 241],
        [129, 140, 248],
        [199, 210, 254]
      ],
      canvasBg: 'bg-indigo-50/70 dark:bg-indigo-950/20',
      accentText: 'text-indigo-600 dark:text-indigo-400',
      collapsedIconBg: 'bg-indigo-500/10 border-indigo-500/30 text-indigo-600 dark:text-indigo-400',
      pillActive: 'bg-indigo-100 text-indigo-900 border-indigo-300 dark:bg-indigo-950/70 dark:text-indigo-300 dark:border-indigo-800',
      activeBorder: 'border-indigo-300/90 dark:border-indigo-700/70 shadow-indigo-500/10',
      renderVisual: () => (
        <div className="relative w-full max-w-[250px] h-[140px]">
          {/* Stacked Pages Deck */}
          <div className="absolute inset-x-2 top-0 h-24 rounded-xl bg-white/70 dark:bg-neutral-800/60 border border-neutral-200 dark:border-neutral-700 transform -rotate-6 scale-90 opacity-60 backdrop-blur-xs shadow-xs" />
          <div className="absolute inset-x-1 top-2 h-24 rounded-xl bg-white/80 dark:bg-neutral-800/80 border border-neutral-200 dark:border-neutral-700 transform rotate-3 scale-95 opacity-80 backdrop-blur-xs shadow-xs" />
          <div className="absolute inset-x-0 top-3.5 h-24 rounded-xl bg-white/95 dark:bg-neutral-900/95 border border-indigo-300 dark:border-indigo-700/50 p-3 shadow-lg backdrop-blur-md">
            <div className="flex items-center justify-between border-b border-neutral-200/80 dark:border-neutral-800 pb-1.5 mb-1.5">
              <span className="text-[11px] font-semibold text-neutral-900 dark:text-white truncate">Admissions Portal</span>
              <span className="shrink-0 text-[9px] font-mono text-indigo-700 bg-indigo-50 dark:bg-indigo-950/50 dark:text-indigo-300 px-1.5 py-0.5 rounded font-medium">Welcoming</span>
            </div>
            <div className="space-y-1">
              <div className="h-1.5 w-3/4 bg-neutral-200 dark:bg-neutral-700 rounded-full" />
              <div className="h-1.5 w-1/2 bg-neutral-100 dark:bg-neutral-800 rounded-full" />
            </div>
            <div className="mt-2.5 flex items-center gap-1.5">
              <span className="text-[9px] px-1.5 py-0.5 rounded bg-neutral-100 dark:bg-neutral-800 text-neutral-700 dark:text-neutral-300 font-medium">Home</span>
              <span className="text-[9px] px-1.5 py-0.5 rounded bg-neutral-100 dark:bg-neutral-800 text-neutral-700 dark:text-neutral-300 font-medium">Batches</span>
              <span className="text-[9px] px-1.5 py-0.5 rounded bg-neutral-100 dark:bg-neutral-800 text-neutral-700 dark:text-neutral-300 font-medium">Toppers</span>
            </div>
          </div>
        </div>
      ),
    },
    {
      id: 'layout',
      stepNum: '03',
      badge: 'STEP 3',
      shortTitle: 'Visual Editor',
      icon: Layout,
      title: 'Edit Layout & Style to Your Need',
      tagline: 'Simple Drag & Drop Editor',
      description:
        'Open our easy visual editor to change colors, adjust text, reorder course blocks, and preview how your website looks on phones, tablets, and computers with zero coding.',
      bottomHighlight: 'Simple visual editor • No coding needed',
      canvasColors: [
        [14, 165, 233],
        [56, 189, 248],
        [186, 230, 253]
      ],
      canvasBg: 'bg-sky-50/70 dark:bg-sky-950/20',
      accentText: 'text-sky-600 dark:text-sky-400',
      collapsedIconBg: 'bg-sky-500/10 border-sky-500/30 text-sky-600 dark:text-sky-400',
      pillActive: 'bg-sky-100 text-sky-900 border-sky-300 dark:bg-sky-950/70 dark:text-sky-300 dark:border-sky-800',
      activeBorder: 'border-sky-300/90 dark:border-sky-700/70 shadow-sky-500/10',
      renderVisual: () => (
        <div className="w-full max-w-[270px] rounded-xl bg-white/95 dark:bg-neutral-900/95 border border-sky-300 dark:border-sky-700/50 p-3 shadow-lg backdrop-blur-md">
          <div className="flex items-center justify-between border-b border-neutral-200/80 dark:border-neutral-800 pb-2 mb-2 text-xs">
            <div className="flex items-center gap-1.5 shrink-0">
              <span className="w-2 h-2 rounded-full bg-red-400" />
              <span className="w-2 h-2 rounded-full bg-amber-400" />
              <span className="w-2 h-2 rounded-full bg-emerald-400" />
            </div>
            <span className="text-[10px] font-mono text-sky-700 dark:text-sky-400 font-medium truncate">Layout Inspector</span>
          </div>
          <div className="p-2 rounded-lg border border-dashed border-sky-400/50 bg-sky-50/60 dark:bg-sky-950/30 text-center">
            <p className="text-[10px] font-mono text-sky-800 dark:text-sky-300 font-medium truncate">&lt;HeroSection layout="split" /&gt;</p>
            <div className="mt-1 flex items-center justify-center gap-1 flex-wrap">
              <span className="text-[9px] px-1.5 py-0.5 rounded bg-white dark:bg-neutral-800 text-neutral-700 dark:text-neutral-300 shadow-2xs font-medium">Padding: 32px</span>
              <span className="text-[9px] px-1.5 py-0.5 rounded bg-white dark:bg-neutral-800 text-neutral-700 dark:text-neutral-300 shadow-2xs font-medium">Font: Jakarta</span>
            </div>
          </div>
          <div className="mt-2 flex items-center justify-between text-[10px] text-neutral-500 dark:text-neutral-400">
            <span>Preview: Responsive</span>
            <span className="text-emerald-600 dark:text-emerald-400 font-semibold">Live Sync</span>
          </div>
        </div>
      ),
    },
    {
      id: 'features',
      stepNum: '04',
      badge: 'STEP 4',
      shortTitle: 'Coaching Tools',
      icon: MessageSquare,
      title: 'Add Coaching Features You Want',
      tagline: 'Turn Features On or Off',
      description:
        'Choose the coaching features you want: send parent enquiries straight to WhatsApp, let students download formula sheets with phone number verify, and scan QR codes for attendance.',
      bottomHighlight: 'WhatsApp admission leads • QR student check-in',
      canvasColors: [
        [16, 185, 129],
        [52, 211, 153],
        [167, 243, 208]
      ],
      canvasBg: 'bg-emerald-50/70 dark:bg-emerald-950/20',
      accentText: 'text-emerald-600 dark:text-emerald-400',
      collapsedIconBg: 'bg-emerald-500/10 border-emerald-500/30 text-emerald-600 dark:text-emerald-400',
      pillActive: 'bg-emerald-100 text-emerald-900 border-emerald-300 dark:bg-emerald-950/70 dark:text-emerald-300 dark:border-emerald-800',
      activeBorder: 'border-emerald-300/90 dark:border-emerald-700/70 shadow-emerald-500/10',
      renderVisual: () => (
        <div className="w-full max-w-[270px] rounded-xl bg-white/95 dark:bg-neutral-900/95 border border-emerald-300 dark:border-emerald-700/50 p-3 shadow-lg backdrop-blur-md">
          <div className="flex items-center gap-2 border-b border-neutral-200/80 dark:border-neutral-800 pb-2 mb-2">
            <div className="w-5 h-5 rounded-full bg-emerald-600 text-white flex items-center justify-center text-[10px] shrink-0">
              <MessageSquare size={11} />
            </div>
            <div className="overflow-hidden">
              <p className="text-[11px] font-semibold text-neutral-900 dark:text-white truncate">WhatsApp Router</p>
              <p className="text-[9px] text-neutral-500 dark:text-neutral-400 truncate">Direct to Director Phone</p>
            </div>
          </div>
          <div className="rounded bg-neutral-50 dark:bg-neutral-800/60 border border-neutral-200/60 dark:border-neutral-700/40 p-2 text-[10px] space-y-1 font-mono text-neutral-700 dark:text-neutral-300">
            <div className="flex items-center justify-between text-emerald-700 dark:text-emerald-400 font-semibold">
              <span>Parent Inquiry</span>
              <span className="shrink-0 text-[9px]">Active 120ms</span>
            </div>
            <p className="text-[10px] text-neutral-500 dark:text-neutral-400 truncate">JEE Pinnacle batch requested</p>
          </div>
          <div className="mt-2 flex items-center justify-between text-[10px] text-neutral-500 dark:text-neutral-400 pt-1.5 border-t border-neutral-200/60 dark:border-neutral-800">
            <span>QR Attendance</span>
            <span className="text-emerald-600 dark:text-emerald-400 font-semibold">Enabled</span>
          </div>
        </div>
      ),
    },
    {
      id: 'deploy',
      stepNum: '05',
      badge: 'STEP 5',
      shortTitle: 'Host & Go Live',
      icon: Globe,
      title: 'Host & Go Live in One Click',
      tagline: 'Publish to the Internet',
      description:
        'Click the Publish button to launch your website immediately with your own academy web address (like your-institute.studyflow.in) or custom domain, complete with free secure SSL.',
      bottomHighlight: 'Fast, secure & always online 24/7',
      canvasColors: [
        [168, 85, 247],
        [192, 132, 252],
        [233, 213, 255]
      ],
      canvasBg: 'bg-purple-50/70 dark:bg-purple-950/20',
      accentText: 'text-purple-600 dark:text-purple-400',
      collapsedIconBg: 'bg-purple-500/10 border-purple-500/30 text-purple-600 dark:text-purple-400',
      pillActive: 'bg-purple-100 text-purple-900 border-purple-300 dark:bg-purple-950/70 dark:text-purple-300 dark:border-purple-800',
      activeBorder: 'border-purple-300/90 dark:border-purple-700/70 shadow-purple-500/10',
      renderVisual: () => (
        <div className="w-full max-w-[270px] rounded-xl bg-white/95 dark:bg-neutral-900/95 border border-purple-300 dark:border-purple-700/50 p-3 shadow-lg backdrop-blur-md">
          <div className="flex items-center justify-between border-b border-neutral-200/80 dark:border-neutral-800 pb-2 mb-2 text-xs">
            <div className="flex items-center gap-1.5 font-mono text-[10px] text-purple-700 dark:text-purple-300 font-medium truncate max-w-[170px]">
              <Lock size={10} className="text-emerald-600 dark:text-emerald-400 shrink-0" />
              <span className="truncate">apex-science.studyflow.in</span>
            </div>
            <span className="shrink-0 text-[9px] font-mono text-emerald-700 bg-emerald-50 dark:bg-emerald-950/50 dark:text-emerald-400 px-1 py-0.5 rounded border border-emerald-200 dark:border-emerald-800 font-medium">
              SSL OK
            </span>
          </div>
          <div className="p-2 rounded bg-purple-50/60 dark:bg-purple-950/30 border border-purple-200/80 dark:border-purple-800/40 text-center">
            <p className="text-[11px] font-semibold text-neutral-900 dark:text-white truncate">Live Website Online</p>
            <p className="text-[9px] text-purple-700 dark:text-purple-300 mt-0.5 truncate">Loads fast on mobile & desktop</p>
          </div>
          <div className="mt-2.5 flex items-center justify-between text-[10px] text-neutral-500 dark:text-neutral-400">
            <span>Uptime: 99.99%</span>
            <span className="text-purple-600 dark:text-purple-400 font-semibold">Live Everywhere</span>
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
            <span>Easy 5-Step Process</span>
          </div>

          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-neutral-950 dark:text-white leading-[1.2]">
            How It Works: Make Your Coaching Website
          </h2>

          <p className="mt-4 text-sm sm:text-base text-neutral-600 dark:text-neutral-400 max-w-2xl mx-auto">
            See step-by-step how to set up your institute, choose your pages, customize your design, and launch online. Hover over each card to explore.
          </p>
        </div>

        {/* Expandable Hover Cards Deck with Canvas Reveal Effect */}
        <div className="flex flex-col lg:flex-row gap-4 h-auto lg:h-[500px] xl:h-[530px] w-full">
          {steps.map((item, index) => {
            const isExpanded = activeStep === index;
            const StepIcon = item.icon;

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
                  'group/canvas-card relative rounded-3xl p-5 sm:p-6 flex flex-col justify-between overflow-hidden cursor-pointer border transition-all duration-300 select-none shadow-sm',
                  isExpanded
                    ? cn('bg-white dark:bg-neutral-900 lg:flex-[2.8] xl:flex-[3.2] shadow-2xl', item.activeBorder)
                    : 'bg-white/95 dark:bg-neutral-900/90 border-neutral-200/90 dark:border-neutral-800 lg:flex-1 hover:border-neutral-300 dark:hover:border-neutral-700'
                )}
              >
                {/* Aceternity Corner Cross Icons */}
                <Icon className="absolute h-5 w-5 -top-2.5 -left-2.5 text-neutral-400/80 dark:text-neutral-600 pointer-events-none z-20" />
                <Icon className="absolute h-5 w-5 -bottom-2.5 -left-2.5 text-neutral-400/80 dark:text-neutral-600 pointer-events-none z-20" />
                <Icon className="absolute h-5 w-5 -top-2.5 -right-2.5 text-neutral-400/80 dark:text-neutral-600 pointer-events-none z-20" />
                <Icon className="absolute h-5 w-5 -bottom-2.5 -right-2.5 text-neutral-400/80 dark:text-neutral-600 pointer-events-none z-20" />

                {/* Light Color Canvas Reveal Effect on Hover */}
                <AnimatePresence>
                  {isExpanded && (
                    <motion.div
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      exit={{ opacity: 0 }}
                      transition={{ duration: 0.35 }}
                      className="absolute inset-0 z-0 overflow-hidden pointer-events-none"
                    >
                      <CanvasRevealEffect
                        animationSpeed={3.2}
                        containerClassName={item.canvasBg}
                        colors={item.canvasColors}
                        dotSize={2.2}
                      />
                      {/* Subtle faded vignette overlay for clean readability */}
                      <div className="absolute inset-0 [mask-image:radial-gradient(ellipse_at_center,transparent_20%,white)] bg-white/70 dark:bg-black/60 pointer-events-none" />
                    </motion.div>
                  )}
                </AnimatePresence>

                {/* Top Row: Badge & Step Indicator / Arrow */}
                <div className="flex items-center justify-between w-full relative z-10">
                  <div className="flex items-center gap-2">
                    <span
                      className={cn(
                        'px-2.5 py-1 rounded-full text-[10px] font-mono font-semibold tracking-wider uppercase border transition-colors',
                        isExpanded
                          ? item.pillActive
                          : 'bg-neutral-100 text-neutral-600 border-neutral-200 dark:bg-neutral-800 dark:text-neutral-400 dark:border-neutral-700/60'
                      )}
                    >
                      {item.badge}
                    </span>
                    <span className="text-[11px] font-mono text-neutral-400 dark:text-neutral-500 font-medium">
                      {item.stepNum}
                    </span>
                  </div>

                  <div
                    className={cn(
                      'w-7 h-7 rounded-full flex items-center justify-center transition-all duration-300 shrink-0',
                      isExpanded
                        ? 'bg-neutral-900 text-white dark:bg-white dark:text-black scale-105 rotate-45 shadow-sm'
                        : 'bg-neutral-100 text-neutral-500 dark:bg-neutral-800 dark:text-neutral-400 group-hover/canvas-card:text-neutral-900 dark:group-hover/canvas-card:text-white group-hover/canvas-card:scale-105'
                    )}
                  >
                    <ArrowUpRight size={14} />
                  </div>
                </div>

                {/* Center Visual: Full Rich Mockup when Expanded, Clean Compact Icon Badge when Collapsed */}
                <div className="my-auto py-3 min-h-[160px] sm:min-h-[180px] flex items-center justify-center relative z-10 w-full overflow-hidden">
                  <AnimatePresence mode="wait">
                    {isExpanded ? (
                      <motion.div
                        key={'expanded-visual-' + item.id}
                        initial={{ opacity: 0, scale: 0.94 }}
                        animate={{ opacity: 1, scale: 1 }}
                        exit={{ opacity: 0, scale: 0.94 }}
                        transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
                        className="w-full flex items-center justify-center"
                      >
                        {item.renderVisual()}
                      </motion.div>
                    ) : (
                      <motion.div
                        key={'collapsed-visual-' + item.id}
                        initial={{ opacity: 0, scale: 0.85 }}
                        animate={{ opacity: 1, scale: 1 }}
                        exit={{ opacity: 0, scale: 0.85 }}
                        transition={{ duration: 0.25 }}
                        className="flex flex-col items-center justify-center gap-2.5 w-full py-2"
                      >
                        <div
                          className={cn(
                            'w-13 h-13 rounded-2xl flex items-center justify-center border shadow-sm transition-transform duration-300 group-hover/canvas-card:scale-110',
                            item.collapsedIconBg
                          )}
                        >
                          <StepIcon size={24} />
                        </div>
                        <span className="text-[11px] font-mono uppercase tracking-wider text-neutral-400 dark:text-neutral-500 font-semibold text-center truncate max-w-[110px]">
                          {item.shortTitle}
                        </span>
                      </motion.div>
                    )}
                  </AnimatePresence>
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
                        <p className={cn('text-xs font-mono font-semibold uppercase tracking-wider', item.accentText)}>
                          {item.tagline}
                        </p>
                        <h3 className="text-xl sm:text-2xl font-bold tracking-tight text-neutral-950 dark:text-white leading-snug">
                          {item.title}
                        </h3>
                        <p className="text-xs sm:text-sm text-neutral-600 dark:text-neutral-300 leading-relaxed max-w-xl">
                          {item.description}
                        </p>
                        <div className="pt-2 flex items-center justify-between text-xs border-t border-neutral-200/80 dark:border-neutral-800 text-neutral-500 dark:text-neutral-400">
                          <span className="font-mono text-[11px] font-medium">{item.bottomHighlight}</span>
                          <span className="inline-flex items-center gap-1 font-semibold text-neutral-900 dark:text-white hover:underline">
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
                        className="text-left w-full overflow-hidden"
                      >
                        <p className="text-[10px] font-mono font-bold text-neutral-400 dark:text-neutral-500 uppercase tracking-widest">
                          STEP {item.stepNum}
                        </p>
                        <h4 className="text-xs font-bold text-neutral-800 dark:text-neutral-200 truncate mt-0.5">
                          {item.shortTitle}
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
            <span>Interactive Workflow Engine • Hover over any card to expand</span>
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
