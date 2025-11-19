import { ArrowRight } from "lucide-react";
import Link from "next/link";
import { AnimatedGroup } from "@/components/ui/animated-group";
import { TextEffect } from "@/components/ui/text-effect";

const transitionVariants = {
  item: {
    hidden: {
      opacity: 0,
      filter: "blur(12px)",
      y: 12,
    },
    visible: {
      opacity: 1,
      filter: "blur(0px)",
      y: 0,
      transition: {
        type: "spring",
        bounce: 0.3,
        duration: 1.5,
      },
    },
  },
};

export default function HeroSection() {
  return (
    <main className="overflow-hidden bg-accent h-svh bg-[url(/images/home-1.png)] bg-fixed bg-cover bg-center bg-no-repeat">
      <div
        aria-hidden
        className="absolute inset-0 isolate hidden opacity-65 contain-strict lg:block"
      >
        <div className="w-140 h-320 -translate-y-87.5 absolute left-0 top-0 -rotate-45 rounded-full bg-[radial-gradient(68.54%_68.72%_at_55.02%_31.46%,hsla(0,0%,85%,.08)_0,hsla(0,0%,55%,.02)_50%,hsla(0,0%,45%,0)_80%)]" />
        <div className="h-320 absolute left-0 top-0 w-60 -rotate-45 rounded-full bg-[radial-gradient(50%_50%_at_50%_50%,hsla(0,0%,85%,.06)_0,hsla(0,0%,45%,.02)_80%,transparent_100%)] [translate:5%_-50%]" />
        <div className="h-320 -translate-y-87.5 absolute left-0 top-0 w-60 -rotate-45 bg-[radial-gradient(50%_50%_at_50%_50%,hsla(0,0%,85%,.04)_0,hsla(0,0%,45%,.02)_80%,transparent_100%)]" />
      </div>
      <section>
        <div className="relative pt-24 md:pt-36 flex min-h-svh w-full items-center justify-center">
          <div
            aria-hidden
            className="absolute inset-0 -z-10 size-full [background:radial-gradient(125%_125%_at_50%_100%,transparent_0%,var(--color-background)_75%)]"
          />

          <div className="my-auto max-w-7xl w-full px-6 z-10">
            <div className=" sm: lg:mr-auto lg:mt-0">
              <div className="mt-8 lg:mt-16">
                <TextEffect
                  preset="fade-in-blur"
                  speedSegment={0.3}
                  as="h1"
                  className=" max-w-4xl text-primary text-balance font-bold text-5xl max-md:font-semibold md:text-7xl  xl:text-[5.25rem]"
                >
                  AVENIERR
                </TextEffect>
                <TextEffect
                  preset="fade-in-blur"
                  speedSegment={0.3}
                  as="h1"
                  className=" max-w-4xl text-white text-balance font-bold text-5xl max-md:font-semibold md:text-7xl xl:text-[5.25rem]"
                >
                  PHARMA
                </TextEffect>
              </div>

              <TextEffect
                per="line"
                preset="fade-in-blur"
                speedSegment={0.3}
                delay={0.5}
                as="p"
                className=" mt-8 max-w-2xl text-balance text-lg text-white"
              >
                Excelling in importing, branding, marketing, and distributing a
                range of pharmaceutical products to deliver quality healthcare
                island-wide.
              </TextEffect>

              <AnimatedGroup variants={transitionVariants}>
                <Link
                  href="#link"
                  className="hover:bg-background mt-6 lg:mt-16 dark:hover:border-primary bg-muted group  flex w-fit items-center gap-4  border  p-1 pl-4 shadow-md shadow-zinc-950/5 transition-colors duration-300 dark:border-t-white/5 dark:shadow-zinc-950"
                >
                  <span className="text-foreground text-sm">
                    Innovation at work
                  </span>
                  <span className="dark:border-background block h-4 w-0.5 border-l bg-white dark:bg-zinc-700"></span>

                  <div className="bg-background group-hover:bg-muted size-12 overflow-hidden  duration-500">
                    <div className="flex w-24 -translate-x-1/2 duration-500 ease-in-out group-hover:translate-x-0">
                      <span className="flex size-12">
                        <ArrowRight className="m-auto size-6" />
                      </span>
                      <span className="flex size-12">
                        <ArrowRight className="m-auto size-6" />
                      </span>
                    </div>
                  </div>
                </Link>
              </AnimatedGroup>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
