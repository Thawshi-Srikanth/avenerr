"use client";

import { ChevronDown } from "lucide-react";
import { AnimatePresence, motion } from "motion/react";
import React, { useState } from "react";
import { cn } from "@/lib/utils";

export const FlyoutMenu = ({
  title,
  children,
  side = "right",
}: {
  title: string;
  children: React.ReactNode;
  side?: "left" | "right";
}) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    // biome-ignore lint/a11y/useSemanticElements: Not a form fieldset
    <div
      className="relative w-full"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      onFocus={() => setIsHovered(true)}
      onBlur={(e) => {
        if (!e.currentTarget.contains(e.relatedTarget as Node)) {
          setIsHovered(false);
        }
      }}
      role="group"
      aria-label={title}
    >
      <button
        type="button"
        className={cn(
          "flex w-full items-center justify-between py-2 px-3 text-sm font-medium transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground outline-none",
          isHovered && "bg-accent/50 text-accent-foreground",
        )}
      >
        <span>{title}</span>
        <ChevronDown
          className={cn(
            "h-4 w-4 text-muted-foreground transition-transform",
            side === "left" ? "rotate-90" : "-rotate-90",
          )}
        />
      </button>

      {/* Flyout Content */}
      <AnimatePresence>
        {isHovered && (
          <motion.div
            initial={{ opacity: 0, x: side === "right" ? -5 : 5 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: side === "right" ? -5 : 5 }}
            transition={{ duration: 0.1 }}
            className={cn(
              "absolute top-0 min-w-[280px] rounded-md border bg-popover text-popover-foreground shadow-md z-50",
              side === "right" ? "left-full ml-0.5" : "right-full mr-0.5",
            )}
          >
            <div className="p-2 space-y-1">{children}</div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};
