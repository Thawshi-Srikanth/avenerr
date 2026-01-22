"use client";

import { AnimatePresence, motion } from "motion/react";
import { Menu, X, ChevronDown } from "lucide-react";
import Link from "next/link";
import React, { useState } from "react";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu";
import { businessCategories } from "@/lib/business-data";
import { cn } from "@/lib/utils";
import { Logo } from "./logo";
import { Button } from "./ui/button";

const services = [
  {
    title: "Information Systems",
    href: "/services/information-systems",
    description: "Robust, scalable technology solutions.",
  },
  {
    title: "Logistic Operations",
    href: "/services/logistic-operations",
    description: "Supply chain optimization and automation.",
  },
  {
    title: "Scientific Affairs",
    href: "/services/scientific-affairs",
    description: "Regulatory compliance and clinical support.",
  },
  {
    title: "Training & People Development",
    href: "/services/training-people-development",
    description: "Upskilling and leadership development.",
  },
  {
    title: "Regulatory & Quality Assurance",
    href: "/services/regulatory-quality-assurance",
    description: "Ensuring compliance and quality.",
  },
];

const mainLinks = [
  { name: "About Us", href: "/about-us" },
  { name: "Company Overview", href: "/company-overview" },
  { name: "Our Partners", href: "/partners" },
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
            "mx-auto max-w-7xl bg-background/80 px-6 transition-all duration-300 lg:px-12",
            isScrolled &&
              " max-w-7xl border backdrop-blur-lg lg:px-5 support-[backdrop-filter]:bg-background/80",
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
              <NavigationMenu viewport={false}>
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
                      <ul className="w-[280px] p-2">
                        {/* Pharmaceutical */}
                        <li>
                          <ListItem
                            href={`/business/${businessCategories.find((c) => c.slug === "pharmaceutical")?.slug}`}
                            title={
                              businessCategories.find(
                                (c) => c.slug === "pharmaceutical",
                              )?.title || "Pharmaceutical"
                            }
                            className="hover:bg-accent group"
                          >
                            <span className="text-muted-foreground group-hover:text-accent-foreground">
                              {
                                businessCategories.find(
                                  (c) => c.slug === "pharmaceutical",
                                )?.description
                              }
                            </span>
                          </ListItem>
                        </li>

                        <div className="h-px bg-border my-1 mx-2" />

                        {/* SURGICALS Group */}
                        <li>
                          <FlyoutMenu title="SURGICALS">
                            {/* Sub-Category: Arthroplasty */}
                            <FlyoutMenu title="Arthroplasty">
                              {businessCategories
                                .find((c) => c.slug === "arthroplasty")
                                ?.subCategories?.map((sub) => (
                                  <ListItem
                                    key={sub.slug}
                                    href={`/business/${sub.slug}`}
                                    title={sub.title}
                                    className="py-2"
                                  />
                                ))}
                            </FlyoutMenu>

                            {/* Other Surgicals (Trauma, Spine) */}
                            {businessCategories
                              .filter((c) =>
                                [
                                  "surgicals-trauma",
                                  "surgicals-spine",
                                ].includes(c.slug),
                              )
                              .map((cat) => (
                                <ListItem
                                  key={cat.slug}
                                  href={`/business/${cat.slug}`}
                                  title={cat.title}
                                  className="py-2"
                                />
                              ))}
                          </FlyoutMenu>
                        </li>

                        <div className="h-px bg-border my-1 mx-2" />

                        {/* Orthopedic Aids Group */}
                        <li>
                          <FlyoutMenu title="Orthopedic Aids">
                            <div className="max-h-[400px] overflow-y-auto custom-scrollbar pr-1">
                              {businessCategories
                                .find((c) => c.slug === "orthopedic-aids")
                                ?.subCategories?.map((sub) => (
                                  <ListItem
                                    key={sub.slug}
                                    href={`/business/${sub.slug}`}
                                    title={sub.title}
                                    className="py-2"
                                  />
                                ))}
                            </div>
                          </FlyoutMenu>
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

            <div className="hidden lg:block">
              <Button asChild>
                <Link href="/contact-us">Contact Us</Link>
              </Button>
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
                          {/* Pharmaceutical */}
                          <li>
                            <Link
                              href={`/business/${businessCategories.find((c) => c.slug === "pharmaceutical")?.slug}`}
                              className="text-muted-foreground hover:text-foreground block py-1"
                              onClick={() => setMenuState(false)}
                            >
                              {businessCategories.find(
                                (c) => c.slug === "pharmaceutical",
                              )?.title || "Pharmaceutical"}
                            </Link>
                          </li>

                          {/* SURGICALS Section */}
                          <li className="font-medium text-primary py-1 mt-2">
                            SURGICALS
                          </li>

                          {/* Arthroplasty Nested Dropdown */}
                          <li>
                            <NestedMobileDropdown title="Arthroplasty">
                              <ul className="space-y-2 border-l pl-4 my-1">
                                {businessCategories
                                  .find((c) => c.slug === "arthroplasty")
                                  ?.subCategories?.map((sub) => (
                                    <li key={sub.slug}>
                                      <Link
                                        href={`/business/${sub.slug}`}
                                        className="text-muted-foreground hover:text-foreground block py-1 text-sm"
                                        onClick={() => setMenuState(false)}
                                      >
                                        {sub.title}
                                      </Link>
                                    </li>
                                  ))}
                              </ul>
                            </NestedMobileDropdown>
                          </li>

                          {/* Trauma */}
                          {businessCategories
                            .filter((c) => c.slug === "surgicals-trauma")
                            .map((cat) => (
                              <li key={cat.slug}>
                                <Link
                                  href={`/business/${cat.slug}`}
                                  className="text-muted-foreground hover:text-foreground block py-1"
                                  onClick={() => setMenuState(false)}
                                >
                                  {cat.title}
                                </Link>
                              </li>
                            ))}

                          {/* Spine */}
                          {businessCategories
                            .filter((c) => c.slug === "surgicals-spine")
                            .map((cat) => (
                              <li key={cat.slug}>
                                <Link
                                  href={`/business/${cat.slug}`}
                                  className="text-muted-foreground hover:text-foreground block py-1"
                                  onClick={() => setMenuState(false)}
                                >
                                  {cat.title}
                                </Link>
                              </li>
                            ))}

                          {/* Orthopedic Aids Nested Dropdown */}
                          <li>
                            <NestedMobileDropdown title="Orthopedic Aids">
                              <ul className="space-y-2 border-l pl-4 my-1">
                                {businessCategories
                                  .find((c) => c.slug === "orthopedic-aids")
                                  ?.subCategories?.map((sub) => (
                                    <li key={sub.slug}>
                                      <Link
                                        href={`/business/${sub.slug}`}
                                        className="text-muted-foreground hover:text-foreground block py-1 text-sm"
                                        onClick={() => setMenuState(false)}
                                      >
                                        {sub.title}
                                      </Link>
                                    </li>
                                  ))}
                              </ul>
                            </NestedMobileDropdown>
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

const FlyoutMenu = ({
  title,
  children,
}: {
  title: string;
  children: React.ReactNode;
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
        <ChevronDown className="h-4 w-4 -rotate-90 text-muted-foreground" />
      </button>

      {/* Flyout Content */}
      <AnimatePresence>
        {isHovered && (
          <motion.div
            initial={{ opacity: 0, x: -5 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -5 }}
            transition={{ duration: 0.1 }}
            className="absolute left-full top-0 ml-0.5 min-w-[280px] rounded-md border bg-popover text-popover-foreground shadow-md z-50"
          >
            <div className="p-2 space-y-1">{children}</div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

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
        type="button"
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

const NestedMobileDropdown = ({
  title,
  children,
}: {
  title: string;
  children: React.ReactNode;
}) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="w-full">
      <button
        type="button"
        onClick={() => setIsOpen(!isOpen)}
        className="flex w-full items-center justify-between py-1 text-muted-foreground hover:text-foreground transition-colors"
      >
        <span>{title}</span>
        <ChevronDown
          className={cn(
            "h-4 w-4 transition-transform duration-200",
            isOpen && "rotate-180",
          )}
        />
      </button>
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
