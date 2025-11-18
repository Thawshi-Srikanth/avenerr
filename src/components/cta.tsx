"use client";
import { Logo } from "@/components/logo";
import { Button } from "@/components/ui/button";
import { ArrowRight, Mail, Menu, SendHorizonal, X } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export default function CTA() {
  return (
    <>
      <main>
        <section className="overflow-hidden">
          <div className="relative mx-auto max-w-7xl px-6 py-28 lg:py-20">
            <div className="lg:flex lg:items-center lg:gap-12">
              <div className="relative z-10 mx-auto max-w-xl text-center lg:ml-0 lg:w-1/2 lg:text-left">
                <h1 className="mt-10 text-balance text-4xl font-bold md:text-5xl xl:text-5xl">
                  Maintaining the Highest Global Standards
                </h1>
                <p className="mt-8">
                  Error totam sit illum. Voluptas doloribus asperiores quaerat
                  aperiam. Quidem harum omnis beatae ipsum soluta!
                </p>

                <div>
                  <form
                    action=""
                    className="mx-auto my-10 max-w-sm lg:my-12 lg:ml-0 lg:mr-auto"
                  >
                    <div className="bg-background has-[input:focus]:ring-muted relative grid grid-cols-[1fr_auto] items-center  border pr-3 shadow shadow-zinc-950/5 has-[input:focus]:ring-2">
                      <Mail className="text-caption pointer-events-none absolute inset-y-0 left-5 my-auto size-5" />

                      <input
                        placeholder="Your mail address"
                        className="h-14 w-full bg-transparent pl-12 focus:outline-none"
                        type="email"
                      />

                      <div className="md:pr-1.5 lg:pr-0">
                        <Button
                          aria-label="submit"
                          className="rounded-none cursor-pointer"
                        >
                          <span className="hidden md:block">Get Started</span>
                          <SendHorizonal
                            className="relative mx-auto size-5 md:hidden"
                            strokeWidth={2}
                          />
                        </Button>
                      </div>
                    </div>
                  </form>
                </div>
              </div>
            </div>
            <div className="absolute inset-0 w-full -mx-4 rounded-3xl p-3 lg:col-span-4">
              <div className="relative">
                <div className="bg-radial-[at_65%_25%] to-background z-1 -inset-17 absolute from-transparent to-40%"></div>
                <Image
                  className="hidden dark:block"
                  src="/images/home-4.jpg"
                  alt="app illustration"
                  width={2000}
                  height={1333}
                />
                <Image
                  className="dark:hidden"
                  src="/images/home-4.jpg"
                  alt="app illustration"
                  width={2000}
                  height={1333}
                />
              </div>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}
