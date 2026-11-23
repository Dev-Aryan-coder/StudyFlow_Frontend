import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { cn } from '../../lib/utils';
import {
  FolderKanban,
  CheckSquare,
  Star,
  Search,
  Share2,
  Sidebar,
  MessageCircle,
  Clock,
  Sparkles,
  Layers,
  Layout,
  Monitor,
  Smartphone,
  Tablet,
  Code2,
  Eye,
  Sliders,
  Check,
  ChevronRight,
  Save,
  Send,
  Users,
  Award,
  ShieldCheck,
  ArrowRight,
  Play,
  Settings,
  Plus,
  QrCode,
  FileText,
  PhoneCall,
  BookOpen,
  Zap,
  Trophy,
  MapPin,
  Medal,
  LayoutGrid,
  Palette,
  MessageSquare,
  Globe,
  Database,
  Cpu,
  CheckCircle2,
  TrendingUp,
  GraduationCap
} from 'lucide-react';
import ContainerFlipWords from '../ContainerFlipWords/ContainerFlipWords';
import GroupedSidebar from '../ui/grouped-sidebar';
import { MacbookScroll } from '../ui/macbook-scroll';
import FeaturesSection from '../FeaturesSection/FeaturesSection';
import ProcessStepsSection from '../ProcessStepsSection/ProcessStepsSection';
import GrowthSection from '../GrowthSection/GrowthSection';
import PricingSection from '../PricingSection/PricingSection';
import './MinimalHero.css';

// Component Pill Tabs above the IDE window
const COMPONENT_TABS = [
  { id: 'hero', label: 'Hero Banner', componentName: '<HeroBlock />' },
  { id: 'batches', label: 'Live Batch Seats', componentName: '<BatchesGrid />' },
  { id: 'attendance', label: 'QR Attendance', componentName: '<AttendancePortal />' },
  { id: 'toppers', label: 'Verified Toppers', componentName: '<ToppersWall />' },
  { id: 'materials', label: 'DPP & Formula Hub', componentName: '<StudyMaterialsBlock />' },
  { id: 'enquiry', label: 'WhatsApp Enquiry', componentName: '<LeadCaptureForm />' }
];

// Staggered Animation Timing Variants for Headline
const staggerContainerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.12,
      delayChildren: 0.05
    }
  }
};

const staggerItemVariants = {
  hidden: { y: 24, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
    transition: {
      duration: 0.55,
      ease: [0.16, 1, 0.3, 1]
    }
  }
};

export function MinimalHero() {
  const [activeTab, setActiveTab] = useState('hero');
  const [activeSidebarSection, setActiveSidebarSection] = useState('schedules');
  const [activeDevice, setActiveDevice] = useState('desktop');
  const [viewMode, setViewMode] = useState('visual'); // 'visual' | 'code'
  const [isSaved, setIsSaved] = useState(false);
  const [isIdeFlat, setIsIdeFlat] = useState(false);

  // Dynamic Site Structure block list (persisted during editing session)
  const [siteStructureItems, setSiteStructureItems] = useState([
    { id: 'hero', name: 'Hero & Admissions', badge: '1200px', iconName: 'FileText' },
    { id: 'batches', name: 'Live Batch Seats', badge: 'Live', iconName: 'FolderKanban' },
    { id: 'attendance', name: 'QR Attendance Portal', badge: '96%', iconName: 'QrCode' },
    { id: 'toppers', name: 'Verified Toppers', badge: 'AIR 24', iconName: 'Award' },
    { id: 'materials', name: 'DPP & Formula Hub', badge: 'Lead Gate', iconName: 'BookOpen' },
    { id: 'enquiry', name: 'WhatsApp Lead Router', badge: 'Instant', iconName: 'PhoneCall' }
  ]);

  const handleAddFeature = (feature) => {
    if (!siteStructureItems.some(item => item.id === feature.id)) {
      setSiteStructureItems(prev => [
        ...prev,
        {
          id: feature.id,
          name: feature.name,
          badge: feature.badge,
          iconName: feature.iconName
        }
      ]);
    }
    setActiveTab(feature.tabId || feature.id);
  };

  // Friendly human-readable labels for any selected option
  const getTabLabel = (tab) => {
    const labels = {
      hero: 'Hero & Admissions Banner',
      batches: 'Live Batch Seats (MySQL Sync)',
      attendance: 'QR Attendance Portal',
      toppers: 'Verified Toppers Wall',
      materials: 'DPP & Formula Sheets Hub',
      enquiry: 'WhatsApp Lead Router',
      pages: 'Pages & Site Navigation',
      theme: 'Site Theme & Colors',
      automations: 'WhatsApp Alerts & Automations',
      inquiries: 'Parent Inquiries CRM',
      enrolments: 'Student Enrolments Manager',
      doubt_clinic: 'Faculty Doubt Clinic Timetable',
      subdomain: 'Domain & Subdomain Routing',
      seo: 'SEO & Social Meta Configuration',
      analytics: 'Web Analytics & Conversion Tracking',
      about: 'About Us — Institute Legacy',
      auth_login: 'Student & Teacher Portal Login',
      auth_signup: 'Student Admission Registration',
      auth_forgot: 'Password Reset & Mobile OTP',
      faculty: 'Faculty Directory & Mentors',
      tests: 'Test Series & MCQ Quizzes',
      reviews: 'Student & Parent Reviews Wall',
      demo_pass: 'Free 3-Day Demo Class Pass',
      fee_plans: 'Fee Structure & Milestones',
      syllabus: 'Syllabus Progress Tracker',
      parent_portal: 'Parent Executive Summary'
    };
    return labels[tab] || 'Coaching Component';
  };

  // Quick save simulation to MongoDB
  const handleSaveDraft = () => {
    setIsSaved(true);
    setTimeout(() => setIsSaved(false), 2400);
  };

  // Sample MongoDB JSON Schema for the active component
  const getMongoSchemaJson = () => {
    const schemas = {
      hero: {
        _id: "674123abc987f012",
        projectId: "proj_apex_science",
        section: "HERO_BLOCK",
        enabled: true,
        props: {
          badge: "Admissions Open 2026-27",
          headline: "Apex Science Academy — Shaping Doctors & Engineers",
          subtitle: "Top faculty from IIT & AIIMS. Daily doubt sessions & test series.",
          ctaPrimary: { label: "Enroll in Batch", href: "/admissions" },
          ctaSecondary: { label: "Download Prospectus", href: "/brochure.pdf" },
          rating: 4.9,
          totalStudents: 1240
        },
        storage: "MongoDB.website_layouts.draft"
      },
      batches: {
        _id: "674123abc987f013",
        projectId: "proj_apex_science",
        section: "BATCH_TABLE_BLOCK",
        enabled: true,
        props: {
          title: "Upcoming Batches & Class Schedules",
          layout: "CARD_GRID_3_COL",
          dataSource: "MySQL.batches (Real-Time Relation)",
          batches: [
            { id: "b_101", name: "JEE Advanced 2026", timing: "08:00 AM - 12:30 PM", seatsLeft: 7, feeYearly: "₹45,000" },
            { id: "b_102", name: "NEET Comprehensive 2027", timing: "02:00 PM - 06:30 PM", seatsLeft: 4, feeYearly: "₹48,000" },
            { id: "b_103", name: "Class 10 Foundation", timing: "04:30 PM - 07:00 PM", seatsLeft: 12, feeYearly: "₹28,000" }
          ]
        },
        storage: "MongoDB.website_layouts.draft"
      },
      attendance: {
        _id: "674123abc987f014",
        projectId: "proj_apex_science",
        section: "ATTENDANCE_PORTAL_BLOCK",
        enabled: true,
        props: {
          mode: "SMART_QR_AND_BIOMETRIC",
          todayStats: { presentRate: "96.4%", presentCount: 224, totalCount: 232 },
          parentNotification: { channel: "WHATSAPP_SMS", autoTriggerOnScan: true },
          recentScans: [
            { roll: "102", name: "Rahul Verma", time: "08:02 AM", method: "QR_CODE" },
            { roll: "107", name: "Ananya Sharma", time: "08:05 AM", method: "FACE_ID" }
          ]
        },
        storage: "MongoDB.website_layouts.draft"
      },
      toppers: {
        _id: "674123abc987f015",
        projectId: "proj_apex_science",
        section: "TOPPERS_WALL_BLOCK",
        enabled: true,
        props: {
          title: "Hall of Fame & Top Ranks",
          verifiedByExamBoard: true,
          rankers: [
            { name: "Rohit Sharma", rank: "AIR 24", exam: "JEE Advanced 2025", institute: "IIT Bombay CSE" },
            { name: "Sneha Kulkarni", rank: "695/720", exam: "NEET UG 2025", institute: "AIIMS New Delhi" },
            { name: "Aarav Patel", rank: "AIR 91", exam: "JEE Advanced 2025", institute: "IIT Kanpur" }
          ]
        },
        storage: "MongoDB.website_layouts.draft"
      },
      materials: {
        _id: "674123abc987f017",
        projectId: "proj_apex_science",
        section: "STUDY_MATERIALS_BLOCK",
        enabled: true,
        props: {
          title: "Daily Practice Problems (DPP) & High-Yield Formula Hub",
          leadGateEnabled: true,
          leadSyncTarget: "MySQL.student_leads",
          materials: [
            { id: "mat_1", title: "Class 12 Physics Formula Booklet", pages: 14, downloads: 1480, format: "PDF" },
            { id: "mat_2", title: "NEET High-Yield Biology Rapid Notes", pages: 22, downloads: 2120, format: "PDF" },
            { id: "mat_3", title: "JEE Advanced 10-Yr Solved Question Bank", pages: 35, downloads: 940, format: "PDF" }
          ]
        },
        storage: "MongoDB.website_layouts.draft"
      },
      enquiry: {
        _id: "674123abc987f016",
        projectId: "proj_apex_science",
        section: "LEAD_CAPTURE_FORM_BLOCK",
        enabled: true,
        props: {
          title: "Instant Admission Enquiry & Demo Booking",
          fields: ["fullName", "parentPhone", "targetExam", "preferredBatch"],
          leadSyncTarget: "MySQL.student_leads",
          instantWebhook: "WhatsApp Director Alert (+91-98XXX-XXXXX)"
        },
        storage: "MongoDB.website_layouts.draft"
      }
    };
    return JSON.stringify(schemas[activeTab] || schemas.hero, null, 2);
  };

  return (
    <div className="minimal-hero-container relative">
      {/* Aceternity Grid Background behind Hero Banner */}
      <div className="pointer-events-none absolute inset-x-0 top-0 h-[48rem] sm:h-[54rem] md:h-[62rem] overflow-hidden z-0">
        <div
          className={cn(
            "absolute inset-0",
            "[background-size:40px_40px]",
            "[background-image:linear-gradient(to_right,#e4e4e7_1px,transparent_1px),linear-gradient(to_bottom,#e4e4e7_1px,transparent_1px)]",
            "dark:[background-image:linear-gradient(to_right,#262626_1px,transparent_1px),linear-gradient(to_bottom,#262626_1px,transparent_1px)]"
          )}
        />
        {/* Radial gradient for the container to give a faded look */}
        <div className="pointer-events-none absolute inset-0 flex items-center justify-center bg-white [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)] dark:bg-black" />
        {/* Soft bottom fade into page */}
        <div className="pointer-events-none absolute inset-x-0 bottom-0 h-44 bg-gradient-to-b from-transparent to-white dark:to-black" />
      </div>

      {/* Hero Center Section - Expansive 90%+ Screen Width */}
      <main className="relative z-10 w-full max-w-[95vw] lg:max-w-[92vw] xl:max-w-[90vw] mx-auto px-2 sm:px-4 pt-16 sm:pt-24 md:pt-28 lg:pt-32 pb-12 sm:pb-16 flex flex-col items-center text-center">

        {/* Hero Header Area with Floating Blurred-Border Feature Widgets */}
        <div className="relative w-full flex flex-col items-center">

          {/* Left Feature Card: Student Registration Form (Soft-Blur Ambient Depth, Pushed to Far-Left Edge) */}
          <div className="hidden md:block absolute -left-1 sm:-left-3 lg:-left-6 xl:-left-12 2xl:-left-16 bottom-1 sm:bottom-2 lg:bottom-4 z-20 text-left w-[240px] lg:w-[255px] select-none">
            <motion.div
              initial={{ opacity: 0, y: 24, rotate: -4 }}
              animate={{ opacity: 1, y: 0, rotate: -4 }}
              transition={{ duration: 0.65, delay: 0.25, ease: [0.16, 1, 0.3, 1] }}
              whileHover={{ y: -6, rotate: -1, scale: 1.02, transition: { duration: 0.25 } }}
              className="relative group cursor-default"
            >
              {/* Diffused Blurred Border Outer Aura */}
              <div className="absolute -inset-[3px] rounded-2xl bg-neutral-900/10 dark:bg-white/10 blur-[6px] pointer-events-none transition-opacity duration-300 group-hover:bg-neutral-900/15" />

              {/* Main Frosted Glass Card Container with Subtle Soft-Focus (Crisp & Readable) */}
              <div className="relative rounded-2xl border border-neutral-200/90 dark:border-neutral-800 bg-white/85 dark:bg-neutral-950/85 backdrop-blur-xl p-3 shadow-[0_12px_32px_rgb(0,0,0,0.06)] overflow-hidden filter blur-[0.45px] opacity-85 group-hover:blur-none group-hover:opacity-100 transition-all duration-300">
                {/* Header Row */}
                <div className="flex items-center justify-between pb-2 mb-2 border-b border-neutral-200/80 dark:border-neutral-800">
                  <div className="flex items-center gap-1.5">
                    <div className="w-5.5 h-5.5 rounded-md bg-neutral-100 dark:bg-neutral-800 text-neutral-800 dark:text-neutral-200 flex items-center justify-center">
                      <FileText size={12} />
                    </div>
                    <span className="text-[11px] font-semibold text-neutral-900 dark:text-neutral-100">Student Registration</span>
                  </div>
                  <span className="inline-flex items-center gap-1 text-[8.5px] font-mono font-medium text-emerald-700 bg-emerald-50 dark:bg-emerald-950/50 dark:text-emerald-400 px-1.5 py-0.5 rounded border border-emerald-200/70 dark:border-emerald-800">
                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
                    Live
                  </span>
                </div>

                {/* Minimal Single-Entry Registration Data */}
                <div className="py-1 space-y-1">
                  <div className="flex items-center justify-between text-xs">
                    <span className="text-[11px] font-semibold text-neutral-900 dark:text-neutral-100 truncate">
                      Aarav Sharma
                    </span>
                    <span className="text-[9.5px] font-mono px-1.5 py-0.5 rounded bg-neutral-100 dark:bg-neutral-800 text-neutral-700 dark:text-neutral-300 font-medium">
                      Class 11 JEE
                    </span>
                  </div>
                  <p className="text-[9.5px] text-neutral-500 dark:text-neutral-400">
                    Pinnacle Morning Batch • Form #1042
                  </p>
                </div>

                {/* Footer Status */}
                <div className="mt-2 pt-1.5 border-t border-neutral-200/80 dark:border-neutral-800 flex items-center justify-between text-[9.5px]">
                  <span className="text-neutral-500 dark:text-neutral-400">Admission Status</span>
                  <span className="inline-flex items-center gap-1 font-medium text-emerald-600 dark:text-emerald-400">
                    <CheckCircle2 size={10} />
                    <span>Verified</span>
                  </span>
                </div>
              </div>
            </motion.div>
          </div>

          {/* Right Feature Card: Attendance Analytics Report (Soft-Blur Ambient Depth, Pushed to Far-Right Edge) */}
          <div className="hidden md:block absolute -right-1 sm:-right-3 lg:-right-6 xl:-right-12 2xl:-right-16 bottom-1 sm:bottom-2 lg:bottom-4 z-20 text-left w-[240px] lg:w-[255px] select-none">
            <motion.div
              initial={{ opacity: 0, y: 24, rotate: 4 }}
              animate={{ opacity: 1, y: 0, rotate: 4 }}
              transition={{ duration: 0.65, delay: 0.4, ease: [0.16, 1, 0.3, 1] }}
              whileHover={{ y: -6, rotate: 1, scale: 1.02, transition: { duration: 0.25 } }}
              className="relative group cursor-default"
            >
              {/* Diffused Blurred Border Outer Aura */}
              <div className="absolute -inset-[3px] rounded-2xl bg-neutral-900/10 dark:bg-white/10 blur-[6px] pointer-events-none transition-opacity duration-300 group-hover:bg-neutral-900/15" />

              {/* Main Frosted Glass Card Container with Subtle Soft-Focus (Crisp & Readable) */}
              <div className="relative rounded-2xl border border-neutral-200/90 dark:border-neutral-800 bg-white/80 dark:bg-neutral-950/80 backdrop-blur-xl p-3 shadow-[0_12px_32px_rgb(0,0,0,0.06)] overflow-hidden filter blur-[0.45px] opacity-85 group-hover:blur-none group-hover:opacity-100 transition-all duration-300">
                {/* Header Row */}
                <div className="flex items-center justify-between pb-2 mb-2 border-b border-neutral-200/80 dark:border-neutral-800">
                  <div className="flex items-center gap-1.5">
                    <div className="w-5.5 h-5.5 rounded-md bg-neutral-100 dark:bg-neutral-800 text-neutral-800 dark:text-neutral-200 flex items-center justify-center">
                      <TrendingUp size={12} />
                    </div>
                    <span className="text-[11px] font-semibold text-neutral-900 dark:text-neutral-100">Attendance Analytics</span>
                  </div>
                  <span className="text-[8.5px] font-mono font-medium text-neutral-600 dark:text-neutral-300 bg-neutral-100 dark:bg-neutral-800 px-1.5 py-0.5 rounded border border-neutral-200/60 dark:border-neutral-700/60">
                    Weekly
                  </span>
                </div>

                {/* Main Metric & Mini Sparkline Bar Chart */}
                <div className="space-y-1.5">
                  <div className="flex items-baseline justify-between">
                    <div>
                      <span className="text-lg font-bold tracking-tight text-neutral-900 dark:text-neutral-100 font-mono">
                        96.4%
                      </span>
                      <span className="text-[9.5px] text-neutral-500 dark:text-neutral-400 block -mt-0.5">
                        Average attendance rate
                      </span>
                    </div>
                    <span className="text-[9px] font-mono text-emerald-600 dark:text-emerald-400 font-medium">
                      +3.2% vs last wk
                    </span>
                  </div>

                  {/* 5-Day Attendance Sparkline Bars */}
                  <div className="pt-0.5">
                    <div className="flex items-end justify-between h-8 gap-1.5 px-0.5">
                      {[
                        { day: 'M', pct: 88 },
                        { day: 'T', pct: 96 },
                        { day: 'W', pct: 94 },
                        { day: 'T', pct: 100 },
                        { day: 'F', pct: 96 }
                      ].map((bar, i) => (
                        <div key={i} className="flex-1 flex flex-col items-center gap-0.5 h-full justify-end">
                          <div
                            className="w-full rounded-xs bg-neutral-800 dark:bg-neutral-200 transition-all duration-300"
                            style={{ height: `${bar.pct}%` }}
                          />
                          <span className="text-[7.5px] font-mono text-neutral-400 dark:text-neutral-500">
                            {bar.day}
                          </span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Footer Status */}
                <div className="mt-2 pt-1.5 border-t border-neutral-200/80 dark:border-neutral-800 flex items-center justify-between text-[9.5px]">
                  <span className="text-neutral-500 dark:text-neutral-400">142 Present • 5 Absent</span>
                  <span className="inline-flex items-center gap-1 font-medium text-neutral-700 dark:text-neutral-300 font-mono text-[8.5px]">
                    <ShieldCheck size={10} className="text-emerald-600 dark:text-emerald-400" />
                    <span>QR Synced</span>
                  </span>
                </div>
              </div>
            </motion.div>
          </div>

          {/* Main Headline */}
          <motion.h1
            variants={staggerContainerVariants}
            initial="hidden"
            animate="visible"
            className="text-3xl sm:text-5xl md:text-6xl lg:text-7xl font-bold tracking-[-0.035em] text-black max-w-5xl leading-[1.2] mb-5 flex flex-col items-center justify-center gap-y-2 text-center"
          >
            {/* Line 1: Bring your [Flip Words] online, */}
            <div className="flex flex-wrap sm:flex-nowrap items-center justify-center gap-x-1.5 sm:gap-x-3.5 gap-y-1">
              <motion.span variants={staggerItemVariants} className="inline-block">Bring</motion.span>
              <motion.span variants={staggerItemVariants} className="inline-block">your</motion.span>
              <motion.span variants={staggerItemVariants} className="inline-block">
                <ContainerFlipWords
                  words={["institute", "academy", "tuition", "coaching", "classroom"]}
                  interval={2600}
                />
              </motion.span>
              <motion.span variants={staggerItemVariants} className="inline-block">online,</motion.span>
            </div>

            {/* Line 2: in one place. */}
            <div className="flex flex-wrap items-center justify-center gap-x-1.5 sm:gap-x-3.5">
              <motion.span variants={staggerItemVariants} className="inline-block">in</motion.span>
              <motion.span variants={staggerItemVariants} className="inline-block">one</motion.span>
              <motion.span variants={staggerItemVariants} className="inline-block">place.</motion.span>
            </div>
          </motion.h1>

          {/* Subtitle */}
          <p className="text-sm sm:text-lg md:text-xl text-gray-500 max-w-2xl mb-8 font-normal leading-relaxed px-2">
            Build and customize your academy's official website in our visual editor IDE,
            with real-time MongoDB schema sync and instant lead capture.
          </p>

          {/* Dual Center Pill Buttons */}
          <div className="flex flex-col sm:flex-row items-center gap-3 w-full sm:w-auto max-w-xs sm:max-w-none mb-10 sm:mb-12">
            <button className="w-full sm:w-auto bg-black text-white px-6 py-2.5 rounded-full font-medium text-sm hover:bg-neutral-800 transition-all shadow-sm hover:scale-[1.02] active:scale-[0.98]">
              Start for free
            </button>
            <button className="w-full sm:w-auto bg-white text-gray-800 border border-gray-300 px-6 py-2.5 rounded-full font-medium text-sm hover:bg-gray-50 transition-all hover:scale-[1.02] active:scale-[0.98]">
              Book a demo
            </button>
          </div>

          {/* Mobile-Only Feature Cards Display (Stacked below buttons on small devices) */}
          <div className="md:hidden grid grid-cols-1 sm:grid-cols-2 gap-3.5 w-full max-w-md mx-auto mb-10 px-2 text-left">
            {/* Student Registration Form Mobile */}
            <div className="relative rounded-2xl border border-neutral-200/90 dark:border-neutral-800 bg-white/90 dark:bg-neutral-950/90 backdrop-blur-xl p-3 shadow-sm transform -rotate-1">
              <div className="flex items-center justify-between pb-1.5 mb-2 border-b border-neutral-200/80 dark:border-neutral-800">
                <div className="flex items-center gap-1.5">
                  <FileText size={12} className="text-neutral-700 dark:text-neutral-300" />
                  <span className="text-[11px] font-semibold text-neutral-900 dark:text-neutral-100">Student Registration</span>
                </div>
                <span className="text-[9px] font-mono font-medium text-emerald-700 bg-emerald-50 dark:bg-emerald-950/50 dark:text-emerald-400 px-1 py-0.5 rounded">
                  Live
                </span>
              </div>
              <p className="text-[11px] font-medium text-neutral-800 dark:text-neutral-200">Aarav Sharma</p>
              <p className="text-[10px] text-neutral-500">Class 11 JEE • Pinnacle Batch</p>
            </div>

            {/* Attendance Analytics Report Mobile */}
            <div className="relative rounded-2xl border border-neutral-200/90 dark:border-neutral-800 bg-white/90 dark:bg-neutral-950/90 backdrop-blur-xl p-3 shadow-sm transform rotate-1">
              <div className="flex items-center justify-between pb-1.5 mb-2 border-b border-neutral-200/80 dark:border-neutral-800">
                <div className="flex items-center gap-1.5">
                  <TrendingUp size={12} className="text-neutral-700 dark:text-neutral-300" />
                  <span className="text-[11px] font-semibold text-neutral-900 dark:text-neutral-100">Attendance Analytics</span>
                </div>
                <span className="text-[9px] font-mono font-semibold text-neutral-900 dark:text-neutral-100">
                  96.4%
                </span>
              </div>
              <p className="text-[11px] font-medium text-neutral-800 dark:text-neutral-200">Weekly Batch Rate</p>
              <p className="text-[10px] text-neutral-500">142 Present • QR Gate Synced</p>
            </div>
          </div>

        </div>

        {/* Aceternity Macbook Scroll 3D Presentation with Sticky Locking & Fade-In-Down Option Navbar */}
        <MacbookScroll
          onFlatChange={setIsIdeFlat}
          topSlot={
            <motion.div
              initial={{ opacity: 0, y: -50 }}
              animate={isIdeFlat ? { opacity: 1, y: 0 } : { opacity: 0, y: -50 }}
              transition={{ duration: 0.55, ease: [0.16, 1, 0.3, 1] }}
              className="capsule-tabs-wrapper pointer-events-auto"
            >
              <div className="capsule-tabs-pill shadow-md border border-gray-200/90 bg-white/95 backdrop-blur-md">
                {COMPONENT_TABS.map((tab) => {
                  const isActive = activeTab === tab.id;
                  return (
                    <button
                      key={tab.id}
                      onClick={() => setActiveTab(tab.id)}
                      className={`relative px-3 sm:px-5 py-1.5 rounded-full text-xs sm:text-sm font-medium transition-colors whitespace-nowrap cursor-pointer ${isActive ? 'text-black font-semibold' : 'text-gray-600 hover:text-black'
                        }`}
                    >
                      {isActive && (
                        <motion.div
                          layoutId="activeComponentTab"
                          className="absolute inset-0 bg-white rounded-full shadow-sm"
                          transition={{ type: 'spring', stiffness: 450, damping: 32 }}
                        />
                      )}
                      <span className="relative z-10 flex items-center gap-1.5">
                        {tab.label}
                      </span>
                    </button>
                  );
                })}
              </div>
            </motion.div>
          }
        >
          {/* macOS-Style Website Builder IDE Application Shell */}
          <div className="w-full app-window-shell text-left relative">

            {/* Top IDE Application Bar */}
            <div className="ide-top-bar flex flex-wrap items-center justify-between px-3 sm:px-4 py-2.5 bg-gray-50/90 border-b border-gray-200 text-xs">

              {/* Left: Window Controls + Subdomain Badge */}
              <div className="flex items-center gap-3">
                <div className="flex items-center gap-1.5">
                  <span className="w-3 h-3 rounded-full bg-[#ef4444]" />
                  <span className="w-3 h-3 rounded-full bg-[#f59e0b]" />
                  <span className="w-3 h-3 rounded-full bg-[#10b981]" />
                </div>
                <div className="h-4 w-px bg-gray-200 hidden sm:block" />
                <div className="flex items-center gap-2">
                  <span className="font-mono font-medium text-gray-700 text-[11px] sm:text-xs">
                    apex-science.studyflow.in
                  </span>
                  <span className="text-[10px] bg-emerald-50 text-emerald-700 border border-emerald-200 font-mono px-2 py-0.5 rounded-full font-medium hidden sm:inline-flex items-center gap-1">
                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
                    Live Sync Active
                  </span>
                </div>
              </div>

              {/* Center: Device Viewport Controls */}
              <div className="hidden md:flex items-center gap-1 bg-white border border-gray-200 rounded-lg p-0.5 shadow-xs">
                <button
                  onClick={() => setActiveDevice('desktop')}
                  title="Desktop View (100%)"
                  className={`p-1.5 rounded ${activeDevice === 'desktop' ? 'bg-gray-100 text-black' : 'text-gray-400 hover:text-black'}`}
                >
                  <Monitor size={13} />
                </button>
                <button
                  onClick={() => setActiveDevice('tablet')}
                  title="Tablet View (768px)"
                  className={`p-1.5 rounded ${activeDevice === 'tablet' ? 'bg-gray-100 text-black' : 'text-gray-400 hover:text-black'}`}
                >
                  <Tablet size={13} />
                </button>
                <button
                  onClick={() => setActiveDevice('mobile')}
                  title="Mobile View (375px)"
                  className={`p-1.5 rounded ${activeDevice === 'mobile' ? 'bg-gray-100 text-black' : 'text-gray-400 hover:text-black'}`}
                >
                  <Smartphone size={13} />
                </button>
              </div>

              {/* Right: Visual / Code Switcher & Publish Action */}
              <div className="flex items-center gap-2">
                <div className="flex items-center bg-gray-200/70 p-0.5 rounded-lg text-[11px]">
                  <button
                    onClick={() => setViewMode('visual')}
                    className={`px-2.5 py-1 rounded font-medium transition-colors ${viewMode === 'visual' ? 'bg-white text-black shadow-xs' : 'text-gray-600 hover:text-black'
                      }`}
                  >
                    Visual Editor
                  </button>
                  <button
                    onClick={() => setViewMode('code')}
                    className={`px-2.5 py-1 rounded font-medium transition-colors ${viewMode === 'code' ? 'bg-white text-black shadow-xs' : 'text-gray-600 hover:text-black'
                      }`}
                  >
                    MongoDB JSON
                  </button>
                </div>

                <button
                  onClick={handleSaveDraft}
                  className="bg-black text-white hover:bg-neutral-800 px-3 py-1 rounded-lg text-[11px] font-medium transition-colors flex items-center gap-1"
                >
                  {isSaved ? <Check size={12} className="text-emerald-400" /> : <Save size={12} />}
                  <span>{isSaved ? 'Saved!' : 'Save Draft'}</span>
                </button>
              </div>

            </div>

            {/* IDE Main Workspace Layout */}
            <div className="flex flex-col md:flex-row min-h-[580px] md:min-h-[640px]">

              {/* Aceternity Grouped Sidebar Matching Reference Screenshot */}
              <GroupedSidebar
                activeTab={activeTab}
                onSelectTab={(tabId) => {
                  setActiveTab(tabId);
                  setActiveSidebarSection('');
                }}
                viewMode={viewMode}
                onToggleViewMode={(mode) => setViewMode(mode)}
                siteStructureItems={siteStructureItems}
                onAddFeature={handleAddFeature}
              />

              {/* Center Canvas: Live Component Preview or MongoDB JSON Schema */}
              <div className="flex-1 bg-white p-4 sm:p-8 flex flex-col justify-between overflow-x-hidden min-h-[540px]">

                <div>
                  {/* Canvas Sub-Header: Active Component Breadcrumb & Drag Indicator */}
                  <div className="flex items-center justify-between pb-3 mb-4 border-b border-gray-100 text-xs">
                    <div className="flex items-center gap-2">
                      <span className="font-mono font-semibold text-gray-900 bg-gray-100 px-2 py-0.5 rounded text-[11px]">
                        {COMPONENT_TABS.find(t => t.id === activeTab)?.componentName || `<${activeTab.charAt(0).toUpperCase() + activeTab.slice(1)}Block />`}
                      </span>
                      <span className="text-gray-400 text-[11px] hidden sm:inline">
                        • Section active in visual canvas
                      </span>
                    </div>

                    <div className="flex items-center gap-1.5 text-gray-400 text-[11px]">
                      <span className="w-2 h-2 rounded-full bg-gray-800" />
                      <span className="text-gray-600 font-medium">Visual Inspector Active</span>
                    </div>
                  </div>

                  {/* Dynamic Canvas Body */}
                  <div className="editor-canvas-container">
                    <AnimatePresence mode="wait">
                      {viewMode === 'code' ? (
                        /* MongoDB Document JSON View */
                        <motion.div
                          key="code-view"
                          initial={{ opacity: 0, y: 8 }}
                          animate={{ opacity: 1, y: 0 }}
                          exit={{ opacity: 0, y: -8 }}
                          transition={{ duration: 0.2 }}
                          className="bg-neutral-900 text-gray-200 p-5 rounded-xl font-mono text-[11px] sm:text-xs overflow-x-auto shadow-inner text-left max-h-[520px]"
                        >
                          <div className="flex items-center justify-between pb-2 mb-2 border-b border-neutral-800 text-neutral-400 text-[10px]">
                            <span>MongoDB Collection: website_layouts (draft)</span>
                            <span>JSON / BSON</span>
                          </div>
                          <pre className="text-emerald-400 leading-relaxed">
                            {getMongoSchemaJson()}
                          </pre>
                        </motion.div>
                      ) : (
                        /* Visual Live Component Mockup with Element Action Toolbar */
                        <motion.div
                          key={`visual-${activeTab}`}
                          initial={{ opacity: 0, y: 10 }}
                          animate={{ opacity: 1, y: 0 }}
                          exit={{ opacity: 0, y: -10 }}
                          transition={{ duration: 0.25 }}
                          className="active-component-frame"
                        >
                          {/* Element Quick Action Bar (Fully Mobile Responsive) */}
                          <div className="editor-floating-toolbar mb-3 flex flex-wrap items-center justify-between bg-white border border-gray-200 shadow-xs rounded-lg px-2.5 sm:px-3 py-1.5 text-xs text-gray-700 gap-1.5">
                            <div className="flex items-center gap-1.5 sm:gap-2 flex-wrap">
                              <span className="font-semibold text-gray-900 flex items-center gap-1.5 text-xs">
                                <span className="w-2 h-2 rounded-full bg-gray-800 flex-shrink-0" />
                                <span className="truncate max-w-[200px] sm:max-w-none">Section: {getTabLabel(activeTab)}</span>
                              </span>
                              <span className="text-gray-300 hidden sm:inline">|</span>
                              <span className="text-gray-600 font-medium text-[10px] sm:text-[11px] px-1.5 py-0.5 rounded bg-gray-50 border border-gray-200">
                                Quick Edit
                              </span>
                              <span className="text-gray-600 font-medium text-[10px] sm:text-[11px] px-1.5 py-0.5 rounded hover:bg-gray-50 cursor-pointer hidden sm:inline">
                                Change Layout
                              </span>
                              <span className="text-gray-600 font-medium text-[10px] sm:text-[11px] px-1.5 py-0.5 rounded hover:bg-gray-50 cursor-pointer hidden md:inline">
                                Background & Padding
                              </span>
                            </div>
                            <div className="flex items-center gap-1.5 text-[10px] text-gray-400 font-mono ml-auto sm:ml-0">
                              <span>Visual Canvas</span>
                              <span>•</span>
                              <span className="text-emerald-600 font-medium font-sans">Synced</span>
                            </div>
                          </div>
                          {/* 1. HERO SECTION COMPONENT */}
                          {activeTab === 'hero' && (
                            <div className="component-editor-box p-4 sm:p-6 rounded-xl border border-dashed border-gray-300 bg-gray-50/50 relative">
                              <span className="component-pill-tag">HeroBlock • 1200×420</span>

                              <div className="text-center py-4 sm:py-6">
                                <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold bg-gray-100 text-gray-900 border border-gray-200 mb-3">
                                  <Zap size={13} className="text-gray-700" />
                                  Admissions Open for 2026-27 Batches
                                </span>
                                <h3 className="text-lg sm:text-2xl font-bold text-gray-900 mb-2 tracking-tight">
                                  Apex Science Academy — Shaping Future Doctors & Engineers
                                </h3>
                                <p className="text-xs sm:text-sm text-gray-600 max-w-xl mx-auto mb-5 leading-relaxed">
                                  Premier coaching for Class 11, 12, JEE Advanced & NEET. Daily doubt resolution, rigorous DPP sheets, and weekly mock test series.
                                </p>

                                <div className="flex flex-wrap items-center justify-center gap-2.5">
                                  <button className="bg-black text-white px-4 py-2 rounded-lg text-xs font-medium hover:bg-neutral-800 transition-colors shadow-xs">
                                    Enroll in Batch
                                  </button>
                                  <button className="bg-white text-gray-800 border border-gray-300 px-4 py-2 rounded-lg text-xs font-medium hover:bg-gray-50 transition-colors">
                                    Download Prospectus
                                  </button>
                                </div>

                                <div className="mt-6 pt-4 border-t border-gray-200/60 flex flex-wrap items-center justify-center gap-4 text-[11px] text-gray-500">
                                  <span className="flex items-center gap-1"><Star size={12} className="text-amber-500 fill-amber-500" /> 4.9/5 Rating (1,240+ Enrolled)</span>
                                  <span>•</span>
                                  <span className="flex items-center gap-1"><Trophy size={12} className="text-gray-700" /> 98% Board Distinction Rate</span>
                                  <span>•</span>
                                  <span className="flex items-center gap-1"><MapPin size={12} className="text-gray-400" /> Jaipur Main Branch</span>
                                </div>
                              </div>
                            </div>
                          )}

                          {/* ABOUT US WELCOMING PAGE */}
                          {activeTab === 'about' && (
                            <div className="component-editor-box p-4 sm:p-6 rounded-xl border border-dashed border-gray-300 bg-gray-50/50 relative">
                              <span className="component-pill-tag">AboutBlock • Kota Legacy & Pedigree</span>

                              <div className="text-left mb-4">
                                <span className="inline-block text-[10px] font-bold uppercase font-mono tracking-wider bg-gray-100 text-gray-800 px-2 py-0.5 rounded mb-2">
                                  Institute Pedigree • Est. 2008
                                </span>
                                <h3 className="text-base sm:text-xl font-bold text-gray-900 mb-1">
                                  18 Years of Kota Coaching Excellence
                                </h3>
                                <p className="text-xs sm:text-sm text-gray-600 leading-relaxed max-w-2xl">
                                  Founded by IIT-Roorkee alumni, Apex Science Academy provides rigorous classroom mentoring, daily doubt resolution, and personalized test analytics to help students achieve top national ranks in JEE and NEET.
                                </p>
                              </div>

                              <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 text-left">
                                <div className="bg-white p-3.5 rounded-xl border border-gray-200 shadow-xs">
                                  <div className="text-xl font-bold text-gray-900">14,000+</div>
                                  <div className="text-xs text-gray-600 font-medium">Students Mentored</div>
                                  <div className="text-[10px] text-gray-400 font-mono mt-0.5">Across 18 Batches</div>
                                </div>
                                <div className="bg-white p-3.5 rounded-xl border border-gray-200 shadow-xs">
                                  <div className="text-xl font-bold text-gray-900">92.4%</div>
                                  <div className="text-xs text-gray-600 font-medium">Board Distinction</div>
                                  <div className="text-[10px] text-gray-400 font-mono mt-0.5">CBSE & State Board</div>
                                </div>
                                <div className="bg-white p-3.5 rounded-xl border border-gray-200 shadow-xs">
                                  <div className="text-xl font-bold text-gray-900">480+</div>
                                  <div className="text-xs text-gray-600 font-medium">IIT & AIIMS Selections</div>
                                  <div className="text-[10px] text-gray-400 font-mono mt-0.5">Top Tier Ranks</div>
                                </div>
                              </div>
                            </div>
                          )}

                          {/* AUTH PAGE 1: STUDENT & TEACHER LOGIN */}
                          {activeTab === 'auth_login' && (
                            <div className="component-editor-box p-4 sm:p-6 rounded-xl border border-dashed border-gray-300 bg-gray-50/50 relative">
                              <span className="component-pill-tag">AuthPortal • Multi-Tenant Login</span>

                              <div className="mb-4">
                                <h3 className="text-base sm:text-lg font-bold text-gray-900">Student & Faculty Portal Access</h3>
                                <p className="text-xs text-gray-500">Secure credential authentication with roll number, mobile OTP, or email</p>
                              </div>

                              <div className="bg-white p-5 rounded-xl border border-gray-200 shadow-xs max-w-sm mx-auto text-left space-y-3">
                                <div>
                                  <label className="text-[11px] font-semibold text-gray-700 block mb-1">
                                    Login Identifier
                                  </label>
                                  <input
                                    type="text"
                                    readOnly
                                    value="STU-2026-0428 (Roll No)"
                                    className="w-full px-3 py-1.5 border border-gray-300 rounded-lg text-xs bg-gray-50 text-gray-700 font-mono"
                                  />
                                </div>
                                <div>
                                  <label className="text-[11px] font-semibold text-gray-700 block mb-1">
                                    Password
                                  </label>
                                  <input
                                    type="password"
                                    readOnly
                                    value="••••••••••••"
                                    className="w-full px-3 py-1.5 border border-gray-300 rounded-lg text-xs bg-gray-50 text-gray-700"
                                  />
                                </div>
                                <div className="flex items-center justify-between text-[11px] text-gray-500">
                                  <span className="cursor-pointer hover:text-black">Forgot Password?</span>
                                  <span className="text-emerald-600 font-medium">Active Session</span>
                                </div>
                                <button className="w-full bg-black text-white py-2 rounded-lg text-xs font-semibold hover:bg-neutral-800 transition-colors shadow-xs">
                                  Sign In to Student Portal
                                </button>
                              </div>
                            </div>
                          )}

                          {/* AUTH PAGE 2: STUDENT REGISTRATION */}
                          {activeTab === 'auth_signup' && (
                            <div className="component-editor-box p-4 sm:p-6 rounded-xl border border-dashed border-gray-300 bg-gray-50/50 relative">
                              <span className="component-pill-tag">StudentRegister • Admission Intake</span>

                              <div className="mb-4">
                                <h3 className="text-base sm:text-lg font-bold text-gray-900">Student Registration & Profile Setup</h3>
                                <p className="text-xs text-gray-500">Register new student credentials and allocate batch schedules</p>
                              </div>

                              <div className="bg-white p-4 sm:p-5 rounded-xl border border-gray-200 shadow-xs max-w-md mx-auto text-left space-y-3">
                                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 sm:gap-2">
                                  <div>
                                    <label className="text-[11px] font-semibold text-gray-700 block mb-1">Student Full Name</label>
                                    <input
                                      type="text"
                                      readOnly
                                      value="Aarav Verma"
                                      className="w-full px-2.5 py-1.5 border border-gray-300 rounded-lg text-xs bg-gray-50 text-gray-700"
                                    />
                                  </div>
                                  <div>
                                    <label className="text-[11px] font-semibold text-gray-700 block mb-1">Parent Mobile</label>
                                    <input
                                      type="text"
                                      readOnly
                                      value="+91 98290 12345"
                                      className="w-full px-2.5 py-1.5 border border-gray-300 rounded-lg text-xs bg-gray-50 text-gray-700"
                                    />
                                  </div>
                                </div>
                                <div>
                                  <label className="text-[11px] font-semibold text-gray-700 block mb-1">Target Exam & Standard</label>
                                  <input
                                    type="text"
                                    readOnly
                                    value="Class 11 — JEE Advanced 2027"
                                    className="w-full px-2.5 py-1.5 border border-gray-300 rounded-lg text-xs bg-gray-50 text-gray-700"
                                  />
                                </div>
                                <button className="w-full bg-black text-white py-2 rounded-lg text-xs font-semibold hover:bg-neutral-800 transition-colors shadow-xs cursor-pointer">
                                  Create Account & Generate QR ID Card
                                </button>
                              </div>
                            </div>
                          )}

                          {/* AUTH PAGE 3: FORGOT PASSWORD (OTP) */}
                          {activeTab === 'auth_forgot' && (
                            <div className="component-editor-box p-4 sm:p-6 rounded-xl border border-dashed border-gray-300 bg-gray-50/50 relative">
                              <span className="component-pill-tag">OtpRecovery • Password Reset</span>

                              <div className="mb-4">
                                <h3 className="text-base sm:text-lg font-bold text-gray-900">Forgot Password & Mobile OTP Recovery</h3>
                                <p className="text-xs text-gray-500">6-digit SMS verification code dispatched to registered parent phone number</p>
                              </div>

                              <div className="bg-white p-4 sm:p-5 rounded-xl border border-gray-200 shadow-xs max-w-sm mx-auto text-left space-y-3">
                                <div>
                                  <label className="text-[11px] font-semibold text-gray-700 block mb-1">Registered Phone Number</label>
                                  <input
                                    type="text"
                                    readOnly
                                    value="+91 98290 12345"
                                    className="w-full px-3 py-1.5 border border-gray-300 rounded-lg text-xs bg-gray-50 text-gray-700 font-mono"
                                  />
                                </div>
                                <div>
                                  <label className="text-[11px] font-semibold text-gray-700 block mb-1">Enter 6-Digit OTP</label>
                                  <div className="flex gap-1.5 sm:gap-2 justify-between">
                                    {['4', '9', '2', '8', '1', '6'].map((digit, i) => (
                                      <div key={i} className="w-8 sm:w-9 h-8 sm:h-9 rounded-lg border border-gray-300 bg-gray-50 flex items-center justify-center font-bold text-xs sm:text-sm font-mono text-gray-900">
                                        {digit}
                                      </div>
                                    ))}
                                  </div>
                                </div>
                                <button className="w-full bg-black text-white py-2 rounded-lg text-xs font-semibold hover:bg-neutral-800 transition-colors shadow-xs cursor-pointer">
                                  Verify OTP & Reset Credentials
                                </button>
                              </div>
                            </div>
                          )}

                          {/* 2. BATCHES COMPONENT */}
                          {activeTab === 'batches' && (
                            <div className="component-editor-box p-4 sm:p-6 rounded-xl border border-dashed border-gray-300 bg-gray-50/50 relative">
                              <span className="component-pill-tag">BatchesGrid • Dynamic MySQL Sync</span>

                              <div className="mb-4">
                                <h3 className="text-base sm:text-lg font-bold text-gray-900">Active Classroom Batches</h3>
                                <p className="text-xs text-gray-500">Auto-synchronized with MySQL `batches` table</p>
                              </div>

                              <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
                                {/* Batch Card 1 */}
                                <div className="bg-white p-3.5 rounded-lg border border-gray-200 shadow-xs flex flex-col justify-between">
                                  <div>
                                    <div className="flex items-center justify-between mb-2">
                                      <span className="text-[10px] font-bold uppercase bg-gray-100 text-gray-800 px-2 py-0.5 rounded">
                                        JEE Advanced 2026
                                      </span>
                                      <span className="text-[10px] font-mono text-emerald-600 font-semibold">7 Seats Left</span>
                                    </div>
                                    <h4 className="text-xs font-bold text-gray-900 mb-1">Target Rankers Batch</h4>
                                    <p className="text-[11px] text-gray-500">Mon - Sat • 08:00 AM - 12:30 PM</p>
                                  </div>
                                  <div className="mt-3 pt-2.5 border-t border-gray-100 flex items-center justify-between text-xs">
                                    <span className="font-bold text-gray-900">₹45,000<span className="text-[10px] text-gray-400 font-normal">/yr</span></span>
                                    <button className="text-[11px] bg-black text-white px-2.5 py-1 rounded hover:bg-neutral-800">Enroll</button>
                                  </div>
                                </div>

                                {/* Batch Card 2 */}
                                <div className="bg-white p-3.5 rounded-lg border border-gray-200 shadow-xs flex flex-col justify-between">
                                  <div>
                                    <div className="flex items-center justify-between mb-2">
                                      <span className="text-[10px] font-bold uppercase bg-purple-50 text-purple-700 px-2 py-0.5 rounded">
                                        NEET UG 2027
                                      </span>
                                      <span className="text-[10px] font-mono text-amber-600 font-semibold">4 Seats Left</span>
                                    </div>
                                    <h4 className="text-xs font-bold text-gray-900 mb-1">Medical Comprehensive</h4>
                                    <p className="text-[11px] text-gray-500">Mon - Sat • 02:00 PM - 06:30 PM</p>
                                  </div>
                                  <div className="mt-3 pt-2.5 border-t border-gray-100 flex items-center justify-between text-xs">
                                    <span className="font-bold text-gray-900">₹48,000<span className="text-[10px] text-gray-400 font-normal">/yr</span></span>
                                    <button className="text-[11px] bg-black text-white px-2.5 py-1 rounded hover:bg-neutral-800">Enroll</button>
                                  </div>
                                </div>

                                {/* Batch Card 3 */}
                                <div className="bg-white p-3.5 rounded-lg border border-gray-200 shadow-xs flex flex-col justify-between">
                                  <div>
                                    <div className="flex items-center justify-between mb-2">
                                      <span className="text-[10px] font-bold uppercase bg-gray-100 text-gray-700 px-2 py-0.5 rounded">
                                        Class 10 Boards
                                      </span>
                                      <span className="text-[10px] font-mono text-gray-500">Open</span>
                                    </div>
                                    <h4 className="text-xs font-bold text-gray-900 mb-1">Foundation Olympiad</h4>
                                    <p className="text-[11px] text-gray-500">Mon - Fri • 04:30 PM - 07:00 PM</p>
                                  </div>
                                  <div className="mt-3 pt-2.5 border-t border-gray-100 flex items-center justify-between text-xs">
                                    <span className="font-bold text-gray-900">₹28,000<span className="text-[10px] text-gray-400 font-normal">/yr</span></span>
                                    <button className="text-[11px] bg-black text-white px-2.5 py-1 rounded hover:bg-neutral-800">Enroll</button>
                                  </div>
                                </div>
                              </div>
                            </div>
                          )}

                          {/* 3. ATTENDANCE COMPONENT */}
                          {activeTab === 'attendance' && (
                            <div className="component-editor-box p-4 sm:p-6 rounded-xl border border-dashed border-gray-300 bg-gray-50/50 relative">
                              <span className="component-pill-tag">AttendancePortal • Real-Time QR & Alerts</span>

                              <div className="flex flex-col sm:flex-row sm:items-center justify-between mb-4 gap-2">
                                <div>
                                  <h3 className="text-base sm:text-lg font-bold text-gray-900">Daily Punch-In & Attendance</h3>
                                  <p className="text-xs text-gray-500">Instant SMS/WhatsApp dispatch to parents on punch</p>
                                </div>
                                <span className="text-xs font-semibold text-emerald-700 bg-emerald-50 border border-emerald-200 px-2.5 py-1 rounded-full">
                                  96.4% Present (224/232 Enrolled)
                                </span>
                              </div>

                              <div className="space-y-2">
                                <div className="flex items-center justify-between p-2.5 bg-white rounded-lg border border-gray-200 text-xs">
                                  <div className="flex items-center gap-3">
                                    <QrCode size={16} className="text-gray-700" />
                                    <div>
                                      <span className="font-semibold text-gray-900">Rahul Verma (Roll #102)</span>
                                      <span className="text-gray-400 text-[11px] block">JEE Advanced Batch 1 • Punch at 08:01 AM</span>
                                    </div>
                                  </div>
                                  <span className="bg-emerald-100 text-emerald-800 font-medium px-2 py-0.5 rounded text-[10px]">
                                    Present • SMS Sent
                                  </span>
                                </div>

                                <div className="flex items-center justify-between p-2.5 bg-white rounded-lg border border-gray-200 text-xs">
                                  <div className="flex items-center gap-3">
                                    <QrCode size={16} className="text-gray-700" />
                                    <div>
                                      <span className="font-semibold text-gray-900">Ananya Sharma (Roll #107)</span>
                                      <span className="text-gray-400 text-[11px] block">NEET Batch 2 • Punch at 08:04 AM</span>
                                    </div>
                                  </div>
                                  <span className="bg-emerald-100 text-emerald-800 font-medium px-2 py-0.5 rounded text-[10px]">
                                    Present • WhatsApp Sent
                                  </span>
                                </div>

                                <div className="flex items-center justify-between p-2.5 bg-white rounded-lg border border-gray-200 text-xs">
                                  <div className="flex items-center gap-3">
                                    <Clock size={16} className="text-amber-500" />
                                    <div>
                                      <span className="font-semibold text-gray-900">Vikram Rao (Roll #114)</span>
                                      <span className="text-gray-400 text-[11px] block">Class 10 Foundation • Punch at 08:18 AM</span>
                                    </div>
                                  </div>
                                  <span className="bg-amber-100 text-amber-800 font-medium px-2 py-0.5 rounded text-[10px]">
                                    Late (18m) • Notified
                                  </span>
                                </div>
                              </div>
                            </div>
                          )}

                          {/* 4. TOPPERS COMPONENT */}
                          {activeTab === 'toppers' && (
                            <div className="component-editor-box p-4 sm:p-6 rounded-xl border border-dashed border-gray-300 bg-gray-50/50 relative">
                              <span className="component-pill-tag">ToppersWall • Social Proof Showcase</span>

                              <div className="mb-4">
                                <h3 className="text-base sm:text-lg font-bold text-gray-900">Hall of Fame & Top Ranks</h3>
                                <p className="text-xs text-gray-500">Highlight student rankers to boost conversion on admissions</p>
                              </div>

                              <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
                                <div className="bg-white p-3.5 rounded-lg border border-gray-200 shadow-xs text-center">
                                  <div className="w-8 h-8 rounded-full bg-amber-50 border border-amber-200 text-amber-700 flex items-center justify-center mx-auto mb-2">
                                    <Trophy size={15} />
                                  </div>
                                  <div className="text-sm font-bold text-gray-900">AIR 24</div>
                                  <div className="text-xs font-semibold text-gray-800">JEE Advanced 2025</div>
                                  <div className="text-[11px] text-gray-700 font-medium mt-1">Rohit Sharma</div>
                                  <div className="text-[10px] text-gray-400">IIT Bombay CSE</div>
                                </div>

                                <div className="bg-white p-3.5 rounded-lg border border-gray-200 shadow-xs text-center">
                                  <div className="w-8 h-8 rounded-full bg-amber-50 border border-amber-200 text-amber-700 flex items-center justify-center mx-auto mb-2">
                                    <Award size={15} />
                                  </div>
                                  <div className="text-sm font-bold text-gray-900">695 / 720</div>
                                  <div className="text-xs font-semibold text-purple-700">NEET UG 2025</div>
                                  <div className="text-[11px] text-gray-700 font-medium mt-1">Sneha Kulkarni</div>
                                  <div className="text-[10px] text-gray-400">AIIMS New Delhi</div>
                                </div>

                                <div className="bg-white p-3.5 rounded-lg border border-gray-200 shadow-xs text-center">
                                  <div className="w-8 h-8 rounded-full bg-gray-100 border border-gray-200 text-gray-800 flex items-center justify-center mx-auto mb-2">
                                    <Medal size={15} />
                                  </div>
                                  <div className="text-sm font-bold text-gray-900">AIR 91</div>
                                  <div className="text-xs font-semibold text-gray-800">JEE Advanced 2025</div>
                                  <div className="text-[11px] text-gray-700 font-medium mt-1">Aarav Patel</div>
                                  <div className="text-[10px] text-gray-400">IIT Kanpur</div>
                                </div>
                              </div>
                            </div>
                          )}

                          {/* 5. DPP & STUDY MATERIALS HUB (Unique StudyFlow Coaching Engine Feature) */}
                          {activeTab === 'materials' && (
                            <div className="component-editor-box p-4 sm:p-6 rounded-xl border border-dashed border-gray-300 bg-gray-50/50 relative">
                              <span className="component-pill-tag">StudyMaterialsBlock • WhatsApp Lead Gate</span>

                              <div className="mb-4">
                                <h3 className="text-base sm:text-lg font-bold text-gray-900">DPP Sheets & High-Yield Formula Hub</h3>
                                <p className="text-xs text-gray-500">Free download gate: student enters phone number to unlock PDF, automatically capturing an admission lead in MySQL</p>
                              </div>

                              <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
                                <div className="bg-white p-3.5 rounded-lg border border-gray-200 shadow-xs flex flex-col justify-between">
                                  <div>
                                    <div className="flex items-center justify-between mb-2">
                                      <span className="text-[10px] font-mono font-bold uppercase bg-purple-50 text-purple-700 px-2 py-0.5 rounded">
                                        Class 12 Physics
                                      </span>
                                      <span className="text-[10px] text-gray-400 font-mono">14 Pages PDF</span>
                                    </div>
                                    <h4 className="text-xs font-bold text-gray-900 mb-1">Rotational Mechanics Formula Booklet</h4>
                                    <p className="text-[11px] text-gray-500">Includes all derivation summaries & JEE Advanced short tricks.</p>
                                  </div>
                                  <div className="mt-3 pt-2.5 border-t border-gray-100 flex items-center justify-between text-xs">
                                    <span className="text-[10px] text-gray-400 font-mono">1,480 Downloads</span>
                                    <button className="text-[11px] bg-black text-white px-2.5 py-1 rounded hover:bg-neutral-800 flex items-center gap-1">
                                      <BookOpen size={11} />
                                      <span>Download PDF</span>
                                    </button>
                                  </div>
                                </div>

                                <div className="bg-white p-3.5 rounded-lg border border-gray-200 shadow-xs flex flex-col justify-between">
                                  <div>
                                    <div className="flex items-center justify-between mb-2">
                                      <span className="text-[10px] font-mono font-bold uppercase bg-emerald-50 text-emerald-700 px-2 py-0.5 rounded">
                                        NEET Biology
                                      </span>
                                      <span className="text-[10px] text-gray-400 font-mono">22 Pages PDF</span>
                                    </div>
                                    <h4 className="text-xs font-bold text-gray-900 mb-1">Human Physiology Rapid Revision</h4>
                                    <p className="text-[11px] text-gray-500">Handwritten charts with 100% NCERT diagram annotations.</p>
                                  </div>
                                  <div className="mt-3 pt-2.5 border-t border-gray-100 flex items-center justify-between text-xs">
                                    <span className="text-[10px] text-gray-400 font-mono">2,120 Downloads</span>
                                    <button className="text-[11px] bg-black text-white px-2.5 py-1 rounded hover:bg-neutral-800 flex items-center gap-1">
                                      <BookOpen size={11} />
                                      <span>Download PDF</span>
                                    </button>
                                  </div>
                                </div>

                                <div className="bg-white p-3.5 rounded-lg border border-gray-200 shadow-xs flex flex-col justify-between">
                                  <div>
                                    <div className="flex items-center justify-between mb-2">
                                      <span className="text-[10px] font-mono font-bold uppercase bg-gray-100 text-gray-800 px-2 py-0.5 rounded">
                                        JEE Mathematics
                                      </span>
                                      <span className="text-[10px] text-gray-400 font-mono">35 Pages PDF</span>
                                    </div>
                                    <h4 className="text-xs font-bold text-gray-900 mb-1">Calculus 10-Yr Question Bank</h4>
                                    <p className="text-[11px] text-gray-500">Step-by-step solved PYQs with difficulty tier breakdown.</p>
                                  </div>
                                  <div className="mt-3 pt-2.5 border-t border-gray-100 flex items-center justify-between text-xs">
                                    <span className="text-[10px] text-gray-400 font-mono">940 Downloads</span>
                                    <button className="text-[11px] bg-black text-white px-2.5 py-1 rounded hover:bg-neutral-800 flex items-center gap-1">
                                      <BookOpen size={11} />
                                      <span>Download PDF</span>
                                    </button>
                                  </div>
                                </div>
                              </div>
                            </div>
                          )}

                          {/* 7. PAGES & NAVIGATION SITE MAP */}
                          {activeTab === 'pages' && (
                            <div className="component-editor-box p-4 sm:p-6 rounded-xl border border-dashed border-gray-300 bg-gray-50/50 relative">
                              <span className="component-pill-tag">Pages & Navigation • 6 Active Routes</span>

                              <div className="flex flex-col sm:flex-row sm:items-center justify-between mb-4 gap-2">
                                <div>
                                  <h3 className="text-base sm:text-lg font-bold text-gray-900">Website Pages & Menu Structure</h3>
                                  <p className="text-xs text-gray-500">Configure top navigation bar, public sub-routes, and SEO indexing</p>
                                </div>
                                <button className="bg-black text-white px-3 py-1.5 rounded-lg text-xs font-semibold hover:bg-neutral-800 transition-colors self-start sm:self-auto flex items-center gap-1">
                                  <Plus size={13} />
                                  <span>Add Page</span>
                                </button>
                              </div>

                              <div className="space-y-2">
                                {[
                                  { name: "Home Page", path: "/", badge: "Main Landing", views: "3,420 visits" },
                                  { name: "Classroom Batches", path: "/batches", badge: "Live Seats", views: "1,890 visits" },
                                  { name: "Daily Attendance Portal", path: "/attendance", badge: "QR Punch", views: "920 visits" },
                                  { name: "Toppers Hall of Fame", path: "/toppers", badge: "Board Verified", views: "1,140 visits" },
                                  { name: "DPP & Study Materials", path: "/dpp", badge: "Lead Gate", views: "2,480 visits" },
                                  { name: "Admissions & Contact", path: "/contact", badge: "WhatsApp Sync", views: "810 visits" }
                                ].map((page, idx) => (
                                  <div key={idx} className="bg-white p-3 rounded-lg border border-gray-200 shadow-xs flex items-center justify-between text-xs">
                                    <div className="flex items-center gap-3">
                                      <div className="w-6 h-6 rounded bg-gray-100 flex items-center justify-center font-mono font-bold text-[10px] text-gray-600">
                                        {idx + 1}
                                      </div>
                                      <div>
                                        <div className="font-semibold text-gray-900 flex items-center gap-2">
                                          <span>{page.name}</span>
                                          <span className="font-mono text-gray-400 text-[11px]">{page.path}</span>
                                        </div>
                                        <div className="text-[11px] text-gray-400 mt-0.5">{page.views}</div>
                                      </div>
                                    </div>
                                    <div className="flex items-center gap-2">
                                      <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-gray-100 text-gray-800 font-medium">
                                        {page.badge}
                                      </span>
                                      <span className="text-[10px] font-semibold text-emerald-700 bg-emerald-50 px-2 py-0.5 rounded border border-emerald-200">
                                        Navbar Visible
                                      </span>
                                    </div>
                                  </div>
                                ))}
                              </div>
                            </div>
                          )}

                          {/* 8. SITE THEME & COLORS */}
                          {activeTab === 'theme' && (
                            <div className="component-editor-box p-4 sm:p-6 rounded-xl border border-dashed border-gray-300 bg-gray-50/50 relative">
                              <span className="component-pill-tag">ThemeStudio • Global Design Tokens</span>

                              <div className="mb-4">
                                <h3 className="text-base sm:text-lg font-bold text-gray-900">Institute Brand Colors & Typography</h3>
                                <p className="text-xs text-gray-500">Design tokens automatically inject into MongoDB layout document</p>
                              </div>

                              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                <div className="bg-white p-4 rounded-xl border border-gray-200 shadow-xs space-y-3">
                                  <h4 className="text-xs font-bold text-gray-900 uppercase tracking-wider text-gray-400">Primary Brand Palette</h4>
                                  <div className="grid grid-cols-4 gap-2">
                                    {[
                                      { name: "Apex Slate", hex: "#3f3f46", active: true },
                                      { name: "Emerald", hex: "#047857", active: false },
                                      { name: "Onyx Black", hex: "#111827", active: false },
                                      { name: "Crimson", hex: "#b91c1c", active: false }
                                    ].map((c, i) => (
                                      <div key={i} className={`p-2.5 rounded-lg border text-center cursor-pointer ${c.active ? 'border-black ring-1 ring-black' : 'border-gray-200 hover:border-gray-300'}`}>
                                        <div className="w-7 h-7 rounded-full mx-auto mb-1.5 shadow-xs" style={{ backgroundColor: c.hex }} />
                                        <div className="text-[11px] font-semibold text-gray-800">{c.name}</div>
                                        <div className="text-[9px] font-mono text-gray-400">{c.hex}</div>
                                      </div>
                                    ))}
                                  </div>
                                </div>

                                <div className="bg-white p-4 rounded-xl border border-gray-200 shadow-xs space-y-3">
                                  <h4 className="text-xs font-bold text-gray-900 uppercase tracking-wider text-gray-400">Typography & Corner Radius</h4>
                                  <div className="space-y-2 text-xs">
                                    <div className="flex items-center justify-between p-2 rounded bg-gray-50 border border-gray-200">
                                      <span className="font-medium text-gray-700">Headline Font</span>
                                      <span className="font-bold text-gray-900 font-mono">Plus Jakarta Sans</span>
                                    </div>
                                    <div className="flex items-center justify-between p-2 rounded bg-gray-50 border border-gray-200">
                                      <span className="font-medium text-gray-700">Body Font</span>
                                      <span className="font-bold text-gray-900 font-mono">Inter (System Fallback)</span>
                                    </div>
                                    <div className="flex items-center justify-between p-2 rounded bg-gray-50 border border-gray-200">
                                      <span className="font-medium text-gray-700">Corner Radius</span>
                                      <span className="font-bold text-gray-900 font-mono">12px (Smooth Modern)</span>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                          )}

                          {/* FACULTY DIRECTORY & SHOWCASE */}
                          {activeTab === 'faculty' && (
                            <div className="component-editor-box p-4 sm:p-6 rounded-xl border border-dashed border-gray-300 bg-gray-50/50 relative">
                              <span className="component-pill-tag">FacultyShowcase • Group 3 & 11</span>

                              <div className="mb-4">
                                <h3 className="text-base sm:text-lg font-bold text-gray-900">Senior Faculty & Subject Mentors</h3>
                                <p className="text-xs text-gray-500">Master educators from premier institutes with decades of coaching pedigree</p>
                              </div>

                              <div className="grid grid-cols-1 md:grid-cols-3 gap-3 text-left">
                                {[
                                  { name: "Dr. Arvind Mehta", role: "Head of Physics", edu: "Ph.D. IIT Delhi", exp: "18+ Yrs", rating: "4.95" },
                                  { name: "Prof. Sunita Deshmukh", role: "Organic Chemistry", edu: "M.Sc. AIIMS Gold Medalist", exp: "14+ Yrs", rating: "4.92" },
                                  { name: "Er. Vikram Rathore", role: "Advanced Mathematics", edu: "B.Tech IIT Kanpur", exp: "12+ Yrs", rating: "4.98" }
                                ].map((fac, idx) => (
                                  <div key={idx} className="bg-white p-4 rounded-xl border border-gray-200 shadow-xs flex flex-col justify-between">
                                    <div>
                                      <div className="flex items-center justify-between mb-2">
                                        <div className="w-8 h-8 rounded-full bg-neutral-900 text-white flex items-center justify-center text-xs font-bold font-mono">
                                          {fac.name.split(' ').map(n => n[0]).join('')}
                                        </div>
                                        <span className="text-[10px] font-mono text-amber-700 bg-amber-50 border border-amber-200 px-1.5 py-0.5 rounded font-semibold">
                                          Score {fac.rating}
                                        </span>
                                      </div>
                                      <h4 className="text-xs font-bold text-gray-900">{fac.name}</h4>
                                      <p className="text-[11px] text-gray-600 font-medium mb-1">{fac.role}</p>
                                      <p className="text-[10px] text-gray-400 font-mono">{fac.edu} • {fac.exp} Experience</p>
                                    </div>
                                    <div className="mt-3 pt-2.5 border-t border-gray-100 flex items-center justify-between text-[11px]">
                                      <span className="text-gray-500">Live Lectures</span>
                                      <button className="bg-gray-100 hover:bg-black hover:text-white px-2 py-0.5 rounded text-gray-800 font-medium transition-colors">
                                        View Schedule
                                      </button>
                                    </div>
                                  </div>
                                ))}
                              </div>
                            </div>
                          )}

                          {/* TEST SERIES & MCQ QUIZZES */}
                          {activeTab === 'tests' && (
                            <div className="component-editor-box p-4 sm:p-6 rounded-xl border border-dashed border-gray-300 bg-gray-50/50 relative">
                              <span className="component-pill-tag">TestSeriesPortal • Group 16 & 26</span>

                              <div className="mb-4">
                                <h3 className="text-base sm:text-lg font-bold text-gray-900">All India Mock Test Series & Weekly Quizzes</h3>
                                <p className="text-xs text-gray-500">Timed exam environment with instant percentile calculations and error diagnostics</p>
                              </div>

                              <div className="grid grid-cols-1 md:grid-cols-2 gap-3 text-left">
                                <div className="bg-white p-4 rounded-xl border border-gray-200 shadow-xs">
                                  <div className="flex items-center justify-between mb-2">
                                    <span className="text-[10px] font-mono font-bold bg-gray-100 text-gray-800 px-2 py-0.5 rounded">
                                      JEE Advanced Major 04
                                    </span>
                                    <span className="text-[10px] font-mono text-emerald-600 font-semibold">Active Window</span>
                                  </div>
                                  <h4 className="text-xs font-bold text-gray-900 mb-1">Rotational Dynamics & Thermo Mastery</h4>
                                  <p className="text-[11px] text-gray-500 mb-3">54 Questions • 180 Minutes • Negative Marking (-1)</p>
                                  <div className="flex items-center justify-between pt-2 border-t border-gray-100 text-xs">
                                    <span className="text-gray-500 font-mono text-[10px]">1,420 Submissions</span>
                                    <button className="bg-black text-white px-3 py-1 rounded text-xs font-medium hover:bg-neutral-800">
                                      Launch Test Simulator
                                    </button>
                                  </div>
                                </div>

                                <div className="bg-white p-4 rounded-xl border border-gray-200 shadow-xs">
                                  <div className="flex items-center justify-between mb-2">
                                    <span className="text-[10px] font-mono font-bold bg-gray-100 text-gray-800 px-2 py-0.5 rounded">
                                      NEET Full Mock 08
                                    </span>
                                    <span className="text-[10px] font-mono text-gray-500">Sunday 09:00 AM</span>
                                  </div>
                                  <h4 className="text-xs font-bold text-gray-900 mb-1">Complete Biology & Physical Chemistry</h4>
                                  <p className="text-[11px] text-gray-500 mb-3">180 Questions • 200 Minutes • OMR Grid Simulation</p>
                                  <div className="flex items-center justify-between pt-2 border-t border-gray-100 text-xs">
                                    <span className="text-gray-500 font-mono text-[10px]">Upcoming Exam</span>
                                    <button className="bg-white border border-gray-300 text-gray-800 px-3 py-1 rounded text-xs font-medium hover:bg-gray-50">
                                      Download Syllabus
                                    </button>
                                  </div>
                                </div>
                              </div>
                            </div>
                          )}

                          {/* STUDENT & PARENT REVIEWS */}
                          {activeTab === 'reviews' && (
                            <div className="component-editor-box p-4 sm:p-6 rounded-xl border border-dashed border-gray-300 bg-gray-50/50 relative">
                              <span className="component-pill-tag">TestimonialTicker • Group 55 Aceternity</span>

                              <div className="mb-4">
                                <h3 className="text-base sm:text-lg font-bold text-gray-900">Student & Parent Verified Testimonials</h3>
                                <p className="text-xs text-gray-500">National toppers and grateful parents sharing their genuine journey with Apex Academy</p>
                              </div>

                              <div className="grid grid-cols-1 md:grid-cols-3 gap-3 text-left">
                                {[
                                  { quote: "The daily DPPs and 1-on-1 doubt clinic were the biggest factor in securing AIR 24 in JEE Advanced.", author: "Rohit Sharma", label: "AIR 24 (IIT Bombay)" },
                                  { quote: "As a parent, receiving attendance alerts on WhatsApp gave us peace of mind throughout Class 12.", author: "Rajesh Kulkarni", label: "Parent of Sneha (AIIMS)" },
                                  { quote: "Weekly test analyses clearly pointed out my weak areas in Physics before board exams.", author: "Aarav Patel", label: "AIR 91 (IIT Kanpur)" }
                                ].map((rev, idx) => (
                                  <div key={idx} className="bg-white p-4 rounded-xl border border-gray-200 shadow-xs flex flex-col justify-between">
                                    <p className="text-xs text-gray-700 leading-relaxed italic mb-3">
                                      "{rev.quote}"
                                    </p>
                                    <div className="pt-2 border-t border-gray-100">
                                      <div className="text-xs font-bold text-gray-900">{rev.author}</div>
                                      <div className="text-[10px] text-gray-400 font-mono">{rev.label}</div>
                                    </div>
                                  </div>
                                ))}
                              </div>
                            </div>
                          )}

                          {/* FREE 3-DAY DEMO PASS */}
                          {activeTab === 'demo_pass' && (
                            <div className="component-editor-box p-4 sm:p-6 rounded-xl border border-dashed border-gray-300 bg-gray-50/50 relative">
                              <span className="component-pill-tag">DemoClassModal • Group 11</span>

                              <div className="mb-4">
                                <h3 className="text-base sm:text-lg font-bold text-gray-900">Free 3-Day Classroom Demo Pass</h3>
                                <p className="text-xs text-gray-500">Zero-cost trial pass issued to parents to experience live lectures and study material</p>
                              </div>

                              <div className="bg-white p-5 rounded-xl border border-gray-200 shadow-xs max-w-md mx-auto text-left">
                                <div className="border border-dashed border-gray-300 rounded-lg p-4 bg-gray-50/50 mb-3">
                                  <div className="flex items-center justify-between mb-2">
                                    <span className="text-[10px] font-mono font-bold uppercase bg-black text-white px-2 py-0.5 rounded">
                                      Trial Pass #APX-2026
                                    </span>
                                    <span className="text-[10px] text-emerald-600 font-semibold font-mono">100% Free</span>
                                  </div>
                                  <div className="text-sm font-bold text-gray-900">3-Day Full Classroom Access</div>
                                  <div className="text-xs text-gray-600 mt-1">Class 11 / 12 JEE & NEET Foundation Lectures</div>
                                  <div className="text-[10px] text-gray-400 font-mono mt-2">Valid at Jaipur Main Campus • Includes DPP Pack</div>
                                </div>
                                <button className="w-full bg-black text-white py-2 rounded-lg text-xs font-semibold hover:bg-neutral-800 transition-colors shadow-xs">
                                  Generate Instant Pass on WhatsApp
                                </button>
                              </div>
                            </div>
                          )}

                          {/* SYLLABUS PROGRESS TRACKER */}
                          {activeTab === 'syllabus' && (
                            <div className="component-editor-box p-4 sm:p-6 rounded-xl border border-dashed border-gray-300 bg-gray-50/50 relative">
                              <span className="component-pill-tag">SyllabusTracker • Group 14</span>

                              <div className="mb-4">
                                <h3 className="text-base sm:text-lg font-bold text-gray-900">Academic Syllabus Completion Tracker</h3>
                                <p className="text-xs text-gray-500">Live progress breakdown by subject for Class 11 and 12 target batches</p>
                              </div>

                              <div className="space-y-3 max-w-lg mx-auto text-left">
                                {[
                                  { subject: "Physics (Mechanics, Waves & Optics)", percent: 82, chapters: "14 of 17 Chapters" },
                                  { subject: "Chemistry (Physical & Organic)", percent: 74, chapters: "12 of 16 Chapters" },
                                  { subject: "Mathematics (Calculus & Vectors)", percent: 88, chapters: "15 of 17 Chapters" }
                                ].map((sub, idx) => (
                                  <div key={idx} className="bg-white p-3.5 rounded-xl border border-gray-200 shadow-xs">
                                    <div className="flex items-center justify-between text-xs font-semibold mb-1.5">
                                      <span className="text-gray-900">{sub.subject}</span>
                                      <span className="font-mono text-gray-600">{sub.percent}%</span>
                                    </div>
                                    <div className="w-full h-2 bg-gray-100 rounded-full overflow-hidden mb-1">
                                      <div className="h-full bg-black rounded-full" style={{ width: `${sub.percent}%` }} />
                                    </div>
                                    <div className="text-[10px] text-gray-400 font-mono">{sub.chapters} Complete</div>
                                  </div>
                                ))}
                              </div>
                            </div>
                          )}

                          {/* DEDICATED PARENT VIEW */}
                          {activeTab === 'parent_portal' && (
                            <div className="component-editor-box p-4 sm:p-6 rounded-xl border border-dashed border-gray-300 bg-gray-50/50 relative">
                              <span className="component-pill-tag">ParentExecutiveSummary • Group 33</span>

                              <div className="mb-4">
                                <h3 className="text-base sm:text-lg font-bold text-gray-900">Dedicated Parent Portal & Progress Curve</h3>
                                <p className="text-xs text-gray-500">Clear attendance health, mentor observations, and scheduled PTM consultations</p>
                              </div>

                              <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 text-left">
                                <div className="bg-white p-3.5 rounded-xl border border-gray-200 shadow-xs">
                                  <div className="text-[10px] text-gray-400 uppercase font-mono font-semibold">Attendance Health</div>
                                  <div className="text-xl font-bold text-gray-900 mt-1">96.4%</div>
                                  <div className="text-[10px] text-emerald-600 mt-0.5">Regular (No absent alerts)</div>
                                </div>
                                <div className="bg-white p-3.5 rounded-xl border border-gray-200 shadow-xs">
                                  <div className="text-[10px] text-gray-400 uppercase font-mono font-semibold">Latest Test Standing</div>
                                  <div className="text-xl font-bold text-gray-900 mt-1">Top 5%</div>
                                  <div className="text-[10px] text-gray-500 mt-0.5">Rank 4 in Batch Pinnacle</div>
                                </div>
                                <div className="bg-white p-3.5 rounded-xl border border-gray-200 shadow-xs">
                                  <div className="text-[10px] text-gray-400 uppercase font-mono font-semibold">Fee Installments</div>
                                  <div className="text-xl font-bold text-gray-900 mt-1">Up to Date</div>
                                  <div className="text-[10px] text-gray-400 font-mono mt-0.5">Next Due: 15 Jan 2027</div>
                                </div>
                              </div>
                            </div>
                          )}

                          {/* 10. WHATSAPP AUTOMATIONS */}
                          {activeTab === 'automations' && (
                            <div className="component-editor-box p-4 sm:p-6 rounded-xl border border-dashed border-gray-300 bg-gray-50/50 relative">
                              <span className="component-pill-tag">WhatsAppEngine • Real-Time Triggers</span>

                              <div className="mb-4">
                                <h3 className="text-base sm:text-lg font-bold text-gray-900">WhatsApp Notification Triggers & Alerts</h3>
                                <p className="text-xs text-gray-500">Automate real-time communications to students, parents, and institute directors</p>
                              </div>

                              <div className="space-y-3">
                                <div className="bg-white p-3.5 rounded-xl border border-gray-200 shadow-xs flex flex-col sm:flex-row sm:items-center justify-between gap-3 text-xs">
                                  <div>
                                    <div className="flex items-center gap-2 mb-1">
                                      <span className="w-2 h-2 rounded-full bg-emerald-500" />
                                      <span className="font-bold text-gray-900">Instant Student Entry Attendance Alert</span>
                                      <span className="text-[10px] font-mono bg-emerald-50 text-emerald-700 px-1.5 py-0.5 rounded">Active</span>
                                    </div>
                                    <p className="text-gray-500 text-[11px]">Template: "Dear Parent, your ward [Student Name] reached coaching safely at [Timestamp]."</p>
                                  </div>
                                  <span className="font-mono text-[11px] text-gray-400">224 sent today</span>
                                </div>

                                <div className="bg-white p-3.5 rounded-xl border border-gray-200 shadow-xs flex flex-col sm:flex-row sm:items-center justify-between gap-3 text-xs">
                                  <div>
                                    <div className="flex items-center gap-2 mb-1">
                                      <span className="w-2 h-2 rounded-full bg-emerald-500" />
                                      <span className="font-bold text-gray-900">Director Immediate Lead Notification</span>
                                      <span className="text-[10px] font-mono bg-emerald-50 text-emerald-700 px-1.5 py-0.5 rounded">Active</span>
                                    </div>
                                    <p className="text-gray-500 text-[11px]">Dispatches newly submitted enquiry with 1-click calling link to counselor WhatsApp.</p>
                                  </div>
                                  <span className="font-mono text-[11px] text-gray-400">0.8s latency</span>
                                </div>

                                <div className="bg-white p-3.5 rounded-xl border border-gray-200 shadow-xs flex flex-col sm:flex-row sm:items-center justify-between gap-3 text-xs">
                                  <div>
                                    <div className="flex items-center gap-2 mb-1">
                                      <span className="w-2 h-2 rounded-full bg-gray-1000" />
                                      <span className="font-bold text-gray-900">Weekend Mock Test Result Scorecard</span>
                                      <span className="text-[10px] font-mono bg-gray-100 text-gray-800 px-1.5 py-0.5 rounded">Scheduled Sunday</span>
                                    </div>
                                    <p className="text-gray-500 text-[11px]">Sends rank, percentile, and subject breakdown PDF directly to registered parent phone.</p>
                                  </div>
                                  <span className="font-mono text-[11px] text-gray-400">Weekly auto-run</span>
                                </div>
                              </div>
                            </div>
                          )}

                          {/* 11. PARENT INQUIRIES CRM */}
                          {activeTab === 'inquiries' && (
                            <div className="component-editor-box p-4 sm:p-6 rounded-xl border border-dashed border-gray-300 bg-gray-50/50 relative">
                              <span className="component-pill-tag">StudentLeadsCRM • MySQL student_leads</span>

                              <div className="flex flex-col sm:flex-row sm:items-center justify-between mb-4 gap-2">
                                <div>
                                  <h3 className="text-base sm:text-lg font-bold text-gray-900">Parent Admission Inquiries</h3>
                                  <p className="text-xs text-gray-500">Real-time leads captured from website demo forms and DPP download gates</p>
                                </div>
                                <span className="text-xs font-semibold text-gray-800 bg-gray-100 border border-gray-200 px-2.5 py-1 rounded-full">
                                  12 Inquiries Pending Action
                                </span>
                              </div>

                              <div className="space-y-2">
                                {[
                                  { parent: "Rajesh Sharma", student: "Aman Sharma", phone: "+91 98111 22334", course: "JEE Advanced 2026", status: "New Lead", time: "10 mins ago" },
                                  { parent: "Sunita Patel", student: "Kavya Patel", phone: "+91 98222 33445", course: "NEET Comprehensive 2027", status: "Demo Scheduled", time: "45 mins ago" },
                                  { parent: "Manoj Verma", student: "Aryan Verma", phone: "+91 98333 44556", course: "Class 10 Foundation", status: "Follow-Up", time: "2 hours ago" }
                                ].map((lead, i) => (
                                  <div key={i} className="bg-white p-3 rounded-lg border border-gray-200 shadow-xs flex flex-col sm:flex-row sm:items-center justify-between gap-3 text-xs">
                                    <div>
                                      <div className="flex items-center gap-2">
                                        <span className="font-bold text-gray-900">{lead.student}</span>
                                        <span className="text-gray-400 text-[11px]">(Parent: {lead.parent})</span>
                                        <span className="text-[10px] font-mono text-gray-500 bg-gray-100 px-1.5 py-0.2 rounded">{lead.course}</span>
                                      </div>
                                      <div className="text-[11px] text-gray-500 font-mono mt-0.5">{lead.phone} • {lead.time}</div>
                                    </div>
                                    <div className="flex items-center gap-2">
                                      <span className="text-[10px] font-semibold text-gray-800 bg-gray-100 px-2 py-0.5 rounded border border-gray-200">{lead.status}</span>
                                      <button className="bg-emerald-600 text-white px-2.5 py-1 rounded text-[11px] font-medium hover:bg-emerald-700 flex items-center gap-1">
                                        <PhoneCall size={11} />
                                        <span>WhatsApp</span>
                                      </button>
                                    </div>
                                  </div>
                                ))}
                              </div>
                            </div>
                          )}

                          {/* 12. STUDENT ENROLMENTS MANAGER */}
                          {activeTab === 'enrolments' && (
                            <div className="component-editor-box p-4 sm:p-6 rounded-xl border border-dashed border-gray-300 bg-gray-50/50 relative">
                              <span className="component-pill-tag">RosterManager • MySQL students</span>

                              <div className="flex flex-col sm:flex-row sm:items-center justify-between mb-4 gap-2">
                                <div>
                                  <h3 className="text-base sm:text-lg font-bold text-gray-900">Active Classroom Roster</h3>
                                  <p className="text-xs text-gray-500">Enrolled students synchronized across batches with fee and attendance tracking</p>
                                </div>
                                <span className="text-xs font-semibold text-gray-800 bg-gray-100 px-2.5 py-1 rounded-full">
                                  248 Total Enrolled Students
                                </span>
                              </div>

                              <div className="space-y-2">
                                {[
                                  { roll: "102", name: "Rahul Verma", batch: "JEE Advanced Batch 1", fees: "Paid (₹45,000)", attendance: "98.2%" },
                                  { roll: "107", name: "Ananya Sharma", batch: "NEET Comprehensive 2", fees: "Paid (₹48,000)", attendance: "96.0%" },
                                  { roll: "114", name: "Vikram Rao", batch: "Class 10 Foundation", fees: "Due (₹14,000)", attendance: "92.5%" }
                                ].map((std, i) => (
                                  <div key={i} className="bg-white p-3 rounded-lg border border-gray-200 shadow-xs flex items-center justify-between text-xs">
                                    <div className="flex items-center gap-3">
                                      <span className="font-mono font-bold text-gray-400 text-xs">#{std.roll}</span>
                                      <div>
                                        <span className="font-bold text-gray-900 block">{std.name}</span>
                                        <span className="text-gray-400 text-[11px]">{std.batch}</span>
                                      </div>
                                    </div>
                                    <div className="flex items-center gap-3">
                                      <span className="text-[11px] font-mono text-emerald-700 bg-emerald-50 px-2 py-0.5 rounded font-semibold">{std.attendance} Att.</span>
                                      <span className="text-[11px] font-medium text-gray-700">{std.fees}</span>
                                    </div>
                                  </div>
                                ))}
                              </div>
                            </div>
                          )}

                          {/* 13. FACULTY DOUBT CLINIC */}
                          {activeTab === 'doubt_clinic' && (
                            <div className="component-editor-box p-4 sm:p-6 rounded-xl border border-dashed border-gray-300 bg-gray-50/50 relative">
                              <span className="component-pill-tag">DoubtDesk • Daily Timetable</span>

                              <div className="mb-4">
                                <h3 className="text-base sm:text-lg font-bold text-gray-900">Faculty 1-on-1 Doubt Desk</h3>
                                <p className="text-xs text-gray-500">Students book afternoon problem-solving slots directly through the website portal</p>
                              </div>

                              <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
                                {[
                                  { faculty: "Dr. Rajesh Gupta", subject: "Physics HOD", timing: "04:00 PM - 05:30 PM", booked: "4/5 Students", topic: "Rotational Dynamics & Torque" },
                                  { faculty: "Prof. Sunita Mehta", subject: "Chemistry Expert", timing: "05:30 PM - 07:00 PM", booked: "3/5 Students", topic: "Organic Mechanisms & IUPAC" },
                                  { faculty: "Er. Vikas Jain", subject: "Maths Ex-IITian", timing: "07:00 PM - 08:30 PM", booked: "5/5 Full", topic: "Definite Integrals & Area" }
                                ].map((doc, i) => (
                                  <div key={i} className="bg-white p-3.5 rounded-xl border border-gray-200 shadow-xs flex flex-col justify-between text-left">
                                    <div>
                                      <div className="flex items-center justify-between mb-2">
                                        <span className="text-[10px] font-mono font-bold uppercase bg-gray-100 text-gray-800 px-2 py-0.5 rounded">{doc.subject}</span>
                                        <span className="text-[10px] font-mono text-gray-500">{doc.timing}</span>
                                      </div>
                                      <h4 className="text-xs font-bold text-gray-900 mb-1">{doc.faculty}</h4>
                                      <p className="text-[11px] text-gray-600 mb-2">Topic: {doc.topic}</p>
                                    </div>
                                    <div className="pt-2 border-t border-gray-100 flex items-center justify-between text-xs">
                                      <span className="text-[10px] font-mono font-semibold text-emerald-700">{doc.booked}</span>
                                      <button className="text-[11px] bg-black text-white px-2 py-1 rounded hover:bg-neutral-800">Queue</button>
                                    </div>
                                  </div>
                                ))}
                              </div>
                            </div>
                          )}

                          {/* 14. SEO & SOCIAL META CONFIGURATION */}
                          {activeTab === 'seo' && (
                            <div className="component-editor-box p-4 sm:p-6 rounded-xl border border-dashed border-gray-300 bg-gray-50/50 relative">
                              <span className="component-pill-tag">SEOEngine • Google Search & Social Ready</span>

                              <div className="mb-4">
                                <h3 className="text-base sm:text-lg font-bold text-gray-900">Search Engine Optimization & Social Sharing</h3>
                                <p className="text-xs text-gray-500">Configure how your coaching institute ranks on Google and displays on WhatsApp / social shares.</p>
                              </div>

                              <div className="space-y-3 font-sans text-xs text-left">
                                <div className="bg-white p-4 rounded-xl border border-gray-200 shadow-xs">
                                  <div className="text-[10px] font-mono text-gray-400 uppercase mb-1">Google Search Result Preview</div>
                                  <div className="text-zinc-900 font-semibold text-sm hover:underline cursor-pointer">
                                    Apex Science Academy — Premier Coaching for JEE & NEET
                                  </div>
                                  <div className="text-emerald-700 text-[11px] font-mono mt-0.5">https://apex-science.studyflow.in</div>
                                  <p className="text-gray-600 text-xs mt-1 leading-relaxed">
                                    Top faculty from IIT & AIIMS. Daily doubt resolution clinics, verified topper results, comprehensive DPP formula sheets, and live weekend test series.
                                  </p>
                                </div>

                                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                                  <div className="bg-white p-3.5 rounded-xl border border-gray-200 shadow-xs">
                                    <span className="text-[10px] font-mono text-gray-400 block mb-1">OPEN GRAPH SOCIAL CARD</span>
                                    <div className="text-xs font-semibold text-gray-800">Apex-Banner-OpenGraph.webp</div>
                                    <span className="text-[10px] bg-emerald-50 text-emerald-700 border border-emerald-200 font-mono px-1.5 py-0.5 rounded mt-2 inline-block">1200 x 630 px</span>
                                  </div>
                                  <div className="bg-white p-3.5 rounded-xl border border-gray-200 shadow-xs">
                                    <span className="text-[10px] font-mono text-gray-400 block mb-1">LOCAL SITEMAP & ROBOTS</span>
                                    <div className="text-xs font-semibold text-gray-800">Auto-Generated XML Sitemap</div>
                                    <span className="text-[10px] bg-gray-100 text-gray-700 border border-gray-200 font-mono px-1.5 py-0.5 rounded mt-2 inline-block">Indexed Weekly</span>
                                  </div>
                                </div>
                              </div>
                            </div>
                          )}

                          {/* 15. WEB ANALYTICS & TRAFFIC TRACKING */}
                          {activeTab === 'analytics' && (
                            <div className="component-editor-box p-4 sm:p-6 rounded-xl border border-dashed border-gray-300 bg-gray-50/50 relative">
                              <span className="component-pill-tag">AnalyticsHub • Privacy-First Analytics</span>

                              <div className="mb-4">
                                <h3 className="text-base sm:text-lg font-bold text-gray-900">Traffic & Lead Conversion Metrics</h3>
                                <p className="text-xs text-gray-500">Real-time visitor counts and conversion tracking for parent inquiries and batch applications.</p>
                              </div>

                              <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 text-left mb-4">
                                <div className="bg-white p-3.5 rounded-xl border border-gray-200 shadow-xs">
                                  <span className="text-[10px] font-mono text-gray-400 block">TOTAL VISITS</span>
                                  <div className="text-lg font-bold text-gray-900 mt-1">14,820</div>
                                  <span className="text-[10px] text-emerald-600 font-medium">+18% this month</span>
                                </div>
                                <div className="bg-white p-3.5 rounded-xl border border-gray-200 shadow-xs">
                                  <span className="text-[10px] font-mono text-gray-400 block">ENQUIRY RATE</span>
                                  <div className="text-lg font-bold text-gray-900 mt-1">12.4%</div>
                                  <span className="text-[10px] text-emerald-600 font-medium">Top quartile</span>
                                </div>
                                <div className="bg-white p-3.5 rounded-xl border border-gray-200 shadow-xs">
                                  <span className="text-[10px] font-mono text-gray-400 block">ACTIVE STUDENTS</span>
                                  <div className="text-lg font-bold text-gray-900 mt-1">248</div>
                                  <span className="text-[10px] text-gray-500 font-medium">Enrolled batch</span>
                                </div>
                                <div className="bg-white p-3.5 rounded-xl border border-gray-200 shadow-xs">
                                  <span className="text-[10px] font-mono text-gray-400 block">AVG TIME ON SITE</span>
                                  <div className="text-lg font-bold text-gray-900 mt-1">3m 42s</div>
                                  <span className="text-[10px] text-emerald-600 font-medium">High intent</span>
                                </div>
                              </div>
                            </div>
                          )}

                          {/* 15. SUBDOMAIN & DNS ROUTER */}
                          {activeTab === 'subdomain' && (
                            <div className="component-editor-box p-4 sm:p-6 rounded-xl border border-dashed border-gray-300 bg-gray-50/50 relative">
                              <span className="component-pill-tag">EdgeRouter • Multi-Tenant DNS</span>

                              <div className="mb-4">
                                <h3 className="text-base sm:text-lg font-bold text-gray-900">Custom Domain & Edge Subdomain Routing</h3>
                                <p className="text-xs text-gray-500">Every coaching center receives an instant production subdomain with automatic SSL certificates</p>
                              </div>

                              <div className="space-y-3">
                                <div className="bg-white p-4 rounded-xl border border-gray-200 shadow-xs flex flex-col sm:flex-row sm:items-center justify-between gap-3 text-xs">
                                  <div>
                                    <span className="text-[10px] font-mono text-gray-400 block mb-1">FREE INCLUDED SUBDOMAIN</span>
                                    <div className="font-bold text-gray-900 font-mono text-sm">apex-science.studyflow.in</div>
                                    <p className="text-gray-400 text-[11px] mt-0.5">Automated tenant resolution routed directly to MongoDB website_layouts</p>
                                  </div>
                                  <span className="text-xs font-semibold text-emerald-700 bg-emerald-50 px-3 py-1 rounded-full border border-emerald-200 self-start sm:self-auto">
                                    Live & Active
                                  </span>
                                </div>

                                <div className="bg-white p-4 rounded-xl border border-gray-200 shadow-xs flex flex-col sm:flex-row sm:items-center justify-between gap-3 text-xs">
                                  <div>
                                    <span className="text-[10px] font-mono text-gray-400 block mb-1">CUSTOM DOMAIN (WHITE-LABEL)</span>
                                    <div className="font-bold text-gray-900 font-mono text-sm">www.apexscienceacademy.com</div>
                                    <p className="text-gray-400 text-[11px] mt-0.5">CNAME pointed to edge.studyflow.in • SSL Auto-Renewed</p>
                                  </div>
                                  <span className="text-xs font-semibold text-gray-800 bg-gray-100 px-3 py-1 rounded-full border border-gray-200 self-start sm:self-auto">
                                    CNAME Verified
                                  </span>
                                </div>
                              </div>
                            </div>
                          )}
                          {activeTab === 'enquiry' && (
                            <div className="component-editor-box p-4 sm:p-6 rounded-xl border border-dashed border-gray-300 bg-gray-50/50 relative">
                              <span className="component-pill-tag">LeadCaptureForm • High Conversion</span>

                              <div className="mb-4">
                                <h3 className="text-base sm:text-lg font-bold text-gray-900">Student Enquiry & Demo Booking</h3>
                                <p className="text-xs text-gray-500">Directly writes lead to MySQL and fires WhatsApp notification to Director</p>
                              </div>

                              <div className="bg-white p-4 rounded-xl border border-gray-200 shadow-xs max-w-lg mx-auto">
                                <div className="space-y-3">
                                  <div>
                                    <label className="text-[11px] font-semibold text-gray-700 block mb-1">Student / Parent Name</label>
                                    <input
                                      type="text"
                                      readOnly
                                      value="Aryan Sharma"
                                      className="w-full px-3 py-1.5 border border-gray-300 rounded-lg text-xs bg-gray-50 text-gray-700"
                                    />
                                  </div>

                                  <div className="grid grid-cols-2 gap-2">
                                    <div>
                                      <label className="text-[11px] font-semibold text-gray-700 block mb-1">Parent WhatsApp</label>
                                      <input
                                        type="text"
                                        readOnly
                                        value="+91 98765 43210"
                                        className="w-full px-3 py-1.5 border border-gray-300 rounded-lg text-xs bg-gray-50 text-gray-700"
                                      />
                                    </div>
                                    <div>
                                      <label className="text-[11px] font-semibold text-gray-700 block mb-1">Target Exam</label>
                                      <input
                                        type="text"
                                        readOnly
                                        value="JEE Advanced 2026"
                                        className="w-full px-3 py-1.5 border border-gray-300 rounded-lg text-xs bg-gray-50 text-gray-700"
                                      />
                                    </div>
                                  </div>

                                  <button className="w-full bg-black text-white py-2 rounded-lg text-xs font-semibold hover:bg-neutral-800 transition-colors shadow-xs">
                                    Request Free Demo Class & Call Back
                                  </button>
                                </div>
                              </div>
                            </div>
                          )}
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
                </div>

                {/* Bottom IDE Status Bar */}
                <div className="pt-3 mt-4 border-t border-gray-100 flex flex-col sm:flex-row sm:items-center justify-between text-[11px] text-gray-400 gap-2">
                  <span className="flex items-center gap-1.5">
                    <span className="w-2 h-2 rounded-full bg-emerald-500" />
                    MongoDB Layout Document Synchronized
                  </span>
                  <span className="hidden sm:inline">Press <kbd className="px-1.5 py-0.5 bg-gray-100 border border-gray-200 rounded font-mono text-[10px]">Ctrl+S</kbd> to Save • Auto-deploy to subdomain</span>
                </div>

              </div>

              {/* Right IDE Sidebar: Component Properties Inspector */}
              <div className="w-full lg:w-56 bg-gray-50/70 border-t lg:border-t-0 lg:border-l border-gray-200 p-3 hidden xl:flex flex-col justify-between text-xs">
                <div>
                  <div className="flex items-center justify-between mb-3 px-1">
                    <span className="text-[10px] font-bold text-gray-400 uppercase tracking-wider flex items-center gap-1.5">
                      <Sliders size={11} />
                      Properties
                    </span>
                    <span className="text-[10px] bg-gray-100 text-gray-800 px-1.5 py-0.5 rounded font-mono font-medium">
                      Props
                    </span>
                  </div>

                  <div className="space-y-3">
                    <div>
                      <label className="text-[10px] text-gray-500 font-medium block mb-1">BLOCK IDENTIFIER</label>
                      <div className="bg-white border border-gray-200 rounded px-2 py-1 text-[11px] font-mono text-gray-700">
                        {COMPONENT_TABS.find(t => t.id === activeTab)?.id}_section
                      </div>
                    </div>

                    <div>
                      <label className="text-[10px] text-gray-500 font-medium block mb-1">LAYOUT MODE</label>
                      <div className="bg-white border border-gray-200 rounded px-2 py-1 text-[11px] text-gray-700 flex items-center justify-between">
                        <span>Responsive Grid</span>
                        <ChevronRight size={12} className="text-gray-400" />
                      </div>
                    </div>

                    <div>
                      <label className="text-[10px] text-gray-500 font-medium block mb-1">VISIBILITY</label>
                      <div className="flex items-center justify-between bg-white border border-gray-200 rounded px-2 py-1 text-[11px]">
                        <span className="text-emerald-700 font-medium">Published Live</span>
                        <Check size={12} className="text-emerald-600" />
                      </div>
                    </div>

                    <div>
                      <label className="text-[10px] text-gray-500 font-medium block mb-1">PERSISTENCE</label>
                      <div className="bg-white border border-gray-200 rounded p-2 text-[10px] text-gray-600 leading-tight">
                        Stored in MongoDB <code className="font-mono text-gray-800">website_layouts</code>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="pt-3 border-t border-gray-200/60">
                  <button
                    onClick={handleSaveDraft}
                    className="w-full bg-white border border-gray-300 hover:bg-gray-100 text-gray-800 font-medium py-1.5 rounded-lg text-[11px] transition-colors"
                  >
                    Inspect Component BSON
                  </button>
                </div>
              </div>

            </div>

            {/* Floating Dark Circle Widget Button at Bottom Right */}
            <button
              title="Open Live Website Editor Assistant"
              className="absolute bottom-3 right-3 sm:bottom-5 sm:right-5 w-10 h-10 sm:w-11 sm:h-11 bg-black hover:bg-neutral-800 text-white rounded-full flex items-center justify-center shadow-lg transition-all hover:scale-105 active:scale-95"
            >
              <MessageCircle size={17} />
            </button>

          </div>
        </MacbookScroll>

      </main>

      {/* Coaching-First Digital Features Section */}
      <FeaturesSection />

      {/* Website Creation Process Steps Section */}
      <ProcessStepsSection />

      {/* Growth & Dual-Layer Analytics Section */}
      <GrowthSection />

      {/* Pricing & Infrastructure Plans Section */}
      <PricingSection />

      {/* Minimal Footer */}
      <footer className="w-full border-t border-gray-100 py-6 text-center text-xs text-gray-400">
        © 2026 StudyFlow Inc. Hyperlocal Coaching & Tuition Class Engine. All rights reserved.
      </footer>
    </div>
  );
}

export default MinimalHero;