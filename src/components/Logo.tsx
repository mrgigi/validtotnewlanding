import { cn } from "@/lib/utils";

interface LogoProps {
  className?: string;
  size?: "sm" | "md" | "lg";
}

export function Logo({ className, size = "md" }: LogoProps) {
  const sizeClasses = {
    sm: "text-xl px-2 py-1",
    md: "text-3xl px-4 py-2",
    lg: "text-5xl px-6 py-3",
  };

  return (
    <div 
      className={cn(
        "relative inline-block transform -skew-x-6 rotate-[-2deg]",
        "bg-black text-white font-black tracking-tight rounded-md select-none",
        "transition-transform hover:scale-105 hover:rotate-0 duration-200",
        sizeClasses[size],
        className
      )}
    >
      <span className="text-[#ff00cc]">Valid</span>
      <span className="text-[#00ffff]">ToT</span>
    </div>
  );
}
