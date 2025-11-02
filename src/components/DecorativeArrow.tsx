import { ArrowUpRight } from "lucide-react";

interface DecorativeArrowProps {
  color?: "cyan" | "purple" | "orange";
  size?: "sm" | "md" | "lg";
  className?: string;
}

const DecorativeArrow = ({ color = "purple", size = "md", className = "" }: DecorativeArrowProps) => {
  const colorClasses = {
    cyan: "text-cyan",
    purple: "text-purple",
    orange: "text-orange",
  };

  const sizeClasses = {
    sm: "w-12 h-12",
    md: "w-16 h-16",
    lg: "w-24 h-24",
  };

  return (
    <div className={`${colorClasses[color]} ${sizeClasses[size]} ${className} opacity-20`}>
      <ArrowUpRight className="w-full h-full" strokeWidth={3} />
    </div>
  );
};

export default DecorativeArrow;
