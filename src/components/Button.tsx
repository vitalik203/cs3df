import React from 'react';

export default function Button({
  onClick,
  disabled = false,
  height,
  className = '',
  children,
}: {
  children: React.ReactNode;
  onClick: () => void;
  disabled?: boolean;
  height?: string;
  className?: string;
}) {
  return (
    <button
      className={`bg-[#7339E6] hover:bg-[#8C5CEC] text-white font-bold py-2 px-4 rounded-[8px] ${height ? `h-[${height}px]` : ''} ${disabled ? 'opacity-50 cursor-not-allowed' : ''} ${className}`}
      onClick={onClick}
      disabled={disabled}
    >
      {children}
    </button>
  );
}
