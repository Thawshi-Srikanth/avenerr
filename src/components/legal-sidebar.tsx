"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";

const navItems = [
  {
    title: "Privacy Policy",
    href: "/privacy-policy",
  },
  {
    title: "Terms of Service",
    href: "/terms-of-service",
  },
  {
    title: "Cookie Policy",
    href: "/cookie-policy",
  },
];

export default function LegalSidebar() {
  const pathname = usePathname();

  return (
    <nav className="flex flex-col space-y-1">
      {navItems.map((item) => (
        <Link
          key={item.href}
          href={item.href}
          className={cn(
            "flex items-center rounded-none border-l-2 px-4 py-2 text-sm font-medium transition-colors hover:bg-muted/50",
            pathname === item.href
              ? "border-primary bg-muted/50 text-primary"
              : "border-transparent text-muted-foreground hover:text-foreground",
          )}
        >
          {item.title}
        </Link>
      ))}
    </nav>
  );
}
