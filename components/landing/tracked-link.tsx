'use client'

import { motion } from "framer-motion";
import Link, { type LinkProps } from "next/link";

import { trackEvent } from "@/lib/analytics";

type TrackedLinkProps = LinkProps & {
  children: React.ReactNode;
  className?: string;
  eventName: string;
  eventSection: string;
};

export function TrackedLink({
  children,
  className,
  eventName,
  eventSection,
  ...props
}: TrackedLinkProps) {
  return (
    <motion.div whileHover={{ y: -2 }} whileTap={{ scale: 0.98 }} transition={{ duration: 0.2 }}>
      <Link
        {...props}
        className={className}
        onClick={() => trackEvent(eventName, { section: eventSection })}
      >
        {children}
      </Link>
    </motion.div>
  );
}
