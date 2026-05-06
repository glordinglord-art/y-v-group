'use client'

import { motion } from "framer-motion";
import Link, { type LinkProps } from "next/link";
import type { AnchorHTMLAttributes, ReactNode } from "react";

import { trackEvent } from "@/lib/analytics";

type TrackedLinkProps = LinkProps &
  Omit<AnchorHTMLAttributes<HTMLAnchorElement>, keyof LinkProps> & {
  children: ReactNode;
  className?: string;
  eventName: string;
  eventSection: string;
};

export function TrackedLink({
  children,
  className,
  eventName,
  eventSection,
  onClick,
  ...props
}: TrackedLinkProps) {
  return (
    <motion.div whileHover={{ y: -2 }} whileTap={{ scale: 0.98 }} transition={{ duration: 0.2 }}>
      <Link
        {...props}
        className={className}
        onClick={(event) => {
          trackEvent(eventName, { section: eventSection });
          onClick?.(event);
        }}
      >
        {children}
      </Link>
    </motion.div>
  );
}
