type BrandMarkProps = {
  className?: string;
  label?: string;
};

export function BrandMark({ className = "h-10 w-10", label = "LAI Design Associates" }: BrandMarkProps) {
  return (
    <span className={`inline-flex items-center justify-center overflow-hidden ${className}`} aria-label={label}>
      <img
        src={`${import.meta.env.BASE_URL}images/lai-logo-mark.png`}
        alt=""
        className="h-full w-full object-contain"
      />
    </span>
  );
}
