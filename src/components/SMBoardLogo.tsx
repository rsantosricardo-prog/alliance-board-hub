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
      {/* BOARD Text */}
      <div className="flex flex-col items-center gap-1">
        {/* Minimal Underline */}

      </div>
    </div>
  );
}
