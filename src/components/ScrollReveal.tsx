import { ReactNode } from "react";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";

interface ScrollRevealProps {
  children: ReactNode;
  animation?: "fade" | "slide-up" | "slide-left" | "slide-right" | "scale" | "fade-slide";
  delay?: number;
  duration?: number;
  className?: string;
}

const ScrollReveal = ({
  children,
  animation = "fade-slide",
  delay = 0,
  duration = 0.6,
  className = "",
}: ScrollRevealProps) => {
  const { elementRef, isVisible } = useScrollAnimation({
    threshold: 0.1,
    triggerOnce: true,
  });

  const animationClasses = {
    fade: isVisible
      ? "opacity-100"
      : "opacity-0",
    "slide-up": isVisible
      ? "opacity-100 translate-y-0"
      : "opacity-0 translate-y-10",
    "slide-left": isVisible
      ? "opacity-100 translate-x-0"
      : "opacity-0 translate-x-10",
    "slide-right": isVisible
      ? "opacity-100 translate-x-0"
      : "opacity-0 -translate-x-10",
    scale: isVisible
      ? "opacity-100 scale-100"
      : "opacity-0 scale-95",
    "fade-slide": isVisible
      ? "opacity-100 translate-y-0"
      : "opacity-0 translate-y-8",
  };

  return (
    <div
      ref={elementRef}
      className={`transition-all ${animationClasses[animation]} ${className}`}
      style={{
        transitionDuration: `${duration}s`,
        transitionDelay: `${delay}s`,
      }}
    >
      {children}
    </div>
  );
};

export default ScrollReveal;
