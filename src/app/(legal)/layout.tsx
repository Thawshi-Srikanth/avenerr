import LegalSidebar from "@/components/legal-sidebar";
import React from "react";

export default function LegalLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="min-h-screen bg-background pt-20 lg:pt-24">
      {/* Legal Center Header */}
      <div className="border-b bg-muted/30">
        <div className="mx-auto max-w-7xl px-6 py-12 md:py-16">
          <div className="mb-4 inline-flex items-center gap-2 border border-primary/20 bg-primary/5 px-3 py-1 text-xs font-bold uppercase tracking-widest text-primary">
            Legal Center
          </div>
          <h1 className="text-4xl font-bold tracking-tighter md:text-5xl">
            Transparency & Trust
          </h1>
          <p className="mt-4 max-w-2xl text-lg text-muted-foreground">
            Read about our terms, policies, and how we protect your data at
            Avenierr Pharma.
          </p>
        </div>
      </div>

      {/* Content Grid */}
      <div className="mx-auto grid max-w-7xl gap-12 px-6 py-12 lg:grid-cols-[250px_1fr]">
        <aside className="space-y-6">
          <div className="sticky top-32">
            <h3 className="mb-4 px-4 text-sm font-bold uppercase tracking-wider text-muted-foreground">
              Documents
            </h3>
            <LegalSidebar />
          </div>
        </aside>

        <div className="min-h-[50vh] max-w-3xl">
          <div className="border p-8 shadow-sm lg:p-12">{children}</div>
        </div>
      </div>
    </div>
  );
}
