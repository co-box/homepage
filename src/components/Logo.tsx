import { cn } from "@/lib/utils";

// CoBox mark: the "C" protects your data (the box) while staying open to the outside (the dot).
export function LogoMark({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 64 64" aria-hidden="true" className={cn("w-8 h-8", className)}>
      <path
        d="M50 14 A24 24 0 1 0 50 50"
        fill="none"
        stroke="currentColor"
        strokeWidth="8"
        strokeLinecap="round"
      />
      <rect x="27" y="22" width="20" height="20" rx="5" className="fill-primary" />
      <circle cx="54" cy="32" r="5" className="fill-primary" />
    </svg>
  );
}

export default function Logo({ className }: { className?: string }) {
  return (
    <span className={cn("inline-flex items-center gap-2 font-heading font-bold text-xl text-foreground", className)}>
      <LogoMark />
      <span>
        <span className="text-primary">Co</span>Box
      </span>
    </span>
  );
}
