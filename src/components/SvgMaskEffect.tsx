import { motion } from "framer-motion";
import React, { useEffect, useRef, useState } from "react";
import { cn } from "../utils/cn";

export const MaskContainer = ({
  children,
  revealText,
  size = 10,
  revealSize = 450,
  className,
}: {
  children?: string | React.ReactNode;
  revealText?: string | React.ReactNode;
  size?: number;
  revealSize?: number;
  className?: string;
}) => {
  const [isHovered, setIsHovered] = useState(false);
  const [mousePosition, setMousePosition] = useState<any>({ x: null, y: null });
  const containerRef = useRef<any>(null);
  const updateMousePosition = (e: any) => {
    const rect = containerRef.current.getBoundingClientRect();
    setMousePosition({ x: e.clientX - rect.left, y: e.clientY - rect.top });
  };

  useEffect(() => {
    containerRef.current.addEventListener("mousemove", updateMousePosition);
    return () => {
      if (containerRef.current) {
        containerRef.current.removeEventListener(
          "mousemove",
          updateMousePosition
        );
      }
    };
  }, []);
  let maskSize = isHovered ? revealSize : size;

  return (
    <motion.div
      ref={containerRef}
      className={cn("md:w-full 2xl:w-1/3 relative", className)}
      style={{
        backgroundColor: `${isHovered ? "bg-[#02021E]" : "white"} `,
      }}
      transition={{ duration: 0.5 }}
    >
      <motion.div
        className="w-full h-full flex justify-center items-center text-lg absolute bg-[#ececec] [mask-image:url(/mask.svg)] [mask-size:30px] [mask-repeat:no-repeat]"
        animate={{
          WebkitMaskPosition: `${mousePosition.x - maskSize / 2}px ${
            mousePosition.y - maskSize / 2
          }px`,
          WebkitMaskSize: `${maskSize}px`,
        }}
        transition={{ type: "tween", ease: "backOut", duration: 0.1 }}
      >
        <div className="absolute inset-0 h-full w-full z-0 opacity-50" />
        <div
          onMouseEnter={() => {
            setIsHovered(true);
          }}
          onMouseLeave={() => {
            setIsHovered(false);
          }}
          className="max-w-screen-md px-6 text-center text-[#02021E] text-lg font-bold relative z-20"
        >
          {children}
        </div>
      </motion.div>
      <div
        // items-center
        className="w-full text-center px-6 h-full pt-4 flex justify-center text-[#ececec] bg-[#02021E]"
      >
        {revealText}
      </div>
    </motion.div>
  );
};
