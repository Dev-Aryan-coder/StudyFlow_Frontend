import React from 'react';
import './Logo.css';

export function Logo({ size = 24, className = '', color = '#000000' }) {
  return (
    <svg 
      width={size} 
      height={size} 
      viewBox="0 0 32 32" 
      fill="none" 
      xmlns="http://www.w3.org/2000/svg"
      className={`studyflow-logo-svg ${className}`}
    >
      <rect x="6.25" y="8.5" width="4.5" height="15" rx="2.25" fill={color}/>
      <rect x="13.75" y="4" width="4.5" height="24" rx="2.25" fill={color}/>
      <rect x="21.25" y="8.5" width="4.5" height="15" rx="2.25" fill={color}/>
    </svg>
  );
}

export default Logo;
