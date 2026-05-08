import React from 'react';

export default function Button({
  label,
  onClick,
  disabled = false,
  height,
  className = '',
}: {
  label: string;
  onClick: () => void;
  disabled?: boolean;
  height?: string;
  className?: string;
}) {
  return (
    <button
      className={`bg-[#7339E6] hover:bg-[#8C5CEC] text-white font-bold py-2 px-4 rounded-[8px] ${height ? `h-[${height}]` : ''} ${disabled ? 'opacity-50 cursor-not-allowed' : ''} ${className}`}
      onClick={onClick}
      disabled={disabled}
    >
      {label}
    </button>
  );
}
