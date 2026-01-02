"use client";

import { Menu, X } from "lucide-react";
import Link from "next/link";
import React from "react";
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
  { name: "Contact Us", href: "/contact-us" },
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
                      <Link href={link.href} legacyBehavior passHref>
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
            <div className="bg-background in-data-[state=active]:block lg:in-data-[state=active]:flex mb-6 hidden w-full flex-wrap items-center justify-end space-y-8 border p-6 shadow-2xl shadow-zinc-300/20 md:flex-nowrap lg:m-0 lg:flex lg:w-fit lg:gap-6 lg:space-y-0 lg:border-transparent lg:bg-transparent lg:p-0 lg:shadow-none dark:shadow-none dark:lg:bg-transparent">
              <div className="lg:hidden w-full">
                <ul className="space-y-6 text-base">
                  <li className="font-semibold text-primary">Services</li>
                  <ul className="space-y-4 pl-4 border-l">
                    {services.map((item, index) => (
                      <li key={index}>
                        <Link
                          href={item.href}
                          className="text-muted-foreground hover:text-accent-foreground block duration-150"
                          onClick={() => setMenuState(false)}
                        >
                          {item.title}
                        </Link>
                      </li>
                    ))}
                  </ul>
                  {mainLinks.map((item, index) => (
                    <li key={index}>
                      <Link
                        href={item.href}
                        className="text-foreground hover:text-primary block duration-150 font-medium"
                        onClick={() => setMenuState(false)}
                      >
                        {item.name}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="flex w-full flex-col space-y-3 sm:flex-row sm:gap-3 sm:space-y-0 md:w-fit">
                <Button
                  asChild
                  size="sm"
                  className={cn(
                    isScrolled ? "lg:inline-flex" : "lg:inline-flex",
                  )}
                >
                  <Link href="/contact-us">
                    <span>Get Started</span>
                  </Link>
                </Button>
              </div>
            </div>
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
