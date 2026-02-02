"use client";

import Link from "next/link";
import React from "react";
import { AnimatePresence, motion } from "motion/react";
import { businessCategories } from "@/lib/business-data";
import { services, mainLinks } from "./header-data";
import { MobileDropdown, NestedMobileDropdown } from "./mobile-dropdown";
import { Button } from "@/components/ui/button";

interface MobileNavProps {
  isOpen: boolean;
  onClose: () => void;
}

export const MobileNav = ({ isOpen, onClose }: MobileNavProps) => {
  return (
    <AnimatePresence>
      {isOpen && (
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
                        onClick={onClose}
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
                  {businessCategories.map((category) => {
                    // Check if category has subcategories
                    if (
                      category.subCategories &&
                      category.subCategories.length > 0
                    ) {
                      // Handle Tag Group Mobile - No Nested Dropdown, just list
                      if (category.type === "tag") {
                        return (
                          <li key={category.slug}>
                            <div className="py-2 text-sm font-semibold text-primary/70 uppercase">
                              {category.title}
                            </div>
                            <ul className="pl-4 border-l space-y-2">
                              {category.subCategories.map((sub) => (
                                <li key={sub.slug}>
                                  <Link
                                    href={`/business/${sub.slug}`}
                                    className="text-muted-foreground hover:text-foreground block py-1"
                                    onClick={onClose}
                                  >
                                    {sub.title}
                                  </Link>
                                </li>
                              ))}
                            </ul>
                          </li>
                        );
                      }

                      return (
                        <li key={category.slug}>
                          <NestedMobileDropdown title={category.title}>
                            <ul className="space-y-2 border-l pl-4 my-1">
                              {category.subCategories.map((subCat) => {
                                // Handle Tag Group inside Mobile Submenu
                                if (
                                  subCat.type === "tag" &&
                                  subCat.subCategories
                                ) {
                                  return (
                                    <li key={subCat.slug}>
                                      <div className="py-1 text-xs font-semibold text-muted-foreground uppercase tracking-wide">
                                        {subCat.title}
                                      </div>
                                      <ul className="pl-4 border-l space-y-1 mt-1">
                                        {subCat.subCategories.map(
                                          (nestedSub) => {
                                            if (
                                              nestedSub.subCategories &&
                                              nestedSub.subCategories.length > 0
                                            ) {
                                              return (
                                                <li key={nestedSub.slug}>
                                                  <NestedMobileDropdown
                                                    title={nestedSub.title}
                                                  >
                                                    <ul className="pl-4 border-l space-y-1">
                                                      {nestedSub.subCategories.map(
                                                        (leaf) => (
                                                          <li key={leaf.slug}>
                                                            <Link
                                                              href={`/business/${leaf.slug}`}
                                                              className="text-muted-foreground hover:text-foreground block py-1 text-sm"
                                                              onClick={onClose}
                                                            >
                                                              {leaf.title}
                                                            </Link>
                                                          </li>
                                                        ),
                                                      )}
                                                    </ul>
                                                  </NestedMobileDropdown>
                                                </li>
                                              );
                                            }
                                            return (
                                              <li key={nestedSub.slug}>
                                                <Link
                                                  href={`/business/${nestedSub.slug}`}
                                                  className="text-muted-foreground hover:text-foreground block py-1 text-sm"
                                                  onClick={onClose}
                                                >
                                                  {nestedSub.title}
                                                </Link>
                                              </li>
                                            );
                                          },
                                        )}
                                      </ul>
                                    </li>
                                  );
                                }

                                if (
                                  subCat.subCategories &&
                                  subCat.subCategories.length > 0
                                ) {
                                  return (
                                    <li key={subCat.slug}>
                                      <NestedMobileDropdown
                                        title={subCat.title}
                                      >
                                        <ul className="space-y-2 border-l pl-4 my-1">
                                          {subCat.subCategories.map(
                                            (nestedSub) => {
                                              if (
                                                nestedSub.subCategories &&
                                                nestedSub.subCategories.length >
                                                  0
                                              ) {
                                                // Trauma / Arthroplasty
                                                return (
                                                  <li key={nestedSub.slug}>
                                                    <NestedMobileDropdown
                                                      title={nestedSub.title}
                                                    >
                                                      <ul className="pl-4 my-1 border-l space-y-2">
                                                        {nestedSub.subCategories.map(
                                                          (leaf) => (
                                                            <li key={leaf.slug}>
                                                              <Link
                                                                href={`/business/${leaf.slug}`}
                                                                className="text-muted-foreground hover:text-foreground block py-1 text-sm"
                                                                onClick={
                                                                  onClose
                                                                }
                                                              >
                                                                {leaf.title}
                                                              </Link>
                                                            </li>
                                                          ),
                                                        )}
                                                      </ul>
                                                    </NestedMobileDropdown>
                                                  </li>
                                                );
                                              }
                                              return (
                                                <li key={nestedSub.slug}>
                                                  <Link
                                                    href={`/business/${nestedSub.slug}`}
                                                    className="text-muted-foreground hover:text-foreground block py-1 text-sm"
                                                    onClick={onClose}
                                                  >
                                                    {nestedSub.title}
                                                  </Link>
                                                </li>
                                              );
                                            },
                                          )}
                                        </ul>
                                      </NestedMobileDropdown>
                                    </li>
                                  );
                                }
                                return (
                                  <li key={subCat.slug}>
                                    <Link
                                      href={`/business/${subCat.slug}`}
                                      className="text-muted-foreground hover:text-foreground block py-1"
                                      onClick={onClose}
                                    >
                                      {subCat.title}
                                    </Link>
                                  </li>
                                );
                              })}
                            </ul>
                          </NestedMobileDropdown>
                        </li>
                      );
                    }
                    return (
                      <li key={category.slug}>
                        <Link
                          href={`/business/${category.slug}`}
                          className="text-muted-foreground hover:text-foreground block py-1"
                          onClick={onClose}
                        >
                          {category.title}
                        </Link>
                      </li>
                    );
                  })}
                </ul>
              </MobileDropdown>

              {/* Main Links */}
              {mainLinks.map((item, index) => (
                <li key={index} className="border-b pb-4 last:border-0">
                  <Link
                    href={item.href}
                    className="text-foreground font-medium block py-2"
                    onClick={onClose}
                  >
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>

            <div className="pt-4">
              <Button asChild className="w-full">
                <Link href="/contact-us" onClick={onClose}>
                  Contact Us
                </Link>
              </Button>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};
