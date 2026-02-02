"use client";

import Link from "next/link";
import React from "react";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu";
import { cn } from "@/lib/utils";
import { businessCategories } from "@/lib/business-data";
import { services, mainLinks } from "./header-data";
import { ListItem } from "./list-item";
import { FlyoutMenu } from "./flyout-menu";

export const DesktopNav = () => {
  return (
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
              <ul className="w-[300px] p-2">
                {businessCategories.map((category) => {
                  // Handle Tag Group (Header + children inline)
                  if (category.type === "tag" && category.subCategories) {
                    return (
                      <li key={category.slug} className="mb-2">
                        <div className="px-3 py-2 text-sm font-semibold text-primary/80 uppercase tracking-wider">
                          {category.title}
                        </div>
                        <ul className="space-y-1">
                          {category.subCategories.map((subCat) => (
                            <li key={subCat.slug}>
                              {/* Check if this subCat needs a Flyout (e.g. Arthroplasty with deeper levels) */}
                              {subCat.subCategories &&
                              subCat.subCategories.length > 0 ? (
                                <FlyoutMenu title={subCat.title}>
                                  {subCat.subCategories.map((leaf) => (
                                    <ListItem
                                      key={leaf.slug}
                                      href={`/business/${leaf.slug}`}
                                      title={leaf.title}
                                      className="py-2"
                                    />
                                  ))}
                                </FlyoutMenu>
                              ) : (
                                <ListItem
                                  href={`/business/${subCat.slug}`}
                                  title={subCat.title}
                                  className="py-2"
                                />
                              )}
                            </li>
                          ))}
                        </ul>
                        <div className="h-px bg-border mt-2 mx-2" />
                      </li>
                    );
                  }

                  // Check if category has subcategories (Medical Devices - Normal Flyout)
                  if (
                    category.subCategories &&
                    category.subCategories.length > 0
                  ) {
                    return (
                      <li key={category.slug}>
                        <FlyoutMenu title={category.title}>
                          {category.subCategories.map((subCat) => {
                            // Handle Tag Group inside a Flyout (e.g. Orthopedic Implants inside Medical Devices)
                            if (subCat.type === "tag" && subCat.subCategories) {
                              return (
                                <div key={subCat.slug} className="mb-2 mt-1">
                                  <div className="px-3 py-1.5 text-xs font-semibold text-muted-foreground uppercase tracking-wider">
                                    {subCat.title}
                                  </div>
                                  <ul className="space-y-0.5">
                                    {subCat.subCategories.map((nestedSub) => (
                                      <li key={nestedSub.slug}>
                                        {/* Check if nestedSub has subcategories (Arthroplasty -> Deep Flyout) */}
                                        {nestedSub.subCategories &&
                                        nestedSub.subCategories.length > 0 ? (
                                          // Force left side for deep nesting to avoid clipping
                                          <FlyoutMenu
                                            title={nestedSub.title}
                                            side="left"
                                          >
                                            {nestedSub.subCategories.map(
                                              (leaf) => (
                                                <ListItem
                                                  key={leaf.slug}
                                                  href={`/business/${leaf.slug}`}
                                                  title={leaf.title}
                                                  className="py-2"
                                                />
                                              ),
                                            )}
                                          </FlyoutMenu>
                                        ) : (
                                          <ListItem
                                            href={`/business/${nestedSub.slug}`}
                                            title={nestedSub.title}
                                            className="py-2"
                                          />
                                        )}
                                      </li>
                                    ))}
                                  </ul>
                                </div>
                              );
                            }

                            // Check if subcategory has subcategories (Orthopedic Aids, Implants)
                            if (
                              subCat.subCategories &&
                              subCat.subCategories.length > 0
                            ) {
                              return (
                                <FlyoutMenu
                                  key={subCat.slug}
                                  title={subCat.title}
                                >
                                  <div className="max-h-[400px]  pr-1">
                                    {subCat.subCategories.map((nestedSub) => {
                                      // Check if nested subcategory has subcategories (Arthroplasty, Trauma)
                                      if (
                                        nestedSub.subCategories &&
                                        nestedSub.subCategories.length > 0
                                      ) {
                                        return (
                                          <FlyoutMenu
                                            key={nestedSub.slug}
                                            title={nestedSub.title}
                                            side="left"
                                          >
                                            <div className="max-h-[400px] pr-1 z-999">
                                              {nestedSub.subCategories.map(
                                                (leaf) => (
                                                  <ListItem
                                                    key={leaf.slug}
                                                    href={`/business/${leaf.slug}`}
                                                    title={leaf.title}
                                                    className="py-2"
                                                  />
                                                ),
                                              )}
                                            </div>
                                          </FlyoutMenu>
                                        );
                                      }
                                      return (
                                        <ListItem
                                          key={nestedSub.slug}
                                          href={`/business/${nestedSub.slug}`}
                                          title={nestedSub.title}
                                          className="py-2"
                                        />
                                      );
                                    })}
                                  </div>
                                </FlyoutMenu>
                              );
                            }
                            return (
                              <ListItem
                                key={subCat.slug}
                                href={`/business/${subCat.slug}`}
                                title={subCat.title}
                                className="py-2"
                              />
                            );
                          })}
                        </FlyoutMenu>
                      </li>
                    );
                  }

                  // Render top-level item without subcategories
                  return (
                    <li key={category.slug}>
                      <ListItem
                        href={`/business/${category.slug}`}
                        title={category.title}
                        className="hover:bg-accent group"
                      >
                        {category.description && (
                          <span className="text-muted-foreground group-hover:text-accent-foreground">
                            {category.description}
                          </span>
                        )}
                      </ListItem>
                    </li>
                  );
                })}
              </ul>
            </NavigationMenuContent>
          </NavigationMenuItem>
          {mainLinks.map((link) => (
            <NavigationMenuItem key={link.name}>
              <Link href={link.href} legacyBehavior passHref>
                <NavigationMenuLink
                  className={cn(navigationMenuTriggerStyle(), "bg-transparent")}
                >
                  {link.name}
                </NavigationMenuLink>
              </Link>
            </NavigationMenuItem>
          ))}
        </NavigationMenuList>
      </NavigationMenu>
    </div>
  );
};
