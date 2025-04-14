import React from "react";

interface SpinnerProps {
  Start: string;
  Step: string;
  width: number;
  height: number;
  className?: string;
}

export const Spinner: React.FC<SpinnerProps> = ({
  Start,
  Step,
  width,
  height,
  className,
}) => {
  return (
    <svg
      width={width}
      height={height}
      className={className}
      viewBox="0 0 24 24"
      xmlns="http://www.w3.org/2000/svg"
    >
      {/* Example spinner SVG */}
      <circle
        cx="12"
        cy="12"
        r="10"
        stroke="currentColor"
        strokeWidth="2"
        fill="none"
        strokeDasharray="31.4"
        strokeDashoffset="0"
      />
    </svg>
  );
};
