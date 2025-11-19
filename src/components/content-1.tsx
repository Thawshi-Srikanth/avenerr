import { ArrowRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { AnimatedGroup } from "./ui/animated-group";

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

export default function ContentSection() {
  return (
    <section className="py-8 lg:py-16 bg-zinc-800">
      <div className="mx-auto max-w-7xl space-y-8 px-6 md:space-y-16">
        <h2 className="relative z-10 max-w-xl text-4xl font-medium lg:text-5xl text-primary">
          Unites global innovation with local healthcare needs.
        </h2>
        <div className="grid gap-6 sm:grid-cols-2 md:gap-12 lg:gap-24">
          <div className="relative mb-6 sm:mb-0">
            <div className="bg-linear-to-b aspect-76/59  from-zinc-300 to-transparent p-px dark:from-zinc-700">
              <Image
                src="/images/home-2.png"
                className="hidden  dark:block"
                alt="payments illustration dark"
                width={1000}
                height={1000}
              />
              <Image
                src="/images/home-2.png"
                className=" shadow dark:hidden"
                alt="payments illustration light"
                width={1000}
                height={1000}
              />
            </div>
          </div>

          <div className="relative space-y-4">
            <p className="text-muted-foreground">
              Avenir Pharma has grown to become more than just a pharmaceutical
              company.{" "}
              <span className="text-accent-foreground font-bold">
                It is built on a strong global ecosystem
              </span>{" "}
              — connecting trusted partners and quality healthcare.
            </p>

            <p className="text-muted-foreground">
              Since 2007, Avenir Pharma has expanded through strategic
              collaborations with leading manufacturers in France, Italy, and
              India — enabling the import, branding, marketing, and distribution
              of high-quality medicines, orthopedic appliances, and surgical
              instruments.
            </p>
            <div className="pt-6 text-muted-foreground">
              <blockquote className="border-l-4 border-primary pl-4">
                <p>
                  Partnering with Avenir Pharma has elevated our ability to
                  deliver reliable healthcare solutions. Their commitment to
                  quality and global collaboration ensures that every product
                  meets the highest standards of patient care.
                </p>

                <div className="mt-6 space-y-3">
                  <cite className="block font-medium">
                    Dr. Ravin Perera, Medical Director
                  </cite>
                  <Image
                    className="h-5 w-fit "
                    src="/images/logo-cloud/triveni-formulation.png"
                    alt="Triveni Formulation"
                    height={20}
                    width={100}
                  />
                </div>
              </blockquote>
            </div>

            <AnimatedGroup variants={transitionVariants}>
              <Link
                href="#link"
                className="hover:bg-background mt-6 lg:mt-16 dark:hover:border-primary bg-muted group  flex w-fit items-center gap-4  border  p-1 pl-4 shadow-md shadow-zinc-950/5 transition-colors duration-300 dark:border-t-white/5 dark:shadow-zinc-950"
              >
                <span className="text-foreground text-sm">Learn more</span>
                <span className="dark:border-background block h-4 w-0.5 border-l bg-white dark:bg-primary"></span>

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
  );
}
