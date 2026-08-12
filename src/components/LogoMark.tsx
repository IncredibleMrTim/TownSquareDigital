interface LogoMarkProps {
  size?: number
  variant?: "navy" | "brick"
}

export default function LogoMark({ size = 32, variant = "navy" }: LogoMarkProps) {
  const backgroundFill = variant === "navy" ? "var(--color-brand-navy)" : "var(--color-brand-brick)"

  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 32 32"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className="shrink-0 rounded-[7px]"
    >
      <rect width="32" height="32" fill={backgroundFill} />
      <rect x="6" y="6" width="8" height="8" rx="1.5" fill="white" fillOpacity="0.9" />
      <rect x="18" y="6" width="8" height="8" rx="1.5" fill="white" fillOpacity="0.45" />
      <rect x="6" y="18" width="8" height="8" rx="1.5" fill="white" fillOpacity="0.45" />
      <rect x="18" y="18" width="8" height="8" rx="1.5" fill="var(--color-brand-brick)" />
    </svg>
  )
}
