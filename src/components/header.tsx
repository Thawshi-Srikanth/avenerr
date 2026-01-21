"use client";

import { Menu, X, ChevronDown } from "lucide-react";
import Link from "next/link";
import React, { useState } from "react";
import { AnimatePresence, motion } from "motion/react";
import { cn } from "@/lib/utils";
import { Logo } from "./logo";
import { Button } from "./ui/button";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu";

const services = [
  {
    title: "Information Systems",
    href: "/services/information-systems",
    description: "Robust, scalable technology solutions.",
  },
  {
    title: "Logistic and Operations",
    href: "/services/logistic-operations",
    description: "Supply chain optimization and automation.",
  },
  {
    title: "Scientific Affairs",
    href: "/services/scientific-affairs",
    description: "Regulatory compliance and clinical support.",
  },
  {
    title: "Training",
    href: "/services/training",
    description: "Upskilling and leadership development.",
  },
];

const mainLinks = [
  { name: "About Us", href: "/about-us" },
  { name: "Company Overview", href: "/company-overview" },
];

export const HeroHeader = () => {
  const [menuState, setMenuState] = React.useState(false);
  const [isScrolled, setIsScrolled] = React.useState(false);

  React.useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header>
      <nav
        data-state={menuState && "active"}
        className="fixed z-20 w-full px-2"
      >
        <div
          className={cn(
            "mx-auto max-w-7xl px-6 transition-all duration-300 lg:px-12",
            isScrolled &&
              "bg-background/80 max-w-7xl border backdrop-blur-lg lg:px-5 support-[backdrop-filter]:bg-background/60",
          )}
        >
          <div className="relative flex flex-wrap items-center justify-between gap-6 py-3 lg:gap-0 lg:py-4">
            <div className="flex w-full justify-between lg:w-auto">
              <Link
                href="/"
                aria-label="home"
                className="flex items-center space-x-2"
              >
                <Logo />
              </Link>

              <Button
                onClick={() => setMenuState(!menuState)}
                aria-label={menuState === true ? "Close Menu" : "Open Menu"}
                className="relative z-20 -m-2.5 -mr-4 block cursor-pointer p-2.5 lg:hidden"
                variant="ghost"
              >
                <Menu className="in-data-[state=active]:rotate-180 in-data-[state=active]:scale-0 in-data-[state=active]:opacity-0 m-auto size-6 duration-200" />
                <X className="in-data-[state=active]:rotate-0 in-data-[state=active]:scale-100 in-data-[state=active]:opacity-100 absolute inset-0 m-auto size-6 -rotate-180 scale-0 opacity-0 duration-200" />
              </Button>
            </div>

            {/* Desktop Navigation */}
            <div className="absolute inset-0 m-auto hidden size-fit lg:block">
              <NavigationMenu>
                <NavigationMenuList>
                  <NavigationMenuItem>
                    <NavigationMenuTrigger className="bg-transparent">
                      Services
                    </NavigationMenuTrigger>
                    <NavigationMenuContent>
                      <ul className="grid w-[400px] gap-3 p-4 md:w-[500px] md:grid-cols-2 lg:w-[600px]">
                        {services.map((component) => (
                          <ListItem
                            key={component.title}
                            title={component.title}
                            href={component.href}
                          >
                            {component.description}
                          </ListItem>
                        ))}
                      </ul>
                    </NavigationMenuContent>
                  </NavigationMenuItem>
                  <NavigationMenuItem>
                    <NavigationMenuTrigger className="bg-transparent">
                      Our Business
                    </NavigationMenuTrigger>
                    <NavigationMenuContent>
                      <ul className="grid gap-3 p-6 md:w-[600px] lg:w-[900px] lg:grid-cols-[250px_250px_1fr]">
                        {/* Column 1: Intro & Pharma */}
                        <li className="space-y-3">
                          <div className="flex w-full select-none flex-col justify-end rounded-md bg-gradient-to-b from-muted/50 to-muted p-6 no-underline outline-none focus:shadow-md">
                            <div className="mb-2 text-lg font-medium">
                              Divisions
                            </div>
                            <p className="text-sm leading-tight text-muted-foreground">
                              Explore our specialized healthcare units.
                            </p>
                          </div>
                          <ListItem
                            href="/business/pharmaceutical"
                            title="Pharmaceutical"
                          >
                            Diabetic, Cardio, Neuro & more.
                          </ListItem>
                        </li>

                        {/* Column 2: Orthopedic & Trauma/Spine */}
                        <li className="space-y-3">
                          <div className="px-3 py-2 text-sm font-bold text-muted-foreground uppercase tracking-wider">
                            Specialties
                          </div>
                          <ListItem
                            href="/business/orthopedic-aids"
                            title="Orthopedic Aids"
                          >
                            Braces, Supports & Rehab.
                          </ListItem>
                          <div className="my-2 border-t" />
                          <div className="px-3 text-xs font-bold text-primary">
                            SURGICALS
                          </div>
                          <ListItem
                            href="/business/surgicals-trauma"
                            title="Trauma"
                          >
                            Nails, Plates & Screws.
                          </ListItem>
                          <ListItem
                            href="/business/surgicals-spine"
                            title="Spine"
                          >
                            Cages & Fixation Systems.
                          </ListItem>
                        </li>

                        {/* Column 3: Surgicals - Arthroplasty (Hierarchy Level 3) */}
                        <li>
                          <div className="px-3 py-2 text-sm font-bold text-muted-foreground uppercase tracking-wider">
                            Arthroplasty
                          </div>
                          <ul className="grid gap-2">
                            <ListItem
                              href="/business/surgicals-knee"
                              title="Knee"
                            >
                              Truliant, Optetrak & GPS.
                            </ListItem>
                            <ListItem
                              href="/business/surgicals-shoulder"
                              title="Shoulder"
                            >
                              Equinoxe Platform.
                            </ListItem>
                            <ListItem
                              href="/business/surgicals-hip"
                              title="Hip"
                            >
                              Total & Revision Systems.
                            </ListItem>
                            <ListItem
                              href="/business/surgicals-tumour"
                              title="Tumour Prosthesis"
                            >
                              Megaprosthesis Solutions.
                            </ListItem>
                          </ul>
                        </li>
                      </ul>
                    </NavigationMenuContent>
                  </NavigationMenuItem>
                  {mainLinks.map((link) => (
                    <NavigationMenuItem key={link.name}>
                      <Link href={link.href}>
                        {/* @next-codemod-error This Link previously used the now removed `legacyBehavior` prop, and has a child that might not be an anchor. The codemod bailed out of lifting the child props to the Link. Check that the child component does not render an anchor, and potentially move the props manually to Link. */}
                        <NavigationMenuLink
                          className={cn(
                            navigationMenuTriggerStyle(),
                            "bg-transparent",
                          )}
                        >
                          {link.name}
                        </NavigationMenuLink>
                      </Link>
                    </NavigationMenuItem>
                  ))}
                </NavigationMenuList>
              </NavigationMenu>
            </div>

            {/* Mobile Navigation */}
            <AnimatePresence>
              {menuState && (
                <motion.div
                  initial={{ x: "-100%" }}
                  animate={{ x: 0 }}
                  exit={{ x: "-100%" }}
                  transition={{ type: "spring", bounce: 0, duration: 0.4 }}
                  className="fixed inset-x-0 top-[60px] z-50 h-[calc(100vh-60px)] overflow-y-auto bg-zinc-950 border-t lg:hidden"
                >
                  <div className="flex flex-col p-6 space-y-6">
                    <ul className="space-y-4 text-base">
                      {/* Services Dropdown */}
                      <MobileDropdown title="Services">
                        <ul className="space-y-4 pl-4 border-l my-2">
                          {services.map((item, index) => (
                            <li key={index}>
                              <Link
                                href={item.href}
                                className="text-muted-foreground hover:text-foreground block py-1"
                                onClick={() => setMenuState(false)}
                              >
                                {item.title}
                              </Link>
                            </li>
                          ))}
                        </ul>
                      </MobileDropdown>

                      {/* Our Business Dropdown */}
                      <MobileDropdown title="Our Business">
                        <ul className="space-y-4 pl-4 border-l my-2">
                          <li className="font-medium text-foreground py-1">
                            Divisions
                          </li>
                          <li>
                            <Link
                              href="/business/pharmaceutical"
                              className="text-muted-foreground hover:text-foreground block py-1"
                              onClick={() => setMenuState(false)}
                            >
                              Pharmaceutical
                            </Link>
                          </li>

                          <li className="font-medium text-foreground pt-2 py-1">
                            Orthopedic Sub-Divisions
                          </li>
                          <li>
                            <Link
                              href="/business/orthopedic-aids"
                              className="text-muted-foreground hover:text-foreground block py-1"
                              onClick={() => setMenuState(false)}
                            >
                              Orthopedic Aids
                            </Link>
                          </li>
                          <li>
                            <Link
                              href="/business/surgicals-trauma"
                              className="text-muted-foreground hover:text-foreground block py-1"
                              onClick={() => setMenuState(false)}
                            >
                              Trauma
                            </Link>
                          </li>
                          <li>
                            <Link
                              href="/business/surgicals-spine"
                              className="text-muted-foreground hover:text-foreground block py-1"
                              onClick={() => setMenuState(false)}
                            >
                              Spine
                            </Link>
                          </li>
                          <li>
                            <Link
                              href="/business/surgicals-knee"
                              className="text-muted-foreground hover:text-foreground block py-1"
                              onClick={() => setMenuState(false)}
                            >
                              Knee
                            </Link>
                          </li>
                          <li>
                            <Link
                              href="/business/surgicals-shoulder"
                              className="text-muted-foreground hover:text-foreground block py-1"
                              onClick={() => setMenuState(false)}
                            >
                              Shoulder
                            </Link>
                          </li>
                          <li>
                            <Link
                              href="/business/surgicals-hip"
                              className="text-muted-foreground hover:text-foreground block py-1"
                              onClick={() => setMenuState(false)}
                            >
                              Hip
                            </Link>
                          </li>
                          <li>
                            <Link
                              href="/business/surgicals-tumour"
                              className="text-muted-foreground hover:text-foreground block py-1"
                              onClick={() => setMenuState(false)}
                            >
                              Tumour Prosthesis
                            </Link>
                          </li>
                        </ul>
                      </MobileDropdown>

                      {/* Main Links */}
                      {mainLinks.map((item, index) => (
                        <li key={index} className="border-b pb-4 last:border-0">
                          <Link
                            href={item.href}
                            className="text-foreground font-medium block py-2"
                            onClick={() => setMenuState(false)}
                          >
                            {item.name}
                          </Link>
                        </li>
                      ))}
                    </ul>

                    <div className="pt-4">
                      <Button asChild className="w-full">
                        <Link
                          href="/contact-us"
                          onClick={() => setMenuState(false)}
                        >
                          Contact Us
                        </Link>
                      </Button>
                    </div>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </div>
      </nav>
    </header>
  );
};

const ListItem = React.forwardRef<
  React.ElementRef<"a">,
  React.ComponentPropsWithoutRef<"a">
>(({ className, title, children, ...props }, ref) => {
  return (
    <li>
      <NavigationMenuLink asChild>
        <a
          ref={ref}
          className={cn(
            "block select-none space-y-1 p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground",
            className,
          )}
          {...props}
        >
          <div className="text-sm font-medium leading-none">{title}</div>
          <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
            {children}
          </p>
        </a>
      </NavigationMenuLink>
    </li>
  );
});
ListItem.displayName = "ListItem";
const MobileDropdown = ({
  title,
  children,
}: {
  title: string;
  children: React.ReactNode;
}) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="border-b border-zinc-800 last:border-0">
      <Button
        variant="ghost"
        onClick={() => setIsOpen(!isOpen)}
        className="flex w-full items-center justify-between py-6 px-0 hover:bg-transparent text-lg font-semibold text-primary transition-colors hover:text-primary/80"
      >
        <span>{title}</span>
        <ChevronDown
          className={cn(
            "h-4 w-4 transition-transform duration-200",
            isOpen && "rotate-180",
          )}
        />
      </Button>
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="overflow-hidden"
          >
            {children}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};
