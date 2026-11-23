import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { 
  LayoutGrid, 
  Palette, 
  Layers, 
  MessageSquare, 
  FileText, 
  FolderKanban, 
  QrCode, 
  Award, 
  BookOpen, 
  PhoneCall, 
  Users, 
  Clock, 
  Globe, 
  ArrowLeft, 
  ArrowRight, 
  ChevronDown, 
  ChevronUp,
  GraduationCap,
  Settings,
  Search,
  Sliders,
  Plus,
  Check,
  CheckSquare,
  TrendingUp,
  Sparkles,
  ShieldCheck,
  Star,
  LogIn,
  UserPlus,
  KeyRound,
  Lock
} from "lucide-react";
import { cn } from "../../lib/utils";

// Icon mapping helper for dynamically added features
const ICON_MAP = {
  FileText,
  FolderKanban,
  QrCode,
  Award,
  BookOpen,
  PhoneCall,
  CheckSquare,
  TrendingUp,
  Sparkles,
  ShieldCheck,
  GraduationCap,
  Star,
  Clock,
  Users,
  LogIn,
  UserPlus,
  KeyRound,
  Lock,
  Globe
};

// Features catalog grouped strictly by categories specified in FEATURES.md
export const COACHING_FEATURES_CATALOG = [
  // Category 1: Academic & Courses (Groups 4, 14, 16)
  {
    id: 'batches',
    name: 'Live Batch Seats',
    category: 'academic',
    categoryLabel: 'Academic',
    badge: 'Live',
    desc: 'Classroom schedule with live seat cap',
    iconName: 'FolderKanban',
    tabId: 'batches'
  },
  {
    id: 'materials',
    name: 'DPP & Formula Hub',
    category: 'academic',
    categoryLabel: 'Academic',
    badge: 'Lead Gate',
    desc: 'Chapter notes & DPP formula locker',
    iconName: 'BookOpen',
    tabId: 'materials'
  },
  {
    id: 'tests',
    name: 'Test Series & MCQ Quizzes',
    category: 'academic',
    categoryLabel: 'Academic',
    badge: 'Timed Exam',
    desc: 'Timed online exam with score analytics',
    iconName: 'CheckSquare',
    tabId: 'tests'
  },
  {
    id: 'syllabus',
    name: 'Syllabus Progress Tracker',
    category: 'academic',
    categoryLabel: 'Academic',
    badge: 'Milestone',
    desc: 'Visual chapter completion progress bars',
    iconName: 'TrendingUp',
    tabId: 'syllabus'
  },

  // Category 2: Admissions & Lead Engine (Groups 2, 6, 11)
  {
    id: 'hero',
    name: 'Hero & Admissions Banner',
    category: 'admissions',
    categoryLabel: 'Admissions',
    badge: '1200px',
    desc: 'Headline banner with demo booking CTA',
    iconName: 'FileText',
    tabId: 'hero'
  },
  {
    id: 'enquiry',
    name: 'WhatsApp Lead Router',
    category: 'admissions',
    categoryLabel: 'Admissions',
    badge: 'Instant',
    desc: '1-click direct lead capture to phone',
    iconName: 'PhoneCall',
    tabId: 'enquiry'
  },
  {
    id: 'demo_pass',
    name: 'Free 3-Day Demo Pass',
    category: 'admissions',
    categoryLabel: 'Admissions',
    badge: 'Lead Pass',
    desc: 'Digital trial pass booking modal form',
    iconName: 'Sparkles',
    tabId: 'demo_pass'
  },
  {
    id: 'fee_plans',
    name: 'Fee Structure & Milestones',
    category: 'admissions',
    categoryLabel: 'Admissions',
    badge: 'Installments',
    desc: 'Installment breakdown with payment links',
    iconName: 'ShieldCheck',
    tabId: 'fee_plans'
  },

  // Category 3: Trust & Proof (Groups 3, 11, 55)
  {
    id: 'toppers',
    name: 'Verified Toppers Wall',
    category: 'trust',
    categoryLabel: 'Trust & Proof',
    badge: 'AIR 24',
    desc: 'Hall of fame & exam board ranks',
    iconName: 'Award',
    tabId: 'toppers'
  },
  {
    id: 'faculty',
    name: 'Faculty Directory & Mentors',
    category: 'trust',
    categoryLabel: 'Trust & Proof',
    badge: 'IIT / AIIMS',
    desc: 'Subject master profiles & track record',
    iconName: 'GraduationCap',
    tabId: 'faculty'
  },
  {
    id: 'reviews',
    name: 'Student & Parent Reviews',
    category: 'trust',
    categoryLabel: 'Trust & Proof',
    badge: '4.9 Star',
    desc: 'Marquee reviews & video testimonials',
    iconName: 'Star',
    tabId: 'reviews'
  },

  // Category 4: Operations & Student Care (Groups 13, 19, 33)
  {
    id: 'attendance',
    name: 'QR Attendance Portal',
    category: 'operations',
    categoryLabel: 'Operations',
    badge: '96%',
    desc: 'Daily punch-in with instant auto-alerts',
    iconName: 'QrCode',
    tabId: 'attendance'
  },
  {
    id: 'doubt_clinic',
    name: 'Faculty Doubt Clinic',
    category: 'operations',
    categoryLabel: 'Operations',
    badge: 'Daily',
    desc: '1-on-1 scheduled doubt resolution desk',
    iconName: 'Clock',
    tabId: 'doubt_clinic'
  },
  {
    id: 'parent_portal',
    name: 'Parent Executive Summary',
    category: 'operations',
    categoryLabel: 'Operations',
    badge: 'Executive',
    desc: 'Attendance & test score curve overview',
    iconName: 'Users',
    tabId: 'parent_portal'
  }
];

const CATEGORIES = [
  { id: 'all', label: 'All' },
  { id: 'academic', label: 'Academic' },
  { id: 'admissions', label: 'Admissions' },
  { id: 'trust', label: 'Trust & Proof' },
  { id: 'operations', label: 'Operations' }
];

export function GroupedSidebar({
  activeTab,
  onSelectTab,
  viewMode,
  onToggleViewMode,
  onAddFeature: externalOnAddFeature
}) {
  const [open, setOpen] = useState(true);
  const [isElementsDropdownOpen, setIsElementsDropdownOpen] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [justAddedId, setJustAddedId] = useState(null);

  // 3-Tier Site Structure Accordion Controls
  const [isWelcomingOpen, setIsWelcomingOpen] = useState(true);
  const [isAuthOpen, setIsAuthOpen] = useState(false);
  const [isSideNavbarEnabled, setIsSideNavbarEnabled] = useState(true);
  const [isSideNavbarOpen, setIsSideNavbarOpen] = useState(true);

  // Tier 1: Welcoming Pages Pack (STR-50-01)
  const welcomingPages = [
    { id: 'hero', name: 'Home (Admissions)', badge: '1200px', iconName: 'FileText' },
    { id: 'about', name: 'About Us', badge: 'Legacy', iconName: 'Users' },
    { id: 'batches', name: 'Courses & Batches', badge: 'Live', iconName: 'FolderKanban' },
    { id: 'toppers', name: 'Verified Toppers', badge: 'AIR 24', iconName: 'Award' },
    { id: 'enquiry', name: 'Contact & Admissions', badge: 'Instant', iconName: 'PhoneCall' }
  ];

  // Tier 2: Authentication Pages Pack (STR-50-02 & STR-50-03)
  const authPages = [
    { id: 'auth_login', name: 'Student & Teacher Login', badge: 'Portal', iconName: 'LogIn' },
    { id: 'auth_signup', name: 'Student Registration', badge: 'New', iconName: 'UserPlus' },
    { id: 'auth_forgot', name: 'Forgot Password (OTP)', badge: 'OTP', iconName: 'KeyRound' }
  ];

  // Tier 3: Side Navbar Portal Features (STR-50-04 & STR-50-05)
  // Activated and populated when checkbox is selected and features are added from Coaching Elements
  const [portalFeatures, setPortalFeatures] = useState([
    { id: 'attendance', name: 'QR Attendance Portal', badge: '96%', iconName: 'QrCode' },
    { id: 'materials', name: 'DPP & Formula Hub', badge: 'Lead Gate', iconName: 'BookOpen' }
  ]);

  const [expandedGroups, setExpandedGroups] = useState({
    components: true,
    operations: true,
    settings: true
  });

  const toggleGroup = (groupKey) => {
    setExpandedGroups((prev) => ({
      ...prev,
      [groupKey]: !prev[groupKey]
    }));
  };

  const handleItemClick = (tabId) => {
    if (onSelectTab) {
      onSelectTab(tabId);
    }
    if (viewMode === 'code' && typeof onToggleViewMode === 'function') {
      onToggleViewMode('visual');
    }
  };

  const handleAddFeature = (feature) => {
    // When adding a feature, automatically ensure Side Navbar is enabled
    setIsSideNavbarEnabled(true);
    setIsSideNavbarOpen(true);

    if (!portalFeatures.some(f => f.id === feature.id)) {
      setPortalFeatures(prev => [
        ...prev,
        {
          id: feature.id,
          name: feature.name,
          badge: feature.badge,
          iconName: feature.iconName
        }
      ]);
    }

    if (externalOnAddFeature) {
      externalOnAddFeature(feature);
    }

    setJustAddedId(feature.id);
    setTimeout(() => setJustAddedId(null), 1800);

    // Switch active view directly to newly added element
    handleItemClick(feature.tabId || feature.id);
  };

  const operationsTabs = ['inquiries', 'enrolments', 'doubt_clinic', 'parent_portal'];
  const settingsTabs = ['subdomain', 'seo', 'analytics'];

  const isWelcomingActive = welcomingPages.some(p => p.id === activeTab);
  const isAuthActive = authPages.some(p => p.id === activeTab);
  const isPortalFeatureActive = portalFeatures.some(f => f.id === activeTab);
  const isComponentActive = isWelcomingActive || isAuthActive || isPortalFeatureActive;

  const isOperationsActive = operationsTabs.includes(activeTab);
  const isSettingsActive = settingsTabs.includes(activeTab);

  const filteredFeatures = selectedCategory === 'all'
    ? COACHING_FEATURES_CATALOG
    : COACHING_FEATURES_CATALOG.filter(f => f.category === selectedCategory);

  return (
    <motion.aside
      className={cn(
        "h-full bg-white border-r border-gray-200 flex-shrink-0 transition-all duration-300 select-none flex flex-col justify-between py-2.5",
        open ? "w-72 px-3" : "w-16 px-2"
      )}
      animate={{ width: open ? 288 : 64 }}
      transition={{ duration: 0.25, ease: [0.16, 1, 0.3, 1] }}
    >
      <div className="flex flex-col flex-1 overflow-y-auto clean-scrollbar pr-0.5">
        
        {/* Header: Open vs Collapsed */}
        {open ? (
          <div className="flex items-center justify-between pb-2 mb-1.5 border-b border-gray-100">
            <div className="flex items-center gap-2 overflow-hidden">
              <div className="w-7 h-7 rounded-lg bg-black flex-shrink-0 flex items-center justify-center shadow-xs">
                <GraduationCap size={15} className="text-white" />
              </div>
              <div className="overflow-hidden whitespace-nowrap text-left">
                <div className="font-bold text-gray-900 text-xs tracking-tight">StudyFlow Studio</div>
                <div className="text-[9.5px] text-gray-400 font-medium">Coaching Website IDE</div>
              </div>
            </div>

            <button
              onClick={() => setOpen(false)}
              title="Collapse sidebar"
              className="w-6 h-6 border border-gray-200 rounded-md flex items-center justify-center text-gray-500 hover:text-black hover:border-gray-400 hover:bg-gray-50 transition-colors flex-shrink-0 cursor-pointer"
            >
              <ArrowLeft size={12} />
            </button>
          </div>
        ) : (
          <div className="flex flex-col items-center gap-1.5 pb-2 mb-1.5 border-b border-gray-100">
            <button
              onClick={() => setOpen(true)}
              title="Expand sidebar"
              className="w-9 h-9 rounded-xl bg-black flex items-center justify-center shadow-xs hover:opacity-90 transition-opacity cursor-pointer mx-auto"
            >
              <GraduationCap size={17} className="text-white" />
            </button>
            <button
              onClick={() => setOpen(true)}
              title="Expand sidebar"
              className="w-9 h-9 rounded-xl border border-gray-200 bg-white flex items-center justify-center text-gray-500 hover:text-black hover:border-gray-400 hover:bg-gray-50 transition-colors cursor-pointer mx-auto"
            >
              <ArrowRight size={14} />
            </button>
          </div>
        )}

        {/* Top Core Controls */}
        <div className="space-y-0.5 mb-1.5">
          <button
            onClick={() => handleItemClick('pages')}
            className={cn(
              "transition-colors",
              open
                ? "w-full flex items-center gap-2 px-2 py-1 rounded-md text-xs font-medium text-left"
                : "w-9 h-9 mx-auto flex items-center justify-center rounded-xl p-0",
              activeTab === 'pages'
                ? "bg-gray-100 text-black font-semibold shadow-xs"
                : "text-gray-700 hover:bg-gray-50 hover:text-black"
            )}
            title="Pages & Navigation"
          >
            <LayoutGrid size={15} className="flex-shrink-0 text-gray-700" />
            {open && <span className="truncate">Pages & Navigation</span>}
          </button>

          <button
            onClick={() => handleItemClick('theme')}
            className={cn(
              "transition-colors",
              open
                ? "w-full flex items-center gap-2 px-2 py-1 rounded-md text-xs font-medium text-left"
                : "w-9 h-9 mx-auto flex items-center justify-center rounded-xl p-0",
              activeTab === 'theme'
                ? "bg-gray-100 text-black font-semibold shadow-xs"
                : "text-gray-700 hover:bg-gray-50 hover:text-black"
            )}
            title="Site Theme & Colors"
          >
            <Palette size={15} className="flex-shrink-0 text-gray-700" />
            {open && <span className="truncate">Site Theme & Colors</span>}
          </button>

          {/* Coaching Elements Dropdown Selector */}
          <div className="w-full">
            <button
              onClick={() => {
                if (!open) {
                  setOpen(true);
                  setIsElementsDropdownOpen(true);
                } else {
                  setIsElementsDropdownOpen(prev => !prev);
                }
              }}
              className={cn(
                "transition-colors cursor-pointer",
                open
                  ? "w-full flex items-center justify-between px-2 py-1 rounded-md text-xs font-medium text-left"
                  : "w-9 h-9 mx-auto flex items-center justify-center rounded-xl p-0",
                isElementsDropdownOpen
                  ? "bg-gray-100 text-black font-semibold shadow-xs"
                  : "text-gray-700 hover:bg-gray-50 hover:text-black"
              )}
              title="Coaching Elements & Category Palette"
            >
              <div className="flex items-center gap-2 truncate">
                <Layers size={15} className="flex-shrink-0 text-gray-700" />
                {open && <span className="truncate">Coaching Elements</span>}
              </div>
              {open && (
                <div className="flex items-center gap-1">
                  <span className="text-[9px] font-mono bg-gray-200/80 text-gray-700 px-1 py-0.2 rounded font-semibold">
                    + Add
                  </span>
                  {isElementsDropdownOpen ? (
                    <ChevronUp size={13} className="text-gray-500" />
                  ) : (
                    <ChevronDown size={13} className="text-gray-500" />
                  )}
                </div>
              )}
            </button>

            {/* Expandable Dropdown Container for Adding Features by Category */}
            <AnimatePresence initial={false}>
              {open && isElementsDropdownOpen && (
                <motion.div
                  initial={{ opacity: 0, height: 0 }}
                  animate={{ opacity: 1, height: "auto" }}
                  exit={{ opacity: 0, height: 0 }}
                  transition={{ duration: 0.2 }}
                  className="bg-neutral-50 border border-gray-200 rounded-lg p-2 my-1.5 shadow-xs text-left"
                >
                  <div className="flex items-center justify-between pb-1.5 mb-1.5 border-b border-gray-200">
                    <span className="text-[10px] font-bold text-gray-800 uppercase tracking-wider">
                      Add by Category
                    </span>
                    <span className="text-[8.5px] font-mono text-gray-400">
                      FEATURES.md
                    </span>
                  </div>

                  {/* Category Filter Pills */}
                  <div className="flex items-center gap-1 overflow-x-auto pb-1.5 mb-1.5 clean-scrollbar">
                    {CATEGORIES.map(cat => (
                      <button
                        key={cat.id}
                        onClick={() => setSelectedCategory(cat.id)}
                        className={cn(
                          "px-2 py-0.5 rounded text-[10px] whitespace-nowrap transition-colors cursor-pointer",
                          selectedCategory === cat.id
                            ? "bg-black text-white font-semibold"
                            : "bg-white border border-gray-200 text-gray-600 hover:text-black hover:border-gray-300"
                        )}
                      >
                        {cat.label}
                      </button>
                    ))}
                  </div>

                  {/* Categorized Features List */}
                  <div className="space-y-1 max-h-56 overflow-y-auto clean-scrollbar pr-0.5">
                    {filteredFeatures.map(feat => {
                      const IconComp = ICON_MAP[feat.iconName] || Layers;
                      const isAlreadyInPortal = portalFeatures.some(f => f.id === feat.id);
                      const isRecentlyAdded = justAddedId === feat.id;

                      return (
                        <div
                          key={feat.id}
                          className="bg-white border border-gray-200 rounded-md p-1.5 flex items-center justify-between gap-1.5 hover:border-gray-400 transition-colors"
                        >
                          <div className="flex items-start gap-1.5 min-w-0">
                            <div className="w-5 h-5 rounded bg-gray-100 flex items-center justify-center text-gray-700 flex-shrink-0 mt-0.5">
                              <IconComp size={11} />
                            </div>
                            <div className="min-w-0">
                              <div className="flex items-center gap-1">
                                <span className="text-[10.5px] font-bold text-gray-900 truncate">
                                  {feat.name}
                                </span>
                                <span className="text-[8px] font-mono bg-gray-100 text-gray-600 px-1 rounded flex-shrink-0">
                                  {feat.badge}
                                </span>
                              </div>
                              <p className="text-[9px] text-gray-500 leading-tight truncate">
                                {feat.desc}
                              </p>
                            </div>
                          </div>

                          <button
                            onClick={() => handleAddFeature(feat)}
                            className={cn(
                              "px-2 py-1 rounded text-[9.5px] font-semibold flex items-center gap-1 transition-colors flex-shrink-0 cursor-pointer",
                              isRecentlyAdded
                                ? "bg-emerald-600 text-white"
                                : isAlreadyInPortal
                                  ? "bg-gray-100 text-gray-700 hover:bg-black hover:text-white"
                                  : "bg-black text-white hover:bg-neutral-800"
                            )}
                            title={isAlreadyInPortal ? "View active in Side Navbar" : "Add to Side Navbar"}
                          >
                            {isRecentlyAdded ? (
                              <>
                                <Check size={10} />
                                <span>Added</span>
                              </>
                            ) : isAlreadyInPortal ? (
                              <span>View</span>
                            ) : (
                              <>
                                <Plus size={10} />
                                <span>Add</span>
                              </>
                            )}
                          </button>
                        </div>
                      );
                    })}
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>

          <button
            onClick={() => handleItemClick('automations')}
            className={cn(
              "transition-colors",
              open
                ? "w-full flex items-center gap-2 px-2 py-1 rounded-md text-xs font-medium text-left"
                : "w-9 h-9 mx-auto flex items-center justify-center rounded-xl p-0",
              activeTab === 'automations'
                ? "bg-gray-100 text-black font-semibold shadow-xs"
                : "text-gray-700 hover:bg-gray-50 hover:text-black"
            )}
            title="WhatsApp Alerts"
          >
            <MessageSquare size={15} className="flex-shrink-0 text-emerald-600" />
            {open && (
              <span className="flex items-center justify-between w-full">
                <span className="truncate">WhatsApp Alerts</span>
                <span className="text-[8.5px] bg-emerald-50 text-emerald-700 border border-emerald-200 font-mono px-1 rounded">
                  Active
                </span>
              </span>
            )}
          </button>
        </div>

        {/* Subtle Horizontal Divider Line */}
        <div className="h-px bg-gray-200/70 my-1 mx-1" />

        {/* Group 1: 3-Tier Site Structure (Welcoming Pages -> Auth Pages -> Side Navbar Features) */}
        <div className="mb-1">
          {open ? (
            <button
              onClick={() => toggleGroup("components")}
              className="w-full flex items-center justify-between px-2 py-1 text-xs font-semibold text-gray-900 hover:text-black transition-colors"
            >
              <span className="flex items-center gap-2 text-gray-800">
                <Layers size={14} className="text-gray-700" />
                Site Structure
              </span>
              <div className="flex items-center gap-1.5">
                <span className="text-[9px] font-mono text-gray-400">
                  3 Tiers
                </span>
                {expandedGroups.components ? (
                  <ChevronUp size={13} className="text-gray-500" />
                ) : (
                  <ChevronDown size={13} className="text-gray-500" />
                )}
              </div>
            </button>
          ) : (
            <button
              onClick={() => {
                setOpen(true);
                setExpandedGroups(prev => ({ ...prev, components: true }));
              }}
              className={cn(
                "w-9 h-9 mx-auto flex items-center justify-center rounded-xl transition-colors cursor-pointer p-0",
                isComponentActive
                  ? "bg-gray-100 text-black font-semibold shadow-xs"
                  : "text-gray-600 hover:bg-gray-50 hover:text-black"
              )}
              title="Site Structure"
            >
              <Layers size={16} className={isComponentActive ? "text-black" : "text-gray-700"} />
            </button>
          )}

          <AnimatePresence initial={false}>
            {open && expandedGroups.components && (
              <motion.div
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: "auto" }}
                exit={{ opacity: 0, height: 0 }}
                transition={{ duration: 0.2 }}
                className="border-l border-gray-200 ml-3.5 pl-2 space-y-1.5 mt-1"
              >
                
                {/* Tier 1: Welcoming Pages (STR-50-01) */}
                <div className="space-y-0.5">
                  <button
                    onClick={() => setIsWelcomingOpen(!isWelcomingOpen)}
                    className="w-full flex items-center justify-between px-1 py-0.5 text-[10.5px] font-bold text-gray-700 hover:text-black"
                  >
                    <span className="flex items-center gap-1">
                      <Globe size={11} className="text-gray-500" />
                      <span>Welcoming Pages</span>
                    </span>
                    {isWelcomingOpen ? <ChevronUp size={11} /> : <ChevronDown size={11} />}
                  </button>

                  {isWelcomingOpen && (
                    <div className="space-y-0.5 pl-1.5 border-l border-gray-100 ml-1">
                      {welcomingPages.map((page) => {
                        const IconComp = ICON_MAP[page.iconName] || FileText;
                        const isActive = activeTab === page.id;
                        return (
                          <button
                            key={page.id}
                            onClick={() => handleItemClick(page.id)}
                            className={cn(
                              "w-full flex items-center justify-between px-1.5 py-1 rounded-md text-[11px] transition-colors text-left cursor-pointer",
                              isActive
                                ? "text-black font-semibold bg-gray-100"
                                : "text-gray-600 hover:text-black hover:bg-gray-50"
                            )}
                          >
                            <span className="flex items-center gap-1.5 truncate">
                              <IconComp size={11} className="text-gray-500 flex-shrink-0" />
                              <span className="truncate">{page.name}</span>
                            </span>
                            <span className="text-[8px] font-mono text-gray-400 bg-gray-50 px-1 rounded border border-gray-100">
                              {page.badge}
                            </span>
                          </button>
                        );
                      })}
                    </div>
                  )}
                </div>

                {/* Tier 2: Authentication Pages (STR-50-02 & STR-50-03) */}
                <div className="space-y-0.5 pt-0.5">
                  <button
                    onClick={() => setIsAuthOpen(!isAuthOpen)}
                    className="w-full flex items-center justify-between px-1 py-0.5 text-[10.5px] font-bold text-gray-700 hover:text-black"
                  >
                    <span className="flex items-center gap-1">
                      <ShieldCheck size={11} className="text-gray-500" />
                      <span>Auth & Login Pages</span>
                    </span>
                    {isAuthOpen ? <ChevronUp size={11} /> : <ChevronDown size={11} />}
                  </button>

                  {isAuthOpen && (
                    <div className="space-y-0.5 pl-1.5 border-l border-gray-100 ml-1">
                      {authPages.map((auth) => {
                        const IconComp = ICON_MAP[auth.iconName] || LogIn;
                        const isActive = activeTab === auth.id;
                        return (
                          <button
                            key={auth.id}
                            onClick={() => handleItemClick(auth.id)}
                            className={cn(
                              "w-full flex items-center justify-between px-1.5 py-1 rounded-md text-[11px] transition-colors text-left cursor-pointer",
                              isActive
                                ? "text-black font-semibold bg-gray-100"
                                : "text-gray-600 hover:text-black hover:bg-gray-50"
                            )}
                          >
                            <span className="flex items-center gap-1.5 truncate">
                              <IconComp size={11} className="text-gray-500 flex-shrink-0" />
                              <span className="truncate">{auth.name}</span>
                            </span>
                            <span className="text-[8px] font-mono text-gray-400 bg-gray-50 px-1 rounded border border-gray-100">
                              {auth.badge}
                            </span>
                          </button>
                        );
                      })}
                    </div>
                  )}
                </div>

                {/* Tier 3: Side Navbar Navigation (STR-50-04 & STR-50-05) with Selection Checkbox */}
                <div className="space-y-1 pt-0.5">
                  <div className="flex items-center justify-between px-1.5 py-1 bg-gray-50 border border-gray-200 rounded-md">
                    <label className="flex items-center gap-1.5 cursor-pointer text-[10.5px] font-bold text-gray-800">
                      <input
                        type="checkbox"
                        checked={isSideNavbarEnabled}
                        onChange={(e) => {
                          const checked = e.target.checked;
                          setIsSideNavbarEnabled(checked);
                          if (checked) setIsSideNavbarOpen(true);
                        }}
                        className="w-3.5 h-3.5 rounded border-gray-300 text-black accent-black cursor-pointer"
                      />
                      <span>Side Navbar</span>
                    </label>
                    <div className="flex items-center gap-1">
                      <span className={cn(
                        "text-[8px] font-mono px-1 rounded font-semibold",
                        isSideNavbarEnabled
                          ? "bg-emerald-50 text-emerald-700 border border-emerald-200"
                          : "bg-gray-200 text-gray-500"
                      )}>
                        {isSideNavbarEnabled ? "Active" : "Off"}
                      </span>
                      {isSideNavbarEnabled && (
                        <button
                          onClick={() => setIsSideNavbarOpen(!isSideNavbarOpen)}
                          className="text-gray-400 hover:text-black ml-0.5 cursor-pointer"
                        >
                          {isSideNavbarOpen ? <ChevronUp size={11} /> : <ChevronDown size={11} />}
                        </button>
                      )}
                    </div>
                  </div>

                  {/* Portal Features Section inside Side Navbar (Visible ONLY when Checkbox is Checked) */}
                  {isSideNavbarEnabled ? (
                    isSideNavbarOpen && (
                      <div className="space-y-0.5 pl-1.5 border-l border-gray-200 ml-1">
                        <div className="flex items-center justify-between text-[9px] font-mono text-gray-400 px-1 mb-0.5">
                          <span>PORTAL FEATURES ({portalFeatures.length})</span>
                          <span>Internal Tools</span>
                        </div>

                        {portalFeatures.map((feat) => {
                          const IconComp = ICON_MAP[feat.iconName] || Layers;
                          const isActive = activeTab === feat.id;

                          return (
                            <button
                              key={feat.id}
                              onClick={() => handleItemClick(feat.id)}
                              className={cn(
                                "w-full flex items-center justify-between px-1.5 py-1 rounded-md text-[11px] transition-colors text-left cursor-pointer",
                                isActive
                                  ? "text-black font-semibold bg-gray-100"
                                  : "text-gray-600 hover:text-black hover:bg-gray-50"
                              )}
                            >
                              <span className="flex items-center gap-1.5 truncate">
                                <IconComp size={11} className="text-gray-500 flex-shrink-0" />
                                <span className="truncate">{feat.name}</span>
                              </span>
                              <span className="text-[8px] font-mono text-gray-500 px-1 rounded bg-gray-100">
                                {feat.badge}
                              </span>
                            </button>
                          );
                        })}

                        {/* Quick Trigger to Open Coaching Elements Palette */}
                        <button
                          onClick={() => setIsElementsDropdownOpen(true)}
                          className="w-full flex items-center justify-center gap-1 py-1 mt-1 rounded text-[9.5px] font-medium text-gray-500 border border-dashed border-gray-300 hover:border-black hover:text-black transition-colors cursor-pointer"
                        >
                          <Plus size={10} />
                          <span>+ Add Feature via Coaching Elements</span>
                        </button>
                      </div>
                    )
                  ) : (
                    <div className="px-2 py-1.5 bg-gray-50 border border-dashed border-gray-200 rounded text-[9.5px] text-gray-400 text-center leading-tight">
                      Check box above to activate internal Side Navbar and mount portal features.
                    </div>
                  )}
                </div>

              </motion.div>
            )}
          </AnimatePresence>
        </div>

        {/* Group 2: Coaching Operations & CRM */}
        <div className="mb-1">
          {open ? (
            <button
              onClick={() => toggleGroup("operations")}
              className="w-full flex items-center justify-between px-2 py-1 text-xs font-semibold text-gray-900 hover:text-black transition-colors"
            >
              <span className="flex items-center gap-2 text-gray-800">
                <Users size={14} className="text-gray-700" />
                Operations & CRM
              </span>
              {expandedGroups.operations ? <ChevronUp size={13} className="text-gray-500" /> : <ChevronDown size={13} className="text-gray-500" />}
            </button>
          ) : (
            <button
              onClick={() => {
                setOpen(true);
                setExpandedGroups(prev => ({ ...prev, operations: true }));
              }}
              className={cn(
                "w-9 h-9 mx-auto flex items-center justify-center rounded-xl transition-colors cursor-pointer p-0",
                isOperationsActive
                  ? "bg-gray-100 text-black font-semibold shadow-xs"
                  : "text-gray-600 hover:bg-gray-50 hover:text-black"
              )}
              title="Operations & CRM"
            >
              <Users size={16} className={isOperationsActive ? "text-black" : "text-gray-700"} />
            </button>
          )}

          <AnimatePresence initial={false}>
            {open && expandedGroups.operations && (
              <motion.div
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: "auto" }}
                exit={{ opacity: 0, height: 0 }}
                transition={{ duration: 0.2 }}
                className="border-l border-gray-200 ml-3.5 pl-2 space-y-0.5 mt-0.5"
              >
                <button
                  onClick={() => handleItemClick('inquiries')}
                  className={cn(
                    "w-full flex items-center justify-between px-1.5 py-1 rounded-md text-[11px] transition-colors text-left",
                    activeTab === 'inquiries'
                      ? "text-black font-semibold bg-gray-100"
                      : "text-gray-600 hover:text-black hover:bg-gray-50"
                  )}
                >
                  <span className="flex items-center gap-1.5 truncate">
                    <PhoneCall size={12} className="text-gray-500 flex-shrink-0" />
                    <span className="truncate">Parent Inquiries</span>
                  </span>
                  <span className="text-[8.5px] font-mono bg-gray-200 text-gray-700 px-1 rounded font-semibold">12 New</span>
                </button>

                <button
                  onClick={() => handleItemClick('enrolments')}
                  className={cn(
                    "w-full flex items-center justify-between px-1.5 py-1 rounded-md text-[11px] transition-colors text-left",
                    activeTab === 'enrolments'
                      ? "text-black font-semibold bg-gray-100"
                      : "text-gray-600 hover:text-black hover:bg-gray-50"
                  )}
                >
                  <span className="flex items-center gap-1.5 truncate">
                    <FolderKanban size={12} className="text-gray-500 flex-shrink-0" />
                    <span className="truncate">Student Enrolments</span>
                  </span>
                  <span className="text-[8.5px] font-mono text-gray-400">248 Std</span>
                </button>

                <button
                  onClick={() => handleItemClick('doubt_clinic')}
                  className={cn(
                    "w-full flex items-center justify-between px-1.5 py-1 rounded-md text-[11px] transition-colors text-left",
                    activeTab === 'doubt_clinic'
                      ? "text-black font-semibold bg-gray-100"
                      : "text-gray-600 hover:text-black hover:bg-gray-50"
                  )}
                >
                  <span className="flex items-center gap-1.5 truncate">
                    <Clock size={12} className="text-gray-500 flex-shrink-0" />
                    <span className="truncate">Faculty Doubt Clinic</span>
                  </span>
                  <span className="text-[8.5px] font-mono text-gray-400">Daily</span>
                </button>
              </motion.div>
            )}
          </AnimatePresence>
        </div>

        {/* Group 3: Settings & Domain */}
        <div className="mb-1">
          {open ? (
            <button
              onClick={() => toggleGroup("settings")}
              className="w-full flex items-center justify-between px-2 py-1 text-xs font-semibold text-gray-900 hover:text-black transition-colors"
            >
              <span className="flex items-center gap-2 text-gray-800">
                <Settings size={14} className="text-gray-700" />
                Settings & Domain
              </span>
              {expandedGroups.settings ? <ChevronUp size={13} className="text-gray-500" /> : <ChevronDown size={13} className="text-gray-500" />}
            </button>
          ) : (
            <button
              onClick={() => {
                setOpen(true);
                setExpandedGroups(prev => ({ ...prev, settings: true }));
              }}
              className={cn(
                "w-9 h-9 mx-auto flex items-center justify-center rounded-xl transition-colors cursor-pointer p-0",
                isSettingsActive
                  ? "bg-gray-100 text-black font-semibold shadow-xs"
                  : "text-gray-600 hover:bg-gray-50 hover:text-black"
              )}
              title="Settings & Domain"
            >
              <Settings size={16} className={isSettingsActive ? "text-black" : "text-gray-700"} />
            </button>
          )}

          <AnimatePresence initial={false}>
            {open && expandedGroups.settings && (
              <motion.div
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: "auto" }}
                exit={{ opacity: 0, height: 0 }}
                transition={{ duration: 0.2 }}
                className="border-l border-gray-200 ml-3.5 pl-2 space-y-0.5 mt-0.5"
              >
                <button
                  onClick={() => handleItemClick('subdomain')}
                  className={cn(
                    "w-full flex items-center justify-between px-1.5 py-1 rounded-md text-[11px] transition-colors text-left",
                    activeTab === 'subdomain'
                      ? "text-black font-semibold bg-gray-100"
                      : "text-gray-600 hover:text-black hover:bg-gray-50"
                  )}
                >
                  <span className="flex items-center gap-1.5 truncate">
                    <Globe size={12} className="text-gray-500 flex-shrink-0" />
                    <span className="truncate">Domain & Subdomain</span>
                  </span>
                  <span className="text-[8.5px] font-mono text-gray-400">apex.edu</span>
                </button>

                <button
                  onClick={() => handleItemClick('seo')}
                  className={cn(
                    "w-full flex items-center justify-between px-1.5 py-1 rounded-md text-[11px] transition-colors text-left",
                    activeTab === 'seo'
                      ? "text-black font-semibold bg-gray-100"
                      : "text-gray-600 hover:text-black hover:bg-gray-50"
                  )}
                >
                  <span className="flex items-center gap-1.5 truncate">
                    <Search size={12} className="text-gray-500 flex-shrink-0" />
                    <span className="truncate">SEO & Social Meta</span>
                  </span>
                  <span className="text-[8.5px] font-mono text-emerald-600 font-semibold">Ready</span>
                </button>

                <button
                  onClick={() => handleItemClick('analytics')}
                  className={cn(
                    "w-full flex items-center justify-between px-1.5 py-1 rounded-md text-[11px] transition-colors text-left",
                    activeTab === 'analytics'
                      ? "text-black font-semibold bg-gray-100"
                      : "text-gray-600 hover:text-black hover:bg-gray-50"
                  )}
                >
                  <span className="flex items-center gap-1.5 truncate">
                    <Sliders size={12} className="text-gray-500 flex-shrink-0" />
                    <span className="truncate">Analytics & Tracking</span>
                  </span>
                  <span className="text-[8.5px] font-mono text-gray-700 font-semibold">Active</span>
                </button>
              </motion.div>
            )}
          </AnimatePresence>
        </div>

      </div>

      {/* Footer System Status */}
      {open ? (
        <div className="pt-2 border-t border-gray-100 text-[9.5px] text-gray-400 font-mono flex items-center justify-between">
          <span>StudyFlow Studio</span>
          <span className="flex items-center gap-1 text-emerald-600 font-sans font-medium">
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
            Live Sync Active
          </span>
        </div>
      ) : (
        <div className="pt-2 border-t border-gray-100 flex items-center justify-center" title="Live Sync Active">
          <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
        </div>
      )}
    </motion.aside>
  );
}

export default GroupedSidebar;
