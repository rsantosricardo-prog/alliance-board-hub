import React from 'react';

interface SMBoardLogoProps {
  variant?: 'light' | 'dark';
  className?: string;
}

export default function SMBoardLogo({ variant = 'light', className = '' }: SMBoardLogoProps) {
  const isDark = variant === 'dark';
  const textColor = isDark ? '#FFFFFF' : '#000000';
  const bgColor = isDark ? '#000000' : '#FFFFFF';
  const borderColor = isDark ? '#FFFFFF' : '#000000';

  return (
    <div className={`flex flex-col items-center gap-1 ${className}`}>
      {/* SM Monogram with Double Rectangle */}
      <svg
        width="80"
        height="80"
        viewBox="0 0 80 80"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="flex-shrink-0"
      >
        {/* Outer Rectangle */}
        <rect
          x="4"
          y="4"
          width="72"
          height="72"
          fill="none"
          stroke={borderColor}
          strokeWidth="1.5"
        />
        
        {/* Inner Rectangle */}
        <rect
          x="8"
          y="8"
          width="64"
          height="64"
          fill="none"
          stroke={borderColor}
          strokeWidth="1.5"
        />

        {/* SM Text - Serif Style */}
        <text
          x="40"
          y="48"
          fontSize="36"
          fontFamily="'Trajan Pro', 'Times New Roman', serif"
          fontWeight="700"
          textAnchor="middle"
          fill={textColor}
          letterSpacing="2"
        >
          SM
        </text>
      </svg>
      {/* BOARD Text */}
      <div className="flex flex-col items-center gap-1">

        {/* Minimal Underline */}
        <div
          className="h-px w-12"
          style={{ backgroundColor: textColor }}
        />
      </div>
    </div>
  );
}
