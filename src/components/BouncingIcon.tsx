import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { ChevronDown } from "lucide-react";

interface BouncingIconProps {
  className?: string;
  icon?: React.ElementType;
  color?: string;
}

const BouncingIcon = ({
  className = "absolute bottom-16 left-4/2 transform -translate-x-4/2",
  icon: Icon = ChevronDown,
  color = "text-white",
}: BouncingIconProps) => {
  const [isVisible, setIsVisible] = useState(true);

  //monitorar o scroll
  useEffect(() => {
    const handleScroll = () => {
      setIsVisible(window.scrollY <= 50);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <motion.div
      initial={{ opacity: 1 }}
      animate={{ opacity: isVisible ? 1 : 0, y: isVisible ? [0, 10, 0] : 20 }}
      transition={{ duration: 0.5, repeat: isVisible ? Infinity : 0 }}
      className={className}
    >
      <div className="flex items-center justify-center h-12 w-12">
        <Icon className={`h-8 w-8 ${color}`} />
      </div>
    </motion.div>
  );
};

export default BouncingIcon;
