import { Building2, Mail, MapPin, Phone } from "lucide-react";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";

export const metadata = {
  title: "Contact Us | Avenierr Pharma",
  description:
    "Get in touch with Avenierr Pharma for pharmaceutical, orthopedic, and surgical product inquiries.",
};

export default function ContactPage() {
  return (
    <div className="min-h-screen bg-background pt-20 lg:pt-28">
      {/* Hero Section */}
      <div className="relative h-[40vh] w-full overflow-hidden bg-zinc-950 text-white">
        <Image
          src="/images/business-hero.png"
          alt="Background"
          fill
          className="object-cover grayscale brightness-50"
        />
        <div className="absolute inset-0 bg-[url('/images/contact-hero-pattern.png')] opacity-20" />
        <div className="absolute inset-0 bg-linear-to-t from-background via-background/60 to-transparent" />
        <div className="relative mx-auto flex h-full max-w-7xl flex-col justify-end px-6 pb-16">
          <div className="mb-4 inline-flex w-fit items-center gap-2 border border-white/20 px-3 py-1 font-mono text-xs uppercase tracking-widest text-zinc-400 backdrop-blur-md">
            <span>Get in Touch</span>
          </div>
          <h1 className="text-5xl font-bold tracking-tighter md:text-7xl">
            Contact Avenierr.
          </h1>
          <p className="mt-4 max-w-xl text-lg text-zinc-400">
            We are here to assist with your medical and pharmaceutical needs.
            Reach out to our experts for support.
          </p>
        </div>
      </div>

      {/* Main Content Split */}
      <div className="mx-auto grid max-w-7xl grid-cols-1 gap-12 px-6 py-24 lg:grid-cols-2">
        {/* Left Column: Contact Info */}
        <div className="space-y-12">
          <div>
            <h2 className="mb-6 text-3xl font-bold tracking-tight">
              Headquarters
            </h2>
            <div className="flex gap-4">
              <MapPin className="h-6 w-6 shrink-0 text-primary" />
              <div className="space-y-1 text-muted-foreground">
                <p className="font-medium text-foreground">
                  Avenierr Pharma (Pvt) Ltd
                </p>
                <p>14 Anderson Road,</p>
                <p>Dehiwala-Mount Lavinia 10350,</p>
                <p>Sri Lanka.</p>
              </div>
            </div>
          </div>

          <div className="grid gap-8 sm:grid-cols-2">
            <div className="space-y-4 border-l-2 border-primary/20 pl-6 transition-colors hover:border-primary">
              <h3 className="flex items-center gap-2 font-bold uppercase tracking-wider text-primary">
                <Phone className="h-4 w-4" /> Phone
              </h3>
              <p className="text-muted-foreground">+94 11 271 2712</p>
              <p className="text-muted-foreground">+94 77 777 7777</p>
            </div>
            <div className="space-y-4 border-l-2 border-primary/20 pl-6 transition-colors hover:border-primary">
              <h3 className="flex items-center gap-2 font-bold uppercase tracking-wider text-primary">
                <Mail className="h-4 w-4" /> Email
              </h3>
              <p className="text-muted-foreground">info@avenierrpharma.com</p>
              <p className="text-muted-foreground">
                support@avenierrpharma.com
              </p>
            </div>
          </div>

          <div className="border bg-muted/30 p-8">
            <h3 className="mb-2 flex items-center gap-2 font-bold">
              <Building2 className="h-5 w-5" />
              Working Hours
            </h3>
            <dl className="space-y-2 text-sm text-muted-foreground">
              <div className="flex justify-between border-b border-dashed pb-2">
                <span>Weekdays</span>
                <span className="font-medium text-foreground">
                  8:30 AM - 5:00 PM
                </span>
              </div>
              <div className="flex justify-between border-b border-dashed pb-2">
                <span>Saturday</span>
                <span className="font-medium text-foreground">
                  9:00 AM - 1:00 PM
                </span>
              </div>
              <div className="flex justify-between pt-1">
                <span>Sunday</span>
                <span className="font-medium text-primary">Closed</span>
              </div>
            </dl>
          </div>
        </div>

        {/* Right Column: Inquiry Form */}
        <div className="bg-background">
          <form className="space-y-8 border p-8 shadow-sm lg:p-12">
            <div className="space-y-2">
              <h2 className="text-2xl font-bold">Send an Inquiry</h2>
              <p className="text-sm text-muted-foreground">
                Fill out the form below and our team will get back to you
                shortly.
              </p>
            </div>

            <div className="grid gap-6 md:grid-cols-2">
              <div className="space-y-2">
                <Label htmlFor="firstName">First Name</Label>
                <Input
                  id="firstName"
                  placeholder="John"
                  className="rounded-none border-zinc-200 bg-zinc-50 focus:border-primary focus:bg-white"
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="lastName">Last Name</Label>
                <Input
                  id="lastName"
                  placeholder="Doe"
                  className="rounded-none border-zinc-200 bg-zinc-50 focus:border-primary focus:bg-white"
                />
              </div>
            </div>

            <div className="space-y-2">
              <Label htmlFor="email">Email Address</Label>
              <Input
                id="email"
                type="email"
                placeholder="john@company.com"
                className="rounded-none border-zinc-200 bg-zinc-50 focus:border-primary focus:bg-white"
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="subject">Subject</Label>
              <Input
                id="subject"
                placeholder="Product Inquiry..."
                className="rounded-none border-zinc-200 bg-zinc-50 focus:border-primary focus:bg-white"
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="message">Message</Label>
              <Textarea
                id="message"
                placeholder="How can we help you?"
                className="min-h-[150px] rounded-none border-zinc-200 bg-zinc-50 focus:border-primary focus:bg-white"
              />
            </div>

            <Button
              type="submit"
              size="lg"
              className="w-full rounded-none bg-zinc-900 text-white hover:bg-primary"
            >
              Send Message
            </Button>
          </form>
        </div>
      </div>

      {/* Map Section */}
      <div className="h-[400px] w-full border-y grayscale filter transition-all hover:grayscale-0">
        <iframe
          title="map"
          src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d63379.409909631715!2d79.880213!3d6.865045!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ae25a5187bb0c23%3A0x106e6116d34eb8fb!2s14%20Anderson%20Rd%2C%20Dehiwala-Mount%20Lavinia%2010350%2C%20Sri%20Lanka!5e0!3m2!1sen!2sus!4v1763469232991!5m2!1sen!2sus"
          className="h-full w-full border-0"
          allowFullScreen
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        />
      </div>
    </div>
  );
}
