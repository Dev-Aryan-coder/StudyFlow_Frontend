import React from 'react';
import { Headphones, Percent, Tag, Sparkles } from 'lucide-react';
import './TopMarquee.css';

const ANNOUNCEMENTS = [
  {
    id: 'support',
    tag: '24/7 SUPPORT',
    text: '24/7 Dedicated Support & Fast Onboarding for Coaching Centers',
    icon: Headphones
  },
  {
    id: 'discount',
    tag: 'LIMITED DEAL',
    text: 'Flat 40% Off on Your First Coaching Website & Portal Setup',
    icon: Percent
  },
  {
    id: 'black-friday',
    tag: 'BLACK FRIDAY',
    text: 'Black Friday Special Offer Live — Free Custom Domain & Subdomain Routing',
    icon: Tag
  },
  {
    id: 'christmas',
    tag: 'HOLIDAY INCOMING',
    text: 'Christmas & New Year Offer Incoming — Early Access Registration Open',
    icon: Sparkles
  }
];

export function TopMarquee() {
  // Triple the array to guarantee seamless, uninterrupted infinite looping
  const loopItems = [...ANNOUNCEMENTS, ...ANNOUNCEMENTS, ...ANNOUNCEMENTS];

  return (
    <div className="top-marquee-container" role="region" aria-label="Announcement Ticker">
      <div className="top-marquee-track">
        {loopItems.map((item, idx) => {
          const IconComponent = item.icon;
          return (
            <div key={`${item.id}-${idx}`} className="top-marquee-item">
              <span className="top-marquee-tag">{item.tag}</span>
              <IconComponent size={12} className="top-marquee-icon text-zinc-400" />
              <span className="top-marquee-text">{item.text}</span>
              <span className="top-marquee-bullet" aria-hidden="true">•</span>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default TopMarquee;
