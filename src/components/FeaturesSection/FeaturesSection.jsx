import React, { useEffect, useRef, useState, useCallback } from "react";
import { cn } from "../../lib/utils";
import globePoints from "./globePoints.json";
import { motion } from "framer-motion";
import {
  CheckCircle2,
  QrCode,
  ArrowUpRight,
  MessageSquare,
  Sparkles,
  Send,
  Users,
  ShieldCheck,
  Database,
  Layers,
  Code2,
  ExternalLink,
  Laptop
} from "lucide-react";

export function FeaturesSection() {
  const features = [
    {
      title: "Visual Coaching Website IDE",
      description:
        "Design, customize, and live-preview your coaching institute's website with real-time MongoDB schema sync, drag-and-drop coaching components, and zero coding required.",
      skeleton: <SkeletonOne />,
      className:
        "col-span-1 lg:col-span-4 border-b lg:border-r border-neutral-200 dark:border-neutral-800",
    },
    {
      title: "Verified Topper & Faculty Showcase",
      description:
        "Highlight national ranks, board percentiles, and faculty credentials with authentic verification badges that build trust with parents.",
      skeleton: <SkeletonTwo />,
      className:
        "border-b col-span-1 lg:col-span-2 border-neutral-200 dark:border-neutral-800",
    },
    {
      title: "Instant WhatsApp Admission Router",
      description:
        "Route demo bookings, syllabus downloads, and admission queries directly to the director or counselor on WhatsApp within 120ms.",
      skeleton: <SkeletonThree />,
      className:
        "col-span-1 lg:col-span-3 border-b lg:border-b-0 lg:border-r border-neutral-200 dark:border-neutral-800",
    },
    {
      title: "Deploy in seconds",
      description:
        "Publish your academy website to your branded subdomain (your-institute.studyflow.in) or custom domain with automated SSL, edge CDN caching, and instant cloud provisioning.",
      skeleton: <SkeletonFour />,
      className: "col-span-1 lg:col-span-3 border-b lg:border-none",
    },
  ];

  return (
    <section className="relative z-20 mx-auto w-full max-w-[96vw] lg:max-w-[93vw] xl:max-w-[90vw] py-16 lg:py-28 px-2 sm:px-4 lg:px-6">
      <div className="px-4 text-center">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-neutral-200 bg-neutral-50 text-xs font-medium text-neutral-700 mb-4 shadow-sm">
          <Sparkles size={13} className="text-neutral-900" />
          <span>Coaching-First Digital Infrastructure</span>
        </div>

        <h2 className="mx-auto max-w-4xl text-center text-3xl font-bold tracking-tight text-neutral-950 sm:text-4xl lg:text-5xl lg:leading-tight">
          Engineered Exclusively for Coaching Institutes
        </h2>

        <p className="mx-auto my-4 max-w-2xl text-center text-sm font-normal text-neutral-600 sm:text-base leading-relaxed">
          From visual website editing to automated WhatsApp lead routing and live student batch management, StudyFlow gives tuition academies the entire digital infrastructure in one unified platform.
        </p>
      </div>

      <div className="relative mt-12 sm:mt-16 w-full">
        <div className="grid grid-cols-1 rounded-none border border-neutral-200/90 bg-white shadow-sm lg:grid-cols-6 overflow-hidden dark:border-neutral-800 dark:bg-neutral-950">
          {features.map((feature) => (
            <FeatureCard key={feature.title} className={feature.className}>
              <FeatureTitle>{feature.title}</FeatureTitle>
              <FeatureDescription>{feature.description}</FeatureDescription>
              <div className="h-full w-full">{feature.skeleton}</div>
            </FeatureCard>
          ))}
        </div>
      </div>
    </section>
  );
}

const FeatureCard = ({ children, className }) => {
  return (
    <div className={cn("relative flex flex-col overflow-hidden p-6 sm:p-8 bg-white dark:bg-neutral-950", className)}>
      {children}
    </div>
  );
};

const FeatureTitle = ({ children }) => {
  return (
    <h3 className="text-left text-lg font-semibold tracking-tight text-neutral-900 md:text-xl dark:text-neutral-100">
      {children}
    </h3>
  );
};

const FeatureDescription = ({ children }) => {
  return (
    <p className="my-2.5 max-w-xl text-left text-xs font-normal leading-relaxed text-neutral-500 sm:text-sm dark:text-neutral-400">
      {children}
    </p>
  );
};

/* Skeleton 1: Visual Coaching Website IDE Canvas */
export const SkeletonOne = () => {
  return (
    <div className="relative flex h-full min-h-[300px] sm:min-h-[340px] flex-col justify-end pt-6">
      <div className="group mx-auto w-full rounded-xl border border-neutral-200 bg-neutral-50/70 p-3 sm:p-4 shadow-xl transition-all duration-300 hover:shadow-2xl dark:border-neutral-800 dark:bg-neutral-900">
        
        {/* Editor Top Bar */}
        <div className="flex items-center justify-between border-b border-neutral-200/70 pb-3 mb-3 text-xs dark:border-neutral-800">
          <div className="flex items-center gap-2">
            <span className="w-2.5 h-2.5 rounded-full bg-neutral-300 dark:bg-neutral-700 inline-block" />
            <span className="w-2.5 h-2.5 rounded-full bg-neutral-300 dark:bg-neutral-700 inline-block" />
            <span className="w-2.5 h-2.5 rounded-full bg-neutral-300 dark:bg-neutral-700 inline-block" />
            <span className="font-mono text-[11px] text-neutral-600 dark:text-neutral-400 ml-2">apex-science.studyflow.in</span>
          </div>
          <div className="flex items-center gap-1.5">
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
            <span className="text-[10px] font-medium text-emerald-700 bg-emerald-50 px-2 py-0.5 rounded border border-emerald-200/60 dark:bg-emerald-950/40 dark:text-emerald-400">Live Sync Active</span>
          </div>
        </div>

        {/* Editor Preview Content */}
        <div className="space-y-2.5 text-xs">
          <div className="rounded-lg border border-neutral-200/90 bg-white p-3 shadow-xs dark:border-neutral-800 dark:bg-neutral-950">
            <div className="flex items-center justify-between">
              <span className="font-semibold text-neutral-900 dark:text-neutral-100">Apex Science Academy</span>
              <span className="text-[10px] font-mono text-neutral-500 bg-neutral-100 px-1.5 py-0.5 rounded dark:bg-neutral-800">HeroBlock: Synced</span>
            </div>
            <p className="text-[11px] text-neutral-500 mt-1 line-clamp-1">Premier JEE & NEET coaching with daily DPPs and live doubt resolution.</p>
          </div>

          <div className="grid grid-cols-2 gap-2">
            <div className="rounded-lg border border-neutral-200/80 bg-white p-2.5 dark:border-neutral-800 dark:bg-neutral-950">
              <div className="flex items-center justify-between text-[11px]">
                <span className="font-medium text-neutral-700 dark:text-neutral-300">Class 11 JEE</span>
                <span className="text-emerald-600 font-semibold font-mono">36/40 Seats</span>
              </div>
              <div className="w-full bg-neutral-100 rounded-full h-1.5 mt-2 dark:bg-neutral-800">
                <div className="bg-neutral-900 h-1.5 rounded-full w-[90%] dark:bg-neutral-200" />
              </div>
            </div>

            <div className="rounded-lg border border-neutral-200/80 bg-white p-2.5 dark:border-neutral-800 dark:bg-neutral-950">
              <div className="flex items-center justify-between text-[11px]">
                <span className="font-medium text-neutral-700 dark:text-neutral-300">QR Gate Portal</span>
                <span className="text-neutral-800 font-semibold font-mono dark:text-neutral-200">Active</span>
              </div>
              <p className="text-[10px] text-neutral-500 mt-1">Instant SMS to parent upon tap</p>
            </div>
          </div>
        </div>
      </div>

      {/* Sleek Gradient Fade Overlays */}
      <div className="pointer-events-none absolute inset-x-0 bottom-0 z-10 h-28 w-full bg-gradient-to-t from-white via-white/80 to-transparent dark:from-neutral-950 dark:via-neutral-950/80" />
      <div className="pointer-events-none absolute inset-x-0 top-0 z-10 h-14 w-full bg-gradient-to-b from-white via-transparent to-transparent dark:from-neutral-950" />
    </div>
  );
};

/* Skeleton 2: Staggered Toppers & Faculty Achievement Cards */
export const SkeletonTwo = () => {
  const toppers = [
    {
      name: "Priya Sharma",
      rank: "AIR 24",
      exam: "JEE Advanced 2026",
      avatar: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&w=600&auto=format&fit=crop",
      badge: "IIT Bombay CSE",
    },
    {
      name: "Aryan Verma",
      rank: "712 / 720",
      exam: "NEET-UG 2026",
      avatar: "https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?q=80&w=600&auto=format&fit=crop",
      badge: "AIIMS New Delhi",
    },
    {
      name: "Rohit Meena",
      rank: "98.6% Marks",
      exam: "Class 12 CBSE",
      avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=600&auto=format&fit=crop",
      badge: "State Rank 1",
    },
    {
      name: "Dr. S. K. Gupta",
      rank: "HOD Physics",
      exam: "Ex-IIT Kanpur",
      avatar: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=600&auto=format&fit=crop",
      badge: "18+ Yrs Exp.",
    },
  ];

  const cardVariants = {
    whileHover: {
      scale: 1.08,
      rotate: 0,
      zIndex: 50,
      transition: { duration: 0.2 },
    },
    whileTap: {
      scale: 1.05,
      rotate: 0,
    },
  };

  return (
    <div className="relative flex h-full min-h-[300px] flex-col items-start gap-4 overflow-hidden pt-4 pb-2">
      {/* Row 1 */}
      <div className="-ml-8 flex flex-row">
        {toppers.slice(0, 3).map((item, idx) => (
          <motion.div
            key={"topper-row-1-" + idx}
            variants={cardVariants}
            style={{
              rotate: idx === 1 ? -4 : idx === 2 ? 6 : -3,
            }}
            whileHover="whileHover"
            whileTap="whileTap"
            className="mt-2 -mr-3 shrink-0 overflow-hidden rounded-xl border border-neutral-200 bg-white p-2.5 shadow-md dark:border-neutral-800 dark:bg-neutral-900 cursor-pointer w-44"
          >
            <div className="flex items-center gap-2.5">
              <img
                src={item.avatar}
                alt={item.name}
                className="h-9 w-9 shrink-0 rounded-full object-cover border border-neutral-200 dark:border-neutral-700"
              />
              <div className="overflow-hidden">
                <p className="text-xs font-semibold text-neutral-900 truncate dark:text-neutral-100">{item.name}</p>
                <p className="text-[10px] font-mono text-emerald-600 font-medium">{item.rank}</p>
              </div>
            </div>
            <div className="mt-2 flex items-center justify-between text-[10px] text-neutral-500 pt-1.5 border-t border-neutral-100 dark:border-neutral-800">
              <span>{item.exam}</span>
              <span className="font-medium text-neutral-800 dark:text-neutral-200">{item.badge}</span>
            </div>
          </motion.div>
        ))}
      </div>

      {/* Row 2 */}
      <div className="-ml-3 flex flex-row">
        {toppers.concat(toppers.slice(0, 1)).map((item, idx) => (
          <motion.div
            key={"topper-row-2-" + idx}
            variants={cardVariants}
            style={{
              rotate: idx === 0 ? 4 : idx === 1 ? -5 : 3,
            }}
            whileHover="whileHover"
            whileTap="whileTap"
            className="mt-2 -mr-3 shrink-0 overflow-hidden rounded-xl border border-neutral-200 bg-white p-2.5 shadow-md dark:border-neutral-800 dark:bg-neutral-900 cursor-pointer w-44"
          >
            <div className="flex items-center gap-2.5">
              <img
                src={item.avatar}
                alt={item.name}
                className="h-9 w-9 shrink-0 rounded-full object-cover border border-neutral-200 dark:border-neutral-700"
              />
              <div className="overflow-hidden">
                <p className="text-xs font-semibold text-neutral-900 truncate dark:text-neutral-100">{item.name}</p>
                <p className="text-[10px] font-mono text-emerald-600 font-medium">{item.rank}</p>
              </div>
            </div>
            <div className="mt-2 flex items-center justify-between text-[10px] text-neutral-500 pt-1.5 border-t border-neutral-100 dark:border-neutral-800">
              <span>{item.exam}</span>
              <span className="font-medium text-neutral-800 dark:text-neutral-200">{item.badge}</span>
            </div>
          </motion.div>
        ))}
      </div>

      {/* Side Edge Mask Gradients */}
      <div className="pointer-events-none absolute inset-y-0 left-0 z-20 h-full w-12 bg-gradient-to-r from-white to-transparent dark:from-neutral-950" />
      <div className="pointer-events-none absolute inset-y-0 right-0 z-20 h-full w-12 bg-gradient-to-l from-white to-transparent dark:from-neutral-950" />
    </div>
  );
};

/* Skeleton 3: Live WhatsApp Admission Router */
export const SkeletonThree = () => {
  return (
    <div className="group relative flex h-full min-h-[290px] flex-col justify-end pt-4">
      <div className="w-full rounded-xl border border-neutral-200 bg-neutral-50/70 p-4 shadow-lg dark:border-neutral-800 dark:bg-neutral-900">
        
        {/* WhatsApp Notification Bar */}
        <div className="flex items-center justify-between border-b border-neutral-200/80 pb-2.5 mb-3 dark:border-neutral-800">
          <div className="flex items-center gap-2">
            <div className="w-6 h-6 rounded-full bg-emerald-600 text-white flex items-center justify-center text-xs">
              <MessageSquare size={12} />
            </div>
            <div>
              <p className="text-xs font-medium text-neutral-900 dark:text-neutral-100">WhatsApp Lead Dispatcher</p>
              <p className="text-[10px] text-neutral-500">Auto-routes to Director & Counselor</p>
            </div>
          </div>
          <span className="text-[10px] font-mono font-medium text-emerald-700 bg-emerald-50 px-2 py-0.5 rounded border border-emerald-200/70 dark:bg-emerald-950/40 dark:text-emerald-400">
            Instant 120ms
          </span>
        </div>

        {/* Chat Message Snippets */}
        <div className="space-y-2 text-xs">
          <div className="rounded-lg bg-white p-2.5 border border-neutral-200/80 shadow-xs max-w-[85%] dark:bg-neutral-950 dark:border-neutral-800">
            <p className="text-[11px] font-semibold text-neutral-900 dark:text-neutral-100">Parent: Rajesh Sharma</p>
            <p className="text-[11px] text-neutral-600 dark:text-neutral-400 mt-0.5">
              "Enquiry for Class 11 JEE Pinnacle. Need syllabus & batch timings."
            </p>
          </div>

          <div className="ml-auto rounded-lg bg-neutral-900 text-white p-2.5 shadow-xs max-w-[88%] dark:bg-neutral-100 dark:text-neutral-900">
            <p className="text-[10px] text-neutral-300 dark:text-neutral-600 font-medium">StudyFlow Automated Router</p>
            <p className="text-[11px] mt-0.5">
              Prospectus, batch fee breakdown, and demo pass sent to parent phone.
            </p>
          </div>
        </div>

        {/* Action Button */}
        <div className="mt-3.5 pt-2.5 border-t border-neutral-200/80 flex items-center justify-between text-xs dark:border-neutral-800">
          <span className="text-[11px] font-mono text-neutral-500">Lead synced to MySQL</span>
          <a
            href="https://wa.me"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1 text-[11px] font-medium text-neutral-900 hover:text-black underline underline-offset-2 dark:text-neutral-100"
          >
            <span>Open WhatsApp CRM</span>
            <ArrowUpRight size={12} />
          </a>
        </div>
      </div>
    </div>
  );
};

/* Skeleton 4: Subdomain Deployment with 3D Globe */
export const SkeletonFour = () => {
  return (
    <div className="relative mt-4 flex h-60 sm:h-64 md:h-72 w-full overflow-hidden">
      <Globe className="absolute -right-8 -bottom-[320px] sm:-right-6 sm:-bottom-[300px] md:-right-4 md:-bottom-[280px] w-[540px] h-[540px] sm:w-[580px] sm:h-[580px] md:w-[620px] md:h-[620px]" />
    </div>
  );
};

/* Interactive 3D Spinning Dot-Matrix Globe */
export const Globe = ({ className }) => {
  const canvasRef = useRef(null);
  const isDraggingRef = useRef(false);
  const startXRef = useRef(0);
  const phiRef = useRef(0);
  const velocityRef = useRef(0.0035);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let animId;
    let time = 0;

    // Fixed forward tilt (so northern hemisphere faces forward-up)
    const tilt = 0.38;
    const cosT = Math.cos(tilt);
    const sinT = Math.sin(tilt);

    // Key routing hub markers (lat, lon)
    const rawMarkers = [
      { lat: 37.7595, lon: -122.4367, label: "San Francisco Edge" },
      { lat: 40.7128, lon: -74.006, label: "New York CDN" },
      { lat: 28.6139, lon: 77.209, label: "New Delhi Routing" },
      { lat: 51.5074, lon: -0.1278, label: "London Gateway" },
    ];

    const markers = rawMarkers.map((m) => {
      const phi = (90 - m.lat) * (Math.PI / 180);
      const theta = (m.lon + 180) * (Math.PI / 180);
      return {
        x: -Math.sin(phi) * Math.cos(theta),
        y: Math.cos(phi),
        z: Math.sin(phi) * Math.sin(theta),
        label: m.label,
      };
    });

    const render = () => {
      time += 0.016;

      // Handle inertial decay or auto-rotation
      if (!isDraggingRef.current) {
        if (Math.abs(velocityRef.current - 0.0035) > 0.0001) {
          velocityRef.current = velocityRef.current * 0.95 + 0.0035 * 0.05;
        }
        phiRef.current += velocityRef.current;
      }

      const rect = canvas.getBoundingClientRect();
      const dpr = Math.min(window.devicePixelRatio || 1, 2);
      const displayWidth = Math.round(rect.width);
      const displayHeight = Math.round(rect.height);

      if (canvas.width !== displayWidth * dpr || canvas.height !== displayHeight * dpr) {
        canvas.width = displayWidth * dpr;
        canvas.height = displayHeight * dpr;
      }

      ctx.save();
      ctx.scale(dpr, dpr);
      ctx.clearRect(0, 0, displayWidth, displayHeight);

      const cx = displayWidth / 2;
      const cy = displayHeight / 2;
      const radius = Math.min(displayWidth, displayHeight) * 0.44;

      const currentPhi = phiRef.current;
      const cosP = Math.cos(currentPhi);
      const sinP = Math.sin(currentPhi);

      // 1. Atmospheric Outer Glow
      const outerGlow = ctx.createRadialGradient(cx, cy, radius * 0.9, cx, cy, radius * 1.15);
      outerGlow.addColorStop(0, "rgba(255, 255, 255, 0.22)");
      outerGlow.addColorStop(0.4, "rgba(255, 255, 255, 0.06)");
      outerGlow.addColorStop(1, "rgba(255, 255, 255, 0)");
      ctx.fillStyle = outerGlow;
      ctx.beginPath();
      ctx.arc(cx, cy, radius * 1.15, 0, Math.PI * 2);
      ctx.fill();

      // 2. 3D Dark Shaded Sphere Body
      ctx.save();
      ctx.beginPath();
      ctx.arc(cx, cy, radius, 0, Math.PI * 2);
      ctx.clip();

      const bodyGrad = ctx.createRadialGradient(
        cx - radius * 0.35,
        cy - radius * 0.35,
        radius * 0.05,
        cx,
        cy,
        radius
      );
      bodyGrad.addColorStop(0, "#1f1f23");
      bodyGrad.addColorStop(0.4, "#121215");
      bodyGrad.addColorStop(0.75, "#09090b");
      bodyGrad.addColorStop(1, "#020202");

      ctx.fillStyle = bodyGrad;
      ctx.fill();

      // Subtle internal depth rings / longitude hints
      ctx.strokeStyle = "rgba(255, 255, 255, 0.02)";
      ctx.lineWidth = 1;
      for (let r = 0.25; r < 1; r += 0.25) {
        ctx.beginPath();
        ctx.arc(cx, cy, radius * r, 0, Math.PI * 2);
        ctx.stroke();
      }

      // 3. Continent Dot Matrix Projection
      const len = globePoints.length;
      for (let i = 0; i < len; i++) {
        const pt = globePoints[i];
        const px = pt[0];
        const py = pt[1];
        const pz = pt[2];

        // Y-axis rotation
        const rx = px * cosP + pz * sinP;
        const rz = -px * sinP + pz * cosP;

        // X-axis tilt
        const ry = py * cosT - rz * sinT;
        const finalZ = py * sinT + rz * cosT;

        // Render points on front hemisphere
        if (finalZ > -0.05) {
          const sx = cx + rx * radius;
          const sy = cy - ry * radius;

          const depth = Math.max(0, finalZ);
          const alpha = Math.min(1, Math.max(0.12, Math.pow(depth, 1.25) * 0.95 + 0.05));
          const dotRadius = depth > 0.65 ? 1.45 : depth > 0.35 ? 1.2 : 0.95;

          ctx.fillStyle = `rgba(255, 255, 255, ${alpha.toFixed(2)})`;
          ctx.beginPath();
          ctx.arc(sx, sy, dotRadius, 0, Math.PI * 2);
          ctx.fill();
        }
      }

      // 4. Luminous Cloud / Atmospheric Crescent Rim Highlight
      const rimHighlight = ctx.createLinearGradient(
        cx - radius,
        cy - radius,
        cx + radius,
        cy + radius
      );
      rimHighlight.addColorStop(0, "rgba(255, 255, 255, 0.35)");
      rimHighlight.addColorStop(0.3, "rgba(255, 255, 255, 0.12)");
      rimHighlight.addColorStop(0.7, "rgba(0, 0, 0, 0)");
      rimHighlight.addColorStop(1, "rgba(0, 0, 0, 0.4)");

      ctx.fillStyle = rimHighlight;
      ctx.beginPath();
      ctx.arc(cx, cy, radius, 0, Math.PI * 2);
      ctx.fill();

      ctx.restore(); // Exit sphere clipping

      // 5. Crisp Outer Horizon Rim Ring
      ctx.save();
      ctx.beginPath();
      ctx.arc(cx, cy, radius + 0.5, 0, Math.PI * 2);
      const ringGrad = ctx.createLinearGradient(
        cx - radius * 0.8,
        cy - radius * 0.8,
        cx + radius * 0.8,
        cy + radius * 0.8
      );
      ringGrad.addColorStop(0, "rgba(255, 255, 255, 0.55)");
      ringGrad.addColorStop(0.4, "rgba(255, 255, 255, 0.2)");
      ringGrad.addColorStop(0.8, "rgba(255, 255, 255, 0.03)");
      ringGrad.addColorStop(1, "rgba(0, 0, 0, 0)");
      ctx.strokeStyle = ringGrad;
      ctx.lineWidth = 1.5;
      ctx.stroke();
      ctx.restore();

      // 6. Active Global Edge Markers with Radar Ripples
      markers.forEach((m, idx) => {
        const rx = m.x * cosP + m.z * sinP;
        const rz = -m.x * sinP + m.z * cosP;
        const ry = m.y * cosT - rz * sinT;
        const finalZ = m.y * sinT + rz * cosT;

        if (finalZ > 0.08) {
          const mx = cx + rx * radius;
          const my = cy - ry * radius;

          // Expanding radar ripple
          const pulseOffset = idx * 0.7;
          const pulseCycle = (time * 1.4 + pulseOffset) % 2.0;
          const pulseFrac = pulseCycle / 2.0;
          const pulseR = 3.5 + pulseFrac * 14;
          const pulseAlpha = Math.max(0, (1 - pulseFrac) * 0.65);

          ctx.beginPath();
          ctx.arc(mx, my, pulseR, 0, Math.PI * 2);
          ctx.strokeStyle = `rgba(0, 229, 255, ${pulseAlpha.toFixed(2)})`;
          ctx.lineWidth = 1.2;
          ctx.stroke();

          // Luminous cyan halo
          const halo = ctx.createRadialGradient(mx, my, 0, mx, my, 8);
          halo.addColorStop(0, "rgba(0, 229, 255, 0.9)");
          halo.addColorStop(0.5, "rgba(0, 229, 255, 0.35)");
          halo.addColorStop(1, "rgba(0, 229, 255, 0)");
          ctx.fillStyle = halo;
          ctx.beginPath();
          ctx.arc(mx, my, 8, 0, Math.PI * 2);
          ctx.fill();

          // Solid bright cyan point
          ctx.beginPath();
          ctx.arc(mx, my, 2.8, 0, Math.PI * 2);
          ctx.fillStyle = "#00f0ff";
          ctx.fill();

          // White core center
          ctx.beginPath();
          ctx.arc(mx, my, 1.2, 0, Math.PI * 2);
          ctx.fillStyle = "#ffffff";
          ctx.fill();
        }
      });

      ctx.restore();
      animId = requestAnimationFrame(render);
    };

    animId = requestAnimationFrame(render);

    // Pointer Drag Handlers
    const onPointerDown = (e) => {
      isDraggingRef.current = true;
      startXRef.current = e.clientX;
      velocityRef.current = 0;
    };

    const onPointerMove = (e) => {
      if (!isDraggingRef.current) return;
      const dx = e.clientX - startXRef.current;
      startXRef.current = e.clientX;
      const deltaPhi = dx * 0.005;
      phiRef.current += deltaPhi;
      velocityRef.current = deltaPhi;
    };

    const onPointerUp = () => {
      isDraggingRef.current = false;
    };

    canvas.addEventListener("pointerdown", onPointerDown);
    window.addEventListener("pointermove", onPointerMove);
    window.addEventListener("pointerup", onPointerUp);

    return () => {
      cancelAnimationFrame(animId);
      canvas.removeEventListener("pointerdown", onPointerDown);
      window.removeEventListener("pointermove", onPointerMove);
      window.removeEventListener("pointerup", onPointerUp);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className={cn("cursor-grab active:cursor-grabbing touch-none select-none", className)}
      style={{ aspectRatio: 1 }}
    />
  );
};

export default FeaturesSection;
