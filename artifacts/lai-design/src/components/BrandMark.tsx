type BrandMarkProps = {
  className?: string;
  label?: string;
};

export function BrandMark({ className = "h-10 w-10", label = "LAI Group" }: BrandMarkProps) {
  return (
    <span className={`inline-flex items-center justify-center ${className}`} aria-label={label} role="img">
      <svg viewBox="0 0 180 160" className="h-full w-full" aria-hidden="true">
        <defs>
          <linearGradient id="laiMarkGradient" x1="0" y1="1" x2="1" y2="0">
            <stop offset="0%" stopColor="#3b3191" />
            <stop offset="100%" stopColor="#56bce8" />
          </linearGradient>
        </defs>
        <path d="M90 8 L176 152 H146 L75 34 Z" fill="url(#laiMarkGradient)" />
        <path d="M68 43 L132 152 H102 L53 69 Z" fill="url(#laiMarkGradient)" />
        <path d="M34 96 H64 L49 122 H83 L66 152 H4 Z" fill="url(#laiMarkGradient)" />
      </svg>
    </span>
  );
}
