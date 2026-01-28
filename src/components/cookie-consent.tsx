"use client";

import { Cookie, X } from "lucide-react";
import Link from "next/link";
import { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";

export default function CookieConsent() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // Check if user has already made a choice
    const consent = localStorage.getItem("cookie-consent");
    if (!consent) {
      // Show banner after a small delay for better UX
      const timer = setTimeout(() => setIsVisible(true), 1000);
      return () => clearTimeout(timer);
    }
  }, []);

  const handleAccept = () => {
    localStorage.setItem("cookie-consent", "accepted");
    setIsVisible(false);
  };

  const handleDecline = () => {
    localStorage.setItem("cookie-consent", "declined");
    setIsVisible(false);
  };

  if (!isVisible) return null;

  return (
    <div className="fixed bottom-0 left-0 right-0 z-50 p-4 md:p-6">
      <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-4 border bg-background/95 p-6 shadow-2xl backdrop-blur-sm md:flex-row md:gap-8">
        <div className="flex items-start gap-4">
          <div className="hidden rounded-full bg-primary/10 p-2 md:block">
            <Cookie className="h-6 w-6 text-primary" />
          </div>
          <div className="space-y-1">
            <h3 className="text-sm font-semibold">We value your privacy</h3>
            <p className="text-sm text-muted-foreground">
              We use necessary cookies to make our site work. We'd also like to
              set analytics cookies to help us improve it. See our{" "}
              <Link
                href="/cookie-policy"
                className="font-medium text-primary underline underline-offset-4"
              >
                Cookie Policy
              </Link>
              .
            </p>
          </div>
        </div>
        <div className="flex w-full flex-col gap-2 md:w-auto md:flex-row">
          <Button
            variant="outline"
            onClick={handleDecline}
            className="w-full md:w-auto"
          >
            Decline
          </Button>
          <Button onClick={handleAccept} className="w-full md:w-auto">
            Accept All
          </Button>
        </div>
        <Button
          variant="ghost"
          size="icon"
          className="absolute right-2 top-2 h-6 w-6 text-muted-foreground md:hidden"
          onClick={() => setIsVisible(false)}
        >
          <X className="h-4 w-4" />
        </Button>
      </div>
    </div>
  );
}
